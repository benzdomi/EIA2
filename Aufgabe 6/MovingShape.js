var Aufgabe6;
(function (Aufgabe6) {
    class MovingShape {
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
        }
        draw() {
        }
    }
    Aufgabe6.MovingShape = MovingShape;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=MovingShape.js.map