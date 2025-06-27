// let user={
//     name:"sam",
//     password:456,
//     welcomMessege:function(){
//         `welcome ${this.name} `;
//         console.log(this);
        
//     }
// }
// console.log(user.welcomMessege());
// let aray1=[23,45,`display flex`];

// user.name=`radha`;
// console.log(user.welcomMessege());
// console.log(this);  // refering empty {}

// function This(){
//     console.log(this);
    
//  }
// This();
//  hell kind of things in it inside node environment
// we cant use this keyword inside any function used for only object

// Arrow function

// let arrw=(num1,num2)=>{
//     console.log(num1*num2);
    
//     console.log(`hello sam`);
//     console.log(this);
    
// }
// arrw(5,2);


// let aroe=(num1,num2)=> num1+num2;
// let aro=(num1,num2)=> (num1-num2);
// using parenthesis will return values automatically
// console.log(aroe(2,4));
// console.log(aro(78,2));


// Immediately invoked function expression
// used when we want to avoid or bypass global scope pollution
(function connect(){
    console.log(`database connected`);
    
})();
// semicolon do not forgot
((name)=>{
    console.log(`hello sam ${name}`);
    
})(`hello`)

