



const drop = document.querySelector('#drop')
const flex = document.querySelector('.flex')
const zakhireOne = document.querySelector('#zakhireOne');
const inputCoustom = document.querySelector('.inputCoustom')
const inputCoustomToww = document.querySelector('.inputCoustomTowww')
const zakhireFour = document.querySelector('#zakhireFour')
const zakhireTow = document.querySelector('#zakhireTow')
const lableCoustom = document.querySelector('#lableCoustom')
const lableCoustommm = document.querySelector('.lableCoustommm')
const lableCoustoms = document.querySelector('.lableCoustom')
const lableCoustomCode = document.querySelector('#lableCoustomCode')
const inputCoustomTow = document.querySelector('#pass')
const menu = document.querySelector('.menu')
const clickRespons = document.querySelector('#clickRespons')
const hiddenDiv = document.querySelector('body')
const lableCoustomOne = document.querySelector('#lableCoustomOne')
const zakhireFive = document.querySelector('#zakhireFive')
const inputCoustomTowww = document.querySelector('.inputCoustomTowwwo')






// submitOne.addEventListener('submit', storeFormOne)
zakhireOne.addEventListener('click', formValidateOne)
zakhireTow.addEventListener('click', formValidateThree)
zakhireFour.addEventListener('click', formValidateFour)
zakhireFive.addEventListener('click', formValidateFive)
flex.addEventListener('click', personAccount)
clickRespons.addEventListener('click', responsiveMenu)
hiddenDiv.addEventListener('mousedown', removeDive)


function removeDive(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'none'
    }
}



function responsiveMenu(){
    
    if(menu.style.display == 'none'){
        menu.style.display = 'block'
        
    }else{
        menu.style.display = 'none'

    }
}




function personAccount(){
    if(drop.style.display == 'none'){
    
        drop.style.display = 'block'
    }else{
        drop.style.display = 'none';

    }
}






function formValidateOne(event){
    
    const fname = document.querySelector('#fname');
    const usererror = document.querySelector('#usererror');
    const companyName = document.querySelector('#companyName');
    const companyError = document.querySelector('#companyerror');
    
    
    // inputCoustom.style.marginTop = '2px'

    usererror.textContent = '';
    companyError.textContent = '';
    
    

    if(fname.value == ''){
        
        usererror.textContent = 'لطفا اطلاعات کاربری خود را تکمیل نمایید.';
        inputCoustom.style.borderBottom = '1px solid red'
        zakhireOne.style.marginTop = '15px'
        // companyName.style.marginTop = '-15px'
        lableCoustoms.style.color = 'red'
        // inputCoustom.style.marginTop = '11px'
        event.preventDefault();

    }else if(fname.value != null){
        inputCoustom.style.borderBottom = '1px solid green'
        // inputCoustom.style.marginTop = '10px'
        
        
    }

    if(companyName.value == ''){
        
        companyError.textContent = 'لطفا نام شرکت را  تکمیل نمایید';
        companyName.style.borderBottom = '1px solid red'
        zakhireOne.style.marginTop = '15px'
        lableCoustommm.style.color = 'red'
    }else if(companyName.vlaue != null){
        companyName.style.borderBottom = '1px solid green'
        
    }

}


function formValidateFour(){

    zakhireFour.style.marginTop = '5px'
    // const currentPass = document.querySelector('#currentPass')
    const newPass = document.querySelector('#newpass')
    const newPassError = document.querySelector('#newpasserror')
    const newpassReturn = document.querySelector('#newpassReturn')
    const newpasserrorreturn = document.querySelector('#newpasserrorreturn')
   

    
    newPassError.textContent = '';
    newpasserrorreturn.textContent = '';



    // if(currentPass.value.lenght < 6 || currentPass.value.lenght > 20){
    //     currentPassError.textContent ='لطفا کلمه عبور را درست وارد نمایید.'
    // }



    if(newPass.value.length < 6 || newPass.value.lenght > 20){
        newPassError.textContent = 'کلمه عبور باید بین 6 تا 20 کاراکتر باشد.'
        inputCoustomToww.style.borderBottom = '1px solid red'
    }

    if(newpassReturn.value != newPass.value){
        newpasserrorreturn.textContent = ' تکرار کلمه عبور جدید باید با کلمه عبور جدید برابر باشد.'
        inputCoustomTowww.style.borderBottom = '1px solid red'
    }

}


function formValidateThree(){
    // zakhireTow.style.marginTop = '20px'
    const sazman = document.querySelector('#sazmanName')
    const sazmanerror = document.querySelector('#sazmanerror');
    const eghtesadi = document.querySelector('#codeEghtesadi')
    const code = document.querySelector('#code');
    
    

    sazmanerror.textContent == '';
    code.textContent = '';
    
    if(sazman.value == ''){
        sazmanerror.textContent ='این فیلد ضروری می باشد.'
        sazman.style.borderBottom = '1px solid red'
        lableCoustom.style.color = 'red'
        
    }

    if(eghtesadi.value == ''){
        code.textContent ='این فیلد ضروری می باشد.'
        eghtesadi.style.borderBottom = '1px solid red'
        lableCoustomCode.style.color = 'red'
    }


}


function formValidateFive(){
    const pass = document.querySelector('#pass')
    const passwordReturn = document.querySelector('#passwordReturn')
    zakhireFive.style.marginTop = '5px'

    passwordReturn.textContent == '';

    if(pass.value == ''){
        passwordReturn.textContent ='این فیلد ضروری می باشد.'
        pass.style.borderBottom = '1px solid red'
        lableCoustomOne.style.color = 'red'
        
    }
}