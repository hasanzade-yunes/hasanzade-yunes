//variable
const register = document.querySelector('#register');
const select = document.querySelector('#select');
const form = document.querySelector('form');
const click = document.querySelector('.content');
const toggle = document.querySelector('.toggle');
const togglePasswordd = document.querySelector('.togglePassword')
const  lable3 = document.querySelector('.lable3');
const  lable4 = document.querySelector('.lable4');
const inputFour = document.querySelector('.input-4')
const inputFive = document.querySelector('.input-5')







// eventListener
eventListener()
function eventListener(){
    form.addEventListener('submit', fieldValidate)
}



//function


function fieldValidate(event){
    
    const password = document.getElementById('password');
    const passerror = document.getElementById('passerror');
    const passwords = document.getElementById('passwords');
    const passerrors = document.getElementById('passerrors');
    
    passerror.textContent = '';
    passerrors.textContent = '';
    
    
    if(password.value.length < 6 || password.value.length > 20){
        passerror.textContent = 'کلمه عبور باید بین 6 تا 20 کاراکتر باشد.';
        inputFour.style.borderBottom = '1px solid red'
        inputFour.style.marginTop = '10px'
        passerror.style.marginRight = '100px';
        event.preventDefault();
    }
    
    if(passwords.value != password.value){
        passerrors.textContent = 'تکرار کلمه عبور با کلمه عبور مطابقت ندارد.';
        inputFive.style.borderBottom = '1px solid red'
        inputFive.style.marginTop = '10px'
        passerrors.style.marginRight = '100px';
        event.preventDefault();
    }
    
   
}


function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        toggle.classList.add('hide');
    }else{
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}

function showPassword(){
    if(passwords.type === 'password'){
        passwords.setAttribute('type', 'text');
        togglePasswordd.classList.add('hide');
    }else{
        passwords.setAttribute('type', 'password');
        togglePasswordd.classList.remove('hide');
    }
}





