
//crea un vector con los numeros del 1 al 5 luego elimina el numero que esta en la 
//segunda posicion y muestra el vector

let numeros = [0, 1, 2, 3, 4, 5];

numeros.splice(2, 1);

//recorro vector
for(let i = 0; i < numeros.length; i++) {
console.log(numeros);
}