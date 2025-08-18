// fetch("http://hello.com").then().catch().finally()
// just like the try catch block we learnt  all things in finally 


// creating promise

// const promise1=new promise1();
// VS 6 introduced this to make promise 
// new keyword here is used to create a new instance oof the object not like java


// const promise1=new Promise(function(resolve,reject){
//     // do async task
//     //network call and many more things has async
//     setTimeout(function(){
//         console.log("hogaya kam");
//         resolve();
//     },1000);
// })

// promise1.then(()=>{
//     console.log("promise consumed");
// })// we recive a callbcak and it is connected to resolve

//output
// hogaya kam
// promise comsumed

// 
// const promise2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     },3000);
// });

// promise2
// .then(function(){
//     console.log("maja nahi aaya");
// })
// .catch(()=>{
//     console.log("had bc");
//     // document.body.style.backgroundColor="brown";
// });
// this.reject=function(){
//     document.body.style.backgroundColor="brown";
// }


// chaining the resolve
// const vada=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err=true;
//         if(err){
//             resolve("ram");
//         }
//         else{
//             reject();
//         }
//     },3000);
// });

// let count=0;
// vada
//     .then(function(name){
//         console.log(`our count of ${name} is ${count}`);
//         count=count+34;
//         return name.count;
//         // then chaining zhali donhi pan print hotil 
//     }).then((count)=>{
//             console.log("lay mast lagle bhai aaj tuzhe");
//     })
//     .catch(function(){
//         console.log("we want a gppd dinner now");
//     }).finally(()=>{
//         setTimeout(function(){
//             console.log("finally aala re")
//         },2000);
//     })

    /// handlaing the promise other way 
    // async wait

    // const promise5=new Promise(function(resolve,reject){
    //     setTimeout(()=>{
    //     let error=true;
    //     if(error){
    //         resolve({username:"js",password:"1234"});
    //     }
    //     else{
    //         reject("error aa gaya hai");
    //     }
    // },2000);
    // });
    

    // always handle the error o fthe async awiat in a try catch block 
    // that signififes ki when ever  the thinhs is runned we will get a result but not always true
    // async function consumepromise5(){
    //     try{
    //         const response=await promise5
    //     console.log(response);
    //     }
    //     catch(error){
    //         console.log("hay re hay");
    //     }
    // }
    // consumepromise5()    
    
    // handling API in other fasion
    // async function getuser(){
    //     try{
    //         const response=await fetch("https://api.github.com/users/samesa");
    //         // console.log(typeof(response)); // we are getting a object here 
    //         // console.log(response);
    //         const ch= await response.json();
    //         console.log(ch);
    //     }
    //     catch(error){
    //         console.log("error aaya hai");
    //     }
    // }
    // getuser();


// same code but .then .catch format

    // async function allhere(){
    //     const prom=new Promise((resolve,reject)=>{
    //         const reg=await fetch("https://api.github.com/users/samesa");
    //         // remeber always it is not neccesary to create a promise to tackle them
    //     }
    // )
    // }
    //  just waste and kept for checking my try 

    const respo=fetch("https://api.github.com/users/samesa");
    respo
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("aala re sam");
        console.log(data);
    })
    .catch((error)=>{
        console.log("here we can go with the error again");
    })


