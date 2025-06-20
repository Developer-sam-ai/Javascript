// we will include pokemon
const firetype=Array(`charizard`,`flareon`,`archanine`,`cynderquiL`);
const grasstype=Array('venasuar','odish',`leafeon`,`torterra`);

// grasstype.push(firetype);
// console.log(grasstype);
// console.log(grasstype.toString());
// console.log(grasstype.length);
//to get the first value in firetype we do
// console.log(grasstype[4][1]);
grasstype.concat(firetype);
const concatinated=grasstype.concat(firetype);
//  grasstype ke last mai fire type ko concatinate kare
// but concatinate will not change grasstype or firetype it will cretae a new variable;

// console.log(concatinated);

// we use spread
// const spread1=[...firetype,...grasstype];
// console.log(spread1);

// method to make the array in array to a single array 
// consider an array

// const array2=Array(12,[34,12,1,12,[23,45,23]],56,`hi`,[23,34,12,98])
// const newarray=array2.flat(Infinity);

// console.log(newarray);

// converting anything to array and other complications
console.log(Array.isArray(`hitesh`));
console.log(Array.from(`samarth`));


// it is an intresting case if it is not able to convert it 
// so it will return an empty array
console.log(Array.from({name:`samesa`}));

let val1=200;
let val2=100;
let val3=500;
console.log(Array.of(val1,val3,val2));
