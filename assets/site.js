const searchInput = document.querySelector("#report-search");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const cards = Array.from(document.querySelectorAll(".report-card"));
let activeFilter = "all";

function applyFilters() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  cards.forEach((card) => {
    const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesQuery = !query || (card.dataset.search || "").includes(query);
    card.classList.toggle("hidden", !(matchesFilter && matchesQuery));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    applyFilters();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", applyFilters);
}
