const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let theText = document.querySelector("p").textContent;
document.querySelector("button").addEventListener("click", replaceBadWords);

function replaceBadWords() {
  //   console.log("Replace", theText);
  curseWords.forEach((curseWord) => {
    console.log((theText = theText.replaceAll(curseWord.bad, curseWord.good)));
  });
  console.log(theText);
}

function isItSafe() {
  return false;
}
