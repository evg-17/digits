

// Execute when the DOM is fully loaded
$(document).ready(function() {


    // Find <canvas> element
    var canvas = document.getElementById("myCanvas");

    // Add the getContext() object for drawing on the canvas
    const context = canvas.getContext("2d");

    // Set the flag to draw or not draw on the canvas
    var isDrawing = false;

    // This function returns the mouse's coordinates
    function getCoord(canvas, event){
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    // When the mouse is up drawing is not possible
    context.canvas.addEventListener('mouseup', function() {
        isDrawing = false;
    });

    // When the mouse is down drawing is possible, and the mouse's coordinates are tracked
    context.canvas.addEventListener('mousedown', function(event) {
        isDrawing = true;
        var mouseCoord = getCoord(canvas, event);
        context.moveTo(mouseCoord.x, mouseCoord.y);
    });

    // Control the result of mouse's movement on the canvas:
    // where line is displayed, parameters of the line
    context.canvas.addEventListener('mousemove', function(event) {
        if(isDrawing){
            var mouseCoord = getCoord(canvas, event);
            context.lineWidth = 15;
            context.strokeStyle = "black";
            context.lineTo(mouseCoord.x, mouseCoord.y);
            context.stroke();
        }
    });

    $('#predict').click(function() {
        predictDigit();
    });

    $('#clear').click(function() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.beginPath();
        document.getElementById("digit").innerHTML = "";
    });

});

