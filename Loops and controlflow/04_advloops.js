// method to get the object and the key 
// const obj={
//     js:`javascrpit`,
//     c:`cee`,
//     py:`pyhton`,
//     java:"java"
// };

// for(const k1 in obj){
    // console.log(k1.split());
    // but here we only got the keys so to get the values of the values we do
    // console.log(obj[k1]);  // always use square bracket here
// }

//array
// if we use for in loop then we will get the keys from zero to 4 here or 

// a1=[2,3,4,`thdc`,`thidf`];
// for(const here in a1){
//     console.log(a1[here]);
//     //  in arrays keys are predefined but in object we can change keys
// }
// things which are not itterable cannot be written in loops

const coding=['ram','raja','sada',`nisha`,`tasmay`,`raman`];
// console.log(coding.join());  // output  ram,raja,sada,nisha,tasmay,raman


// call back function
// because it is a callback it doesnt have a name for the function

// here val is a keyword 
// coding.forEach(function(val){
//         console.log(val);
// });

// just a correction we can give any word as a parameter it will just work fine
// it is inbuit by foreach function
// coding.forEach((valer)=>{
//     console.log(`memeber are ${valer}`);
// });

//coding.forEach(printME);   // here we called the name of the function only 
// it is enough without A  parameter

// function printME(item){
//     console.log(item);

// };

// let me test the object when used in foreach function

// let obj1={
//     1:`hello`,
//     2:`samesa`,
//     3:`radha`,
//     4:`dharya`,
//     5:`ramo`
// };

// object is same as key value pair and both are known as entries
// Object.entries(obj1).forEach(([keys,value])=>{
//     console.log(keys,value);
// });
// // output
// 1 hello
// 2 samesa
// 3 radha
// 4 dharya
// 5 ramo

// Object.keys(obj1).forEach(([keys])=>{
//     console.log(keys);
// });
// if we do not want to use a loop eventually they are calling a loop but in A good manner


// testing our skills 
// on Array

// let ara=[1,`tu`,56,76,123,`hisk`];

// ara.forEach((ela,keys,hel)=>{
//     console.log(keys,ela,hel);
// });
// sucess 

let obj2=[
    {
        1:`youtube`,
        2:`music`,
        3:`radha`
    },
    {
        "one":`print1`,
        "two":`print2`,
        "three":`print3`
    }
];
// obj2.forEach((keys)=>{
     // being a string we cannot access by string write it directly
//         console.log(keys.one);
// });

// we have first variable for first and 2nd object
// 2nd is for key value like 0 and 1
// and third is for the complete array we have


