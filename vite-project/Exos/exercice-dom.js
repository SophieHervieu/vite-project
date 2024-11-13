// Dans une page web mettre en place un titre <h1>, faire en sorte que lorsque l'on clique sur le titre, cela modifie son texte

let title = document.querySelector("h1");

title.addEventListener("click", () => {
    title.innerText == `-- 🥳 --` ? title.innerText = "D.O.M Events" : title.innerText = `-- 🥳 --`;
})

// Ajouter une classe

let addClass = document.getElementById('add');

addClass.addEventListener("click", () => {
    title.classList.add('title');
})

// Supprimer une classe

let removeClass = document.getElementById('remove');

removeClass.addEventListener("click", () => {
    title.classList.remove('title');
})

// Toggle de la classe sur le titre

let toggleClass = document.getElementById('toggle');

toggleClass.addEventListener("click", () => {
    title.classList.toggle('title');
})