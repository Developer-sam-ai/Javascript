const add_button=document.querySelector('#add_btn');
const text_input=document.querySelector('#input-task');
const status_main =document.querySelector('.cool-select');

const tasks_sel=document.querySelector('.tasks');
const options={day:'numeric',month:'short'};
const today =new Date().toLocaleDateString('en-GB',options);
// today.style.color='red'
// tasks_sel.style
tasks_sel.textContent+=': '+ today;

add_button.addEventListener('click',()=>{
    var value_of_the_text=text_input.value;
    console.log("ram");
    const current_status = status_main.value;

    var elemet_itis=add_panel(value_of_the_text);

    elemet_itis.querySelector('.status_updater').value=current_status;
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


//~ adding local storage

function saveTasks(){
    const tasks=[];
    document.querySelectorAll('.task-card').forEach(card =>{
        const tasktext=card.querySelector('.text').innerText;
        const taskStatus=card.querySelector('.status_updater').value;
        tasks.push({text:tasktext,status:taskStatus});
    })
    localStorage.setItem('Tasks_sam', JSON.stringify(tasks));
}

function loadTasks(){
    const savedData=localStorage.getItem('Tasks_sam');
    if(savedData){
        const tasks=JSON.parse(savedData);
        tasks.forEach(task=>{
            const newCard = add_panel(task.text); 
            newCard.querySelector('.status_updater').value = task.status; 
            const target_col = document.querySelector('.' + task.status);
            if (target_col) {
                target_col.appendChild(newCard);
            }
        })
    }
}
window.addEventListener('beforeunload', () => {
    saveTasks();
});

function add_panel(value_of_the_text){
    const newpanel = document.createElement('div');
    if(value_of_the_text.trim() == ""){
        alert("enter some text bro");
        return null;
    }

    // Give the main panel a class
    newpanel.className = 'task-card';
    const dropdownHTML = `
        <div class="task-text-container">
            <p style="margin: 0; font-family: 'Courier New', monospace;" class="text">${value_of_the_text}</p>
            <input type="text" class="edit-input" value="${value_of_the_text}" style="display: none; width: 100%; background: #1a1a1a; color: white; border: 1px solid #00d4ff; padding: 10px 12px; border-radius: 6px; outline: none; font-family: 'Courier New', monospace; font-size: 16px;">
        </div>
        <button class="Edit">Edit</button>
        <select class="status_updater">
            <option value="not_started">Not Started</option>
            <option value="in_progress">In Progress</option>
            <option value="_done">Done</option>
        </select>
        <button class="Delete" aria-label="Delete text">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
        </button>
    `;
    
    newpanel.innerHTML = dropdownHTML;
    const select=newpanel.querySelector('.status_updater');
    select.addEventListener('change',(e)=>{
        const newstatus=e.target.value;
        const target_col=document.querySelector('.'+newstatus);
        if(target_col){
            target_col.appendChild(newpanel)
        }
    })
    const editor=newpanel.querySelector('.Edit');
    const initial_text=newpanel.querySelector('.text');
    const input_box=newpanel.querySelector('.edit-input');
    const Delete_btn=newpanel.querySelector('.Delete');

    editor.addEventListener('click',()=>{
        if(editor.innerHTML==='Edit'){
        initial_text.style.display='none';
        input_box.style.display='block';
        input_box.focus();

        editor.innerText = 'Save';
            editor.style.color = '#1dd1a1';
            editor.style.borderColor = '#1dd1a1';
        }
        else {
            if (input_box.value.trim() === "") {
                input_box.value = initial_text.innerText; 
            } else {
                initial_text.innerText = input_box.value;
            }
            input_box.style.display = 'none';
            initial_text.style.display = 'block';
            
            editor.innerText = 'Edit';
            editor.style.color = '';
            editor.style.borderColor = '';
        }
    })

    Delete_btn.addEventListener('click',()=>{
        newpanel.remove();
    })

    return newpanel;
}
loadTasks();