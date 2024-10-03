const bc = {
  hvidevarer: { name: "Hvidevarer", link: "/hvidevarer" },
  vaskemaskiner: { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  bosch: { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
};

const breadcrumbList = document.querySelector("#breadcrumb");
const generateBtn = document.querySelecto("#generateBtn");

function generateBreadcrumb() {
  breadcrumbList.innerHTML = "";

  for (let bcItem in bc) {
    const li = document.createElement("li");
    const breadcrumb = bc[bcItem];

    if (bcItem !== "bosch") {
      li.innerHTML = `<a href="${breadcrumb.link}">${breadcrumb.name}</a>`;
    } else {
      li.innerHTML = `<span>${breadcrumb.name}</span>`;
    }

    breadcrumbList.appendChild(li);
  }
}

generateBtn.addEventListener("click", generateBreadcrumb);
