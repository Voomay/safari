const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, '../dist');

fs.readdirSync(dist).filter(f => f.endsWith('.html') || f.endsWith('.js')).forEach(f => {
  const p = path.join(dist, f);
  let c = fs.readFileSync(p, 'utf8');
  let changed = false;
  if (c.includes('href="tel:079 246 4998"')) {
    c = c.replace(/href="tel:079 246 4998"/g, 'href="tel:+27792464998"');
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(p, c);
    console.log('Normalized tel links in ' + f);
  }
});
