// object itteration can be stopped

// can we ovveride methods and more in JS
// we were trying to ovveride the value of PI 
// i.e= Math.PI

// console.log(Math.PI);

// const descrip=Object.getOwnPropertyDescriptor(Math,"PI");
// // class is not a property to describe
// console.log(descrip);

// descrip.writable=true;
// descrip.value=5;
// console.log(descrip);

// class vehicle{
//     constructor(name){
//         this.name=name;
//     }
//     getname=function(){
//         return `thw name is ${this.name}`;
//     }
// }


let Vehicle={
    name:"bugati",
    price:340,
    hell:function(){
        console.log(`we got ${this.price} price of hell`);
        
    }
}
// const d2=Object.getOwnPropertyDescriptor(Vehicle,"name");
// // always remeber that to give the prop name like a string 
// console.log(d2);

// // to change the prop
Object.defineProperty(Vehicle,"name",{
    writable:false,
    enumerable:false
});

// const d3=Object.getOwnPropertyDescriptor(Vehicle,"name");
// console.log(d3);
// thus changed it 


// itterating a object using a for loop

//vehicle object is not itteratable so we use Object.entries
for(let [key,value] of Object.entries(Vehicle)){
    if(typeof value !=="function"){
        console.log(`${key}:${value}`);
    }
    // else{
    //     console.log(`exit`);
        
    // }
}




