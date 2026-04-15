const fs = require('fs');
const path = require('path');

const mapping = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, '../../Continuous Improvement/docs/judges_photo_mapping.json'),
  'utf8'
));

function normalize(name) {
  return name
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const photoLookup = new Map();
for (const region of ['europe', 'america', 'asia']) {
  for (const judge of mapping[region]) {
    if (judge.photo) {
      photoLookup.set(normalize(judge.name), judge.photo);
    }
  }
}

const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="40" fill="#E8E4DD"/><circle cx="40" cy="32" r="12" fill="#C5C0B8"/><ellipse cx="40" cy="62" rx="20" ry="14" fill="#C5C0B8"/></svg>`;
const placeholderDataUri = `data:image/svg+xml,${encodeURIComponent(placeholderSvg)}`;

function getPhotoUrl(judgeName) {
  const key = normalize(judgeName);
  if (photoLookup.has(key)) return photoLookup.get(key);

  // Fuzzy: try reversed name (Surname First -> First Surname)
  const parts = key.split(' ');
  if (parts.length >= 2) {
    const reversed = [...parts.slice(1), parts[0]].join(' ');
    if (photoLookup.has(reversed)) return photoLookup.get(reversed);
  }

  // Partial match: find any key containing all parts
  for (const [k, url] of photoLookup) {
    const matchAll = parts.every(p => k.includes(p));
    if (matchAll && parts.length >= 2) return url;
  }

  return null;
}

function processFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  let matched = 0, unmatched = 0, unmatchedNames = [];

  html = html.replace(
    /<article class="judge-card"><div class="judge-name">([^<]+)<\/div><div class="judge-specialty">([^<]+)<\/div><\/article>/g,
    (match, name, specialty) => {
      const photoUrl = getPhotoUrl(name);
      if (photoUrl) {
        matched++;
        return `<article class="judge-card"><img class="judge-photo" src="${photoUrl}" alt="Foto de ${name}" width="64" height="64" loading="lazy"><div class="judge-info"><div class="judge-name">${name}</div><div class="judge-specialty">${specialty}</div></div></article>`;
      } else {
        unmatched++;
        unmatchedNames.push(name);
        return `<article class="judge-card"><img class="judge-photo judge-photo--placeholder" src="${placeholderDataUri}" alt="" width="64" height="64" aria-hidden="true"><div class="judge-info"><div class="judge-name">${name}</div><div class="judge-specialty">${specialty}</div></div></article>`;
      }
    }
  );

  // Update CSS: replace the judge-card styles
  const newCss = `
.judge-card {
  background: var(--cream);
  border: 1px solid var(--stone);
  border-radius: 12px;
  padding: 16px;
  transition: all .35s var(--ease);
  display: flex;
  align-items: center;
  gap: 14px;
}`;

  html = html.replace(
    /\.judge-card \{\s*background: var\(--cream\);\s*border: 1px solid var\(--stone\);\s*border-radius: 12px;\s*padding: 18px 20px;\s*transition: all \.35s var\(--ease\);\s*\}/,
    newCss
  );

  // Add photo CSS before .judge-card:hover
  const photoCss = `
.judge-photo {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid var(--stone);
  background: var(--warm-gray);
}
.judge-photo--placeholder {
  border-color: transparent;
}
.judge-info {
  min-width: 0;
}
`;

  html = html.replace('.judge-card:hover {', photoCss + '.judge-card:hover {');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`${path.basename(path.dirname(filePath))}: ${matched} matched, ${unmatched} unmatched`);
  if (unmatchedNames.length) console.log('  Unmatched:', unmatchedNames.join(', '));
}

const pagesDir = path.resolve(__dirname, '../docs/jueces');
processFile(path.join(pagesDir, 'europa/index.html'));
processFile(path.join(pagesDir, 'americas/index.html'));
processFile(path.join(pagesDir, 'asia/index.html'));

console.log('\nDone. Total photos in mapping:', photoLookup.size);
