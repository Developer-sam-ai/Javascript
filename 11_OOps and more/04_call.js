// function setusername(name){
//     this.name=name;
//     console.log(`call to ho raha hai`);
    
// }

// function user(name,age,roll){
//     setusername.call(this,name);
//     // we will just hold the refernce of the thing by this method 

//     this.age=age;
//     this.roll=roll;
// }

// const h1=new user("sam","ramhihai@gmail.com",234);
// console.log(h1);


// very imp as we passed our own this and it will take owr this and dont destroy the conrext
// it will reside in th e call stackk and as we know this refers to the global executuion context and 


// class and more

class hello{
    // we can create our constructor and more
    constructor(name,vehicle){
        this.name=name;
        switch (name) {
            case "sam":
                this.placer()
                this.place="ambajogai";
                break;
            
            default:
                this.place="pune";
                break;
        }
        this.vehicole.call(this,vehicle);
    }
    placer(){
        console.log("hi placer executed");
        this.uppercase(this.name);
    }
    vehicole(vehicle){
        console.log(`we can get the best 4 wheeler`);
        this.vehicle=vehicle;
        console.log(this.oldboy());
    }
    oldboy(){
        return `your own progress ${this.name}`;
    }
    uppercase(name){
        console.log(`chnaged name to upper ${this.name.toUpperCase()}`);
        
    }
}

const h1=new hello("sam","car");
console.log(h1);
