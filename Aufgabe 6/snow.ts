namespace Aufgabe6 {
    export class snow extends MovingShape {
        x: number;
        y: number;
        color:string;
        
        
        constructor(_x: number, _y : number, _color:string){
            super(_x, _y, _color);
        }
        
        update(): void {
            this.move();
            this.draw();
            }
        
        move(): void{
            if(this.y >= 600){
                this.y = 0;
                }
            this.y += 1;
            }
        
        draw(): void {
        crc2.beginPath();
        crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
            }
        }
    }