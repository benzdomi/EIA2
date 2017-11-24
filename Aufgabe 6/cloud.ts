namespace Aufgabe6 {
    export class cloud extends MovingShape {
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
            if(this.x >= 800){
                this.x = 0;
                }
            this.x += 1;
            }
        
        draw(): void {
        crc2.beginPath();
        crc2.arc(this.x,this.y + 25, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(this.x + 25, this.y, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(this.x + 50, this.y + 25, 30, 0, 2 * Math.PI);
        crc2.fill();
            }
        }
    }