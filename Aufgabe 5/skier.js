var Aufgabe5;
(function (Aufgabe5) {
    class skier {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x >= 800 || this.y >= 600) {
                this.x = Math.random() * 100 + 10;
                this.y = Math.random() * 200 + 195;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            this.x += 1.75;
            this.y += 0.75;
        }
        draw() {
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fillRect(this.x, this.y, 5, -20);
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x - 10, this.y - 5);
            Aufgabe5.crc2.lineTo(this.x + 15, this.y + 4);
            Aufgabe5.crc2.stroke();
        }
    }
    Aufgabe5.skier = skier;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=skier.js.map