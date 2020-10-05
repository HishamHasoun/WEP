const header = document.getElementById("header");
const left = document.getElementById("left");
const article = document.getElementById("article");
const right = document.getElementById("right");

fetch("data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    var keys = Object.keys(data);
    keys.forEach((e) => {
      var u_keys = Object.keys(data[e]);
      const h1 = document.createElement("div");
      h1.innerText = e;
      header.appendChild(h1);
      h1.onclick = () => {
        left.innerHTML = "";

        u_keys.forEach((u) => {
          const l = document.createElement("div");
          l.innerText = u;
          l.onclick = () => {
            article.innerText = "";
            data[e][u]["inhalts"].forEach((_, index) => {
              const header = document.createElement("h3");
              header.innerText = data[e][u]["inhalts"][index]["title"];

              const p = document.createElement("p");
              p.innerText = data[e][u]["inhalts"][index]["inhalt"];
              article.appendChild(header);
              article.appendChild(p);

              //////////////////////////////

              right.innerText = "";
              const reference = document.createElement("h3");
              reference.innerText = "References";
              const p_r = document.createElement("p");
              p_r.innerText = data[e][u]["referens"];
              right.appendChild(reference);
              right.appendChild(p_r);
            });
          };
          left.appendChild(l);
        });
      };
    });
  });
