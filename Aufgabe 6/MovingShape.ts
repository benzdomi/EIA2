namespace Aufgabe6 {
    export class MovingShape {
        x: number;
        y: number;
        color: string;
        
        constructor(_x: number, _y : number, _color: string){
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        
        update(): void {
            this.move();
            this.draw();
            }
        
        move(): void{

            }
        
        draw(): void {
            }
        }
    }