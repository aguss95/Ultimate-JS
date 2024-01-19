// En el loop while se evalua primero la condicion y luego se ejecuta la porcion de codigo
let i = 2;
while (i < 2) { 
    if (i % 2 == 0) {
        console.log('Número par', i);
    }
    i++;
}

// En el loop do while se ejecuta la porcion de codigo y luego se evalua la condicion 

do {
    if (i % 2 == 0) {
        console.log('Número par', i);
    }
    i++;
} while (i < 2);