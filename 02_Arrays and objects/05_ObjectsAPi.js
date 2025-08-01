const course={
    coursename:"dsa we do",
    price:500,
    rating:4.7,
}

// course.rating=JSON.stringify(course.rating);
//console.log(course);

// we can rename any object by
const {coursename}= course   // called directly
console.log(coursename);
const{rating :rate}=course
console.log(rate);

// if we declare or restructure it we can directly call them 

// {
//     name:`radha`,
//     weigth:60,
//     marks:`lay chan`
//} it is treated as a JSON FILE AS IN OBJECT we have a name 
// but here we dont so all are string
// {
//     `name`:`radha`,
//     `weigth`:`60`,
//     `marks`:`lay chan`
// }// it has no error but just an unwanted error so ignore but syntax is perfect


