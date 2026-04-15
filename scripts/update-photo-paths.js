const fs = require('fs');
const path = require('path');

const manifest = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, '../docs/jueces/photos/manifest.json'), 'utf8'
));

function normalize(name) {
  return name
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const lookup = new Map();
for (const [name, localPath] of Object.entries(manifest)) {
  lookup.set(normalize(name), localPath);
}

function getLocalPath(judgeName, pageDir) {
  const key = normalize(judgeName);
  if (lookup.has(key)) return lookup.get(key);
  const parts = key.split(' ');
  if (parts.length >= 2) {
    const reversed = [...parts.slice(1), parts[0]].join(' ');
    if (lookup.has(reversed)) return lookup.get(reversed);
  }
  for (const [k, p] of lookup) {
    if (parts.every(part => k.includes(part)) && parts.length >= 2) return p;
  }
  return null;
}

function processFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  const pageDir = path.dirname(filePath);
  const photosRelative = path.relative(pageDir, path.resolve(__dirname, '../docs/jueces/photos')).replace(/\\/g, '/');
  let replaced = 0;

  html = html.replace(
    /src="https:\/\/www\.alianzfederation\.org\/wp-content\/uploads\/[^"]+"/g,
    (match) => {
      replaced++;
      return match;
    }
  );
  replaced = 0;

  html = html.replace(
    /<img class="judge-photo" src="https:\/\/[^"]*alianzfederation\.org\/[^"]*" alt="Foto de ([^"]+)"/g,
    (match, name) => {
      const localPath = getLocalPath(name, pageDir);
      if (localPath) {
        replaced++;
        return `<img class="judge-photo" src="../${localPath}" alt="Foto de ${name}"`;
      }
      return match;
    }
  );

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`${path.basename(path.dirname(filePath))}: ${replaced} paths updated`);
}

const pagesDir = path.resolve(__dirname, '../docs/jueces');
processFile(path.join(pagesDir, 'europa/index.html'));
processFile(path.join(pagesDir, 'americas/index.html'));
processFile(path.join(pagesDir, 'asia/index.html'));
