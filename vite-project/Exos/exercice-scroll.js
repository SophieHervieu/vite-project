// Créer une scrollbar qui se remplit à mesure qu'on scrolle dans la page

document.addEventListener("scroll", (e) => {
    console.log(`
        Hauteur de la page: ${document.body.scrollHeight}
        Hauteur de l'affichage: ${window.innerHeight}
        Scroll position: ${window.scrollY}`);

        let scrollMax = document.body.scrollHeight - innerHeight;
        let onEstOu = (scrollY/scrollMax) * 100;

        let location = document.getElementsByClassName("bar")[0];
        console.log(location);

        location.style.width = onEstOu + "%";
})