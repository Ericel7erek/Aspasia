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

