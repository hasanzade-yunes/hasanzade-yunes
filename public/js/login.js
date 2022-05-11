// variables
const sendBtn = document.querySelector('#sendBtn');
const  form = document.querySelector('form');
const  toggle = document.querySelector('.toggle');
const  click = document.querySelector('.content');
const  lable = document.querySelector('.lable');
const  lables = document.querySelector('.lables');
const  svg = document.querySelector('.jss127')
const inputOne = document.querySelector('.input-1')
const inputTow = document.querySelector('.input-2')
const contentLeft = document.querySelector('.content-left');
      



// eventListeners
eventListeners()
function eventListeners(){
    // app initialization
    document.addEventListener('DOMContentLoaded', appInit)
    form.addEventListener('submit', validate);
    click.addEventListener('mouseover', showButton)
}


//function

function appInit(){
    sendBtn.disabled = true;
}


function showButton(){
    if(phoneNumber.value != ''){
        lable.style.display = "inline-block"
        click.style.height = '480px'
        contentLeft .style.marginTop = '20px'
        // svg.style.display = 'block'
        
    }
        // else{
        //     lable.style.display = "none"
        //     // svg.style.display = 'inline-block'
            
        // }
    if(password.value != ''){
        lables.style.display = "inline-block"
        // svg.style.display = 'none'
    }
   


    if(phoneNumber.value != '' && password.value != ''){
        
        sendBtn.disabled = false;
        sendBtn.style.opacity = '1';
        sendBtn.style.cursor = "pointer";
    }else{
        
        sendBtn.disabled = true;
        sendBtn.style.opacity = '0.7';
        sendBtn.style.cursor = "auto";
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



// validating fields of form
function validate(event){

    document.querySelector('.content').style.height = '390px'
        const phoneNumber = document.querySelector('#phoneNumber');
        const phoneError = document.querySelector('#phoneerror');
        const password = document.querySelector('#password');
        const passError = document.querySelector('#passerror');

        phoneError.textContent = '';
        passError.textContent = '';

        if(phoneNumber.value.length < 11){
            phoneError.textContent = 'لطفا شماره موبایل معتبر یا ایمیل معتبر وارد نمایید';
            inputOne.style.borderBottom = '1px solid red'
            inputOne.style.marginTop = '10px'
            event.preventDefault();
        }
        
        if(password.value.length < 6 || password.value.length > 20){
            passError.textContent ='کلمه‌ی عبور باید 6 تا 20 کاراکتر باشد';
            inputTow.style.borderBottom = '1px solid red'
            inputTow.style.marginTop = '10px'
            click.style.height = '500px';
            event.preventDefault();
        }
        
}
   





