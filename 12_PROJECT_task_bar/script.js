const add_button=document.querySelector('#add_btn');
const text_input=document.querySelector('#input-task');
const status_main =document.querySelector('.cool-select');
// 3 columns and the way to put the task in different things

add_button.addEventListener('click',()=>{
    var value_of_the_text=text_input.value;
    console.log("ram");
    const current_status = status_main.value;

    var elemet_itis=add_panel(value_of_the_text);
    if(current_status=='_done'){
        const the_done_box=document.querySelector('._done');
        the_done_box.appendChild(elemet_itis);
    }
    if(current_status=='in_progress'){
        const the_done_box=document.querySelector('.in_progress');
        the_done_box.appendChild(elemet_itis);
    }
    if(current_status=='not_started'){
        const the_done_box=document.querySelector('.not_started');
        the_done_box.appendChild(elemet_itis);
    }
    text_input.value = "";
})

// here we can edit the things like which things the added should have and how to add local storage i might add a weather app as well just for fun 

function add_panel(value_of_the_text){
    const newpanel=document.createElement('div');
    if(value_of_the_text.trim()==""){
        alert("enter some text bro");
        return null;
    }
    newpanel.textContent=value_of_the_text;
    newpanel.style.margin = '10px';
    newpanel.style.padding = '10px';
    newpanel.style.display="flex";

    newpanel.style.backgroundColor = 'white';
    newpanel.style.borderRadius = '5px';
    newpanel.style.color = 'black';

    const dropdownHTML = `
        <div>
        <p style="margin: 0; font-family: 'Courier New', monospace;" class="text">${value_of_the_text}</p>
        <input type="text" class="edit-input" value="${text}" style="display: none; width: 100%; background: #1a1a1a; color: white; border: 1px solid #00d4ff; padding: 10px 12px; border-radius: 6px; outline: none; font-family: 'Courier New', monospace; font-size: 16px;">
        </div>
        <button class="edit">edit</button>
        <select class="status_updater">
            <option value="not_started">Not Started</option>
            <option value="in_progress">In Progress</option>
            <option value="_done">Done</option>
        </select>
    `;
    newpanel.innerHTML=dropdownHTML;
    const select=newpanel.querySelector('.status_updater');
    select.addEventListener('change',(e)=>{
        const newstatus=e.target.value;
        const target_col=document.querySelector('.'+newstatus);
        if(target_col){
            target_col.appendChild(newpanel)
        }
    })
    const editor=newpanel.querySelector('.edit');
    const initial_text=document.querySelector('.text');
    editor.addEventListener('click',()=>{
        initial_text.style.display='none';

    })

    return newpanel;
}