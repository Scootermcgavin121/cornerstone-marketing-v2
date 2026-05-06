import fs from 'fs';

const files = [
  'src/app/bid-import-ai/page.tsx',
  'src/app/blog/buildertrend-vs-cornerstone-feature-comparison/page.tsx',
  'src/app/blog/home-builder-software-buyer-guide-2026/page.tsx',
  'src/app/blog/newstar-implementation-cost-breakdown/page.tsx',
  'src/app/buildertrend-alternative/page.tsx',
  'src/app/buildpro-alternative/page.tsx',
  'src/app/construction/page.tsx',
  'src/app/design/page.tsx',
  'src/app/home-builder-project-management-software/page.tsx',
  'src/app/migrate/page.tsx',
  'src/app/newstar-alternative/page.tsx',
  'src/app/permitting/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/purchasing/page.tsx',
  'src/app/sales/page.tsx',
  'src/app/support-ai/page.tsx',
];

// Parse a quoted string starting at position i in text. Returns {value, end}.
function parseString(text, i) {
  const quote = text[i];
  if (quote !== '"' && quote !== "'" && quote !== '`') return null;
  let out = '';
  let j = i + 1;
  while (j < text.length) {
    const c = text[j];
    if (c === '\\') {
      out += text[j + 1];
      j += 2;
      continue;
    }
    if (c === quote) return { value: out, end: j + 1 };
    out += c;
    j++;
  }
  return null;
}

const allFaqs = [];

for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  let count = 0;
  // Find every "q:" then walk forward to its string then find "a:" then string
  const qRe = /\bq:\s*/g;
  let m;
  while ((m = qRe.exec(text)) !== null) {
    let i = m.index + m[0].length;
    const qStr = parseString(text, i);
    if (!qStr) continue;
    // skip whitespace and comma
    let j = qStr.end;
    while (j < text.length && /\s|,/.test(text[j])) j++;
    if (text.slice(j, j + 2) !== 'a:') continue;
    j += 2;
    while (j < text.length && /\s/.test(text[j])) j++;
    const aStr = parseString(text, j);
    if (!aStr) continue;
    const q = qStr.value.replace(/\s+/g, ' ').trim();
    const a = aStr.value.replace(/\s+/g, ' ').trim();
    allFaqs.push({ source: f, q, a });
    count++;
  }
  console.error(`${f}: ${count}`);
}

console.error(`TOTAL: ${allFaqs.length}`);
fs.writeFileSync('all-faqs.json', JSON.stringify(allFaqs, null, 2));
