namespace Aufgabe8 {
    window.addEventListener("load", input);
function input(): void {
    var anzahl: string = prompt("Geben Sie eine Zahl zwischen 10 und 100 ein.");
    if (Number.isNaN(parseInt(anzahl)) || parseInt(anzahl) < 10 || parseInt(anzahl) > 100) {
        alert("Eingabe ist falsch");
        input();
        }else {
            for ( let i: number = 0; i < parseInt(anzahl); i++) {
                init(Math.random() * window.innerWidth - 50, Math.random() * window.innerHeight - 50, Math.random() * 360);
                }
        }
    }
    
    function init(_x: number, _y: number, _color: number): void {

            let box: HTMLDivElement = document.createElement("div");

            
            box.style.width = "50px";
            box.style.height = "50px";
            box.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)";
            box.style.left = _x + "px";
            box.style.top = _y + "px";
            document.body.appendChild(box);
    }
}