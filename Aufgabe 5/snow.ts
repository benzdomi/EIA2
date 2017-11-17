namespace Aufgabe5 {
    export class snow {
        x: number;
        y: number;

        
        constructor(_x: number, _y : number){
            this.x = _x;
            this.y = _y;
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