// Création de formulaire via JS
// let form = document.createElement("form");
// form.setAttribute("method", "post");

// let email = document.createElement("input");
// email.setAttribute("type", "text");
// email.setAttribute("name", "emailID");
// email.setAttribute("placeholder", "name@example.com");

// let title = document.createElement("input");
// title.setAttribute("type", "text");
// title.setAttribute("name", "title");
// title.setAttribute("placeholder", "your title");

// let textArea = document.createElement("input");
// textArea.setAttribute("type", "text");
// textArea.setAttribute("name", "text");
// textArea.setAttribute("placeholder", "your text here");

// let btn = document.createElement("input");
// btn.setAttribute("type", "submit");
// btn.setAttribute("value", "submit");

// form.appendChild(email);
// form.appendChild(title);
// form.appendChild(textArea);
// form.appendChild(btn);

// document.getElementsByTagName("body")[0].appendChild(form);

// Récupérer le texte tapé dans le textarea por l'écrire entre les balises <p>
document.addEventListener("keyup", () => {
    let text = document.getElementById("textarea").value;

    // Si le texte fait plus de 5 caractères, désactiver le bouton Submit
    if(text.length >= 5) {
        document.getElementById("btn").disabled = true;
    } else {
        document.getElementById("btn").disabled = false;
    }

    // Stocker le contenu du texte tapé dans le local storage (setItem)
    localStorage.setItem("text", text);

    // Et l'afficher
    randomText.textContent = localStorage.getItem("text");
})