export const grid = (products, category='Trending Deals') => {
  const cardFn = window.__productCard || ((p) => `<div>${p.title}</div>`);
  return `
<section class="max-w-7xl mx-auto my-6 px-4">
  <div class="bg-white rounded-lg p-4">
    <h2 class="text-xl font-bold mb-4 text-gray-800">${category}</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      ${products.map(cardFn).join('')}
    </div>
  </div>
</section>`;
};
