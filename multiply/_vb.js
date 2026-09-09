const fs = require('fs');
const path = require('path');
const h = fs.readFileSync('page9b.html', 'utf8');
const m = h.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.log('no inline script'); process.exit(1); }
try { new Function(m[1]); console.log('JS parses OK'); }
catch (e) { console.log('JS SYNTAX ERROR:', e.message); process.exit(1); }
