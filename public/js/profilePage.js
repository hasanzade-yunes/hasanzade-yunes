//////////////////////////////////variable

const flex = document.querySelector('.flex')
const add = document.querySelector('#adds');
const address = document.querySelector('#address');
const closeTab = document.querySelector('#closeTab');
const dataPeyment = document.querySelector('#dataPayments');
const virayeshOne = document.querySelector('#virayeshone');
const zakhire = document.querySelector('#zakhireone')
const virayeshTow = document.getElementById('virayeshtow');
const zakhireTow = document.querySelector('#zikhireTow');
const virayeshThree = document.querySelector('#virayeshThree')
const closeTabZerro = document.querySelector('#closeTabZerro');
const addressZeroo = document.querySelector('#addressZeroo');
const parivateDataHidden = document.querySelector('#parivateDatahidden');
const editData = document.querySelector('#editdata')
const companyData = document.querySelector('#companyData');
const edits = document.querySelector('#edits')
const hiddenCloseOne = document.querySelector('#hiddenCloseOne')
const hiddenCloseTow = document.querySelector('#hiddenCloseTow')
const ersalForm = document.querySelector('#ersalForm')
const submitbtn = document.querySelector('#submitbtn')
const closeIcon = document.querySelector('#closeIcon')
const editSubmit = document.querySelector('#editSubmit')
const lastVirayesh = document.querySelector('#lastVirayesh')
const submitZerro = document.querySelector('#submitZerro')
const zakhireFive = document.querySelector('#zakhireFive')
const zakhireSix = document.querySelector('#zakhireSix')
const show = document.querySelector('#show')
const ali = document.querySelector('.ali')
const showTow = document.querySelector('#showTow')
const reza = document.querySelector('.reza')
const star = document.querySelector('#star')
const straTow = document.querySelector('#starTow')
const straThree = document.querySelector('#strathree')
const straFour = document.querySelector('#straFour')


///////////////////////////////////////////////////////////// eventListener

eventListener()


function eventListener(){
// document.addEventListener('DOMContentLoaded', appInit)
flex.addEventListener('click', personAccount);
add.addEventListener('click', addAddress);
closeTab.addEventListener('click', closeDiv);
closeTabZerro.addEventListener('click', finish)
virayeshOne.addEventListener('click', hiddenPrivate);
zakhire.addEventListener('click', returns);
virayeshTow.addEventListener('click', visibily)
zakhireTow.addEventListener('click', returnTow)
virayeshThree.addEventListener('click', submitPeyment)
hiddenCloseOne.addEventListener('click', finishOne)
hiddenCloseTow.addEventListener('click', finishTow)
closeIcon.addEventListener('click', zakhireForm)
lastVirayesh.addEventListener('click', finishVirayesh)
submitZerro.addEventListener('click', returnValue)
zakhireFive.addEventListener('click', returnValueOne)
zakhireSix.addEventListener('click', lastDiv)
show.addEventListener('click', showDisplay)
showTow.addEventListener('click', showDisplayOne)
star.addEventListener('blur', validateField)
straTow.addEventListener('blur', validateFieldTow)
straThree.addEventListener('blur', validateFieldThree)
straFour.addEventListener('blur', validateFieldFour)

}







///////////////////////////////////////////////////////////////////////function

function validateField(){
    if(star.value == ''){
        star.style.borderBottom = '2px solid red'
        
    }
}

function validateFieldTow(){
    if(straTow.value == ''){
        straTow.style.borderBottom = '2px solid red'
    }
}
function validateFieldThree(){
    if(straThree.value == ''){
        straThree.style.borderBottom = '2px solid red'
    }
}
function validateFieldFour(){
    if(straFour.value == ''){
        straFour.style.borderBottom = '2px solid red'
    }
}



function showDisplay(){
    if(show.checked == true){
        ali.style.display = 'inline-block'
        
    }else{
        ali.style.display = 'none'
        
    }
}


function showDisplayOne(){
    // showTow.checked == 'checked';
    if(showTow.checked == true){
        reza.style.display= 'inline-block'
    }else{
        reza.style.display = 'none'
    }
        
    
}




function personAccount(){
    if(drop.style.display == 'none'){
    
        drop.style.display = 'block'
    }else{
        drop.style.display = 'none';

    }
}

function addAddress(){
    if(add.style.display = 'flex'){
        add.style.display = 'none';
        address.style.display = 'flex'
    }
}

function closeDiv(){
    if(address.style.display = 'block'){
        
        address.style.display = 'none';
        add.style.display = 'flex';
    }else{
        address.style.display = 'none';
        add.classList.add('add')
    }
}





function hiddenPrivate(){
    if(parivateDataHidden.style.display = 'block'){
        parivateDataHidden.style.display = 'none';
        editData.style.display = 'block'
    }
}

function returns(){
    if(editData.style.display = 'block'){
        editData.style.display = 'none';
        parivateDataHidden.style.display = 'flex'
    }
}


function visibily(){
    if(edits.style.display = 'none'){
        edits.style.display = 'block'
        companyData.style.display = 'none'
    }
}


function returnTow(){
    if(edits.style.display = 'block'){
        edits.style.display = 'none';
        companyData.style.display = 'flex'
    }
}

function submitPeyment(){
    if(dataPeyment.style.display = 'flex'){
        dataPeyment.style.display = 'none'
        addressZeroo.style.display = 'flex'
    }
}


function finish(){
    if(addressZeroo.style.display = 'block'){
        addressZeroo.style.display = 'none'
        dataPeyment.style.display = 'flex'
    }
}

function finishOne(){
    if(editData.style.display = 'block'){
        editData.style.display = 'none';
        parivateDataHidden.style.display = 'flex'
    }
}

function finishTow(){
    if(edits.style.display = 'block'){
        edits.style.display = 'none';
        companyData.style.display = 'flex'
    }

}


function finishVirayesh(){
    if(editSubmit.style.display = 'none'){
        editSubmit.style.display = 'block'
        ersalForm.style.display = 'none'
    }
}




function ersal(){
    if(ersalForm.style.display = 'none'){
        ersalForm.style.display = 'block'
        editSubmit.style.display = 'none'
    }
}


function zakhireForm(){
    if(ersalForm.style.display = 'none'){
        ersalForm.style.display = 'block'
        editSubmit.style.display = 'none'
    }
}

function returnValue(){
    if(addressZeroo.style.display = 'block'){
        addressZeroo.style.display = 'none'
        dataPeyment.style.display = 'flex'
    }
}


function returnValueOne(){
    if(ersalForm.style.display = 'none'){
        ersalForm.style.display = 'block'
        editSubmit.style.display = 'none'
    }
}

function lastDiv(){
    if(address.style.display = 'block'){
        
        address.style.display = 'none';
        add.style.display = 'flex';
    }else{
        address.style.display = 'none';
        add.classList.add('add')
    }
}