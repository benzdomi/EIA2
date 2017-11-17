var Aufgabe5;
(function (Aufgabe5) {
    class snow {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.y >= 600) {
                this.y = 0;
            }
            this.y += 1;
        }
        draw() {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.snow = snow;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=snow.js.map