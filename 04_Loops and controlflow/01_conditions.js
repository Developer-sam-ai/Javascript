// login=true;
// if(login){
//     console.log("hello sam");
//     login=false;
// }
// console.log(login);

// <--  it is sign of less than 
// >--    it is sign of greater than
// let x=34;
// if(x>2) console.log("hello1"); // but a bad practice


// in js as
// let callout="D";
// switch(callout.toLowerCase()){
//     case 'd':
//         console.log("hello 1");
//         //break;
//     case 'D':
//         console.log("hello 2");
//         break;
//     case "p":
//         console.log("print 3");
//         break;
//     default:
//         console.log("radha radha");
//         break;
// }


// all this will make false
//false,0,-0 // zero and minus zero
//,BigInt 0n,// 0n ko bhi false hi mana jata hai
//"",null
//Nan // not  a number 

//"0" is an truthy values // it will return true
//"false" or 'false' are truthy values it will return true
// " " // if there is a space in it then true
//[] //array true
//{} //true 
//function(){}// is also a true value

// but to check we sont use them we use

// let hello=[];
// if(hello.length===0){
//     console.log("array")
// }
let id={};
if(Object.keys(id)){
    console.log("hello sam");
}

// Nullish coalesencing (??): null undefined
// let val1;
// val1=null ?? 10;
// val1=undefined?? null;   //null
// val1="pillow"?? "radha"; // pillow ;
// let val1= null ?? 7??null;
// it is a nullish operator it will return the right hand value if the first value is undefined or null 
// or will return left 
// console.log(val1);

// ternary operator 
d1=23;
d1>34 ? console.log(true):console.log(false);
