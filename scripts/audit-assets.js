const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const files = fs.readdirSync(dist).filter(f => f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.js'));

const webpPattern = /assets\/[a-zA-Z0-9_\-\.\/]+\.webp/g;

console.log('Auditing files for .webp references:');
for (const file of files) {
  const filePath = path.join(dist, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(webpPattern);
  if (matches) {
    console.log(`\nFile: ${file} (${matches.length} occurrences)`);
    const unique = [...new Set(matches)];
    console.log(unique);
  }
}
