let ins = 5;
let valor = 0;
while(ins>=0){
	valor= valor + ins;
    ins--;
}
console.log(valor);

let ind = 5;
let sum = 0;
while (ind >= 0) {
	sum = sum + ind;
	ind--;
}

console.log(sum);

let random = Math.random();
while (random > 0.5) {
    random = Math.random();
}
    console.log(random);

    let random1;
do {
    random1 = Math.random();
} while (random1 > 0.5);
    console.log(random1);


    function Verdad(boolean) {
        console.log(boolean? "eso es la verdad": "entiendo");
    }
    Verdad(false)
    
    function hoyQuieroComer(Comida) {
        console.log("hoy Quiero Comer "+ Comida);
    }

    hoyQuieroComer("arroz con pollo.")

    function calcularVelocidad(number) {
        console.log(number**3)
    }

    calcularVelocidad(10)

    function calcularArea(ancho ,alto) {
        console.log((alto*ancho)/2);
    }

    calcularArea(10,3)

    function areaTriangulo(base, altura) {
        console.log(base*altura/2);
    }
    areaTriangulo(1,2)

    function calculaPerimetro(radio) {
        console.log(2*Math.PI*radio);
    }

    calculaPerimetro(3)

    function calculaArea(radio2) {
        console.log(Math.PI*radio2);
    }
    calculaArea(3)

    function noDevuelveNada(a, b){
	const resultado = a + b;
	console.log(resultado);
}

noDevuelveNada(2,3);

function devuelveValor(a,b){
	const resultado = a + b;
	return resultado;
}

const valorDevuelto = devuelveValor(2,3);
console.log(valorDevuelto);

function echo(phrase) {
    return phrase
}

const result = echo("Greta");
console.log(result);

function Saludar(Parametro) {
    return `Hola ${Parametro}!`
}

const x2 = Saludar("mickey");
console.log(x2)

function test(val) {
	if (val>=10&& val<=20) { // Cambia esta línea
		return "Inside";
	}else {
		return "Outside";
	}
}
console.log(test(10));

function testEqual(val) {
	if (val==12) { // Cambia esta línea
		return "Equal";
	} else{
	return "Not Equal";}
}

console.log(testEqual(12));

function testElse(val) {
	let result = "";
	if (val > 5) {
		result = "Mayor que 5";
	} else  {
		result = "Menor o igual a 5";
	}
	return result;
}

console.log(testElse(6));

function testElses(val) {
	let result = "";

	if (val > 5) {
		result = "Bigger than 5";
	}

	else if (val < 5) {
	result = "Smaller than 5";
	}

	else {
		result = "Equal to 5";
	}
	return result;
}

console.log(testElses(1));

function testSize(num) {
	if (num < 5) {
        return "Tiny";
    } else if(num < 10){
        return "Small";
    } else if(num < 15)
    {
        return "Medium";
    } else if(num < 20){
        return "Large";
    } else if(num >= 20){
        return "Huge";
    }
}

const xx = testSize(3)
console.log(xx);

function nor(bool1, bool2) {
    return !(bool1&&bool2)
}


function nand(bool11, bool22) {
    return !bool11 && !bool22
}
const v1 = nor(false, false);
const v2 = nor(true, false);
const v3 = nor(false, true);
const v4 = nor(true, true);


console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);

function nonIgual(a, b) {
    return a ==!b
}
const v5 = nonIgual(true, false);
const v6 = nonIgual(false, true);
const v7 = nonIgual(true, true);
const v8 = nonIgual(false, false);

console.log(v5);
console.log(v6);
console.log(v7);
console.log(v8);

let user = {
name: ["Pablo", "Eric", "Richard"],
age: [11 , 12, 14]
};


console.log(user);

user = null;

let users = {
	name: 'eric',
	apellido: 'alaa',
	funciones: {
		programador: 'Sr',
		exp: '12 years'
	}
}

console.log(users)

function infinity(a) {
    return a/0
}
console.log(infinity(1))

const num = numero=> numero**3

console.log(num(3));

const mH = kilo=> kilo*1000;
console.log(mH(1));

const area = (width, height)=> width*height;

console.log(area(2,2));

const triAngulo= (base, altura)=> base*altura/2

console.log(triAngulo(13, 2));

const perimetro = radius => 2*Math.PI*radius
console.log(perimetro(1));
const circle = radius => Math.PI*radius*radius
console.log(circle(3));

const multiply = (m,n)=> m*n
console.log(multiply(4,2));

const nombre = "Ramona";
console.log("Las letras que van desde la tercera hasta la última posición son: " + nombre.substring(1,3)); //am
console.log("Las letras que van desde la tercera hasta la última posición son: " + nombre.substring(2)); //mona
console.log("Las letras que van desde la tercera hasta la última posición son: " + nombre.slice(1,3)); //am
console.log("Las letras que van desde la tercera hasta la última posición son: " + nombre.slice(2)); //mona
console.log("Las dos últimas letras: " + nombre.slice(-2)); //na
console.log("La palabra tiene " + nombre.length + " letras"); // 6
console.log("La palabra en mayúsculas es: " + nombre.toUpperCase()); // RAMONA
console.log("La palabra en minúsculas es: " + nombre.toLowerCase()); // ramona
console.log("¿La palabra contiene la letra a?: " + nombre.includes("a")); // true
console.log("La posición de la primera 'a' de la palabra es: " + nombre.indexOf("a")); // 1 Si la letra no estuviese presente, devolvería -1
console.log("La posición de la última 'a' de la palabra es: "  + nombre.lastIndexOf("a")); // 5
console.log("La primera letra de la palabra es: " + nombre.charAt(0)); // R
console.log("La primera letra de la palabra es: " + nombre[0]); // R


const longitud = nom =>{
    return nom.length
}
console.log(longitud("Hola"));

const devuelvePrimeraLetra = a => {return a.substring(0,1)}
console.log(devuelvePrimeraLetra("dadadad"));

const wonderful = a => {return a.substring(3,7)}
console.log(wonderful("Wonderful Days."));

const devuelveUltimaLetra= ult => {return ult.slice(-1)}
console.log(devuelveUltimaLetra("dadadad"));

const devuelveMasLarga = (txt1,txt2) =>  {return txt1.length >= txt2.length ? txt1: txt2}

console.log(devuelveMasLarga("Richard","Eric"));

const devuelveMasLarga2 = (tx1,tx2,tx3) => {
    const t1 = tx1.length
    const t2 = tx2.length
    const t3 = tx3.length
    if (t1 > t2 && t1 > t3) {
        return tx1
    } else if(t2>t1 && t2>t3){
        return tx2
    } else if(t3>t1 && t3>t2){
        return tx3
    } else{
        return "at least 2 are of the same length"
    }
}
console.log(devuelveMasLarga2("Richard","Eric","Juan"));

const generarNombre = (t1,t2,t3) => {
    if (t1.length< 5|| t2.length< 5 ||t3.length< 5) {
        return "error"
    } else {
        return t1.substring(0,3) + t2.substring(0,3) + t3.substring(0,3)
    }
}


console.log(generarNombre("Richard", "Erics", "David"));

const generarNombre2 = (t1,t2,t3) => {
    if (t1.length< 5|| t2.length< 5 ||t3.length< 5) {
        return "error"
    } else {
        return t1.slice(-1) + t2.slice(-1) + t3.slice(-1)
    }
}

console.log(generarNombre2("Richard", "Erics", "David"));


const generarNombre3 = (t1,t2,t3) => {
    if (t1.length< 5|| t2.length< 5 ||t3.length< 5) {
        return "error"
    } else {
        return t1.slice(-3) + t2.slice(-3) + t3.slice(-3)
    }
}
console.log(generarNombre3("Richard", "Erics", "David"));

const tieneLetra = (txt, letra) => txt.indexOf(letra)>=0

console.log(tieneLetra("darb",""));

const tieneLetra2 = (txt, letra) => txt.toUpperCase().indexOf(letra.toUpperCase())>=0

console.log(tieneLetra2("darb","A"));

const crearPalabra = (l,n) => l.repeat(n)

console.log(crearPalabra("a",12));

const crearPalabra2 = (l,n) => l.toUpperCase().repeat(n)

console.log(crearPalabra2("a",12));

const toCase = (l) =>l.toLowerCase()+ "-" +l.toUpperCase()

console.log(toCase("adada"));

const shortcut = (l,l2) => l[0]+l2[0]

console.log(shortcut("Darwin", "America"));

const addGuiones = (txt1) =>txt1.slice(0,1) + "bar"

console.log((addGuiones("adada")));

const MAX = 10
const MIN = 9
const n = Math.floor(Math.random() * (7 - 5 + 1)) + 5;
console.log(n);

const name= "Mercadona";
const nom= Math.floor(Math.random()*name.length)
console.log(name[nom]);

let numero1 = Number(prompt("primero numero"))
let numero2 = Number(prompt("segundo numero"))
let operador = prompt("Operador")
let igual = (numero1,numero2,operador)=>{
    numero1 + operador +numero2
}
alert(igual)