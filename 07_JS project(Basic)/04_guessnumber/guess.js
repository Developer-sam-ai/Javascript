let x=10*Math.random()+1;
let randomno=Math.round(x);

const submit=document.querySelector(".submit");
const input=document.querySelector(".read");
const preguess=document.querySelector(".preguess");
const guessno=document.querySelector(".guessno");

// if we want to add multiple functalities add this to a function and then by adding two event listemers call both of them
let guess=Number(9);
console.log(typeof(guess));
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const intu=parseInt(input.value);
        if(intu==randomno){
        preguess.innerHTML=`it is the correct guess sam its ${intu}`;
        guessno.innerHTML=`sucess sam at guess ${guess}`;
    }
        else{
            let prev=intu;
            input.value="";
            input.focus();
            preguess.textContent=`previous guess: ${prev}`;
            guessno.textContent=`guess remaining: ${guess}`;
            
            if(guess===0){
                preguess.innerHTML=`maximum limit reached`;
                submit.disabled=true;
                input.disabled=true;
                const reset=document.createElement("button");
                reset.textContent=`reset`;
                reset.className=`reset`;                         // we can append the child where we want just need to select the button by queryselcotor and things are done
                document.querySelector("#last").appendChild(reset);
                reset.addEventListener("click",()=>{
                        location.reload();
                })
            }
            guess=guess-1;
            // const value=guess--;
        }
    }
)








