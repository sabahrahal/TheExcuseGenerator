/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuses = document.getElementById("excuses");

  const random = array => {
    return Math.floor(Math.random() * array.length);
  };

  const concatArray = () => {
    let whoPhrase = who[random(who)];
    let whatPhrase = what[random(what)];
    let whenPhrase = when[random(what)];
    return whoPhrase
      .concat(" ")
      .concat(whatPhrase)
      .concat(" ")
      .concat(whenPhrase);
  };

  excuses.innerHTML = concatArray();
};
