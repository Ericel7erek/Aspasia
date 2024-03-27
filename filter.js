let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];
let collectedCharacters3 = []

const getWomansName = ()=>{
    const females = characters.filter(user=>user.gender==="female").map(character=> character.name)
    console.log(females);
}
const getAltura = () => {
    const alturita = characters.map(c=>({...c , height: c.height - 10}))
    console.log(alturita);
}
const sumaDePeso = () => {
    const sum = characters.reduce((acc, c)=> acc +Number(c.mass) ,0)
    console.log(sum);
}

const mediaDeAltura = () => {
    const media = characters.reduce((acc, alt)=> acc + Number(alt.height), 0)/characters.length
    console.log(media);
}
const collectByIndex = (index) => {
    const selected = characters[index]
    collectedCharacters.push(selected)
    console.log(collectedCharacters);
}
const collectByName = (characterName) => {
    const selected = characters.find(c=> c.name===characterName)
    collectedCharacters2.push(selected)
    console.log(collectedCharacters2);
}
const removeByName = (characterName) => {
    const selected = characters.filter(c=> c.name !==characterName)
    console.log(selected);
}

const getCharacterFilms = (characterName) => {
    const selected = characters.find(c=> c.name===characterName).films
    console.log(selected);
}

const collectByName2 = (characterName) => {
    
    const selected1 = collectedCharacters2.find(c=> c.name===characterName)
    if (selected1) {
        selected1.amount++
    }else{
        const selected2 = collectedCharacters3.find(c=> c.name===characterName)
        collectedCharacters2.push({...selected2, amount: 1})
    }
    console.log(collectedCharacters2);
}

const mediaDeAltura2 = () => {
    const altura= collectedCharacters2.reduce((acc, alt)=> acc + Number(alt.height), 0)/collectedCharacters2.length
    console.log(altura);
}

const removeByName2 = (characterName) => {
    const filter = collectedCharacters2.filter(n=>  n.name !==characterName)
    console.log(filter);
}
fetch('https://swapi.py4e.com/api/people/')
.then(res => res.json())
.then(data => {
    characters = data.results;
    // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
    console.log(characters);
    getWomansName();
    getAltura()
    sumaDePeso()
    mediaDeAltura()
    collectByIndex([1])
    collectByName("Luke Skywalker")
    removeByName("Luke Skywalker")
    getCharacterFilms("Luke Skywalker")
    collectByName2("Luke Skywalker")
    mediaDeAltura2()
    removeByName2()
});