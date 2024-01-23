"use strict";

const numberOfBalls = 10;
let numberOfClickedBalls = 0;
let randomNumbersArray = [];
let gameOver = false;
let startTime;

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createBall() {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.left = randomRange(0, 700) + "px";
    ball.style.top = randomRange(0, 400) + "px";

    const randomNumber = randomRange(1, 100);
    ball.innerText = randomNumber;
    randomNumbersArray.push(randomNumber);

    ball.addEventListener("click", clickBall);
    return ball;
}

function clearBalls() {
    const balls = document.querySelectorAll('.ball');
    balls.forEach(ball => {
        ball.removeEventListener("click", clickBall);
        document.body.removeChild(ball);
    });
    numberOfClickedBalls = 0;
    updateScoreBoard();
}

function updateScoreBoard() {
    document.querySelector(".scoreboard").textContent = numberOfClickedBalls;
}

function clickBall(e) {
    if (gameOver) return; // Do nothing if the game has already ended

    const ball = e.currentTarget;
    const ballId = parseInt(ball.innerText);

    if (ballId % 2 !== 0) {
        ball.removeEventListener("click", clickBall);
        document.body.removeChild(ball);

        const indexToRemove = randomNumbersArray.indexOf(ballId);
        if (indexToRemove !== -1) {
            randomNumbersArray.splice(indexToRemove, 1);
        }

        numberOfClickedBalls++;
        updateScoreBoard();
    }

    const remainingOddNumbers = randomNumbersArray.filter(num => num % 2 !== 0).length;
    if (remainingOddNumbers === 0) {
        displayGameOverMessage();
    }
}

function displayGameOverMessage() {
    const gameDuration = (new Date() - startTime) / 1000;
    const finalMessage = `GAME OVER. No more odd numbers left to click! You took ${gameDuration} seconds to click all the balls.`;
    document.querySelector(".message").textContent = finalMessage;
    clearInterval(intervalId);

    gameOver = true; // Set the gameOver variable to true
}

function startGame() {
    document.querySelector(".message").textContent = "";
    startTime = new Date();
    clearBalls();

    for (let i = 0; i < numberOfBalls; i++) {
        const ball = createBall();
        document.body.appendChild(ball);
    }
}

// Example usage
startGame();
