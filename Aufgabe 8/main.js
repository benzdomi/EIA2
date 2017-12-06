var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", input);
    function input() {
        var anzahl = prompt("Geben Sie eine Zahl zwischen 10 und 100 ein.");
        if (Number.isNaN(parseInt(anzahl)) || parseInt(anzahl) < 10 || parseInt(anzahl) > 100) {
            alert("Eingabe ist falsch");
            input();
        }
        else {
            for (let i = 0; i < parseInt(anzahl); i++) {
                init(Math.random() * window.innerWidth - 50, Math.random() * window.innerHeight - 50, Math.random() * 360);
            }
        }
    }
    function init(_x, _y, _color) {
        let box = document.createElement("div");
        box.style.width = "50px";
        box.style.height = "50px";
        box.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)";
        box.style.left = _x + "px";
        box.style.top = _y + "px";
        document.body.appendChild(box);
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=main.js.map