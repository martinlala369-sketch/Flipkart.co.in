const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8000' : '';

const DEMO = [
  {title:"iPhone 15 (128GB, Black)",price:69900,mrp:79900,discount:13,category:"Mobiles",link:"#",image:"https://via.placeholder.com/200?text=iPhone"},
  {title:'Samsung 43" 4K Smart TV',price:24990,mrp:39990,discount:38,category:"Electronics",link:"#",image:"https://via.placeholder.com/200?text=TV"},
  {title:"Nike Revolution 7 Shoes",price:2999,mrp:4999,discount:40,category:"Fashion",link:"#",image:"https://via.placeholder.com/200?text=Nike"},
  {title:"Prestige Mixer Grinder 750W",price:2899,mrp:4500,discount:36,category:"Appliances",link:"#",image:"https://via.placeholder.com/200?text=Mixer"},
  {title:"Boat Airdopes 141",price:1299,mrp:2999,discount:57,category:"Electronics",link:"#",image:"https://via.placeholder.com/200?text=Boat"}
];

async function loadDeals(){
  if(!API) return DEMO;
  try{const r=await fetch(`${API}/api/deals`);return r.ok?await r.json():DEMO;}catch{return DEMO;}
}

async function boot(){
  const [{header},{navbar},{hero},{grid},{footer},{productCard}] = await Promise.all([
    import('./header.js'), import('./navbar.js'), import('./hero.js'),
    import('./grid.js'), import('./footer.js'), import('./card.js')
  ]);
  // grid.js uses card.js — patch global
  window.__productCard = productCard;
  const deals = await loadDeals();
  const grouped = deals.reduce((a,d)=>{(a[d.category]=a[d.category]||[]).push(d);return a;},{});
  let html = header()+navbar()+hero();
  for(const [cat,prods] of Object.entries(grouped)) html += grid(prods,cat);
  html += footer();
  document.getElementById('app').innerHTML = html;
}
boot().catch(e=>{
  document.getElementById('app').innerHTML = '<div style="padding:40px;text-align:center;color:red">Load error: '+e.message+'</div>';
});
