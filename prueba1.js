let doble = numero => numero * 2;
let triple = numero => numero * 3;
let aplicarCallback = (numero, funcion) => funcion(numero)

console.log(aplicarCallback(4,  doble));