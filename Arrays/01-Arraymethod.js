// let myarr=[1,2,3,4,6]; 
// console.log(myarr[1]);
// let my1array=new Array(23,45,54,43,23);
// console.log(my1array);
// console.log(typeof(my1array));

// Array Methods(1)

// 1. push:  it will add at last
// my1array.push(56);
// console.log(my1array);
// my1array.push(56,52,23,78);
// console.log(my1array);
// 2.pop: removes the last value
// my1array.pop();
// console.log(my1array);
//there must be no input for pop justt will remove one value

// 3.unshift 
//my1array.unshift(56); //add
//console.log(my1array);
// will add things to first of the aray
// 4.shift
// my1array.shift(); // removes
// console.log(my1array);


// console.log(my1array.includes(23));
// console.log(my1array.indexOf(23));
// if we have two 23 it will count the first one

// let array2=my1array.join();
// console.log(array2);
// it will change the type of array

//5. slice and splice 

// let array3=my1array.slice(3);
// it will remove first 4 Elements as indexing strat from 0
// we can give a range as wellslice(1,3)
// console.log(array3);

// let array4=my1array.splice(1,3);
// it will include 1 and 3 as well
// console.log(array4);

// diff between slice and splice


// let arr54=(43,434,23,54,7,67,`display`);
// let len=arr54()
// console.log(arr54.length);

// slice operataion ex;

//let array5=Array(`hlep`,34,67,78,32,`hello`,`sam`);
// console.log(array5.slice(0,3));
// it will dive output as [`hlep`,34,67]
// main array mai changes hote hai ya nahi
// console.log(array5); // false main array mai changes nahi ho sakte
// console.log(array5.splice(1,1,7));
// console.log(array5.splice(3,6));
// splice will remove 3 to 6 including 6 and make changes in array5
// where the slice opeation excludes the last digit
// Starts at index 1

// Removes 1 element

// Inserts 7 in its place

// Returns the removed element(s)
// if we get 
// console.log(array5.splice(1,2,7)); it delets two item 
// firstly the item which is at index 1 and secondly the element which will acquire the 
// position of index 1

// console.log(array5);



