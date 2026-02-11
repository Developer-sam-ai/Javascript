const add_button=document.querySelector('#add_btn');
const text_input=document.querySelector('#input-task');
const status_main =document.querySelector('#cool-select');
var value_of_the_text=text_input.values;
// 3 columns and the way to put the task in different things

add_button.addEventListener('click',()=>{
    console.log("ram");
    const current_status = status_main.value;

    var elemet_itis=add_panel(value_of_the_text);
    if(current_status=='done'){
        const the_done_box=document.querySelector('._done');
        the_done_box.appendChild(elemet_itis);
    }
})

function add_panel(value_of_the_text){
    const newpanel=document.createElement('div');
    if(value_of_the_text.trim()==""){
        alert("enter some text bro");
        return null;
    }
    newpanel.textContent=value_of_the_text;
    newpanel.style.margin = '10px';
    newpanel.style.padding = '10px';
    newpanel.style.backgroundColor = 'white';
    newpanel.style.borderRadius = '5px';
    newpanel.style.color = 'black';
    
    return newpanel;
}