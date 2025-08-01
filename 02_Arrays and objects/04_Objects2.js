const obj3=new Object();
obj3.name='sam';
obj3.rollno=45;
obj3.chaddicompany="macho";
// console.log(obj3);

// Object.freeze(obj3); 

const hellno={
    name:{
        firstname:`sam`,
        secondname:`suryakant`,
        lastname:`ghate`
    },
    rollno:1152,
    email:"sam.dev@gmail.com"
}
// console.log(hellno);
// console.log(hellno['name']['firstname']);
// we use a question mark when if name do not exist 
// console.log(hellno.name?.firstname);
// try and error sarkha
// console.log(hellno)

// TO CALCULATE LENGTH OF THE OBJECT

// const lent=Object.keys(obj3).length;
// console.log(lent);

// combining objects 

let O1={
    brandu:'audi', // same name will be replaced
    type:'convertible',
}
let O2={
    brand:'bmw',
    tyre:4
}

const O3=Object.assign({},O1,O2);
// it is  a good practise to give an empty bracket always as if 
// we have more than one to assign then its good
// to make the target and assigned value 
// or all values will go to O1 here


// console.log(O1); // it will return things it wil not make changes in any object
//console.log(O3);


// remember the spread method 

const O31={...O1,...O2};
console.log(O31);


// when we get things from database
let data1=[
    {
        id:1, name:'ahuj'
    },
    {
        id:2,name:'bhoja'
    }
]
// console.log(data1);
// console.log(data1[1].name);


console.log(Object.keys(O3));
const hello=Object.keys(O3)
console.log(hello);
// it is to check the key
console.log(O2.hasOwnProperty('brand'));
