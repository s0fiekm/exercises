"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  registerButtons();

  loadJSON();
  console.log("ready");
}
function registerButtons() {
  document
    .querySelectorAll("[data-action= 'filter']")
    .forEach((button) => button.addEventListener("click", selectFilter));

  document
    .querySelectorAll("[data-action= 'sort']")
    .forEach((button) => button.addEventListener("click", selectSort));
}

function selectFilter(event) {
  const filter = event.target.dataset.filter;
  filterList(filter);
}

function selectSort(event) {
  const sortBy = event.target.dataset.sort;
  sortList(sortBy);
}

function isCat(animal) {
  return animal.type === "cat";
}

function isDog(animal) {
  return animal.type === "dog";
}

function filterList(animalType) {
  let filteredList = allAnimals.filter(isCat);
  if (animalType === "cat") {
    filteredList = allAnimals.filter(isCat);
  } else if (animalType === "dog") {
    filteredList = allAnimals.filter(isDog);
  } else {
    filteredList = allAnimals;
  }

  displayList(filteredList);
}

function sortList(sortBy) {
  let sortedList = allAnimals;
  if (sortBy === "name") {
    sortedList = sortedList.sort(sortByName);
  } else if (sortBy === "type") {
    sortedList = sortedList.sort(sortByType);
  }
  displayList(sortedList);
}

function sortByName(animalA, animalB) {
  if (animalA.name < animalB.name) {
    return -1;
  } else {
    return 1;
  }
}

function sortByType(animalA, animalB) {
  if (animalA.type < animalB.type) {
    return -1;
  } else {
    return 1;
  }
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
