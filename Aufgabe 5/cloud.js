var Aufgabe5;
(function (Aufgabe5) {
    class cloud {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
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
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y + 25, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 25, this.y, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 50, this.y + 25, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.cloud = cloud;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=cloud.js.map