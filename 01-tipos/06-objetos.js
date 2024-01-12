// Tipo de referencia. no son tipos de datos primitivos

//Personajes de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro", //Par llave : valor
    anime: "Demon slayer",
    edad: 16,
};// Los corchetes indican un objeto
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 13;

delete personaje.anime;

console.log(personaje);