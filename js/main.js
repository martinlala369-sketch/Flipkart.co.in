let currentCat = "all";

function renderProducts(list) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '<p class="col-span-full text-center text-gray-500 py-12">No products in this category.</p>';
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="product-card relative">
      ${p.discount > 0 ? `<span class="badge-discount">${p.discount}% OFF</span>` : ''}
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="p-4 flex flex-col flex-1">
        <h3 class="font-semibold text-sm text-gray-800 line-clamp-2 mb-2" style="min-height:40px">${p.name}</h3>
        <div class="flex items-center gap-1 mb-2 text-xs">
          <span class="bg-green-600 text-white px-1.5 py-0.5 rounded font-semibold">${p.rating} ★</span>
          <span class="text-gray-500">(${Math.floor(p.rating * 234)})</span>
        </div>
        <div class="mb-3">
          <span class="font-bold text-lg text-gray-900">₹${p.price.toLocaleString()}</span>
          <span class="text-gray-400 text-xs line-through ml-2">₹${p.mrp.toLocaleString()}</span>
        </div>
        <a href="${p.link}" target="_blank" rel="noopener sponsored" class="btn-buy">Buy Now →</a>
      </div>
    </div>
  `).join("");
}

function filterByCategory(cat) {
  currentCat = cat;
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.cat === cat);
  });
  const filtered = cat === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  renderProducts(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(PRODUCTS);

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => filterByCategory(btn.dataset.cat));
  });

  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) && (currentCat === "all" || p.category === currentCat)
      );
      renderProducts(filtered);
    });
  }
});
