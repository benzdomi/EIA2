namespace Abschlussarbeit {
    export class Elemente {
        x: number;
        y: number;
        color: string;
        bool: boolean;
        mimik: string;

        
        constructor(_x: number, _y : number, _color: string, _bool: boolean, _mimik: string){
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.bool = _bool;
            this.mimik = _mimik;
        }
        
        update(): void {
            this.draw();
            this.moveT();
            }
        
        hitbox(_i:number):void{
            
            }
        
        moveT(): void{

            }
        
        draw(): void {
            }
        }
    }