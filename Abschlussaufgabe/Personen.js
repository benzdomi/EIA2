var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Personen extends Abschlussarbeit.Elemente {
        constructor(_x, _y, _color, _bool, _mimik) {
            super(_x, _y, _color, _bool, _mimik);
        }
        update() {
            this.draw();
            this.moveT();
        }
        moveT() {
            if (Abschlussarbeit.pos) {
                Abschlussarbeit.wait = 0;
                if (Abschlussarbeit.r == 1) {
                    if (this.x != 450) {
                        this.x -= 2.5;
                    }
                    else {
                        Abschlussarbeit.pos = false;
                    }
                }
                if (Abschlussarbeit.r == 2) {
                    if (this.x != 650) {
                        this.x -= 2.5;
                    }
                    else {
                        Abschlussarbeit.pos = false;
                    }
                }
                if (Abschlussarbeit.r == 3) {
                    if (this.x != 1450) {
                        this.x += 2.5;
                    }
                    else {
                        Abschlussarbeit.pos = false;
                    }
                }
                if (Abschlussarbeit.r == 4) {
                    if (this.x != 1250) {
                        this.x += 2.5;
                    }
                    else {
                        Abschlussarbeit.pos = false;
                    }
                }
            }
            else {
                if ((Abschlussarbeit.r == 1 || Abschlussarbeit.r == 3) && this.x != 975) {
                    Abschlussarbeit.armeOben = true;
                }
                if (Abschlussarbeit.treffer == 2) {
                    document.getElementById("score").innerText = Abschlussarbeit.name + " " + Abschlussarbeit.scorePlayer + ":" + Abschlussarbeit.scorePC + " PC";
                    alert("Toooor!!! " + Abschlussarbeit.name + " " + Abschlussarbeit.scorePlayer + ":" + Abschlussarbeit.scorePC + " PC");
                    Abschlussarbeit.treffer = 0;
                }
                if (Abschlussarbeit.treffer == 1) {
                    document.getElementById("score").innerText = Abschlussarbeit.name + " " + Abschlussarbeit.scorePlayer + ":" + Abschlussarbeit.scorePC + " PC";
                    alert("Gehalten " + Abschlussarbeit.name + " " + Abschlussarbeit.scorePlayer + ":" + Abschlussarbeit.scorePC + " PC");
                    Abschlussarbeit.treffer = 0;
                }
                if (Abschlussarbeit.wait >= 100) {
                    if (this.x != 975) {
                        Abschlussarbeit.armeOben = false;
                        if (Abschlussarbeit.r == 1 || Abschlussarbeit.r == 2) {
                            this.x += 2.5;
                        }
                        else {
                            this.x -= 2.5;
                        }
                        if (Abschlussarbeit.happy) {
                            this.mimik = "happy";
                        }
                        else {
                            this.mimik = "unhappy";
                        }
                    }
                    else {
                        this.mimik = "normal";
                    }
                }
                else {
                    Abschlussarbeit.wait++;
                }
            }
        }
        hitbox(_i) {
            if (this.bool) {
                let hitbox = document.createElement("div");
                hitbox.style.width = "2.9vw";
                hitbox.style.height = "2.9vw";
                hitbox.style.position = "absolute";
                hitbox.style.left = ((this.x - 28) / 1950) * 100 + "vw";
                hitbox.style.top = ((this.y - 28) / 1950) * 100 + "vw";
                hitbox.addEventListener("click", function () { Abschlussarbeit.daneben(_i); });
                document.body.appendChild(hitbox);
            }
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.x, this.y, 28, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fillStyle = "#f7b284";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.x, this.y + 63, 35, Math.PI, 0);
            Abschlussarbeit.crc2.fillStyle = this.color;
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.fillRect(this.x - 35, this.y + 63, 70, 60);
            if (this.bool == false) {
                Abschlussarbeit.crc2.fillStyle = "#000000";
                Abschlussarbeit.crc2.fillRect(this.x - 35, this.y + 123, 70, 35);
                Abschlussarbeit.crc2.fillRect(this.x - 35, this.y + 158, 28, 30);
                Abschlussarbeit.crc2.fillRect(this.x + 7, this.y + 158, 28, 30);
                Abschlussarbeit.crc2.fillStyle = "#f7b284";
                Abschlussarbeit.crc2.fillRect(this.x - 30, this.y + 188, 20, 25);
                Abschlussarbeit.crc2.fillRect(this.x + 11, this.y + 188, 20, 25);
                Abschlussarbeit.crc2.fillStyle = "#e30613";
                Abschlussarbeit.crc2.fillRect(this.x - 30, this.y + 213, 20, 60);
                Abschlussarbeit.crc2.fillRect(this.x + 11, this.y + 213, 20, 60);
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.fillStyle = "#000000";
                Abschlussarbeit.crc2.arc(this.x - 20, this.y + 273, 13, 0, 2 * Math.PI);
                Abschlussarbeit.crc2.fill();
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.arc(this.x + 20, this.y + 273, 13, 0, 2 * Math.PI);
                Abschlussarbeit.crc2.fill();
                if (Abschlussarbeit.armeOben) {
                    Abschlussarbeit.crc2.fillStyle = this.color;
                    Abschlussarbeit.crc2.beginPath();
                    Abschlussarbeit.crc2.arc(this.x - 35, this.y + 43, 11, 0, Math.PI);
                    Abschlussarbeit.crc2.lineTo(this.x - 46, this.y - 45);
                    Abschlussarbeit.crc2.arc(this.x - 35, this.y - 45, 11, Math.PI, 0);
                    Abschlussarbeit.crc2.fill();
                    Abschlussarbeit.crc2.beginPath();
                    Abschlussarbeit.crc2.arc(this.x + 35, this.y + 43, 11, 0, Math.PI);
                    Abschlussarbeit.crc2.lineTo(this.x + 24, this.y - 45);
                    Abschlussarbeit.crc2.arc(this.x + 35, this.y - 45, 11, Math.PI, 0);
                    Abschlussarbeit.crc2.fill();
                }
                else {
                    Abschlussarbeit.crc2.fillStyle = this.color;
                    Abschlussarbeit.crc2.beginPath();
                    Abschlussarbeit.crc2.arc(this.x - 35, this.y + 43, 12, Math.PI, 0.25 * Math.PI);
                    Abschlussarbeit.crc2.lineTo(this.x - 45, this.y + 100);
                    Abschlussarbeit.crc2.arc(this.x - 60, this.y + 113, 12, 0, 1.25 * Math.PI);
                    Abschlussarbeit.crc2.fill();
                    Abschlussarbeit.crc2.beginPath();
                    Abschlussarbeit.crc2.arc(this.x + 35, this.y + 43, 12, 0.75 * Math.PI, 0);
                    Abschlussarbeit.crc2.lineTo(this.x + 65, this.y + 100);
                    Abschlussarbeit.crc2.arc(this.x + 60, this.y + 113, 12, 1.75 * Math.PI, Math.PI);
                    Abschlussarbeit.crc2.fill();
                }
            }
            else {
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.arc(this.x - 35, this.y + 43, 12, Math.PI, 0.25 * Math.PI);
                Abschlussarbeit.crc2.lineTo(this.x - 45, this.y + 100);
                Abschlussarbeit.crc2.arc(this.x - 60, this.y + 113, 12, 0, 1.25 * Math.PI);
                Abschlussarbeit.crc2.fill();
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.arc(this.x + 35, this.y + 43, 12, 0.75 * Math.PI, 0);
                Abschlussarbeit.crc2.lineTo(this.x + 65, this.y + 100);
                Abschlussarbeit.crc2.arc(this.x + 60, this.y + 113, 12, 1.75 * Math.PI, Math.PI);
                Abschlussarbeit.crc2.fill();
            }
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.x - 10, this.y - 5, 5, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fillStyle = "#000000";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.x + 10, this.y - 5, 5, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fill();
            if (this.mimik == "normal") {
                Abschlussarbeit.crc2.fillRect(this.x - 10, this.y + 10, 20, 3);
            }
            if (this.mimik == "unhappy") {
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.arc(this.x, this.y + 18, 15, Math.PI, 0);
                Abschlussarbeit.crc2.fill();
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.arc(this.x, this.y + 18, 12, Math.PI, 0);
                Abschlussarbeit.crc2.fillStyle = "#f7b284";
                Abschlussarbeit.crc2.fill();
            }
            if (this.mimik == "happy") {
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.arc(this.x, this.y + 8, 15, 0, Math.PI);
                Abschlussarbeit.crc2.fill();
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.arc(this.x, this.y + 8, 12, 0, Math.PI);
                Abschlussarbeit.crc2.fillStyle = "#f7b284";
                Abschlussarbeit.crc2.fill();
            }
        }
    }
    Abschlussarbeit.Personen = Personen;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Personen.js.map