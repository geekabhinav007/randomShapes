var params = {
  fullscreen: true
};
// Get the <body> element from the document and append a new Two.js instance to it
var elem = document.body;
var two = new Two(params).appendTo(elem);

// An array of possible shapes and colors to choose from
var shapes = ['circle', 'rectangle', 'triangle'];
var colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'black', 'white'];

// Returns a random integer between start and end (inclusive)
function randomInRange(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

// Returns a random shape from the shapes array
function getRandomShape() {
  return shapes[randomInRange(0, shapes.length - 1)];
}

// Returns a random color from the colors array
function getRandomColor() {
  return colors[randomInRange(0, colors.length - 1)];
}

// Returns a random size between 10 and 100
function getRandomSize() {
  return randomInRange(10, 100);
}

// Returns a random position between 0 and 1800
function getRandomPosition() {
  return randomInRange(0, 1800);
}

// Returns a random time between 2000 and 5000 milliseconds
function getRandomTime() {
  return randomInRange(2000, 5000);
}

// Draws a shape on the canvas with a random size, position, color, and shape type
function drawShape() {
  var shape = getRandomShape();
  var color = getRandomColor();
  var size = getRandomSize();
  var x = getRandomPosition();
  var y = getRandomPosition();
  var time = getRandomTime();

  // Create a shape object based on the randomly selected shape
  if (shape === 'circle') {
    var circle = two.makeCircle(x, y, size);
    circle.fill = color;
  } else if (shape === 'rectangle') {
    var rectangle = two.makeRectangle(x, y, size, size);
    rectangle.fill = color;
  } else if (shape === 'triangle') {
    var triangle = two.makePolygon(x, y, size, 3);
    triangle.fill = color;
  }

  // Update the canvas with the new shape
  two.update();

  // Call the drawShape function again after a random amount of time
  setTimeout(drawShape, time);
}

// Call the drawShape function for the first time to start the animation loop
drawShape();
