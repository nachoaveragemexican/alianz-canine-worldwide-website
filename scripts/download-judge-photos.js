const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const mapping = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, '../../Continuous Improvement/docs/judges_photo_mapping.json'),
  'utf8'
));

const outputDir = path.resolve(__dirname, '../docs/jueces/photos');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

function slugify(name) {
  return name
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) { resolve('cached'); return; }
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, {
      headers: {
        'Referer': 'https://www.alianzfederation.org/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode} for ${url}`)); return; }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve('downloaded'); });
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function downloadAll() {
  const manifest = {};
  let downloaded = 0, cached = 0, failed = 0;

  for (const region of ['europe', 'america', 'asia']) {
    for (const judge of mapping[region]) {
      if (!judge.photo) continue;
      const slug = slugify(judge.name);
      const ext = path.extname(new URL(judge.photo).pathname).split('?')[0] || '.jpg';
      const filename = `${slug}${ext}`;
      const dest = path.join(outputDir, filename);
      manifest[judge.name] = `photos/${filename}`;

      try {
        const status = await downloadFile(judge.photo, dest);
        if (status === 'cached') cached++;
        else { downloaded++; process.stdout.write('.'); }
      } catch (err) {
        failed++;
        console.error(`\nFAILED: ${judge.name} - ${err.message}`);
      }
    }
  }

  fs.writeFileSync(
    path.join(outputDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\n\nDone: ${downloaded} downloaded, ${cached} cached, ${failed} failed`);
  console.log(`Manifest: ${Object.keys(manifest).length} entries`);
}

downloadAll().catch(console.error);
