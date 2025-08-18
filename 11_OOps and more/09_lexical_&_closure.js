// function init() {
//     var name = "Mozilla"; 
//     function displayName() {
//     // here we access declare a function inside a function

//     console.log(name); 
//     }
//     displayName();
// }
// init();

function has(){
    let username="sam";
}
console.log(username);
// so we dont have access here 

// as we know the functions are cretaed and execution context banta hai par function ke andar function 
// dono function memory share kar rahe hai 

// ! we know it as by instinct 

// ^ important closure example and more

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    //  this is happening as here something new is there 
    // ~ we are returning things and it is working
    
    return displayName;
    // whole lexical scope ja raha hai
    // ? here the thing to notice is 
    // ? if we return anything in  a inner function and outer function exist then not only 
    // *the result is returned the lexical scope as well is also passed to it
}

const myFunc = makeFunc();
myFunc();

