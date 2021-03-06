/*
Aufgabe: Aufgabe 1
Name: Dominik Benz
Matrikel: 256152
Datum: 14.10.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Aufgabe1;
(function (Aufgabe1) {
    window.addEventListener("load", main);
    let canvas = document.getElementsByTagName("canvas")[0];
    let crc2 = canvas.getContext("2d");
    function main() {
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
        //Wolken
        crc2.beginPath();
        crc2.arc(75, 115, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(100, 90, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(125, 115, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(280, 90, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(305, 65, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(330, 90, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(485, 115, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(510, 90, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(535, 115, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(680, 90, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(705, 65, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(730, 90, 30, 0, 2 * Math.PI);
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
        //Baum
        crc2.fillStyle = "#603e1b";
        crc2.fillRect(58, 480, 28, 27);
        crc2.beginPath();
        crc2.moveTo(15, 485);
        crc2.lineTo(70, 390);
        crc2.lineTo(125, 485);
        crc2.closePath();
        crc2.fillStyle = "#3a5d25";
        crc2.fill();
        crc2.fillStyle = "#603e1b";
        crc2.fillRect(209, 485, 28, 40);
        crc2.beginPath();
        crc2.moveTo(170, 485);
        crc2.lineTo(223, 390);
        crc2.lineTo(275, 485);
        crc2.closePath();
        crc2.fillStyle = "#3a5d25";
        crc2.fill();
        crc2.fillStyle = "#603e1b";
        crc2.fillRect(28, 550, 28, 27);
        crc2.beginPath();
        crc2.moveTo(0, 525);
        crc2.lineTo(50, 450);
        crc2.lineTo(100, 555);
        crc2.lineTo(0, 555);
        crc2.closePath();
        crc2.fillStyle = "#3a5d25";
        crc2.fill();
        crc2.fillStyle = "#603e1b";
        crc2.fillRect(143, 550, 28, 27);
        crc2.beginPath();
        crc2.moveTo(100, 555);
        crc2.lineTo(160, 455);
        crc2.lineTo(215, 558);
        crc2.closePath();
        crc2.fillStyle = "#3a5d25";
        crc2.fill();
    }
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=skipiste.js.map