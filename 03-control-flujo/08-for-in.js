let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['Chanchito feliz', 'Dragón', 'Perrito'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}

// Esto es una forma obsoleta de acceder a los elementos de una array, la forma correcta actual es utilizar el metodo for of