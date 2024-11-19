import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "his"];
  let adjective = ["great", "big", "amazing"];
  let noun = ["jogger", "racoon", "dog", "merchant", "driver"];

  //  let allDomains = [];
  let allDomains = "";
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adjective.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        let domain = pronoun[a] + adjective[b] + noun[c] + ".com";

        allDomains += `<li class="list-group-item">${domain}</li>`;
        //  allDomains.push(domain);      }
      }
    }
  }
  console.log(allDomains);
  // const listDomains = allDomains.map(domain => {
  //    return `<li class="list-group-item">${domain}</li>`;
  //  });
  const html = `<ul class="list-group">${allDomains}</ul>`;

  document.querySelector("#domains").innerHTML = html;
};
