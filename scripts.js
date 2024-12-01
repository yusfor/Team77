/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0;
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}
// Function to draw a 5-pointed star
function DrawStar(context, size) {
    // Loop 5 times to draw the 5 points of the star
    for (let i = 0; i < 5; i++) {
        moveForward(size, context); // Move forward by the specified size 
        turnRight(144); // Turn 144 degrees to create the star shape
    }
}
// Function to draw a pattern of stars
function DrawStarPattern(context) {
    // Set the starting position to the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    angle = 0.0; // Initial orientation (facing east)
    context.beginPath(); // Begin a new drawing path
    // Loop to draw 10 stars in the pattern
    for (let i = 1; i <= 10; i++) {
        // Set a random color for each star using RGB values
        context.strokeStyle = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`;
        // Draw a star with increasing size (i * 20)
        DrawStar(context, i * 20);
        // Rotate 30 degrees to create a spiral effect
        turnRight(30);
        // Stroke (draw) the current path on the canvas
        context.stroke();
    }
}
