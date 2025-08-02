let homepage_title = document.getElementById("homepage-title");
let homepage_subt = document.getElementById("homepage-subt");

let homepage_title_val = "Reina del Santísimo Rosario";
let homepage_subt_val = "Ruega por nosotros";

homepage_title.innerHTML = homepage_title_val;
homepage_subt.innerHTML = homepage_subt_val;

let timelinediv = document.getElementById('timeline');

events.forEach(item => {
    // create new div
    const newDiv = document.createElement("div");
    // and give it some content
    newDiv.classList.add('event');
    newDiv.classList.add(item.type);
    (item.left) ? newDiv.classList.add('left') : newDiv.classList.add('right');
    let eventdate = new Date(item.date);
    let eventdatef = eventdate.toLocaleDateString("es-CO",
        {   weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );
    newDiv.innerHTML = `
        <p>${eventdatef}</p>
        <h4>${item.name}</h4>
    `;
    
    timelinediv.appendChild(newDiv);
});
