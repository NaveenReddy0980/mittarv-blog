const slugify = require('slugify');
function makeSlug(title) {
  const base = slugify(title, { lower: true, strict: true }).slice(0, 200);
  const suffix = Date.now().toString(36).slice(-4);
  return `${base}-${suffix}`;
}
module.exports = makeSlug;
