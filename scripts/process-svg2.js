const fs = require('fs');

function processSVG() {
  const filePath = 'public/images/about us/strand.svg';
  let svgContent = fs.readFileSync(filePath, 'utf8');

  // Remove the old <style> block
  svgContent = svgContent.replace(/<style>[\s\S]*?<\/style>/, '');
  
  // Remove previously injected inline styles to reset the elements
  svgContent = svgContent.replace(/\s*style="transform-origin:[^"]+"/g, '');

  let index = 0;

  // Function to calculate staggered delay based on index
  function getDelay() {
    return (index % 10) * 0.1;
  }

  // Regex to match circle and wrap in <g>
  svgContent = svgContent.replace(/<circle\s+cx="([^"]+)"\s+cy="([^"]+)"\s+r="([^"]+)"\s+transform="([^"]+)"\s+fill="([^"]+)"\s*\/>/g, (match, cx, cy, r, transform, fill) => {
    const delay = getDelay();
    index++;
    return `<g class="strand-part" style="transform-origin: ${cx}px ${cy}px; animation-delay: ${delay}s;">\n  <circle cx="${cx}" cy="${cy}" r="${r}" transform="${transform}" fill="${fill}" />\n</g>`;
  });

  // Regex to match rect and wrap in <g>
  svgContent = svgContent.replace(/<rect\s+x="([^"]+)"\s+y="([^"]+)"\s+width="([^"]+)"\s+height="([^"]+)"\s+transform="([^"]+)"\s+fill="([^"]+)"\s*\/>/g, (match, x, y, width, height, transform, fill) => {
    const centerX = parseFloat(x) + (parseFloat(width) / 2);
    const centerY = parseFloat(y) + (parseFloat(height) / 2);
    const delay = getDelay();
    index++;
    return `<g class="strand-part" style="transform-origin: ${centerX}px ${centerY}px; animation-delay: ${delay}s;">\n  <rect x="${x}" y="${y}" width="${width}" height="${height}" transform="${transform}" fill="${fill}" />\n</g>`;
  });

  // Add the safe style block at the top
  const styleBlock = `
<style>
  @keyframes pair-zoom {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.25); }
  }
  .strand-part {
    animation: pair-zoom 1.5s ease-in-out infinite;
  }
</style>
`;
  svgContent = svgContent.replace('<svg width="375" height="332" viewBox="0 0 375 332" fill="none" xmlns="http://www.w3.org/2000/svg">', '<svg width="375" height="332" viewBox="0 0 375 332" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + styleBlock);

  fs.writeFileSync(filePath, svgContent, 'utf8');
  console.log('SVG processing complete with safe <g> wrappers.');
}

processSVG();
