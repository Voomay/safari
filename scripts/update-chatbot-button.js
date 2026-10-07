const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const files = ['index.html', 'about.html', 'kruger.html', 'gallery.html', 'safety.html', 'contact.html'];

for (const f of files) {
  const p = path.join(dist, f);
  if (!fs.existsSync(p)) continue;
  let html = fs.readFileSync(p, 'utf8');

  // Replace floating-fab button contents
  html = html.replace(
    /<button id="chat-fab" class="floating-fab" aria-label="[^"]*">[\s\S]*?<\/button>/,
    '<button id="chat-fab" class="floating-fab" aria-label="Open Chatbot"><span>Chat bot</span></button>'
  );

  fs.writeFileSync(p, html, 'utf8');
}
console.log('Updated floating-fab in all HTML files');
