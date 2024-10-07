const list = document.querySelector("ul");

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

function getRandomCustomer() {
  return Math.floor(Math.random() * 100);
}

const customerCounts = [];

const chartContainer = document.querySelector("#chart");

function updateChart() {
  const newRandomCustomer = getRandomCustomer();
  customerCounts.push(newRandomCustomer); //tilføjer nye elementer i slutningen

  if (customerCounts.length > 20) {
    customerCounts.shift(); //Fjerner det første element fra arrayet
  }

  chartContainer.innerHTML = ""; //renser chart/ul og laver nye elementer med de nye værdier

  customerCounts.forEach((count) => {
    const bar = document.createElement("li");
    bar.classList.add("bar");
    bar.style.setProperty("--height", count); //sætter css variablen på det enkelte li element
    chartContainer.appendChild(bar); // opretter et nyt li element
  });
}

setInterval(updateChart, 1000); // starter et interval som opdateres hverty sekund
