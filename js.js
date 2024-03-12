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
        return "Small";}
     else if(num < 15)
    {return "Medium";}
     else if(num < 20){
        return "Large";}
     else if(num >= 20){
        return "Huge";}
}

const xx = testSize(3)
console.log(xx);

function nand(bool1, bool2) {
    return !(bool1&&bool2)
}

console.log(nand(true, false));
console.log(nand(false, true));
console.log(nand(false, false));
