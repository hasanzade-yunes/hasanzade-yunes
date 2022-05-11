//variable


const form = document.querySelector('form');
const click = document.querySelector('.content');
const toggle = document.querySelector('.toggle');

const inputOne = document.querySelector('.input-1')







// eventListener
eventListener()
function eventListener(){   
    form.addEventListener('submit', fieldValidate)
}



//function


function showHide(){
    if(fname.type === 'password'){
        fname.setAttribute('type', 'text');
        toggle.classList.add('hide');
    }else{
        fname.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}




function fieldValidate(event){
    
    const fname = document.getElementById('fname');
    const usererror = document.getElementById('usererror');
    
    usererror.textContent = '';
    
    
    if(fname.value.length < 5 || fname.value.length > 15){
        usererror.textContent = 'نام کاربری باید 5 تا 15 کاراکتر باشد';
        inputOne.style.borderBottom = '1px solid red'
        inputOne.style.marginTop = '10px'
        usererror.style.marginRight = '100px';
        event.preventDefault();
    }
}
