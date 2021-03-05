//=================================================================
// Entries
//=================================================================

const data = {
    frontend : 'Oscar',
    backend : 'Isabel',
    design : 'Ana'
}

const entries = Object.entries(data);
console.log(entries);


const values = Object.values(data);
console.log(values)

//=================================================================
// String
//=================================================================

const string = 'hello';

console.log(string.padStart(7, 'HI'))
console.log(string.padEnd(7, 'HI'))

//=================================================================
// Async / await
//=================================================================

const helloAsync = async () => {
    const data = await new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!!");
        }else{
            reject("Ups!!");
        }

    }
    )

    console.log(data);
}
 

helloAsync();