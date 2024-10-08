const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric);

const vehiclesWithMoreThanTwoSeats = vehicles.filter(
  (vehicle) => vehicle.passengers > 2
);

const electricOwnedByJonas = vehicles.filter(
  (vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas"
);

const rugbrodVehiclesWithMoreThanOne = vehicles.filter(
  (vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1
);
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

document
  .getElementById("showAll")
  .addEventListener("click", () => showTheseVehicles(vehicles));
document
  .getElementById("showElectric")
  .addEventListener("click", () => showTheseVehicles(electricVehicles));
document
  .getElementById("showMoreSeats")
  .addEventListener("click", () =>
    showTheseVehicles(vehiclesWithMoreThanTwoSeats)
  );
document
  .getElementById("showElectricJonas")
  .addEventListener("click", () => showTheseVehicles(electricOwnedByJonas));
document
  .getElementById("showRugbrod")
  .addEventListener("click", () =>
    showTheseVehicles(rugbrodVehiclesWithMoreThanOne)
  );

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}
