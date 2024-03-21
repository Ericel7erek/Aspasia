const miPerro ={
     piernas: "si",
     colas: 2,
     amigos: "Yo"
}

console.log(miPerro);

const testObj = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};

// Sólo hay que hacer modificaciones por debajo de esta línea 
const ojos = testObj.ojos;      // Cambiar esta línea
const nombre = testObj.nombre;    // Cambia esta línea

console.log(ojos); // Debería mostrar: 2
console.log(nombre); // Debería mostrar: "Pablo"

const testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = testObj2[playerNumber];   // Cambia esta línea

console.log(player); // Debería mostrar: "Unitas"

const myDog = {
    "nombre": "Coder",
    "piernas": 4,
    "colas": 1,
};

myDog.nombre= "HappyCoder" // Modifica esta línea con el código necesario
console.log(myDog.nombre); // Debería mostrar: "HappyCoder"

function phoneticLookup(val) {
    let result = "";

    // Sólo cambia el código por debajo de esta línea
    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }

    // Sólo cambia el código por encima de esta línea
    return result;
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago

const lookup= {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
    Adams: "Adams: "
}

console.log(lookup.charlie);

const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },
    {
        "artista": "Pitbull",
        "titulo": "WorldWide",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    }
];

console.log(myMusic[0].artista);
console.log(myMusic[0].formatos[0]);

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; // Cambia esta línea
console.log(gloveBoxContents); // Debería valer: "maps"

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list;
console.log(secondTree); // Debería mostrar: ["fir", "pine", "birch"]

let summer = ['June', 'July', 'August'];
let index = summer.indexOf('April')
console.log(index);

const users = [
	{
		"name" : "Paco",
		"isActive" : false,
		"age": 18
	},
	{
		"name" : "Laura",
		"isActive" : false,
		"age": 21
	},
	{
		"name" : "Raquel",
		"isActive" : false,
		"age": 15
	},
	{
		"name" : "Juan",
		"isActive" : true,
		"age": 17
	},
	{
		"name" : "Alberto",
		"isActive" : false,
		"age": 50
	},
	{
		"name" : "Rodolfo",
		"isActive" : true,
		"age":7
	},
];

const choosedUser = users.find(u=> u.name==="Juan").age; // Modifica esta línea para resolver el ejercicio

console.log(choosedUser); // Debería mostrar: 17