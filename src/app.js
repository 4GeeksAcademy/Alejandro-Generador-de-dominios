import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "his"];
  let adj = ["great", "big", "amazing"];
  let noun = ["jogger", "racoon", "dog", "merchant", "driver"];

  let dominios = document.querySelector("#dominios");

  let AllDominios = "";

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        let dominio = pronoun[a] + adj[b] + noun[c] + ".com";

        AllDominios += dominio + " ";
      }
    }
  }
  dominios.innerHTML = AllDominios;
};
