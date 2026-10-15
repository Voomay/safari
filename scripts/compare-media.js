const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const srcDir = 'E:/Downloads/Cotter Safaris-Oct-14-2026_11-37-01';
const dstDir = path.join(__dirname, '../dist/assets/safari-media');

const dstFiles = fs.readdirSync(dstDir);
const dstHashes = new Set();
dstFiles.forEach(f => {
  const full = path.join(dstDir, f);
  if (fs.statSync(full).isFile() && !f.endsWith('.json')) {
    const buf = fs.readFileSync(full);
    const hash = crypto.createHash('md5').update(buf).digest('hex');
    dstHashes.add(hash);
  }
});

const srcFiles = fs.readdirSync(srcDir);
const newFiles = [];
srcFiles.forEach(f => {
  const full = path.join(srcDir, f);
  if (fs.statSync(full).isFile()) {
    const buf = fs.readFileSync(full);
    const hash = crypto.createHash('md5').update(buf).digest('hex');
    if (!dstHashes.has(hash)) {
      newFiles.push({ name: f, size: buf.length, hash });
    }
  }
});
console.log('New files found:', newFiles.length);
console.log(JSON.stringify(newFiles, null, 2));
