const horizontal_navbar = document.getElementById("horizontal_navbar");
const vertikal_navbar = document.getElementById("vertikal_navbar");
const myInhalt = document.getElementById("inhalt");

fetch("data.json")
  .then((res) => {
    // Datei laden
    return res.json();
  })
  .then((data) => {
    // wenn geladen ist menu btn erstellen
    var keys = Object.keys(data);
    keys.forEach((e) => {
      var u_keys = Object.keys(data[e]);
      const btn = document.createElement("button");
      btn.innerText = e;
      btn.setAttribute("class", "hor_nav_item");
      horizontal_navbar.appendChild(btn);
      btn.onclick = () => {
        vertikal_navbar.innerHTML = "";
        u_keys.forEach((u) => {
          const left_btn = document.createElement("button");
          left_btn.setAttribute("class", "ver_nav_item");
          left_btn.innerText = u;
          left_btn.onclick = () => {
            myInhalt.innerText = "";

            const title = document.createElement("h3");
            title.innerText = data[e][u]["title"];

            const a = document.createElement("a");
            a.setAttribute("href", data[e][u]["reference"]);
            a.innerText = data[e][u]["inhalt"];
            myInhalt.appendChild(title);
            myInhalt.appendChild(a);
          };
          vertikal_navbar.appendChild(left_btn);
        });
      };
    });
  });
