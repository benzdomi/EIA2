var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Ball extends Abschlussarbeit.Elemente {
        constructor(_x, _y, _color, _bool, _mimik, _drawBool) {
            super(_x, _y, _color, _bool, _mimik, _drawBool);
        }
        update() {
            this.draw();
            this.moveT();
        }
        moveT() {
            if (Abschlussarbeit.pos) {
                if (Abschlussarbeit.schuss == 1) {
                    if (Abschlussarbeit.r == 2 || Abschlussarbeit.r == 4) {
                        this.x -= 4.3;
                        this.y -= 4.75;
                    }
                    else {
                        this.x -= 2.5;
                        this.y -= 2.9;
                    }
                }
                if (Abschlussarbeit.schuss == 2) {
                    if (Abschlussarbeit.r == 1 || Abschlussarbeit.r == 3) {
                        this.x -= 1.75;
                        this.y -= 2;
                    }
                    else {
                        this.x -= 2.5;
                        this.y -= 3.5;
                    }
                }
                if (Abschlussarbeit.schuss == 3) {
                    if (Abschlussarbeit.r == 1) {
                        this.x += 2.4;
                        this.y -= 3;
                    }
                    else {
                        if (Abschlussarbeit.r == 2 || Abschlussarbeit.r == 4) {
                            this.x += 4.1;
                            this.y -= 4.75;
                        }
                        else {
                            this.x += 2.5;
                            this.y -= 3.2;
                        }
                    }
                }
                if (Abschlussarbeit.schuss == 4) {
                    if (Abschlussarbeit.r == 2) {
                        this.x += 2;
                        this.y -= 3;
                    }
                    else {
                        if (Abschlussarbeit.r == 3 || Abschlussarbeit.r == 1) {
                            this.x += 1.5;
                            this.y -= 2;
                        }
                        else {
                            this.x += 2.5;
                            this.y -= 4.5;
                        }
                    }
                }
            }
            else {
                if (Abschlussarbeit.wait == 100) {
                    if (this.x != 975) {
                        this.x = 975;
                        this.y = 838;
                    }
                }
            }
            if (Abschlussarbeit.aus) {
                Abschlussarbeit.wait = 0;
                if (this.y >= Abschlussarbeit.specY) {
                    if (Abschlussarbeit.specX <= 975) {
                        this.x -= (975 - Abschlussarbeit.specX) / 100;
                    }
                    else {
                        this.x += (Abschlussarbeit.specX - 975) / 100;
                    }
                    this.y -= (838 - Abschlussarbeit.specY) / 100;
                }
                else {
                    Abschlussarbeit.aus = false;
                }
            }
            else {
                if (Abschlussarbeit.wait == 25) {
                    this.x = 975;
                    this.y = 838;
                }
                else {
                    Abschlussarbeit.wait++;
                }
            }
        }
        hitbox(_i) {
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fillStyle = "#000000";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.x, this.y, 24, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fillStyle = this.color;
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.Ball = Ball;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Ball.js.map