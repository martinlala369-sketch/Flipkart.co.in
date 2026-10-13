export const productCard = (p) => `
<div class="bg-white rounded-lg shadow-sm hover:shadow-lg transition p-3 cursor-pointer">
  <img src="${p.image||'https://via.placeholder.com/200'}" alt="${p.title}" class="w-full h-40 object-contain mb-2">
  <h3 class="text-sm font-medium text-gray-800 line-clamp-2 mb-1">${p.title}</h3>
  <div class="flex items-center gap-2 mb-1">
    <span class="text-lg font-bold text-gray-900">₹${p.price}</span>
    ${p.mrp?`<span class="text-xs text-gray-500 line-through">₹${p.mrp}</span>`:''}
    ${p.discount?`<span class="text-xs text-green-600 font-semibold">${p.discount}% off</span>`:''}
  </div>
  <a href="${p.link}" target="_blank" class="block text-center bg-fkyellow text-white text-sm font-semibold py-2 rounded mt-2 hover:bg-yellow-600">Buy Now</a>
</div>`;
