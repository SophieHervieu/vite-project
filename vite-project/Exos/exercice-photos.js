let webPage = document.getElementById("body");

webPage.addEventListener("click", (e) => {
    console.log(e);
    console.log(`Les coordonnées sont: ${e.clientX}, ${e.clientY}`);
    let image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1500479694472-551d1fb6258d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN1dGUlMjBmb3h8ZW58MHx8MHx8fDA%3D";
    image.style = `height: 250px; width: 380px; top: ${e.y}px; left: ${e.x}px; position: absolute`;
    webPage.appendChild(image);
})