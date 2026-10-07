const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const htmlFiles = ['index.html', 'about.html', 'kruger.html', 'gallery.html', 'safety.html', 'contact.html'];

htmlFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  const homeHref = file === 'index.html' ? '#home' : 'index.html#home';

  // Replace header brand
  // Match <a class="brand" ... </small></a> inside <header>
  content = content.replace(
    /<a class="brand"[^>]*><svg><use href="#tree"\/><\/svg><span data-edit="brand">Cotter Safaris<\/span><small[^>]*>AFRICAN SAFARI EXPERIENCES<\/small><\/a>/g,
    `<a class="brand logo-brand" href="${homeHref}" aria-label="Cotter Safaris home"><img src="assets/logo.png" alt="Cotter Safaris" class="site-logo"></a>`
  );

  // Replace footer brand
  content = content.replace(
    /<a class="brand"[^>]*><svg><use href="#tree"\/><\/svg><span data-edit="footer-brand">Cotter Safaris<\/span><small>AFRICAN SAFARI EXPERIENCES<\/small><\/a>/g,
    `<a class="brand logo-brand" href="${homeHref}" aria-label="Cotter Safaris home"><img src="assets/logo-light.png" alt="Cotter Safaris" class="site-logo footer-site-logo"></a>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated logos in ${file}`);
});
