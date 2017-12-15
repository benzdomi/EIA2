/*
Aufgabe: Aufgabe 8
Name: Dominik Benz
Matrikel: 256152
Datum: 14.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe8 {
    window.addEventListener("load", input);
function input(): void {
    var anzahl: string = prompt("Geben Sie eine Zahl zwischen 10 und 100 ein.");
    var breite: string = prompt("Geben Sie eine Breite ein.");
    var hohe: string = prompt("Geben Sie eine Höhe ein.");
    if (Number.isNaN(parseInt(anzahl)) || Number.isNaN(parseInt(breite)) || Number.isNaN(parseInt(hohe)) || parseInt(anzahl) < 10 || parseInt(anzahl) > 100) {
        alert("Eingabe ist falsch");
        input();
        }else {
            for ( let i: number = 0; i < parseInt(anzahl); i++) {
                init(Math.random() * window.innerWidth - parseInt(breite), Math.random() * window.innerHeight - parseInt(hohe), Math.random() * 360, parseInt(breite), parseInt(hohe));
                }
        }
    }
    
    function init(_x: number, _y: number, _color: number, _width: number, _height: number): void {

            let box: HTMLDivElement = document.createElement("div");

            
            box.style.width = _width + "px";
            box.style.height = _height + "px";
            box.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)";
            box.style.left = _x + "px";
            box.style.top = _y + "px";
            document.body.appendChild(box);
    }
}