let gameSeq = [];
let playerSeq = [];

let level = 0;
let gameStarted = false;
let btnColor = ['red','blue', 'green', 'yellow'];

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
    level++;
    let h2 = document.querySelector("h2");
    h2.innerText = `Level ${level}`; 
    
    //now select a random button for flash
    let randIdx = Math.floor(Math.random() * 4);
    let randBtnColor = btnColor[randIdx];
    let randBtn = document.querySelector(`.${randBtnColor}`);

    flashBtn(randBtn);
}