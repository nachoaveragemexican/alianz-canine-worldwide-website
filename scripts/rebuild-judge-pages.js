const fs = require('fs');
const path = require('path');

const mapping = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, '../../Continuous Improvement/docs/judges_photo_mapping.json'), 'utf8'
));

const placeholderSvg = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="40" fill="#E8E4DD"/><circle cx="40" cy="32" r="12" fill="#C5C0B8"/><ellipse cx="40" cy="62" rx="20" ry="14" fill="#C5C0B8"/></svg>')}`;

const manifest = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, '../docs/jueces/photos/manifest.json'), 'utf8'
));

function normalize(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ').trim();
}

const photoLookup = new Map();
for (const [name, localPath] of Object.entries(manifest)) {
  photoLookup.set(normalize(name), localPath);
}

function getLocalPhoto(judgeName) {
  const key = normalize(judgeName);
  if (photoLookup.has(key)) return photoLookup.get(key);
  const parts = key.split(' ');
  if (parts.length >= 2) {
    const reversed = [...parts.slice(1), parts[0]].join(' ');
    if (photoLookup.has(reversed)) return photoLookup.get(reversed);
  }
  for (const [k, p] of photoLookup) {
    if (parts.every(part => k.includes(part)) && parts.length >= 2) return p;
  }
  return null;
}

const countryDisplayNames = {
  'ALEMANIA': 'Alemania', 'ARMENIA': 'Armenia', 'AUSTRIA': 'Austria',
  'BÉLGICA': 'Bélgica', 'ESLOVAQUIA': 'Eslovaquia', 'ESPAÑA': 'España',
  'FRANCIA': 'Francia', 'GRAN BRETAÑA': 'Gran Bretaña', 'HUNGRIA': 'Hungría',
  'ITALIA': 'Italia', 'LETONIA': 'Letonia', 'LITUANIA': 'Lituania',
  'MOLDAVIA': 'Moldavia', 'NORUEGA': 'Noruega', 'POLONIA': 'Polonia',
  'RUMANÍA': 'Rumanía', 'RUSIA': 'Rusia', 'SUIZA': 'Suiza',
  'TURQUÍA': 'Turquía', 'UCRANIA': 'Ucrania', 'FINLANDIA': 'Finlandia',
  'BULGARIA': 'Bulgaria',
  'ECUADOR': 'Ecuador', 'ARGENTINA': 'Argentina', 'BOLIVIA': 'Bolivia',
  'BRASIL': 'Brasil', 'CHILE': 'Chile', 'COLOMBIA': 'Colombia',
  'COSTA RICA': 'Costa Rica', 'EL SALVADOR': 'El Salvador',
  'ESTADOS UNIDOS': 'Estados Unidos', 'HONDURAS': 'Honduras',
  'MÉXICO': 'México', 'PANAMÁ': 'Panamá', 'PARAGUAY': 'Paraguay',
  'URUGUAY': 'Uruguay', 'PERÚ': 'Perú',
  'CHINA': 'China', 'BAHRAIN': 'Bahréin', 'FILIPINAS': 'Filipinas',
  'HONG KONG': 'Hong Kong', 'JAPÓN': 'Japón', 'KUWAIT': 'Kuwait',
  'COREA DEL SUR': 'Corea del Sur', 'MALASIA': 'Malasia'
};

function buildJudgeCard(judge) {
  const photo = judge.photo ? getLocalPhoto(judge.name) : null;
  if (photo) {
    return `        <article class="judge-card"><img class="judge-photo" src="../photos/${path.basename(photo)}" alt="Foto de ${judge.name}" width="64" height="64" loading="lazy"><div class="judge-info"><div class="judge-name">${judge.name}</div><div class="judge-specialty">Todas las Razas — All Rounder</div></div></article>`;
  } else {
    return `        <article class="judge-card"><img class="judge-photo judge-photo--placeholder" src="${placeholderSvg}" alt="" width="64" height="64" aria-hidden="true"><div class="judge-info"><div class="judge-name">${judge.name}</div><div class="judge-specialty">Todas las Razas — All Rounder</div></div></article>`;
  }
}

function buildCountrySection(displayName, judges) {
  const count = judges.length;
  const countLabel = count === 1 ? '1 juez' : `${count} jueces`;
  const cards = judges.map(j => buildJudgeCard(j)).join('\n');
  return `    <!-- ${displayName.toUpperCase()} -->
    <div class="country-section rv" data-country="${displayName}">
      <div class="country-heading">
        <h2>${displayName}</h2>
        <span class="country-count">${countLabel}</span>
      </div>
      <div class="judges-grid">
${cards}
      </div>
    </div>`;
}

function buildAllSections(region) {
  const judges = mapping[region];
  const byCountry = new Map();
  for (const j of judges) {
    const display = countryDisplayNames[j.country] || j.country;
    if (!byCountry.has(display)) byCountry.set(display, []);
    byCountry.get(display).push(j);
  }

  const sections = [];
  for (const [country, judgeList] of byCountry) {
    sections.push(buildCountrySection(country, judgeList));
  }
  return sections.join('\n\n');
}

function processPage(filePath, region) {
  let html = fs.readFileSync(filePath, 'utf8');

  const newSections = buildAllSections(region);

  // Replace everything between the search section and the back-section
  const searchEndMarker = /<\/section>\s*\n\s*<main/;
  const backSectionMarker = /\s*<\/div><!-- \/\.wrap -->\s*\n<\/main>/;

  // Find the main content area with country sections
  const mainStart = html.indexOf('<!-- ALEMANIA -->') !== -1
    ? html.indexOf('<!-- ALEMANIA -->')
    : html.indexOf('<!-- ECUADOR -->') !== -1
      ? html.indexOf('<!-- ECUADOR -->')
      : html.indexOf('<!-- CHINA -->');

  if (mainStart === -1) {
    // Try finding first country-section
    const csIdx = html.indexOf('<div class="country-section');
    if (csIdx === -1) { console.error(`Cannot find country sections in ${filePath}`); return; }
  }

  // Find the start: first country-section comment or div
  let startIdx = html.indexOf('<!-- ');
  // More precise: find the first country-section div
  const firstCountry = html.indexOf('<div class="country-section');
  // Find the comment before it
  let sectionStart = firstCountry;
  const beforeFirst = html.lastIndexOf('<!--', firstCountry);
  if (beforeFirst > firstCountry - 100 && beforeFirst < firstCountry) {
    sectionStart = beforeFirst;
  }
  // Walk back to include leading whitespace
  while (sectionStart > 0 && html[sectionStart - 1] === ' ') sectionStart--;
  while (sectionStart > 0 && html[sectionStart - 1] === '\n') sectionStart--;

  // Find the end: </div><!-- /.wrap --> before </main>
  const wrapClose = html.indexOf('</div><!-- /.wrap -->');
  let sectionEnd = wrapClose;

  html = html.substring(0, sectionStart + 1) + '\n' + newSections + '\n\n  ' + html.substring(sectionEnd);

  // Fix breadcrumb: remove stray "Deportes" link
  html = html.replace(/<a href="[^"]*deportes[^"]*"[^>]*>Deportes<\/a>\s*›?\s*/gi, '');
  // Also fix if it's just text "Deportes" in breadcrumb
  html = html.replace(/(<a[^>]*>Jueces<\/a>)\s*<a[^>]*>Deportes<\/a>/gi, '$1');

  // Count judges
  const totalJudges = mapping[region].length;
  const countries = new Set(mapping[region].map(j => j.country)).size;

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`${region}: ${totalJudges} judges across ${countries} countries written to ${path.basename(path.dirname(filePath))}/`);
}

const pagesDir = path.resolve(__dirname, '../docs/jueces');
processPage(path.join(pagesDir, 'europa/index.html'), 'europe');
processPage(path.join(pagesDir, 'americas/index.html'), 'america');
processPage(path.join(pagesDir, 'asia/index.html'), 'asia');

console.log('\nTotal judges in mapping:', mapping.europe.length + mapping.america.length + mapping.asia.length);
