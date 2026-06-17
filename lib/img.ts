// Image source helper.
//
// For now, the site's original (http-only) images are routed through a TLS
// image proxy so they display on an https deployment.
//
// FOR PRODUCTION: set USE_LOCAL = true and drop the image folders into
// /public, preserving the exact paths AND letter case (some drawings end
// in .JPG). Then the site serves its own optimized images with no
// third-party dependency.

const USE_LOCAL = true;

export function imgSrc(file: string, w = 700): string {
  if (USE_LOCAL) return "/" + file;
  return `https://images.weserv.nl/?url=${encodeURIComponent(
    "everettdupen.com/" + file
  )}&w=${w}&q=80&output=webp&we`;
}
