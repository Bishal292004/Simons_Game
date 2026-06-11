let gameSeq = [];
let playerSeq = [];

let level = 0;
let gameStarted = false;
let btnColor = ['red', 'blue', 'green', 'yellow'];

let h2 = document.querySelector("h2");

document.addEventListener('keypress', function(){
    if(gameStarted == false){
        gameStarted = true;
        console.log("Game started.");
        levelUp();
    }
});

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 250);
}

function levelUp(){
    playerSeq= [];
    level++;
    h2.innerText = `Level ${level}`; 
    
    //now select a random button for flash
    let randIdx = Math.floor(Math.random() * 4);
    let randBtnColor = btnColor[randIdx];
    let randBtn = document.querySelector(`.${randBtnColor}`);

    gameSeq.push(randBtnColor);
    console.log(gameSeq);

    flashBtn(randBtn);
}



function btnPress(){
    let btn = this;
    flashBtn(btn);

    let userColor = btn.getAttribute("id");
    playerSeq.push(userColor);
    console.log(playerSeq);

    checkAns(playerSeq.length-1);

}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener('click', btnPress);
}

