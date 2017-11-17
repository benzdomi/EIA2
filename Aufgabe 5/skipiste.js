/*
Aufgabe: Aufgabe 5
Name: Dominik Benz
Matrikel: 256152
Datum: 17.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    let skierClass = [];
    let snowClass = [];
    let cloudClass = [];
    var canvas;
    var image;
    window.addEventListener("load", main);
    function main() {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe5.crc2 = canvas.getContext("2d");
        Aufgabe5.crc2.fillStyle = "#1e8cfd";
        Aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //Berge
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(225, 260);
        Aufgabe5.crc2.lineTo(425, 80);
        Aufgabe5.crc2.lineTo(700, 390);
        Aufgabe5.crc2.lineTo(700, 450);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.fillStyle = "#d7d7d7";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(325, 350);
        Aufgabe5.crc2.lineTo(655, 55);
        Aufgabe5.crc2.lineTo(800, 217);
        Aufgabe5.crc2.lineTo(800, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.fill();
        //Skipiste
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 165);
        Aufgabe5.crc2.lineTo(800, 486);
        Aufgabe5.crc2.lineTo(800, 600);
        Aufgabe5.crc2.lineTo(0, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.fillStyle = "#ffffff";
        Aufgabe5.crc2.fill();
        //Skilift
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 90);
        Aufgabe5.crc2.lineTo(800, 390);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#000000";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(365, 225);
        Aufgabe5.crc2.lineTo(360, 245);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#000000";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.fillStyle = "#9dcff4";
        Aufgabe5.crc2.fillRect(325, 245, 55, 50);
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(325, 245);
        Aufgabe5.crc2.lineTo(380, 245);
        Aufgabe5.crc2.lineTo(380, 295);
        Aufgabe5.crc2.lineTo(325, 295);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        for (let i = 0; i < 4; i++) {
            drawTree(Math.random() * 50 + i * 100, Math.random() * 100 + 475);
        }
        for (let i = 0; i < 4; i++) {
            let s = new Aufgabe5.cloud(Math.random() * 50 + i * 200, Math.random() * 100 + 0);
            cloudClass[i] = s;
        }
        for (let i = 0; i < 800; i++) {
            let s = new Aufgabe5.snow(Math.random() * 800 + 0, Math.random() * 600 + 0);
            snowClass[i] = s;
        }
        for (let i = 0; i < 10; i++) {
            let s = new Aufgabe5.skier(Math.random() * 100 + 10, Math.random() * 200 + 195, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            skierClass[i] = s;
        }
        image = Aufgabe5.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function drawTree(x, y) {
        Aufgabe5.crc2.fillStyle = "#603e1b";
        Aufgabe5.crc2.fillRect(x, y, 28, 27);
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(x - 43, y + 5);
        Aufgabe5.crc2.lineTo(x + 17, y - 95);
        Aufgabe5.crc2.lineTo(x + 72, y + 8);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.fillStyle = "#3a5d25";
        Aufgabe5.crc2.fill();
    }
    function animate() {
        Aufgabe5.crc2.clearRect(0, 0, 800, 600);
        Aufgabe5.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < skierClass.length; i++) {
            let s = skierClass[i];
            s.update();
        }
        for (let i = 0; i < snowClass.length; i++) {
            let s = snowClass[i];
            s.update();
        }
        for (let i = 0; i < cloudClass.length; i++) {
            let s = cloudClass[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=skipiste.js.map