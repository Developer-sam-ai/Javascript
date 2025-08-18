const user={
    name:"sam",
    age:20,
    salary:"20 lpa",
    getdetails:function(){
        this.mom="sushma";
        this.dad="very happy";
        console.log(`we have got the user-name ${this.name}`);
        
        return "deatils found";
    }
};
console.log(user.age);
console.log(user.getdetails());
// user.this.getdetails.mom="ghate bai";
user.mom="ghate bai";
console.log(user.mom);
// console.log(user.getdetails(this.mom));

// now we are capable of doing some things and get more out of it

// if we just print this in this environmetn then we get empty 
// brackets {}

// ad node js running environment but if we go with browser 


// constructor function 

// as we know to crete a object of different instance we use new keyword and the things like fethcing date we use new so 
class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
        // return this
    };
}
const u1=new User("radha",17);
const u2=new User("ram",20);
console.log(u1);

console.log(u1.constructor);
