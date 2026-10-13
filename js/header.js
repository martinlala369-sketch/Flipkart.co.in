export const header = () => `
<header class="bg-fkblue text-white sticky top-0 z-50 shadow-md">
  <div class="max-w-7xl mx-auto flex items-center gap-4 px-4 py-3">
    <a href="/" class="text-xl font-bold italic">Best<span class="text-fkyellow">Deals</span></a>
    <div class="flex-1 max-w-2xl">
      <input type="text" placeholder="Search for products, brands and more"
        class="w-full px-4 py-2 rounded text-gray-800 text-sm outline-none">
    </div>
    <button class="px-6 py-2 font-semibold hover:text-fkyellow">Login</button>
    <a href="/cart" class="flex items-center gap-1 hover:text-fkyellow">🛒 Cart</a>
  </div>
</header>`;
