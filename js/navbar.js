export const navbar = () => {
  const cats = ['Mobiles','Fashion','Electronics','Home','Appliances','Toys','Grocery','Beauty'];
  return `
<nav class="bg-white shadow-sm border-b">
  <div class="max-w-7xl mx-auto flex gap-6 px-4 py-2 text-sm font-medium text-gray-700 overflow-x-auto">
    ${cats.map(c=>`<a href="#${c.toLowerCase()}" class="hover:text-fkblue whitespace-nowrap">${c}</a>`).join('')}
  </div>
</nav>`;
};
