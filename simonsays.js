let gameseq = [];
let userseq = [];

let started = false;
let level = 0;


let btns = ["red","yellow","green","blue"]; 

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        // console.log("Game Started");
        started = true;
        levelup();
    }
    
    // levelup();
   

})

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    },250);

}

function checkAns(idx) {
    // let idx = level - 1;
    if(gameseq[idx] === userseq[idx]) {
        // console.log("Match");
        if(gameseq.length === userseq.length) {
            setTimeout(levelup,1000);
        }
    }
    else {
        h2.innerHTML = `Game Over. Your Score is <b>${level-1}</b> <br> Press any key to Start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"
        },150);
        reset();
    }
}

function levelup() {
    userseq = [];
level ++;
h2.innerText = `Level ${level}`;
let randIdx = Math.floor(Math.random() * 4);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
btnflash(randBtn);
gameseq.push(randColor);
console.log(gameseq);
}

function btnPress () {
    // console.log("Button was pressed");
    // console.log(this);
    let btn = this;
    btnflash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    // console.log(userseq);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

