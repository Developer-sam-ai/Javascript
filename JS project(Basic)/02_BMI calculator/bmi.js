const form=document.querySelector(".bigbox");
//const weight=document.getElementsByClassName(".enter1").value;
// const height=document.getElementsByClassName(".enter2").value;
//const ans=document.querySelector(".enter3").value;
// const button=document.querySelector("#button");



form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector(".enter2").value);
    const weight=parseInt(document.querySelector(".enter1").value);
    const ans=document.querySelector(".enter3");
/// height!=NaN old tech
    if(height===""|| height<0||isNaN(height)){
        ans.innerHTML=`give a valid input ${height}`
    }
    if(weight===""|| weight<0||isNaN(weight)){
        ans.innerHTML=`give a valid input ${weight}`
    }
    
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.5){
            ans.innerHTML=`your bmi is ${bmi} you are underweight` ;
    }
    if(bmi<=18.5 && bmi<24.9){
            ans.innerHTML=`your bmi is ${bmi} you have Normal weight` ;
    }
    if(bmi<25 && bmi<=29.9){
            ans.innerHTML=`your bmi is ${bmi} you are Overweight` ;
    }
    if(bmi>=30){
        ans.innerHTML=`your bmi is ${bmi} you are highly overweight` ;
    }
}
})



