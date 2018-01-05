var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", key);
    let ausgB = "";
    let buchstaben = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    function init() {
        for (let i = 0; i < buchstaben.length; i++) {
            let b = document.createElement("div");
            b.innerText = buchstaben[i];
            b.style.width = "50px";
            b.style.height = "50px";
            b.style.color = "white";
            b.style.backgroundColor = "#b2b2b2";
            b.style.fontSize = "2em";
            b.style.display = "inline";
            b.style.textAlign = "center";
            b.id = buchstaben[i].toUpperCase();
            b.addEventListener("mousedown", click);
            document.body.appendChild(b);
        }
        let box = document.createElement("div");
        box.style.width = "90%";
        box.style.marginLeft = "auto";
        box.style.marginRight = "auto";
        box.style.height = "500px";
        box.style.backgroundColor = "#b2b2b2";
        box.addEventListener("mousedown", position);
        document.body.appendChild(box);
    }
    function click(_event) {
        if (ausgB == "") {
            let b = _event.target;
            b.style.color = "#b2b2b2";
            b.style.backgroundColor = "white";
            ausgB = b.id;
        }
    }
    function key(_event) {
        if (ausgB == "") {
            if (buchstaben.indexOf(_event.key.toUpperCase()) != -1) {
                let b = document.createElement("div");
                b = document.getElementById(_event.key.toUpperCase());
                b.style.color = "#b2b2b2";
                b.style.backgroundColor = "white";
                ausgB = b.id;
            }
        }
    }
    function position(_event) {
        if (ausgB == "")
            return;
        let text = document.createElement("div");
        text.innerText = ausgB;
        text.style.position = "absolute";
        text.style.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        text.style.fontSize = "2em";
        text.style.left = _event.pageX + "px";
        text.style.top = _event.pageY + "px";
        text.addEventListener("mousedown", deleteElement);
        document.body.appendChild(text);
        let toNormal = document.getElementById(ausgB);
        toNormal.style.color = "white";
        toNormal.style.backgroundColor = "#b2b2b2";
        ausgB = "";
    }
    function deleteElement(_event) {
        if (_event.altKey == false) {
            return;
        }
        if (_event.altKey == true) {
            let b = _event.target;
            document.body.removeChild(b);
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Main.js.map