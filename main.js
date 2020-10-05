const hor_nav_item = document.createElement("button");
hor_nav_item.setAttribute("id", "hor_nav_item");
hor_nav_item.setAttribute("class", "hor_nav_item");
hor_nav_item.innerText = "Modulares Web";

hor_nav_item.onclick = () => {
  vertikal_navbar.innerHTML = "";
  const ver_nav_item1 = document.createElement("button");
  ver_nav_item1.setAttribute("id", "ver_nav_item");
  ver_nav_item1.setAttribute("class", "ver_nav_item");
  ver_nav_item1.innerText = "Counter";
  ver_nav_item1.onclick = () => {
    myInhalt.innerHTML = "<my-counter></my-countert>";
  };

  const ver_nav_item2 = document.createElement("button");
  ver_nav_item2.setAttribute("id", "ver_nav_item");
  ver_nav_item2.setAttribute("class", "ver_nav_item");
  ver_nav_item2.innerText = "StoppUhr";
  ver_nav_item2.onclick = () => {
    myInhalt.innerHTML = "<stopp-uhr></stopp-uhr>";
  };

  vertikal_navbar.appendChild(ver_nav_item1);
  vertikal_navbar.appendChild(ver_nav_item2);
};

horizontal_navbar.appendChild(hor_nav_item);
