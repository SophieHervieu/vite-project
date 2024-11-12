//!EXO 7 - IF ELSE
// TODO : Créer une fonction qui reçoit un tableau de 3 notes et qui calcule une moyenne entre ces 3 notes.
// TODO : Dans cette fonction, si la moyenne est supérieure ou égale à 15, on renvoit une string (très bien).
// TODO : Sinon si la moyenne est supérieure ou égale à 10, on renvoit une string (assez bien).
// TODO : Sinon on renvoit une string (refus).

// function passOrMiss(arr) {
//     let passMark = (arr[0] + arr[1] + arr[2])/3;
    
//     if (passMark >= 15) {
//         console.log("Très bien");
//     } else if (passMark >= 10) {
//         console.log("Assez bien")
//     } else {
//         console.log("Refus")
//     }
// }

// passOrMiss([10, 13, 5]);

// Pour un tableau de n'importe quelle longueur
// let arr = [15, 10, 19, 7, 14, 4];
let passMark = 0;
function passOrMiss2(arr) {
    for (let i = 0; i < arr.length; i++) {
        passMark += arr[i];
    }
    passMark = passMark/arr.length;

    if (passMark >= 15) {
        console.log("Très bien");
    } else if (passMark >= 10) {
        console.log("Assez bien");
    } else {
        console.log("Refus");
    }
}

passOrMiss2([15, 10, 19, 7, 14, 4]);
passOrMiss2([12, 8, 10, 7, 2, 4]);