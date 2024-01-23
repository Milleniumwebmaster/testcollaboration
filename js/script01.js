const numberOfBalls = 6;
let numberOfClickedBalls = 0;


function startGame() {
    // Clear existing balls before generating new ones
    clearBalls();
    startTime = new Date();

    let i;
    for (i = 0; i < numberOfBalls; i++) {
        const ball = document.createElement("div");
        ball.className = "ball";
        ball.style.left = randomRange(0, 700) + "px";
        ball.style.top = randomRange(0, 400) + "px";

        // Generate a random number and set it as the content of the ball
        const randomNumber = randomRange(1, 100); // Adjust the range as needed
        ball.innerText = randomNumber;

        ball.addEventListener("click", clickBall);
        document.body.appendChild(ball);
    }
}

function clickBall(e) {
    const ballId = e.target;
    // console.log(ballId);
    ballId.style.opacity = 0;
    ballId.removeEventListener("click", clickBall);
    numberOfClickedBalls++;
    updateScoreBoard();

    if (numberOfClickedBalls == numberOfBalls) {
        // alert("Game OVER");
        let gameDuration = new Date() - startTime;
        let message = `GAME OVER. You took ${gameDuration/1000} seconds to click all the ball.`
        document.querySelector(".message").textContent = message;
    }
}

function randomRange(min, max) {
    number = Math.random() * (max - min) + min;
    return Math.round(number);
}

function clearBalls() {
    const balls = document.querySelectorAll('.ball');
    balls.forEach(ball => {
        ball.removeEventListener("click", clickBall);
        document.body.removeChild(ball);
    });
    numberOfClickedBalls = 0;
    document.querySelector(".scoreboard").textContent = 0;

}

function updateScoreBoard() {
    document.querySelector(".scoreboard").textContent = numberOfClickedBalls;
}


// Example: You can call startGame when a button is clicked
document.getElementById('startButton').addEventListener('click', startGame);
