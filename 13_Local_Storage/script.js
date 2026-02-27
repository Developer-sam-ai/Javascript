const add_button=document.querySelector('.add');
const delete_button=document.querySelector('.delete');
const body=document.querySelector('body');

add_button.addEventListener('click',()=>{
    const new_ele=document.createElement('p');
    new_ele.textContent="radha"
    body.appendChild(new_ele)
    saveditem.push(new_ele.textContent);
    save_to_LocalStorage();
})

delete_button.addEventListener('click',()=>{
    const allParagraphs = document.querySelectorAll('p');

    if (allParagraphs.length > 0) {
        const lastelement = allParagraphs[allParagraphs.length -1];
        
        lastelement.remove();
        saveditem.pop();
        save_to_LocalStorage();
    }
})

const saveditem=JSON.parse(localStorage.getItem('data'))|| [];

function save_to_LocalStorage(){
    localStorage.setItem('data',JSON.stringify(saveditem));
}

function fetch_items(){
    saveditem.forEach((itemtext)=>{
        const newele=document.createElement('p');
        newele.textContent=itemtext;
        body.appendChild(newele);
    });
}

fetch_items();
