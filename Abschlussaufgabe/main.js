/*
Aufgabe: Abschlussarbeit
Name: Dominik Benz
Matrikel: 256152
Datum: 23.02.2018
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Abschlussarbeit;
(function (Abschlussarbeit) {
    let SuperClass = [];
    //let superClass: MovingShape[] = [];
    var canvas;
    var image;
    Abschlussarbeit.scorePC = 0;
    Abschlussarbeit.scorePlayer = 0;
    var i;
    let repeat = 0;
    window.addEventListener("load", main);
    function main() {
        canvas = document.getElementsByTagName("canvas")[0];
        Abschlussarbeit.crc2 = canvas.getContext("2d");
        var kappa = .5522848;
        var ox = (30 / 2) * kappa; // control point offset horizontal
        var oy = (10 / 2) * kappa; // control point offset vertical
        var xe = (975 - 15) + 30; // x-end
        var ye = 860 + 10; // y-end
        var xm = (975 - 15) + 30 / 2; // x-middle
        var ym = 860 + 10 / 2; // y-middle
        //Tribne
        Abschlussarbeit.crc2.fillStyle = "#818181";
        Abschlussarbeit.crc2.fillRect(0, 0, 1950, 300);
        //Linien
        Abschlussarbeit.crc2.fillStyle = "#ffffff";
        Abschlussarbeit.crc2.fillRect(0, 556, 1950, 5);
        Abschlussarbeit.crc2.fillRect(0, 682, 1950, 5);
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.moveTo(975 - 15, ym);
        Abschlussarbeit.crc2.bezierCurveTo(975 - 15, ym - oy, xm - ox, 860, xm, 860);
        Abschlussarbeit.crc2.bezierCurveTo(xm + ox, 860, xe, ym - oy, xe, ym);
        Abschlussarbeit.crc2.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        Abschlussarbeit.crc2.bezierCurveTo(xm - ox, ye, 975 - 15, ym + oy, 975 - 15, ym);
        Abschlussarbeit.crc2.fill();
        let z = 1;
        let left = 18.4;
        for (let k = 0; k < 4; k++) {
            let div = document.createElement("div");
            div.style.width = "30.7vw";
            div.style.height = "10.25vw";
            div.style.position = "absolute";
            div.style.zIndex = "100";
            if (z == 1) {
                div.style.top = "8.35vw";
                div.style.left = left + "vw";
                z++;
            }
            else {
                div.style.top = "18.6vw";
                div.style.left = left + "vw";
                z = 1;
                left += 30.7;
            }
            div.addEventListener("click", function () { tor(k + 1); });
            document.body.appendChild(div);
        }
        for (i = 0; i < 2; i++) {
            let div = document.createElement("div");
            div.style.height = "16.5vw";
            div.style.position = "absolute";
            div.style.zIndex = "100";
            if (i == 0) {
                div.style.width = "17.3vw";
                div.style.left = "0";
            }
            else {
                div.style.width = "19.1vw";
                div.style.right = "0";
            }
            div.style.top = "12.3vw";
            div.addEventListener("click", keinTreffer);
            document.body.appendChild(div);
        }
        //Torwart
        let torwart = new Abschlussarbeit.Personen(975, 275, "#e30613", false, "normal");
        SuperClass.push(torwart);
        let ball = new Abschlussarbeit.Ball(975, 838, "#ffffff", false, "");
        SuperClass.push(ball);
        Abschlussarbeit.name = prompt("Wie heißt du?");
        scoreBoard(Abschlussarbeit.name);
        let zuschauer = prompt("Wie viel Zuschauer willst du? (Zahl 0-150)");
        erstelleZuschauer(zuschauer);
        for (let k = 2; k < SuperClass.length; k++) {
            let s = SuperClass[k];
            s.hitbox(k);
        }
        image = Abschlussarbeit.crc2.getImageData(0, 0, 1950, 893);
        animate();
    }
    Abschlussarbeit.aus = false;
    Abschlussarbeit.armeOben = false;
    function daneben(_i) {
        Abschlussarbeit.specX = SuperClass[_i].x;
        Abschlussarbeit.specY = SuperClass[_i].y;
        Abschlussarbeit.aus = true;
        Abschlussarbeit.scorePC += 1;
        setTimeout(function () {
            SuperClass[_i].mimik = "unhappy";
            document.getElementById("score").innerText = Abschlussarbeit.name + " " + Abschlussarbeit.scorePlayer + ":" + Abschlussarbeit.scorePC + " PC";
            alert("Autsch! So verscheuchst du deine Fans.");
        }, 2500);
    }
    Abschlussarbeit.daneben = daneben;
    Abschlussarbeit.pos = false;
    Abschlussarbeit.treffer = 0;
    function tor(_pos) {
        let s = SuperClass[0];
        Abschlussarbeit.r = Math.floor(Math.random() * 4) + 1;
        Abschlussarbeit.schuss = _pos;
        Abschlussarbeit.pos = true;
        if (Abschlussarbeit.r == _pos) {
            Abschlussarbeit.scorePC += 1;
            //document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC";
            Abschlussarbeit.treffer = 1;
            //setTimeout(function(){document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC"; alert("Gehalten " + name + scorePlayer + ":" + scorePC + " PC");}, 4000);
            Abschlussarbeit.happy = true;
        }
        else {
            Abschlussarbeit.scorePlayer += 1;
            Abschlussarbeit.treffer = 2;
            //document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC";
            //setTimeout(function(){document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC"; alert("Toooor!!! " + name + scorePlayer + ":" + scorePC + " PC");}, 4000);
            Abschlussarbeit.happy = false;
        }
    }
    function keinTreffer(_event) {
        Abschlussarbeit.specX = _event.pageX * (1950 / window.innerWidth);
        Abschlussarbeit.specY = _event.pageY * (838 / window.innerHeight);
        Abschlussarbeit.aus = true;
    }
    function scoreBoard(_name) {
        if (_name == "") {
            alert("Der Name darf nicht leer bleiben!");
            _name = prompt("Wie heißt du?");
            scoreBoard(_name);
        }
        else {
            Abschlussarbeit.name = _name;
            let p = document.createElement("p");
            p.innerText = Abschlussarbeit.name + " " + Abschlussarbeit.scorePlayer + ":" + Abschlussarbeit.scorePC + " PC";
            p.style.position = "absolute";
            p.style.padding = "3px";
            p.style.top = "1vw";
            p.style.left = "1vw";
            p.style.backgroundColor = "red";
            p.style.color = "white";
            p.id = "score";
            document.body.appendChild(p);
        }
    }
    function erstelleZuschauer(_zuschauer) {
        if (parseInt(_zuschauer) < 0 || parseInt(_zuschauer) > 150) {
            alert("Es muss eine Zahl zwischen 0 und 150 sein!");
            _zuschauer = prompt("Wie viel Zuschauer willst du? (Zahl 0-150)");
            erstelleZuschauer(_zuschauer);
        }
        else if (Number.isNaN(parseInt(_zuschauer))) {
            alert("Es muss eine Zahl sein und kein Wort!");
            _zuschauer = prompt("Wie viel Zuschauer willst du? (Zahl 0-150)");
            erstelleZuschauer(_zuschauer);
        }
        else if (parseInt(_zuschauer) >= 4) {
            for (i = 0; i < parseInt(_zuschauer) / 4; i++) {
                let c;
                if (i % 2 == 0) {
                    c = new Abschlussarbeit.Personen((990 + i * 30) + Math.random() * 50, 30, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy");
                }
                else {
                    c = new Abschlussarbeit.Personen((960 - i * 30) + Math.random() * 50, 30, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy");
                }
                SuperClass.push(c);
            }
            for (i = 0; i < parseInt(_zuschauer) / 4; i++) {
                let c;
                if (i % 2 == 0) {
                    c = new Abschlussarbeit.Personen((990 + i * 30) + Math.random() * 50, 80, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy");
                }
                else {
                    c = new Abschlussarbeit.Personen((960 - i * 30) + Math.random() * 50, 80, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy");
                }
                SuperClass.push(c);
            }
            for (i = 0; i < parseInt(_zuschauer) / 4; i++) {
                let c;
                if (i % 2 == 0) {
                    c = new Abschlussarbeit.Personen((990 + i * 30) + Math.random() * 50, 130, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy");
                }
                else {
                    c = new Abschlussarbeit.Personen((960 - i * 30) + Math.random() * 50, 130, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy");
                }
                SuperClass.push(c);
            }
            for (i = 0; i < parseInt(_zuschauer) / 4; i++) {
                let c;
                if (i % 2 == 0) {
                    c = new Abschlussarbeit.Personen((990 + i * 30) + Math.random() * 50, 180, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy");
                }
                else {
                    c = new Abschlussarbeit.Personen((960 - i * 30) + Math.random() * 50, 180, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy");
                }
                SuperClass.push(c);
            }
        }
        else {
            for (let k = 2; k < parseInt(_zuschauer) + 2; k++) {
                let c;
                if (i % 2 == 0) {
                    let x = (990 + k * 30) + Math.random() * 50;
                    c = new Abschlussarbeit.Personen(x, 30, "hsl(" + Math.random() * 360 + ", 100%, 50%)", false, "happy");
                    let div = document.createElement("div");
                    div.style.width = "2.9vw";
                    div.style.height = "2.9vw";
                    div.style.position = "absolute";
                    div.style.left = ((x - 28) / 1950) * 100 + "vw";
                    div.style.top = ((30 - 28) / 1950) * 100 + "vw";
                    div.addEventListener("click", function () { daneben(k); });
                    document.body.appendChild(div);
                }
                else {
                    let x = (960 - k * 30) + Math.random() * 50;
                    c = new Abschlussarbeit.Personen(x, 30, "hsl(" + Math.random() * 360 + ", 100%, 50%)", false, "happy");
                    let div = document.createElement("div");
                    div.style.width = "2.9vw";
                    div.style.height = "2.9vw";
                    div.style.position = "absolute";
                    div.style.left = ((x - 28) / 1950) * 100 + "vw";
                    div.style.top = ((30 - 28) / 1950) * 100 + "vw";
                    div.addEventListener("click", function () { daneben(k); });
                    document.body.appendChild(div);
                }
                SuperClass.push(c);
            }
        }
    }
    function animate() {
        Abschlussarbeit.crc2.clearRect(0, 0, 1950, 893);
        Abschlussarbeit.crc2.putImageData(image, 0, 0);
        for (i = 2; i < SuperClass.length; i++) {
            let s = SuperClass[i];
            s.draw();
        }
        //Wand
        Abschlussarbeit.crc2.fillStyle = "#dadada";
        Abschlussarbeit.crc2.fillRect(0, 241, 1950, 160);
        //Tor
        Abschlussarbeit.crc2.fillStyle = "#ffffff";
        Abschlussarbeit.crc2.fillRect(337, 141, 22, 415);
        Abschlussarbeit.crc2.fillRect(1555, 141, 22, 415);
        Abschlussarbeit.crc2.fillRect(337, 141, 1230, 22);
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.moveTo(337, 556);
        Abschlussarbeit.crc2.lineTo(380, 500);
        Abschlussarbeit.crc2.lineTo(1530, 500);
        Abschlussarbeit.crc2.lineTo(1577, 556);
        Abschlussarbeit.crc2.lineTo(1555, 556);
        Abschlussarbeit.crc2.lineTo(1520, 515);
        Abschlussarbeit.crc2.lineTo(387, 515);
        Abschlussarbeit.crc2.lineTo(355, 556);
        Abschlussarbeit.crc2.closePath();
        Abschlussarbeit.crc2.fill();
        //Netz
        for (let i = 0; i < 13; i++) {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.moveTo(337, 230 + i * 25);
            Abschlussarbeit.crc2.lineTo(380, 174 + i * 25);
            Abschlussarbeit.crc2.lineTo(1530, 174 + i * 25);
            Abschlussarbeit.crc2.lineTo(1577, 230 + i * 25);
            Abschlussarbeit.crc2.lineTo(1574, 230 + i * 25);
            Abschlussarbeit.crc2.lineTo(1528, 177 + i * 25);
            Abschlussarbeit.crc2.lineTo(382, 177 + i * 25);
            Abschlussarbeit.crc2.lineTo(340, 230 + i * 25);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fill();
        }
        for (i = 0; i < 47; i++) {
            if (i == 0) {
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.moveTo(363, 150);
                Abschlussarbeit.crc2.lineTo(363, 540);
                Abschlussarbeit.crc2.lineTo(366, 540);
                Abschlussarbeit.crc2.lineTo(366, 150);
                Abschlussarbeit.crc2.closePath();
                Abschlussarbeit.crc2.fill();
            }
            if (i == 46) {
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.moveTo(1543, 150);
                Abschlussarbeit.crc2.lineTo(1543, 540);
                Abschlussarbeit.crc2.lineTo(1546, 540);
                Abschlussarbeit.crc2.lineTo(1546, 150);
                Abschlussarbeit.crc2.closePath();
                Abschlussarbeit.crc2.fill();
            }
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.moveTo(378 + i * 25, 150);
            Abschlussarbeit.crc2.lineTo(378 + i * 25, 510);
            Abschlussarbeit.crc2.lineTo(381 + i * 25, 510);
            Abschlussarbeit.crc2.lineTo(381 + i * 25, 150);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fill();
        }
        SuperClass[0].update();
        SuperClass[1].update();
        window.setTimeout(animate, 20);
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map