// let myname="sam    ";
// console.log(myname.length);
// output  7
// but we want to create our own property true length where we will just call it and will trim things up 
// we want a method 
let my_hero=["thor","spiderman"];
let heroPOwer={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`spidey wave is ${this.thor}`);
    }
}
// injecting functions
Object.prototype.sam=function(){
    console.log(`lets prevent sam to be the member of the grp`);
}
// here we added a property on the object which is the top level 
// hirrarcy all string,array have the power

// but if we give power to array and check if object go tit or not

Array.prototype.samu=function(){
    console.log(`we cannor =acasfihasdfolkj`);
}

Object.prototype.radha=function(){
    console.log(`we are here sam i am for you`);
    
}
heroPOwer.radha();

const Student={
    play:true
}

const study={
    stud:false
}

const gamer={
    makeassgin:'always be true',
    fulltime:false,
    // __proto__:study
}

// here we get the out-put false and get the things done 
// console.log(gamer.stud);
// for inheritance protopal inheritance just remember the name 
// we can make it outside as well  

Student.__proto__ = gamer
console.log(Student.makeassgin);

// newer method 

Object.setPrototypeOf(gamer,study);


// now back to the thing where we want to add the all in one property

Object.prototype.TrueLength=function(){
    // console.log(`${this.name}`);
    // console.log(`the true length is${this.trim().length}`);
    return this.trim().length;
}

let fi="qeqw2    ";
console.log(fi.TrueLength());






// practice test 

// console.log(heroPOwer.samu());    // error 
// as inheritance we cannot give access of array to the object


// function used(name,age){
//     this.name=name;
//     this.age=age;
// }

// used.prototype.leen =function(){
//     console.log(`we are here ${this.age}`);
//     return "hello";
// }
// let u1=new used("sama",23);
// console.log(u1.leen());



