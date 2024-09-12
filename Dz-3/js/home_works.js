// дз часть 2

// гмаил

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w{5,30}@gmail.com$/g
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

// дз часть 2

// кубик

const childBlock = document.querySelector('.child_block')
let positionX = 0, positionY = 0


const moveBlock = () => {
    if (positionX <= 440 && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 0)
    } else if(positionY <= 440 && positionX > 440){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 0)
    }else if (positionX >= 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 0)
    }else if (positionY >= 0){
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 0)
    }
}

moveBlock()



// таймер

// дз часть 2

const seconds = document.querySelector('#seconds')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let nullValue = 0
let timer


const buttonAction=() => {
    start.addEventListener( 'click' ,() =>{
        timer = setInterval( ()  =>{
            nullValue++
            seconds.innerHTML=nullValue
        },1000)
        start.disabled=true
    })
    stop.addEventListener('click', () => {
        clearInterval(timer)
        start.disabled=false

    })
    reset.onclick=() =>{
        clearInterval(timer)
        nullValue=0
        seconds.innerHTML=nullValue
        start.disabled=false

    }
}
buttonAction()