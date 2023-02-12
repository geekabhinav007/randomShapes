
var params = {
    fullscreen: true
  };
  var elem = document.body;
  var two = new Two(params).appendTo(elem);
  
  var shapes = ['circle', 'rectangle', 'triangle'];
  var colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'black', 'white'];
  
  function randomInRange(start,end){
    return Math.floor(Math.random() * (end - start + 1) + start);
  }
  
  function getRandomShape() {
    return shapes[randomInRange(0, shapes.length - 1)];
  }
  
  function getRandomColor() {
    return colors[randomInRange(0, colors.length - 1)];
  }
  
  function getRandomSize() {
    return randomInRange(10, 100);
  }
  
  function getRandomPosition() {
    return randomInRange(0, 1800);
  }
  
  
  function getRandomTime() {
    return randomInRange(2000, 5000);
  }
  
  function drawShape() {
    var shape = getRandomShape();
    var color = getRandomColor();
    var size = getRandomSize();
    var x = getRandomPosition();
    var y = getRandomPosition();
    var time = getRandomTime();
  
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
  
    two.update();
  
    setTimeout(drawShape, time);
  }
  
  drawShape();