var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Elemente {
        constructor(_x, _y, _color, _bool, _mimik) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.bool = _bool;
            this.mimik = _mimik;
        }
        update() {
            this.draw();
            this.moveT();
        }
        hitbox(_i) {
        }
        moveT() {
        }
        draw() {
        }
    }
    Abschlussarbeit.Elemente = Elemente;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Elemente.js.map