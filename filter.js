let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

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
}
const collectByName = (characterName) => {
    const selected = characters.find(c=> c.name===characterName)
    collectedCharacters2.push(selected)
}
const removeByName = (characterName) => {
    const selected = characters.filter(c=> c.name !==characterName)
    console.log(selected);
}

const getCharacterFilms = (characterName) => {
    const selected = characters.find(c=> c.name===characterName).map(character=> character.films)
    console.log(selected);
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
    collectByIndex()
    collectByName()
    removeByName()
    getCharacterFilms()
});