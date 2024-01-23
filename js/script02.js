function randomRange(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min) + min);
    return
    // console.log(randomNumber);
}

function createBall() {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.left = randomRange(0, 700);
    ball.style.top = randomRange(0, 400);

    const randomNumber = randomRange(0, 100);

    ball.addEventListener("click", clickball);
    return ball;
}

function clearBalls() {
    const balls = document.querySelector(".ball");
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
    const ballId = e.target;
    ballId.style.opacity = 0;
    ballId.removeEventListener("click", clickBall);
    // numberOfClickedBalls = numberOfClickedBalls + 1;
    numberOfClickedBalls++;

    if (numberOfClickedBalls = numberOfBalls) {
        displayGameOverMessage();
    }

}

function displayGameOverMessage() {
    const gameDuration = (new Date() - startTime) / 1000;
    const message = `GAME OVER. You took ${gameDuration} second to click all the balls.`
    document.querySelector(".message").textContent = message;

}

function startGame() {
    clearBalls();
    startTime = new Date();

    for (let i = 0; i < numberOfBalls; i++) {
        const ball createBall();
        document.body.appendChild(ball);
    }
}