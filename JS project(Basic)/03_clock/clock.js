const clock=document.querySelector(".clock");

// for(let i=time;i<=Infinity;i++){
//     clock.innerHTML=d1;
// }
// we use the function set interval
setInterval(function(){
let date=new Date();
clock.innerHTML=date.toLocaleTimeString();;
},1000);
