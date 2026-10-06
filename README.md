# Cotter Safaris website

Rebuilt as real responsive HTML, CSS and JavaScript. All visible page text is selectable and editable. The website uses separately generated photographs, a scalable SVG tree logo, responsive grids, navigation, a photo lightbox and an enquiry email form. No screenshot or hotspots are used.

Click **Edit text** at the bottom right, then click any highlighted text. **Save edits** stores changes in that browser. **Download HTML** exports the edited index.html; replace dist/index.html with the downloaded file to retain edits in the source. Browser edits do not publish to the hosted site. Text can also be edited directly in dist/index.html; layout is in dist/styles.css and interactions in dist/app.js.

Serve dist/ with any static server. No build step is needed. Enquiry opens the visitor’s email application; there is no booking backend. Contact details and the testimonial were transcribed from the supplied reference. The logo and generated photographs are recreations; the original font files were not supplied. Fonts are self-hosted Cormorant Garamond, Poppins and Allura.

Generated photos live in dist/assets/. The ImageGen prompt set is in IMAGE-PROMPTS.md.

## Pages

- Home: dist/index.html
- Contact Us: dist/contact.html — contact details and a validated enquiry form that opens the visitor’s email app.
- Gallery: dist/gallery.html — ten photos, category filters and a full-size viewer.

Both new pages reuse the header, footer, fonts and image assets. Additional page layouts live in dist/pages.css. Browser text edits are stored separately for each page; exported HTML uses that page’s filename.
