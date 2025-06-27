function one(){
    console.log("one");
    two();
    console.log("three nantar");
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
}
one();
three();
two();