// we can use for each and map functionality
let newaray1=[];
let aray1=[2,3,4,5,6,7,8,9,11,22,34];
let aray23=[2,3,4,5,6,7];
// let func=aray1.forEach((num)=>{
    
//     if(num>3){
//         newaray1.push(num);
//     }
// });

// console.log(newaray1);

// use of map

// let usemap=aray1.map((num1)=>num1+10);
// console.log(usemap);

// chaining the methods

// let twomethods=aray1
//                     .map((num)=>num+10)
//                     .map((num1)=>num1+20)
//                     .filter((num2)=>num2>40);
// console.log(twomethods);

// so they are not replaced but insted return the increased calue by 30

// reduce method

// let sum = aray23.reduce((acc, curr) => acc + curr, 3);
// console.log(sum); // Output: 27

// 🧩 What is acc?
// acc = accumulator

// It stores the result so far.

// Starts from the initialValue you provide.

// 🧩 What is curr?
// curr = current element of the array during that loop.
// .reduce((acc, curr) => ..., initialValue)

// let aray24=[1,56,3];
// let con=aray24.reduce(function(acc,curial){
//     console.log(`we have ${acc} and ${curial}`)
//     return acc+curial},0);
//     // if we dont give initial value to take it will take default as zero 
//     // o rwe have to provide it
// console.log(con);

let courses=[
    {
        course:`js`,
        price:490,
        mentor:`hitesh`
    },
    {
        course:`java`,
        price:420,
        mentor:`hitesh`
    },
    {
        course:`pyhton`,
        price:4900,
        mentor:`butcher`
    },
    {
        course:`c`,
        price:423,
        mentor:`raghav`
    }
] 
let add=courses.reduce((acc,curval)=>{
    return acc+(curval.price-100)
},0)
console.log(add);