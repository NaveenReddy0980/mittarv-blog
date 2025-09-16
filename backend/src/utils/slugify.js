// src/utils/slug.js
import slugify from 'slugify';

function makeSlug(title) {
  const base = slugify(title, { lower: true, strict: true }).slice(0, 200);
  const suffix = Date.now().toString(36).slice(-4);
  return `${base}-${suffix}`;
}

export default makeSlug;