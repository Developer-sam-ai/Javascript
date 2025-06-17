let score=400;
// here js have inplicitly decided to 
// to define only number or to set a particular datatype

// const num=new Number(300);
// console.log(num);

// const hell=(num.toString());

// console.log(typeof(hell));
// console.log(hell.toString().length);

const othernum=243.94567;
console.log(othernum.toPrecision(3));

// to add commas to a large number we use a string method 
const coma=123413242;
console.log(coma.toLocaleString());

//const gift=(34,57,89);
//console.log(Math.max(gift));

// const he=-1234.34;
// console.log(Math.abs(he));
// console.log(Math.round(3.4));
// console.log(Math.floor(3.6));
// console.log(Math.ceil(3.4));

console.log(Math.random()*10+1);
// to avoid case of 0.023
// we add plus one

// f

// so by adding 1 we will get values between 1 to 9
// for absolute values we add a floor to it 
// if it generates 9 we get 10

// for(i=0;i,i<5;i++){
//     console.log(Math.round(Math.random()*10+1));
// }

//if we want to define a range ie between 20 to 30 ;

let min=20;
let max=28;
// here we cretaed a number to multiply by ,by an eqn and addded one to avoid 0
// then add min as we will get value between 1 to 9.
for(i=0;i,i<5;i++){
console.log(Math.floor(Math.random()*(max-min+1)+min))
}
