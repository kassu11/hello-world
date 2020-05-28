let pohja = document.getElementById("pohja");
test1();
function test1() {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "300");
  svg.setAttribute("height", "200");

  let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  polygon.setAttribute("points", "100,10 40,198 190,78 10,78 160,198");
  polygon.setAttribute("style", "fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;");

  svg.appendChild(polygon)

  pohja.appendChild(svg)
}



let taulu = {
  hp: 100,
  mp: 50,
  dmg: 100,
}

for(let solu in taulu) {
  console.log(solu + ":", taulu[solu]);
}
