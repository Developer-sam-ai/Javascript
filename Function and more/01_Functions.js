// function saymyname(){
//     console.log("hellosam");
//     return ;
// }
// saymyname();

// function hell(times){
//     if(times>0){
//         console.log("hello sam");}
//     hell(times-1);
// }
// hell(6); 

// function addtwo(num1,num2){

//     let first=Number (num1);
//     let second=Number(num2);
//     return first+second;
// }
// console.log(addtwo('34',67));
// console.log(addtwo(3,'a'));
// console.log(addtwo(34,null));
// when we pass values to call a function then it is called argument;
// let cons=addtwo(4,6);
// console.log(cons);
// returning value and printing it are two different concepts

// inputing methods

// function loginuser(username){
//     return `${username} just here`;
// }
// console.log(loginuser(`sam`));
// use of if statement efficietly
// if(!username){
// username true aahe tar print hoil 
// }

function calculatecartprice(...num1){
    let total=0;

    let added=Number(num1);
    total=added+total;
    
    return num1;
}
console.log(calculatecartprice(67,56,56,55));

function inputhere(val1,val2,...num1){
    return num1;
}
console.log(inputhere(34,56,32,13,5,6));
// 34 is in value1 and 56 value 2 and rest i sin num1 array
// [ 67, 56, 56, 55 ]
// [ 32, 13, 5, 6 ]

// const hello={
//     name:"sam",
//     password:4567
// };
// function takeobj(hel){
//     console.log(`my name is ${hel.iname} with ${hel.age}`);
// }
// takeobj({
//     age:89,
//     iname:"draupadi"
// })

// function getarray(aray){
//     console.log(`we have${aray} many inputs ${aray[1]}`);
// }
// getarray([34,45,75,56]);


