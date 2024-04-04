const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

const words = ["elon","rex","integral","casa"]
let secretWord = words[Math.floor(Math.random()*words.length)]
let hiddenWord = secretWord.replace(/./g, "_ ");
let isGameAlive = true
while (isGameAlive) {
    alert(hiddenWord)
    let input = prompt("Introduce una letra");
    for (let i = 0; i < secretWord.length; i++) {
            if (input.toLowerCase()==secretWord[i]) {
                hiddenWord= replaceAt(hiddenWord, input, i*2)
            }else if (!hiddenWord.includes("_"))  {
                isGameAlive = false
                alert("Congrats!!!")
            }
        }
}


const n=["Eric","Eric","Eric","Eric","Eric"]

const m= n.map(m=> "Conozco a alguien llamado" +m)

console.log(m);


const users = [
	{
		"name" : "Paco",
		"isActive" : false,
		"edad": 18
	},
	{
		"name" : "Laura",
		"isActive" : false,
		"edad": 21
	},
	{
		"name" : "Raquel",
		"isActive" : false,
		"edad": 15
	},
	{
		"name" : "Juan",
		"isActive" : true,
		"edad": 17
	},
	{
		"name" : "Alberto",
		"isActive" : false,
		"edad": 50
	},
	{
		"name" : "Rodolfo",
		"isActive" : true,
		"edad":7
	},
];

const filter = users.filter(user=> user.isActive)
console.log(filter);

const filter2 = users.filter(user=> user.edad>18)
console.log(filter2);

// const words = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const frase = words.reduce((acc, word) => `${acc} ${word}`);
// console.log(frase); // a long time ago in a galaxy far far away

// const datos = [1,2,3]
// const calculador = datos.reduce((acc, num)=> acc+num, 0)/datos.length
// console.log(calculador);

