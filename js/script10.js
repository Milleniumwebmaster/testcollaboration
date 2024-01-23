balls.forEach(function(ball) {
    // Remove the click event listener
    ball.removeEventListener("click", clickBall);
    
    // Remove the ball element from the document body
    document.body.removeChild(ball);
});

balls.forEach(ball => {
    ball.removeEventListener("click", clickBall);
    document.body.removeChild(ball);
});

