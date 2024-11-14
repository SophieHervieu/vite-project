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
// let text = document.getElementById("textarea");
// text.value = localStorage.getItem("text");
// let monSuperTexte = text.value;
// randomText.textContent = monSuperTexte;

// document.addEventListener("keyup", () => {


//     // Si le texte fait plus de 5 caractères, désactiver le bouton Submit
//     if(text.length >= 5) {
//         document.getElementById("btn").disabled = true;
//     } else {
//         document.getElementById("btn").disabled = false;
//     }

//     // Stocker le contenu du texte tapé dans le local storage (setItem)
//     localStorage.setItem("text", text.value);

//     // Et l'afficher
//     // randomText.textContent = localStorage.getItem("text");
// })

// TODO 1: Récupérer le textarea dans une variable zoneTxt
// TODO 2: Récupérer la div dans une variable zoneRender
// TODO 3: Dès qu'on arrive sur la page, pré remplir le textarea avec ce que l'on récupère dans le localStorage
// TODO 4: Si zoneTxt.value est défini, alors remplir la div avec ce qu'on récupère dans le localStorage
// TODO 5: Détecter ce que tape l'utilisateur dans le textarea
// TODO 6: Enregistrer ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
// TODO 7: Afficher ce que tape l'utilisateur traduit en marked dans la div


// Gestion des erreurs
// try {
//     prenom;
//     alert('Bonjour');
// } catch(err) {
//     alert(`Erreur détectée ALERTE: STOPPEZ TOUT!
//         ---------
//         Le Nom de l'erreur 
//         ${err.name}
//         -----------
//         Le Message de l'erreur  :
//         ${err.message}
//         ----------
//         L'emplacement de l'erreur:
//         ${err.stack}`);
// }
// alert(`Ce message s'affiche correctement`);

//Exceptions

// function division(){
//     let x = prompt('Entrez un premier nombre (numérateur)');
//     let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
//     if(isNaN(x) || isNaN(y) || x == '' || y == ''){
//         throw new Error('Merci de rentrer deux nombres');
//     }else if(y == 0){
//         // throw new Error('Division par 0 impossible')
//         throw console.warn('Division par 0 impossible');
//     }else{
//         alert(x / y);
//     }
// }

// division();

// const apiDiv = document.querySelector('.apiContact');
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApi =  async () => {
//     //Data va récup Toutes les données de l'api
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon');
//     console.log(response);
//     console.log(response.ok);
//     console.log(response.status);
//     //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
//     const dataTransformed = await response.json();
//     console.log(dataTransformed);
//     apiDiv.innerText = dataTransformed.results.map(pokemon => pokemon.name);
// };
// contactApi();

// const apiDiv = document.querySelector('.apiContact');
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApi =  async () => {
//     //Data va récup Toutes les données de l'api
//     const response = await fetch('https://tyradex.vercel.app/');
//     console.log(response);
//     console.log(response.ok);
//     console.log(response.status);
//     //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
//     const dataTransformed = await response.json();
//     console.log(dataTransformed);
//     apiDiv.innerText = dataTransformed.results.map(pokemon => pokemon.name);
// };
// contactApi();

const url = "https://tyradex.vercel.app/api/v1/gen/9";
const apiDiv = document.querySelector('.apiContact');
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        console.log(data[0]);
        console.log(data[0].generation);
        console.log(data);
        // apiDiv.innerText = data.map(pokemon => pokemon.name);
        return data;
    } catch (error) {
        console.error("Erreur lors du fetch:", error);
        throw error;
    }
}

const pokemonCard = document.getElementById("pokemonCard");
function pokemonCards() {
fetchData(url)
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log("Données utilisateur:", data); 
            console.log(data[i].generation);
            console.log(data[i].types[0].name);
            
            const pokemonPicture = document.createElement("img");
            pokemonPicture.src = data[i].sprites.regular;
            pokemonPicture.classList.add("card-img-top");
            // pokemonCard.appendChild(pokemonPicture);

            pokemonPicture.style.width = "300px";
            pokemonPicture.style.height = "300px";
            pokemonPicture.style.marginLeft = "30px";
            pokemonPicture.style.marginRight = "30px";

            const pokemonName = document.createElement("h3");
            pokemonName.textContent = `${data[i].name.fr}`;
            pokemonName.classList.add("card-title");
            // pokemonCard.appendChild(pokemonName);

            const type = document.createElement("p");
            if (data[i].types.length > 1) {
                type.textContent = `Type: ${data[i].types[0].name}, ${data[i].types[1].name}`;
            } else {
                type.textContent = `Type: ${data[i].types[0].name}`;
            }
            type.classList.add("card-text");
            // pokemonCard.appendChild(type);

            const weight = document.createElement("p");
            weight.textContent = `Poids: ${data[i].weight}`;
            weight.classList.add("card-text");
            // pokemonCard.appendChild(weight);

            const height = document.createElement("p");
            height.textContent = `Taille: ${data[i].height}`;
            height.classList.add("card-text");
            // pokemonCard.appendChild(height);

            let btn = document.createElement("Button");
            let text = document.createTextNode("Voir plus");
            btn.appendChild(text);
            // pokemonCard.appendChild(btn);

            let oneCard = document.createElement("card");
            oneCard.appendChild(pokemonPicture);
            oneCard.appendChild(pokemonName);
            oneCard.appendChild(type);
            oneCard.appendChild(weight);
            oneCard.appendChild(height);
            oneCard.appendChild(btn);

            // oneCard.style.width = "300px";
            // oneCard.style.height = "800px";
            // oneCard.style.border = "1px solid #242424";

            pokemonCard.appendChild(oneCard);

            // pokemonCard.style.display = "flex";

            btn.style.marginTop = "10px";
            btn.style.padding = "5px 5px";
            btn.style.backgroundColor = "#007bff";
            btn.style.color = "white";
            btn.style.border = "none";
            btn.style.borderRadius = "5px";
            btn.style.cursor = "pointer";
            btn.style.width = "120px";
            btn.style.display = "block";
            btn.style.marginLeft = "auto";
            btn.style.marginRight = "auto";
        }

        // btn.addEventListener("click", function() {
        //     pokemonCards();
        // });
    })
    .catch(error => {
        console.error("Erreur lors de l'appel de l'API:", error);
    });
}

pokemonCards();