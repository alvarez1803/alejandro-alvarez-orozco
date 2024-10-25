// escribe un programa q recorra un vector de animales y q muestre solo los q tengan mas de 5 letras en su nombre

// definir un vector tipo string
let animales = ["leon", "tortuga", "perro", "gato", "aguila"];

//recorrer el vector
for(let i =0; i < animales.length; i++ ){
//validar que el animal tenga mas de 5 letras
if(animales[i].length > 5 ) {
console.log(animales[i]);
}

}

