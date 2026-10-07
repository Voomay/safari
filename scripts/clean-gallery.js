const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'dist', 'gallery.html');
let html = fs.readFileSync(file, 'utf8');

// 1. Remove filter bar and count
html = html.replace(/<div class="gallery-filters"[\s\S]*?<\/div>/, '');
html = html.replace(/<p id="gallery-count"[\s\S]*?<\/p>/, '');

// 2. Remove photo-expand icon button
html = html.replace(/<span class="photo-expand" aria-hidden="true">↗<\/span>/g, '');

// 3. Remove photo-label markup
html = html.replace(/<span class="photo-label"><strong[\s\S]*?<\/span><\/span>/g, '');

fs.writeFileSync(file, html, 'utf8');
console.log('Successfully cleaned gallery.html');
