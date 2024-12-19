let score = 0;
let killInterval = null;



function startGame() {
    killInterval = setInterval(randomizeMole, 2000);

    let endGame = document.getElementById("btn");

    endGame.textContent = "End Game";

    endGame.onclick = endGameFunction;

}


function endGameFunction() {

    clearInterval(killInterval);
    const block = document.querySelectorAll(".circle");

    block.forEach(circle => {
        circle.style.backgroundColor = "DodgerBlue";
    });

    let startButton = document.getElementById("btn");
    startButton.textContent = "Start Game";

    startButton.onclick = startGame;
}

function randomizeMole() {
    
    const block = document.querySelectorAll(".circle");

    block.forEach(circle => {
        circle.style.backgroundColor = "DodgerBlue";
    });

    const randomIndex = Math.floor(Math.random() * block.length);

    block[randomIndex].style.backgroundColor = "black";
}


function moleClick() {

    const circles = document.querySelectorAll(".circle");


    circles.forEach(circle => {
        circle.addEventListener("click", function () {
            if (this.style.backgroundColor === "black") {
                score++;
                updateScore();
            }
        });
    });
}

function updateScore() {
    const scoreElement = document.querySelector("#score");
    scoreElement.textContent = score; 
}

moleClick();
