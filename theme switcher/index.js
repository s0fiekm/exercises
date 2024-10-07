// Hent dropdown elementet
const themeSelector = document.querySelector("#themeSelector");

themeSelector.addEventListener("change", function () {
  document.body.setAttribute("data-theme", this.value);
});
