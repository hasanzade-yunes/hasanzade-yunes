const modal = document.querySelector('#farzad');
const sajjad = document.querySelector('#sajjad');
const close = document.querySelector('#close');
const drop = document.querySelector('#drop')
const flex = document.querySelector('.flex')


modal.addEventListener('click', showModal)
close.addEventListener('click', removeModal)
flex.addEventListener('click', personAccount)


function showModal(){
    sajjad.style.opacity = '1';
}

function removeModal(){
    sajjad.style.opacity = '0';
}

function personAccount(){
    if(drop.style.display == 'none'){
    
        drop.style.display = 'block'
    }else{
        drop.style.display = 'none';

    }
}