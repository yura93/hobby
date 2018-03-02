let rootNode = document.getElementById("root");
//create  the page with thumbnails
function listOfTanks(structure) {
  let container = document.createElement("div");
      container.innerHTML = `<h1>Most popular tanks</h1>`;
      container.className = "container";
      root.appendChild(container);
  for (let i in structure) {
    let figureNode = document.createElement('figure');
      if (structure[i].model) {
        figureNode.innerHTML = `<img class ="tanks" src="${structure[i].preview}" alt="tank">
            <figcaption><img src ="${structure[i].country_image}" alt = "flag of the country">
            ${structure[i].level} <span class = "nameTanks">${structure[i].model}</span> </figcaption> `;
        figureNode.addEventListener("click", function() {
        window.location.hash = structure[i].model;
        });
      }
     container.appendChild(figureNode);
    }
  }
//create page tank details
function createDatails() {
  root.removeChild(root.firstChild);
  let tank = find(tanks);
  function find(structure) {
    for (let i = 0; i < structure.length; i++) {
      if ("#" + structure[i].model === window.location.hash) {
        return structure[i];
       }
    }
    }
    let container = document.createElement("div");
      container.className = "container2";
      root.appendChild(container);
    let detailsHeader = document.createElement("div");
      detailsHeader.className = "details-header";
      detailsHeader.innerHTML = `<img class ="" src="${tank.country_image}" alt="imgCountry" >
        <h1>${tank.model} (level${tank.level}) </h1>`;
      container.appendChild(detailsHeader);
    let main = document.createElement("div");
      main.className = "main";
      container.appendChild(main);
    let preview = document.createElement("div");
      preview.className = "preview";
      preview.innerHTML = `<h2>Preview</h2> <img src = "${tank.preview}">`;
      main.appendChild(preview);
    let tabDetails = document.createElement("div");
      tabDetails.innerHTML = "<h2>Characteristic</h2>";
      main.appendChild(tabDetails);
//create table
    let table = document.createElement("table");
    for (key in tank.details) {
      let tr = document.createElement('tr');
      let tdKey = document.createElement('td');
        tdKey.className = "col1";
        tdKey.innerHTML = key.replace(/_/g, ' ');
      let tdVal = document.createElement('td');
        tdVal.className = "col2";
        tdVal.innerHTML = tank.details[key];
        tr.appendChild(tdKey);
        tr.appendChild(tdVal);
        table.appendChild(tr);
    }
    tabDetails.appendChild(table);
//create button which will redirect user to the page with thumbnails
    let btn = document.createElement("button");
      btn.innerHTML = "Back to list view";
      btn.addEventListener("click", function() {
    window.location.hash = ' ';
    });
    container.appendChild(btn);
}
//page switch
window.addEventListener('hashchange', function() {
    if (window.location.hash === '') {
      root.removeChild(root.firstChild);
      listOfTanks(tanks);
    } else {
      createDatails();
    }
});

listOfTanks(tanks);