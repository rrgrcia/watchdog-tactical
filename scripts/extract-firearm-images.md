# How to Extract Firearm Images from wdtactical.com

## Method 1: Manual Extraction (Recommended)
1. Visit https://wdtactical.com/guns-firearms/
2. Open browser Developer Tools (F12)
3. Go to Network tab and filter by "Img"
4. Scroll through the page to load all product images
5. Copy the image URLs from the Network tab

## Method 2: Using Browser Console
Open browser console on the page and run:
```javascript
// Extract all product image URLs
const images = Array.from(document.querySelectorAll('img[src*="product"]')).map(img => ({
  src: img.src,
  alt: img.alt || img.getAttribute('data-alt') || ''
}));
console.log(JSON.stringify(images, null, 2));
```

## Method 3: Right-click Method
1. Right-click on each product image
2. Select "Copy image address" or "Copy image URL"
3. Paste into the firearms array in app/firearms/page.tsx

## Image URL Pattern
WooCommerce sites typically use patterns like:
- `https://wdtactical.com/wp-content/uploads/YYYY/MM/product-image.jpg`
- `https://wdtactical.com/wp-content/uploads/product-image.jpg`
- CDN URLs like `https://cdn.wdtactical.com/products/...`

## Next Steps
Once you have the image URLs, update the `image` property in each firearm object in `app/firearms/page.tsx`

