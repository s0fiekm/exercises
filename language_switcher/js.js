"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

let locale = "da";

document
  .querySelector("#language-select")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    const selectedTexts = texts[selectedLanguage].texts;

    selectedTexts.forEach((item) => {
      const element = document.querySelector(item.location);
      if (element) {
        element.textContent = item.text;
      }
    });
  });
