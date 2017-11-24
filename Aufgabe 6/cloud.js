var Aufgabe6;
(function (Aufgabe6) {
    class cloud extends Aufgabe6.MovingShape {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x >= 800) {
                this.x = 0;
            }
            this.x += 1;
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y + 25, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 25, this.y, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 50, this.y + 25, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.cloud = cloud;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=cloud.js.map