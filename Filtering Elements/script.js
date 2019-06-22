// init Isotope
// More https://isotope.metafizzy.co/filtering.html
let iso = new Isotope('.filter-wrap', { itemSelector: '.filter-item' });

let filtersElem = document.querySelector('.filter-button');
filtersElem.addEventListener('click', function(event) {
  if (!matchesSelector(event.target, 'input[name="filter"]')) { return; }
  let filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue });
});
