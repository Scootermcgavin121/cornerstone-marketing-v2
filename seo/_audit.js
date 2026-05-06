const fs = require('fs');
const path = require('path');
const root = 'src/app';

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, a);
    else if (e.name === 'page.tsx') a.push(p);
  }
  return a;
}

const files = walk(root);
const out = [];

for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  const rel = f.replace(/\\/g, '/').replace(/^src\/app\//, '').replace(/\/page\.tsx$/, '').replace(/^page\.tsx$/, '');
  const route = rel === '' ? '/' : '/' + rel;

  // Try to find Metadata title
  const titleObj = c.match(/title:\s*["'`]([^"'`]+)["'`]/);
  const titleTemplate = c.match(/title:\s*\{[^}]*default:\s*["'`]([^"'`]+)["'`]/s);

  // Description (single-line or first chunk)
  const descMatch = c.match(/description:\s*["'`]([^"'`]+)["'`]/) || c.match(/description:\s*\n?\s*["'`]([\s\S]{10,300}?)["'`]/);

  const hasJsonLd = /application\/ld\+json|StructuredData|@graph|"@type"/i.test(c);
  const hasFAQSchema = /FAQPage/i.test(c);
  const hasArticleSchema = /"@type":\s*"Article|"@type":\s*'Article/i.test(c);
  const hasBreadcrumb = /BreadcrumbList/i.test(c);

  const linkMatches = c.match(/<Link[^>]+href=["'`][^"'`]+["'`]/g) || [];
  const aInternal = c.match(/<a[^>]+href=["'`]\/[^"'`]*["'`]/g) || [];
  const internalLinks = linkMatches.length + aInternal.length;

  const h1 = (c.match(/<h1[\s>]/g) || []).length;
  const h2 = (c.match(/<h2[\s>]/g) || []).length;
  const h3 = (c.match(/<h3[\s>]/g) || []).length;

  const lines = c.split('\n').length;

  // Rough word estimate: strip JSX tags + braces, count alpha tokens length>2
  let txt = c
    .replace(/import[^\n;]+from[^\n;]+;?/g, ' ')
    .replace(/export\s+(const|default)\s+metadata[\s\S]+?\};?/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[\s\S]*?\}/g, ' ')
    .replace(/[^A-Za-z0-9 ]/g, ' ');
  const words = txt.split(/\s+/).filter(w => w.length > 2).length;

  out.push({
    route,
    file: f.replace(/\\/g, '/'),
    title: titleObj ? titleObj[1] : (titleTemplate ? titleTemplate[1] : null),
    description: descMatch ? descMatch[1].slice(0, 200) : null,
    hasJsonLd,
    hasFAQSchema,
    hasArticleSchema,
    hasBreadcrumb,
    internalLinks,
    h1,
    h2,
    h3,
    lines,
    words,
  });
}

out.sort((a, b) => a.route.localeCompare(b.route));
fs.writeFileSync('seo/_audit-raw.json', JSON.stringify(out, null, 2));

console.log('total pages:', out.length);
console.log('no title:', out.filter(p => !p.title).length);
console.log('no desc:', out.filter(p => !p.description).length);
console.log('no jsonLd:', out.filter(p => !p.hasJsonLd).length);
console.log('thin (<400 words):', out.filter(p => p.words < 400).length);
console.log('h1 != 1:', out.filter(p => p.h1 !== 1).length);
console.log('zero internal links:', out.filter(p => p.internalLinks === 0).length);

// Print top concerns table
console.log('\nROUTE | TITLE? | DESC? | JSON-LD | LINKS | H1 | WORDS');
for (const p of out) {
  console.log([p.route, p.title ? 'Y' : 'N', p.description ? 'Y' : 'N', p.hasJsonLd ? 'Y' : 'N', p.internalLinks, p.h1, p.words].join(' | '));
}
