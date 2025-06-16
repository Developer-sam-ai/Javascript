// let value=3;
// let negvalue=-value;
// console.log(negvalue);
// let serum="45";
// let con=parseInt(serum);
// console.log(con);
// console.log(typeof(con));
// let bool=Boolean(serum);
// console.log(typeof(bool));
// console.log(bool);



// prefix and postfix operator
let  a=56;
console.log(a++);
//But here, you are not using it in an expression, so it simply becomes a = 57.
console.log(a);
b=56;
++b;
console.log(b);

// while comparison data type must be same
// comparison

// console.log(null>0);
// console.log(null==0);
// console.log(null<0);
// console.log(null>=0);// they both are true
// console.log(null<=0);//true

// console.log(undefined>=0);


// use of Symbol

let id=Symbol("483");
let dissc=Symbol("483");
console.log(id==dissc);     // we have false here

//  Array;
const heloo=["share",56,"youth"];
//object
let myobj={
    name:"ram",
    age:45,
    count:false
}
// function
let myfunc=function(){
    console.log("hi sam");
}

console.log(typeof(myfunc));
// output function
console.log(typeof(myobj));
//output  object 

all datatype of non primitive is called functions 
and function return is known as object function.
