/*
Aufgabe: Aufgabe 3
Name: Dominik Benz
Matrikel: 256152
Datum: 25.10.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Aufgabe3;
(function (Aufgabe3) {
    var canvas;
    var crc2;
    let arrayX = [];
    let arrayY = [];
    let cloudX = [];
    let cloudY = [];
    let skiX = [];
    let skiY = [];
    var image;
    window.addEventListener("load", main);
    function main() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#1e8cfd";
        crc2.fillRect(0, 0, 800, 600);
        //Berge
        crc2.beginPath();
        crc2.moveTo(225, 260);
        crc2.lineTo(425, 80);
        crc2.lineTo(700, 390);
        crc2.lineTo(700, 450);
        crc2.closePath();
        crc2.fillStyle = "#d7d7d7";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(325, 350);
        crc2.lineTo(655, 55);
        crc2.lineTo(800, 217);
        crc2.lineTo(800, 600);
        crc2.closePath();
        crc2.fill();
        //Skipiste
        crc2.beginPath();
        crc2.moveTo(0, 165);
        crc2.lineTo(800, 486);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //Skilift
        crc2.beginPath();
        crc2.moveTo(0, 90);
        crc2.lineTo(800, 390);
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(365, 225);
        crc2.lineTo(360, 245);
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.fillStyle = "#9dcff4";
        crc2.fillRect(325, 245, 55, 50);
        crc2.beginPath();
        crc2.moveTo(325, 245);
        crc2.lineTo(380, 245);
        crc2.lineTo(380, 295);
        crc2.lineTo(325, 295);
        crc2.closePath();
        crc2.stroke();
        for (let i = 0; i < 4; i++) {
            drawTree(Math.random() * 50 + i * 100, Math.random() * 100 + 475);
        }
        for (let i = 0; i < 4; i++) {
            cloudX[i] = Math.random() * 50 + i * 200;
            cloudY[i] = Math.random() * 100 + 0;
        }
        for (let i = 0; i < 800; i++) {
            arrayX[i] = Math.random() * 800 + 0;
            arrayY[i] = Math.random() * 600 + 0;
        }
        for (let i = 0; i < 3; i++) {
            skiX[i] = Math.random() * 50 + 10;
            skiY[i] = Math.random() * 200 + 175;
        }
        image = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function drawTree(x, y) {
        crc2.fillStyle = "#603e1b";
        crc2.fillRect(x, y, 28, 27);
        crc2.beginPath();
        crc2.moveTo(x - 43, y + 5);
        crc2.lineTo(x + 17, y - 95);
        crc2.lineTo(x + 72, y + 8);
        crc2.closePath();
        crc2.fillStyle = "#3a5d25";
        crc2.fill();
    }
    function drawSnow(x, y) {
        crc2.beginPath();
        crc2.arc(x, y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function drawClouds(x, y) {
        crc2.beginPath();
        crc2.arc(x, y + 25, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 25, y, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 50, y + 25, 30, 0, 2 * Math.PI);
        crc2.fill();
    }
    function skifahrer(x, y) {
        crc2.fillStyle = "#000000";
        crc2.fillRect(x, y, 5, -20);
        crc2.beginPath();
        crc2.arc(x + 2.5, y - 20, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(x - 10, y - 5);
        crc2.lineTo(x + 15, y + 4);
        crc2.stroke();
    }
    function animate() {
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(image, 0, 0);
        for (let i = 0; i < skiX.length; i++) {
            if (skiX[i] >= 800 || skiY[i] >= 600) {
                skiX[i] = Math.random() * 50 + 10;
                skiY[i] = Math.random() * 200 + 175;
            }
            skiX[i] += 1.75;
            skiY[i] += 0.75;
            skifahrer(skiX[i], skiY[i]);
        }
        for (let i = 0; i < arrayX.length; i++) {
            if (arrayY[i] >= 600) {
                arrayY[i] = 0;
            }
            arrayY[i] += 1; // andere Bewegungsmuster zu finden
            drawSnow(arrayX[i], arrayY[i]);
        }
        for (let i = 0; i < cloudX.length; i++) {
            if (cloudX[i] >= 800) {
                cloudX[i] = 0;
            }
            cloudX[i] += Math.random() * 0.25 - 0;
            cloudY[i] += 0; // andere Bewegungsmuster zu finden
            drawClouds(cloudX[i], cloudY[i]);
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=skipiste.js.map