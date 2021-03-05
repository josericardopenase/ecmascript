//=================================================================
// Default params
//=================================================================

function newFunction(name, age, country){
    var name = name || 'Pepe';
    var age = age || 19;
    var country = country || "ES";

    console.log(name, age, country)

}

newFunction();
newFunction("RICARDO", 21, "ES");
// es6

function newFunction2(name = 'Pepe', age=19, country='ES'){
    console.log(name, age, country)
}

newFunction2();
newFunction2("RICARDO", 21, "ES");

//=================================================================
// Template literals
//=================================================================

let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)
//es6
epicPhrase = `${hello} ${world}`
console.log(epicPhrase)

//=================================================================
// Multiline
//=================================================================

let lorem = "Ea est tempor magna aute incididunt sunt laboris magna nisi qui. \n"
+ "otra frase nueva";

//es6
let lorem2 = `Otra frase epica que necesitamos
es otra frase epica`

console.log(lorem);
console.log(lorem2);


//=================================================================
// Destructuring
//=================================================================

let person = {
    name : "Pepe",
    age : 19,
    country : 'ES'
}

console.log(person.name, person.age);

//es6
let {name, age, country} = person;

console.log(name, age, country)

//=================================================================
// Arrays
//=================================================================

let team1 = ['messi', 'arbeloa']
let team2 = ['sergio ramos', 'cristiano ronaldo']

//es3
let seleccion2 = ['David', ...team1, ...team2];

console.log(seleccion2);

//=================================================================
// vars, const, lets and funciton scopes
//=================================================================

{
    var globalVar = "global var";
}

{
    let globalLet = "globalet";
    console.log(globalLet)
}

console.log(globalVar);
try{

    console.log(globalLet)
}catch{
    console.log("let tiene block scope ;)")
}

const a = 'b';

try{
    a = 3;
}catch{
    console.log("Las variables declaradas por const no son reasignables :D")

}

//=================================================================
// Arrow functions en funciones expresivas
//=================================================================

const sumar  = (a, b) => console.log(a + b);

sumar(1, 2)

//=================================================================
// Promesas
//=================================================================

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!!");
        }else{
            reject("Ups!!");
        }

    }
    )
}
helloPromise().then(response => console.log(response)).catch(error => console.log(error))

//=================================================================
// Generadores
//=================================================================

function* numeros(){

    let numero = 0;

    while(true){
        yield numero++;
    }

}

const generador = numeros();

console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
