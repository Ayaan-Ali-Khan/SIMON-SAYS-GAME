let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn")
let started = false;
let level = 0;
let btns = ["green", "yellow", "red", "blue"];
let st = document.querySelector(".start");

st.addEventListener("click", function(){
    if(started==false){
        console.log("Game started");
        started = true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },300);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIndx = Math.floor(Math.random()*4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}
let highScore = 0;

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#3f405a"
        },300);
        if(level>highScore){
            highScore = level;
        }
        h2.innerHTML = `Game Over! Your score was ${level}<br>HIGH SCORE: ${highScore}`;
        reset();
    }
}

function btnPress(btn){
    btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    userSeq = [];
    gameSeq = [];
    started = false;
    level = 0;
    st.innerText = "RESET";
}
