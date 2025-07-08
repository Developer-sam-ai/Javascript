const change=document.querySelectorAll(".button");
const body=document.querySelector("body");

    change.forEach(function(button){
        // console.log(lang);
        button.addEventListener('click',function(e){
            console.log(e)
            console.log(e.target);
                    switch(e.target.id){
                        case 'grey':
                    body.style.backgroundColor='grey';
                    break;
                        case 'blue':
                    body.style.backgroundColor='blue';
                    break;
                        case 'red':
                    body.style.backgroundColor='red';
                    break;
                        case 'yellow':
                    body.style.backgroundColor='yellow';
                        break;
                    }
        });
        });


