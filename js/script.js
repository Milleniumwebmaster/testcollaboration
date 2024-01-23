const numberOfBalls = 6;
let numberOfClickedBalls = 0;


function startGame(){
    let i;
    for(i=0; i<numberOfBalls; i++){
        const ball = document.createElement("div");
        ball.className = "ball";
        ball.style.left = randomRange(0,500) + "px";
        ball.style.top = randomRange(0,300) + "px";

         // Generate a random number and set it as the content of the ball
         const randomNumber = randomRange(1, 100); // Adjust the range as needed
         ball.innerText = randomNumber;

        ball.addEventListener("click", clickBall);
        document.body.appendChild(ball);
    }
}


function clickBall(e){
    const ballId =e.target;
    console.log(ballId);
    ballId.style.opacity = 0;
    numberOfClickedBalls++;

    if (numberOfClickedBalls == numberOfBalls) {
        alert("Game OVER");
    }
}


function randomRange(min, max) {
    number = Math.random()*(max-min)+min;
    return Math.round(number);
}