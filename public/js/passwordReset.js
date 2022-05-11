// variables

const  form = document.querySelector('form');
const  click = document.querySelector('.content');
const  lable = document.querySelector('.lable');
const  svg = document.querySelector('.jss91')
const inputOne = document.querySelector('.input-1')

      



// eventListeners
eventListeners()
function eventListeners(){
    // app initialization
    form.addEventListener('submit', validate);
    click.addEventListener('mouseover', showButton)
}


//function




function showButton(){
    if(phoneNumber.value != ''){
        lable.style.display = "inline-block"
        svg.style.display = 'none'
        
    }else{
        lable.style.display = "none"
        svg.style.display = 'inline-block'
        
    }   
}






// validating fields of form
function validate(event){

    document.querySelector('.content').style.height = '390px'
        const phoneNumber = document.querySelector('#phoneNumber');
        const phoneError = document.querySelector('#phoneerror');
        

        phoneError.textContent = '';
        

        if(phoneNumber.value.length < 11){
            phoneError.textContent = 'لطفا شماره موبایل معتبر یا ایمیل معتبر وارد نمایید';
            inputOne.style.borderBottom = '1px solid red'
            inputOne.style.marginTop = '10px'
            event.preventDefault();
        }       
}
   





