namespace Aufgabe6 {
    export class skier extends MovingShape {
        x: number;
        y: number;
        color: string;
        
        constructor(_x: number, _y : number, _color: string){
            super(_x, _y, _color);
        }
        
        update(): void {
            this.move();
            this.draw();
            }
        
        move(): void{
            if(this.x >= 800 || this.y >= 600){
                this.x = Math.random() * 100 + 10;
                this.y = Math.random() * 200 + 195;
                this.color =  "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                }
            this.x += 1.75;
            this.y += 0.75;
            }
        
        draw(): void {
            
        crc2.fillStyle = this.color;
        crc2.fillRect(this.x, this.y, 5, -20);
        crc2.beginPath();
        crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(this.x - 10, this.y - 5);
        crc2.lineTo(this.x + 15, this.y + 4);
        crc2.stroke();
            }
        }
    }