// TODO : JS map phase 1
// TODO : côté template HTML, rajouter plein de <p></p>
// TODO : on va récupérer tous les <p> de notre page dans une variable lesTxt via getElementByTagName
// TODO : On va faire un console.log de lesTxt

const lesTxt = document.body.getElementsByTagName("p");
console.log(lesTxt);

// TODO : JS map phase 2
// TODO : Avec la méthode array.from(), dans une nouvelle variable textesTab, on va transformer notre HTMLCollection en array
// TODO : on console.log la variable TextesTab
// On transforme le HTMLCollection (qui contient tous les <p>) en array classique

let textesTab = Array.from(lesTxt);
console.log(textesTab);

// TODO : JS map phase 3
// TODO : Sur textesTab, on va utiliser la fonction .map()
// TODO : dans .map(), on va lui passer en paramètre une fonction fléchée qui elle, a en paramètre une variable temporaire (nom de la variable au choix)
// TODO : cette fonction fléchée va modifier le innerHTML ou innerText de la variable temporaire

textesTab.map((p) => {
    p.innerText = "THIS IS SPARTA";
    p.style = "color: #646cffaa; cursor: pointer; font-weight: bold";

    p.addEventListener("mouseover", function() {
        p.style.color = "#171941";
    })

    p.addEventListener("mouseout", function() {
        p.style.color = "#646cffaa";
    })

    p.addEventListener("click", function() {
        console.log("CLICKED! CLICKED! CLICKED!");
    })
})