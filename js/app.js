import { header } from './header.js';
import { navbar } from './navbar.js';
import { hero } from './hero.js';
import { grid } from './grid.js';
import { footer } from './footer.js';

const API = 'http://localhost:8000';

async function loadDeals() {
  try {
    const r = await fetch(`${API}/deals`);
    return r.ok ? await r.json() : [];
  } catch { return []; }
}

async function render() {
  const deals = await loadDeals();
  const grouped = deals.reduce((a,d) => {
    (a[d.category] = a[d.category] || []).push(d); return a;
  }, {});
  let html = header() + navbar() + hero();
  if (Object.keys(grouped).length === 0) {
    html += `<div class="max-w-7xl mx-auto my-6 bg-white rounded-lg p-8 text-center text-gray-500">Loading deals... (ya abhi admin ne approve nahi ki)</div>`;
  } else {
    for (const [cat, prods] of Object.entries(grouped)) html += grid(prods, cat);
  }
  html += footer();
  document.getElementById('app').innerHTML = html;
}

render();
