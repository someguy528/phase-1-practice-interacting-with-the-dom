const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
let timerStatus = true
let likeCounter = 0
let timerIncrease = setInterval(()=>counter.innerText = parseInt(counter.innerText)+1,1000);
let likeCounterReset = setInterval(()=>likeCounter=0,1000)
pause.addEventListener('click',(e)=>{
    if (timerStatus === true){
        clearInterval(timerIncrease);
        clearInterval(likeCounterReset);
        timerStatus = false
    }
    else if (timerStatus === false){
        timerIncrease = setInterval(()=>counter.innerText = parseInt(counter.innerText)+1,1000);
        likeCounterReset = setInterval(()=>likeCounter=0,1000);
        timerStatus = true
    }
})

heart.addEventListener('click',(e)=>{
    const likes = document.querySelector(".likes");
    const likeMessage = document.createElement("li");
    function add(){
        likeCounter += 1
    }
    add();
    if (likes.querySelector(`#child-${counter.innerText}`) === null){
        likes.appendChild(likeMessage),
        likeMessage.setAttribute('id', `child-${counter.innerText}`),
        likeMessage.innerText = `${counter.innerText} has been liked ${likeCounter} time`
    }
    else {
        document.querySelector(`#child-${counter.innerText}`).innerText = `${counter.innerText} has been liked ${likeCounter} times`
        return console.log(document.querySelector(`#child-${counter.innerText}`).innerText)
    }
})
