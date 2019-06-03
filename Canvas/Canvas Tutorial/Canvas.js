console.log('r/place');

var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(300, 300, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(600, 600, 100, 100);

console.log(canvas);

// Line

// c.beginPath();
// c.moveTo(50, 400);
// c.lineTo(273, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#eeff00";
// c.lineWidth = 5;
// c.stroke();
//
// c.beginPath();
// c.moveTo(600, 600);
// c.lineTo(200, 200);
// c.strokeStyle = "#998877";
// c.lineWidth = 15;
// c.stroke();
//
// c.beginPath();
// c.moveTo(300, 600);
// c.lineTo(600, 600);
// c.strokeStyle = "#a659bc";
// c.lineWidth = 10;
// c.stroke();
//
//
// c.beginPath();
// c.moveTo(300, 300);
// c.lineTo(300, 600);
// c.lineWidth = 5;
// c.stroke();

// Arc

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.lineWidth = 1;
// c.strokeStyle = "blue";
// c.stroke();

// for(var i = 0; i < 20; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.lineWidth = 1;
//     c.strokeStyle = "blue";
//     c.stroke();
// }



var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = Math.random() - 0.5 * 8;
var dy = Math.random() - 0.5 * 8;
var radius = 30;

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "#ea6982";
    c.stroke();

    if ( x + radius > innerWidth || x - radius < 0){
        dx = -dx;
    }
    if ( y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

animate();


