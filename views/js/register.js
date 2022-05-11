//variable
const register = document.querySelector('#register');
const select = document.querySelector('#select');
const form = document.querySelector('form');
const click = document.querySelector('.content');
const toggle = document.querySelector('.toggle');
const togglePasswordd = document.querySelector('.togglePassword')
const  lable = document.querySelector('.lable');
const  lable1 = document.querySelector('.lable1');
const  lable2 = document.querySelector('.lable2');
const  lable3 = document.querySelector('.lable3');
const  lable4 = document.querySelector('.lable4');
const  lable5 = document.querySelector('.lable5');
const company = document.querySelector('#companyName')
const coustom = document.querySelector('.coustom')
const inputOne = document.querySelector('.input-1')
const inputTow = document.querySelector('.input-2')
const inputFour = document.querySelector('.input-4')
const inputFive = document.querySelector('.input-5')






// eventListener
eventListener()
function eventListener(){
    document.addEventListener('DOMContentLoaded', appInit);
    form.addEventListener('submit', fieldValidate)
    click.addEventListener('mouseover', showButton)
    click.addEventListener('mouseover', showLable)

}



//function

function showButton(){
    if(fname.value !='' && email.value != '' && phoneNumber.value != '' && password.value != '' && passwords.value != ''){
        register.disabled = false;
        click.style.height = "750px";
        coustom.style.marginTop = '25px';

    }else{
        register.disabled = true;
    }
}

function appInit(){
    register.disabled = true;

   
    // document.querySelector('#companyName').style.display = 'none';
}





function fieldValidate(event){
    
    const fname = document.getElementById('fname');
    const usererror = document.getElementById('usererror');
    const phoneNumber = document.getElementById('phoneNumber');
    const phoneError = document.getElementById('phoneerror');
    const email = document.getElementById('email');
    // const emailError = document.getElementById('emailerror');
    const password = document.getElementById('password');
    const passerror = document.getElementById('passerror');
    const passwords = document.getElementById('passwords');
    const passerrors = document.getElementById('passerrors');
    

    usererror.textContent = '';
    phoneError.textContent = '';
    // emailError.textContent = '';
    passerror.textContent = '';
    passerrors.textContent = '';


    if(fname.value.length < 5 || fname.value.length > 15){
        usererror.textContent = 'نام کاربری باید 5 تا 15 کاراکتر باشد';
        inputOne.style.borderBottom = '1px solid red'
        inputOne.style.marginTop = '10px'
        event.preventDefault();
    }
    if(phoneNumber.value.length < 11 || phoneNumber.value.length > 11 ){
        console.log(phoneNumber.value)
        phoneError.textContent = 'لطفا یک شماره موبایل معتبر وارد نمایید.';
        inputTow.style.borderBottom = '1px solid red'
        inputTow.style.marginTop = '10px'
        event.preventDefault();
    }


    if(password.value.length < 6 || password.value.length > 20 ){
        passerror.textContent ='کلمه عبور باید بین 6 تا 20 کاراکتر باشد.';
        inputFour.style.borderBottom = '1px solid red'
        inputFour.style.marginTop = '10px'
        event.preventDefault();
    }

    
    
    if(passwords.value != password.value){
        passerrors.textContent ='تکرار کلمه عبور با کلمه عبور مطابقت ندارد.';
        inputFive.style.borderBottom = '1px solid red'
        inputFive.style.marginTop = '10px'
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



function showLable(){

    if(fname.value != ''){
        lable.style.display = "inline-block"
        click.style.height = '650px'
        
    }
    if(phoneNumber.value != ''){
        lable1.style.display = "inline-block"
        // click.style.height = '670px'
        
        
    }
    if(email.value != ''){
        lable2.style.display = "inline-block"
        // click.style.height = '690px'
        
    }
    if(password.value != ''){
        lable3.style.display = "inline-block"
        click.style.height = '690px'
        
    }
    if(passwords.value != ''){
        lable4.style.display = "inline-block"
        // click.style.height = '670px'
        
    }
    
}


