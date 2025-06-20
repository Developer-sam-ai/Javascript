//singletons

// Object.create(1,"hello"); 
// from this single tons objects are created

// objects literal

const obj1={
    1:45,
    2:"sam"
};
console.log(typeof(obj1[1]));
console.log(String(obj1[1]));

// console.log(obj1[1].toString());
// console.log(typeof(obj1[1]));

// we want to convert an object we use
    obj1[1]=JSON.stringify(obj1);
    console.log(typeof(obj1[1]));

const user1={
    'name':"sam",
    email:"sam.dev@gmail.com",
    number:9767535672,
    dayactive:{"monday":345,"tuesday":657},
    arr:[23,'rita',67]
}
console.log(user1.email); // if we give ity as dot no need to give string
console.log(user1['email']);
// it will always take it as a string so we need to pass it as a string

// if we give key in double quotes  we cannot access it by double quotes
// as we did it as in name


// using symbol as a key 
// declaring a symbol 
let sym=Symbol(45);
const obj2={
    1:'raja',
    name:'baja',
    [sym]:"helo"
};
console.log(obj2);
console.log(obj2.sym);
// but if we checked a type
// console.log(typeof(obj2.sym));   // string
// to use it as a symbolwe ned to define in square braket
// console.log(typeof(obj2.sym));    // undefined
// console.log(obj2[sym]);

// we can change object by ovverriding it
obj1.name="haggu";
console.log(obj1['name']);

// if we want freeze the object 
Object.freeze(obj2);
// we can frezze whole objects not an instance of it
obj2.name='fisk';
console.log(obj2);


let greeting=function(){
    console.log('hello sam');
}
console.log(greeting());
// we access the function

// we can access an object as well

obj1.greet=function(){
    console.log(`hello sam,${obj2.name}`);
}

console.log(obj1.greet());
console.log(obj1);



