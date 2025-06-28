// for of
// array specific loop

// ["","",""];
//we will come through many sichuations that we will have to extract 
// objcet members form an array
// let aray=[{},{},{}]; 

// let ar=[2,5,5,65,76,34];

// for (const num of ar) {
//     console.log(num);
// }
// let lits=[{2:45,4:56},{1:23,2:34}];
// let hello="discmader"
// for (const ar of hello){
//     console.log(ar.toUpperCase().charAt(0).split());
//     it will return 1 ke samne konsi command hai
    
// }

// let disc={34:"2332",12:"3113"}
// for(let fisk in disc){
//     console.log(fisk.replace("34","45"));
//     console.log(fisk);
// }

// Maps

const map=new Map();
map.set(1,"45");
map.set("th","334");
map.set(3,"785");
// console.log(map.get(`th`));
// console.log(map)
// nantar kele le dhartay
// order and uniqueness

// for(const key of map){
//     // console.log(rib.split());
//     console.log(...key);
//     // console.log(key.reverse());
// }

// to destructure the array we use
for(const [hel,val] of map){
    console.log(val,`--`,hel);
    //console.log(hel);
}

obj={
    1:"radha",
    2:"sumit",
    3:"sam",
    4:"dheeray"
};

for(let [ob,value] of obj){
    console.log(ob);
    console.log(value);       // by this method object is not iterrable 
};                            // maps are itterable but objects isnt by this method 
