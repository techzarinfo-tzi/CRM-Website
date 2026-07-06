const fs = require('fs');

const svgPath = 'public/images/about us/strand.svg';
let svg = fs.readFileSync(svgPath, 'utf8');

// Find all `<g class="strand-part"` elements
const gRegex = /<g class="strand-part" style="transform-origin: [^;]+; animation-delay: [^>]+>[\s\S]*?<\/g>/g;

const gs = svg.match(gRegex) || [];

if (gs.length % 3 !== 0) {
  console.error('Expected groups of 3 elements, got ' + gs.length);
  process.exit(1);
}

let newSvg = svg.substring(0, svg.indexOf(gs[0]));

for (let i = 0; i < gs.length; i += 3) {
  const g1 = gs[i];
  const g2 = gs[i+1];
  const g3 = gs[i+2];

  // extract cx, cy from circles in g1 and g3
  const match1 = g1.match(/cx="([^"]+)" cy="([^"]+)"/);
  const match3 = g3.match(/cx="([^"]+)" cy="([^"]+)"/);
  
  if (!match1 || !match3) {
    console.error('Could not find cx/cy in', g1, g3);
    continue;
  }

  const cx1 = parseFloat(match1[1]);
  const cy1 = parseFloat(match1[2]);
  const cx3 = parseFloat(match3[1]);
  const cy3 = parseFloat(match3[2]);

  const centerX = (cx1 + cx3) / 2;
  const centerY = (cy1 + cy3) / 2;

  // Extract animation delay from g1
  const delayMatch = g1.match(/animation-delay: ([^;"]+)/);
  const delay = delayMatch ? delayMatch[1] : '0s';

  // Strip strand-part and animation styles from the inner gs
  const stripG = (gStr) => {
    return gStr.replace(/class="strand-part" style="[^"]+"/, '');
  };

  const newG = `
<g class="strand-part" style="transform-origin: ${centerX}px ${centerY}px; animation-delay: ${delay};">
${stripG(g1)}
${stripG(g2)}
${stripG(g3)}
</g>`;
  
  newSvg += newG;
}

newSvg += '\n</svg>';

fs.writeFileSync(svgPath, newSvg);
console.log('Successfully updated strand.svg!');
