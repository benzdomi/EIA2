var Aufgabe6;
(function (Aufgabe6) {
    class snow extends Aufgabe6.MovingShape {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
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
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.snow = snow;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=snow.js.map