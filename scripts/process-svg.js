const fs = require('fs');

function processSVG() {
  const filePath = 'public/images/about us/strand.svg';
  let svgContent = fs.readFileSync(filePath, 'utf8');

  // Regex to match circle and calculate center
  svgContent = svgContent.replace(/<circle\s+cx="([^"]+)"\s+cy="([^"]+)"\s+r="([^"]+)"\s+transform="([^"]+)"\s+fill="([^"]+)"\s*\/>/g, (match, cx, cy, r, transform, fill) => {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" transform="${transform}" fill="${fill}" style="transform-origin: ${cx}px ${cy}px;" />`;
  });

  // Regex to match rect and calculate center
  svgContent = svgContent.replace(/<rect\s+x="([^"]+)"\s+y="([^"]+)"\s+width="([^"]+)"\s+height="([^"]+)"\s+transform="([^"]+)"\s+fill="([^"]+)"\s*\/>/g, (match, x, y, width, height, transform, fill) => {
    const centerX = parseFloat(x) + (parseFloat(width) / 2);
    const centerY = parseFloat(y) + (parseFloat(height) / 2);
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" transform="${transform}" fill="${fill}" style="transform-origin: ${centerX}px ${centerY}px;" />`;
  });

  fs.writeFileSync(filePath, svgContent, 'utf8');
  console.log('SVG processing complete.');
}

processSVG();
