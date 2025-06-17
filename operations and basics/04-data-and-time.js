//     let nowdate=new Date();
// console.log(nowdate.toString());
// console.log(nowdate.toDateString());
// console.log(nowdate.toTimeString());
// console.log(nowdate.toJSON());
// console.log(typeof nowdate);


let mydate=new Date(2025,0,0,67,56,45);
// here day 0 is the day before the month as here 0 is for jan but the date is zero which is for one day before the first jan 
// so ans is 
// tue dec 31 2024

// the database will detect day automatically 
console.log(mydate.toString());
//if we pass numbers other than 60 it will automaticlly shift to next day

//if we do it by string then our month starts with 1
let stringdate=new Date("12-05-2007");
//we can get it by indian timestam as well
console.log(stringdate.toDateString());


//my timestamp
let timeeillnow= Date.now();
// it will give a date or a number of timestamp which we initially took
// it i svalue in milisecond;
// we did it to convert it to seconds
// console.log(Math.floor(timeeillnow/1000));
// console.log(stringdate.getTime());

// let date1=new Date(23,6,2026,31,56,54);
// console.log(date1.toString());
// console.log(date1.getMonth());// generally we add one to the provided month
// to avoid confusion.
//  console.log(date1.getDay());

// if we want to get jan,feb from get month we need to constuct an array to get it
//                     ex at notion

// very important function of date ie tolocatestring

let date2=new Date(23,5,2230,13,35,56);
//console.log(date2.toString());

console.log(date2.toLocaleDateString('default', {
    weekday:"short",
    // timeStyle:"long"
    // for local date strign we cannot pass a time variable it 
    // is not in the data base
}));










