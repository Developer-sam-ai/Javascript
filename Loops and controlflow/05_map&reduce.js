// const facto=function f1(n){
//     return n<2?1:f1(n-1)*n;
// };
// console.log(facto(5));
// factorial fo the number

// const pokemon=['charizard',`blastoise`,`machamp`,`halucha`,`greninja`];
// const try1=pokemon.forEach((user)=>{
//     console.log(user);
// });

// console.log(try1);

//output
// charizard
// blastoise
// machamp
// halucha
// greninja
// undefined

// all in all this do not return anything to let it return we have a different type 
// as it dont return we cannot use it so we use


const nums=[2,3,34,23,56,543,3442,123];

// to apply  a condition we use dot filter method in js
//const val=nums.filter((num)=>num>34)
//console.log(val);

// if we start a scope then we have to write return keyword in paranthesis we do not need
// to write it
// const val1=nums.filter((num)=>{
//     return num>34;
// });
// console.log(val1);
// if we started a scope {} always use keyword


// const newval=[];
// /// very important here 
// const val2= nums.forEach((number)=>{
//     if(number>34){
//         newval.push(number);
//     }
// });
// console.log(newval);


const books=[
    {
        title:"book1",author:"sam",publish:1980
    },
    {
        title:"book2",author:"sgn m",publish:1780
    },
    {
        title:"book12",author:"sgn m",publish:1676
    },
    {
        title:"book3",author:"sayim",publish:1480
    }
] 

let  testfilter=books.filter((names)=>names.author=="sgn m")
let condition=books.filter((autho)=>{return autho.publish>=1300})
console.log(testfilter);
console.log(condition);



