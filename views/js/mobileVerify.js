
const hidden = document.querySelector('#hidden')
const click = document.querySelector('.content')
// const startTimer = document.querySelector('#startTimer')
const time = document.getElementById('countDown')
let returnButtom = document.getElementById('returnButtom')
let timeSecond = 60

time.innerHTML = `${timeSecond}`


//eventListener


eventListener()

function eventListener(){
  hidden.addEventListener('click', closeTab)
//   returnButtom.addEventListener('click', count)
}


  

// function count(){
//    const countDown = setInterval(() => {
//             timeSecond--
//             time.innerHTML = `${timeSecond}`

//             if (timeSecond <= 0 || time < 1) {
//                 clearInterval(countDown)
//             }
//             e.preventDefualt(event)

//         },1000)
// }

const countDown = setInterval (()=>{
    timeSecond --;
    time.innerHTML = `${timeSecond}`;

    if(timeSecond <=  0 || time < 1){
        clearInterval(countDown);
    }
},1000)





function closeTab(){

    click.style.display = "none";
}





