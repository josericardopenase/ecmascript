//=================================================================
// Personalice params
//=================================================================

const obj = {
    name : 'pepe',
    edad: 19,
    country : 'es'
}

const {name, ...all} = obj;

console.log(all.edad);