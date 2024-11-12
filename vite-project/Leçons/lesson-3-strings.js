//! EXO 3 : STRINGS 
//TODO: Débrouillez vous pour afficher en console ces 2 Phrases EXACTEMENT : 
//TODO: Bonjour mr."GINGLE" 
//TODO: Bonjour, J'aime la quiche
let hello = 'Kikoo LOL PTDR, Xptdr.PNG';
console.log(hello);
//! PB :
// console.log("Bonjour mr. "Gingle"");
//? La Ruse : 
console.log('Bonjour mr. "Gingle"');
//! PB : 
// console.log('J'aime le quiche');
//? La Ruse : 
console.log("J'aime le quiche'");
//! Echapper Du texte : 
console.log("Bonjour mr. \"Gingle\"");
console.log('J\'aime la quiche');

//! EXO 3.2 :  STRINGS
//TODO: Créer 3 variables : 
//TODO: - Le nom (vous assigner un nom de votre choix)
//TODO: - L’age (vous assigner un âge de votre choix)
//TODO: - la variable phrase qui contiendra les 2 précédentes variable dans une chaine de caractères
//TODO: Créer une variable phrase de bienvenue  qui affiche dans la console du navigateur :
//TODO: "Bonjour Jean-Jacques (la variable pour le nom) tu as 57(la variable pour l’âge) ans aujourd’hui, c’est la fiesta !" 
let prenom = 'GONTRAND';
let age = 38;
//? Technique de la CONCATÉNATION
let welcomePhrase = "Bonjour "+prenom+" tu as "+age+' ans today';
console.log(welcomePhrase);
//? Technique TEMPLATE STRINGS (avec les backticks (alt gr 7) 
//?et on isole les variable avec ${maVariable})
let phraseWelcome = `"Bonjour" ${prenom} tu as '${age}' ans c'est trop cool`;
console.log(phraseWelcome);

//! EXO 3.3 :  STRINGS
//TODO: Créer une variable qui contient un mot
//TODO: Trouver un moyen d'afficher le nombre de lettre que contient ce mot 
//TODO:dans la console du navigateur (faut trouver la longueur du mot en gros!)
//TODO : Afficher en console uniquement la seconde lettre du mot
//TODO : Afficher en console uniquement la dernière lettre du mot
let nomPays = 'FRANCE';
console.log(nomPays.length);
console.log(nomPays[1]);
// Pour trouver automatiquement la dernière lettre
//Comme pour les tableaux [0] c'est la 1ère Lettre
console.log(nomPays[nomPays.length -1]);
// Définissez toutes les variables pertinentes qui résument la commande d'un utilisateur chez la "Pizzeria Raffinata". Vous devez faciliter le travail pour l'équipe du Template et ranger toutes ces variables dans une variable qui se nommera SumUpOrderPhrase. Cette phrase devra contenir : "Merci d'avoir commandé chez "La pizzeria Raffinata"".
let firstName = 'Jean';
let lastName = 'Pierre';
let nbPizzaRegina = 2;
let nbPizzaCaprina = 4;
let apero = 'batonnêts mozzarella';
let nbApero = 12;
let totalCommande = 65.95;

// On peut changer la citation sans avoir à la réécrire à chaque fois en appelant juste la variable associée
let quoteOne = `Qu'est-ce qu'une pizza dit à une autre pizza qui lui fait de l'ombre ? "Arrête de me trancher la route !"`;
let quoteTwo = `Qu'est-ce qu'une pizza dit à une autre pizza qui lui demandait des conseils ? "Suis ta pâte et tout ira bien !"`;

let SumUpOrderPhrase = `Bonjour ${firstName} ${lastName}, vous avez commandé ${nbPizzaRegina} pizzas Regina, ${nbPizzaCaprina} pizzas Caprina et ${nbApero} ${apero} pour un total de ${totalCommande}€. Merci d'avoir commandé chez "La pizzeria Raffinata" !

${quoteTwo}
`;
console.log(SumUpOrderPhrase);