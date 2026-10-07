const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const files = ['index.html', 'about.html', 'kruger.html', 'gallery.html', 'safety.html', 'contact.html'];

for (const file of files) {
  const filePath = path.join(dist, file);
  if (!fs.existsSync(filePath)) continue;
  let html = fs.readFileSync(filePath, 'utf8');

  // Remove #edit-toggle and #edit-toolbar
  html = html.replace(/<button id="edit-toggle"[\s\S]*?<\/div>/g, '');
  html = html.replace(/<button id="edit-toggle"[^>]*>[\s\S]*?<\/button>/g, '');
  html = html.replace(/<div id="edit-toolbar"[\s\S]*?<\/div>/g, '');

  fs.writeFileSync(filePath, html, 'utf8');
}
console.log('Removed edit-toggle and edit-toolbar from all HTML files');
