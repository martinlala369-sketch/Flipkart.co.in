import { productCard } from './card.js';
export const grid = (products, category='Trending Deals') => `
<section class="max-w-7xl mx-auto my-6">
  <div class="bg-white rounded-lg p-4">
    <h2 class="text-xl font-bold mb-4 text-gray-800">${category}</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      ${products.map(productCard).join('')}
    </div>
  </div>
</section>`;
