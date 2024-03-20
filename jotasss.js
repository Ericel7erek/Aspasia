const cosas = ['Juan', 'Roberto', 'Eric'];

cosas.forEach(cosa => console.log("Conozco a alguien llamado "+cosa));

const numbers = [1,9,3,8,5,7]
numbers.forEach(n => {
    console.log(n=n*2)
});

let cantidadDePositivos=  0
let cantidadDePegativos=  0
let cantidadDePeros=  0
const nom= [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
nom.forEach(n => {
    if (n>0) {
        cantidadDePositivos++
    } else if (n<0) {
        cantidadDePegativos++
    }else {
        cantidadDePeros++
    }
});

console.log(cantidadDePegativos)
console.log(cantidadDePositivos)
console.log(cantidadDePeros)


let nP=  0
let pC=  0
let nN=  0
let nC=  0
let nZ=  0
const nomb= [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
nom.forEach(n => {
    if (n>0) {
        nP+=n
        pC++
    } else if (n<0) {
        nN+=n
        nC++
    }else {
        nZ
    }
});

console.log(nP/pC)
console.log(nN/nC)
console.log(nZ)
console.log(pC);
console.log(nN);




const board= ["_", "_", "_", "_", "_", "_", "_", "_", "_"]

const printBoard = () => {
    alert(board[0] + "|" + board[1] + "|" + board[2] + "\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n" + board[6] + "|" + board[7] + "|" + board[8]);
}

const evaluateWin = () =>{
    if (board[0]===board[1]&& board[0]===board[2]&& board[0] !="_") {
        return true
    }else if (board[3]===board[4]&& board[3]===board[5]&& board[3] !="_") {
        return true
    } else if (board[6]===board[7]&& board[6]===board[8]&& board[6] !="_") {
        return true
    } else if (board[0]===board[3]&& board[0]===board[6]&& board[0] !="_") {
        return true
    } else if (board[1]===board[4]&& board[1]===board[7]&& board[1] !="_") {
        return true
    } else  if (board[2]===board[5]&& board[2]===board[8]&& board[2] !="_") {
        return true
    } else if (board[2] === board[4] && board[2] === board[7] && board[2] !== '_') {
        return true;
    }
    return false
}
var player1= true
var haGanadoAlguien = false
while (!haGanadoAlguien) {
    const sign= player1 ? "X" : "O";
    const n= prompt("Introduzca un número del 0 al 8, player "+sign+":");
    board[n] = sign
    if (evaluateWin()) {
        alert('Enhorabuena player '+sign)
        haGanadoAlguien=true
    } else {
        player1 = !player1
        printBoard()
    }
}