// is function a object or not so the answer is 
// function is a object as well as afunction 
// function newnumber(num){
//     return num*5;
// }
// newnumber.power=45;
// console.log(newnumber(5));
// console.log(newnumber.power);
// console.log(newnumber.prototype);

// as there are n number of functions in a prototype we can insert 
// class User{    
//     constructor(name,score){
//         this.name=name;
//         this.score=score;
//     }
// }
function createuser(name,gut){
    this.name=name
    this.gut=gut
}
createuser.prototype.increment=function f1(){
    this.gut++;  // we are giving like jisne bhi bulaya uski value increase kardo
}

createuser.prototype.fuckname=function fn(){
    this.name="fucker";
    console.log(`we have the name as ${this.name}`);
}
// }
const u1= new createuser("radha",100);
// const u2= new User("sarthak",300);
// 


// as here it doesnt know how to apply the increment things 
// so we have to provide the exact adress or contact

u1.increment()
console.log(u1);

// new object is created :the new keyword initiates the creation of a new object

// prototype is linked the newly created object gets linked to the prototype property of th econsturctor function

// sab cheeze new keyword initiate kelyavar kartay sagla gola karna object madhhe takna nad many more things kartaty
// ani return pan kartay



