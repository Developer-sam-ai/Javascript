class user{
    constructor(name){
        this.name=name;
    }
    loginMe(){
        console.log(`the username is ${this.name}`);
        return true;
    }
}
// const u1=new user("samesa");
// console.log(u1.loginMe());


class teacher extends user{
    constructor(name,div,fail){
        super(name);
        this.div=div;
        this.upp.call(this,fail);
    }

    upp(fail){
        this.fail=fail;
        return `we can be the upper ${this.name.toUpperCase()}`;
    }

    insideme(){
        console.log(`you have access here ${this.div}`);
        return this.fail;
        
    }
}
// just remeber the thing and get on the topic quick 

const c1=new teacher("hitesh bhai","JS",false);
// const c2=new teacher("hitesh bhai","JS",false);
console.log(c1);

c1.insideme();
c1.loginMe();
console.log(c1 instanceof user);

// here we tried and accessed both the methods and got far

// as stoping access is imp than giving so to stop the access we use the keyword static 

class gamer{
    constructor(gamename){
        this.gamename=gamename;
    }
    static namer(){
        console.log(`we can play the game ${this.gamename}`);
        
    }
}

const g1=new gamer("valo");
// console.log(g1.namer());
// try{
//     g1.namer();
// }
// catch(error){
//     console.log(`it is static bro `);
    
// }

const p1=new Promise(function(resolve,reject){
    if(g1.namer()){
        resolve();
    }
    else{
        reject();
    }
})
p1.then(function(){
    console.log(`resolved here sam`);
})
.catch(function(){
    console.log(`lets go sam bhai kuch to seekhe`);
    
})

// here we created pormise nad learnt that to call we use .then and .catch and all the function is 
// in the pranthesis of it .00
