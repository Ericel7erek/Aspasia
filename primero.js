var d= 1
console.log(typeof d)

var da= "Yes"
console.log(typeof da)

// let a;
// a = 7;
// let b;
// b= a// modificar únicamente esta línea
// console.log(b);


// let camelCaseBienPuesto= a;
// let tituloDeLaPelicula= camelCaseBienPuesto;
// let eDaddelMonstruo = camelCaseBienPuesto;
// console.log(TituloDeLaPelicula)

let i = 7;
i = 5;
i = 3;
console.log(i); // ¿Qué valor se mostrará por consola?


// let a = 5;
// let b = 7;
// let c = a;
// a=b
// b=c
// // ... aquí y sólo aquí añadiremos las líneas de codigo
// console.log('a: ', a); //Debería mostrar 7
// console.log('b: ', b); //Debería mostrar 5


// let x = 0x50
// console.log(x)

// const a = "aaaaaaaaaaa"
// const b = 17
// const c = "1"
// console.log(typeof (a+b+c));

const txt1= "este es el principio"

const txt2= "Este es el final"
const txt3= txt1+ " " +txt2

console.log(txt3);

const euros = 7;
const dolares = euros*2// Modificar sólo esta línea
console.log(dolares); // Debería mostrar 14

const precio = 100;
const precioConIva = precio * 1.21 // Modificar sólo esta línea
console.log(precioConIva); // Debería mostrar 121

const ancho=4
const alto=7
const rectangulo= (alto*ancho)/2

console.log(rectangulo);

const centigrados = 20;
const fahrenheit = centigrados*(9/5)+32// Modificar sólo esta línea
console.log(fahrenheit); // Debería mostrar 68

const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';

console.log(`${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}.`);

let x = 3;
x++;x
x = x * 2;
x--;x
console.log(x); 

const dato1 = 10;
const dato2 = 11;
if(dato1 > dato2){
    console.log('exito', dato1>dato2);
	console.log('exito');
} else {
    console.log("no puedo");
}

if (10 == 10){console.log('You got a true!')}
    
else {
    console.log('You got a false!')
}
const nota = 1
if (nota>5) {
    console.log("Aprobado");
} else if (nota==5){
    console.log("Aprobado por los pelos");
} else{
    console.log("Suspenso");
}

if (i>=0) {
    console.log("positive");
} else {
    console.log("negative");
}

if (i%2 === 0) {
    console.log("es par");
} else {
    console.log("es impar");
}
if (i%5===0) {
    console.log("si");
} else {
    console.log("no");
}
if (i%10===0) {
    console.log("si");
} else {
    console.log("no");
}
if (i>=100) {
    console.log("mayor de 100");
} else {
    console.log("menor de 100");
}