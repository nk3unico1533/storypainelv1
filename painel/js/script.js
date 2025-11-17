const row = document.querySelector('.stories-row');

row.addEventListener("wheel", (e) => {
  e.preventDefault();
  row.scrollLeft += e.deltaY;
});
