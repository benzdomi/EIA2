namespace Abschlussarbeit {
    export class Ball extends Elemente {

        
        constructor(_x: number, _y: number, _color: string, _bool: boolean, _mimik: string){
            super(_x, _y, _color, _bool, _mimik);
        }
        
update(): void {
            this.draw();
            this.moveT();
            }
        
        moveT(): void{
            if(pos){
                if(schuss==1){
                    if(r==2 || r==4){
                        this.x -= 4.3;
                        this.y -= 4.75;
                        }else{
                this.x -= 2.5;
                this.y -= 2.9;
                        }
                    }
                if(schuss==2){
                    if(r==1 || r==3){
                        this.x -= 1.75;
                        this.y -= 2;
                        }else{
                this.x -= 2.5;
                this.y -= 3.5;
                        }
                    }
                if(schuss==3){
                    if(r== 1){
                        this.x += 2.4;
                this.y -= 3;
                        }else{
                    if(r==2 || r==4){
                        this.x += 4.1;
                        this.y -= 4.75;
                        }else{
                this.x += 2.5;
                this.y -= 3.2;
                        }
                        }
                    }
                if(schuss==4){
                    if(r==2){
                        this.x += 2;
                this.y -= 3;
                        }else{
                    if(r== 3 || r== 1){
                        this.x += 1.5;
                this.y -= 2;
                        }else{
                this.x += 2.5;
                this.y -= 4.5;
                        }
                        }
                    }
                }else{
                if(wait == 100){
                if(this.x != 975){
                    this.x = 975;
                    this.y = 838;
                }
                    }
          }
            
            if(aus){
                wait = 0;
                if(this.y >= specY){
                if(specX <= 975){
                this.x -= (975 - specX) / 100;
                    }else{
                    this.x += (specX - 975) / 100;
                    }
                this.y -= (838 - specY) / 100;
                }else{
                aus = false;
                }
            }else{
                if(wait == 25){
                this.x = 975;
                this.y = 838;
                        }else{
                        wait++;
                        }
                }
                
            }
        
        hitbox(_i:number): void{
            
            }
        
        draw(): void {
        crc2.beginPath();
        crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(this.x, this.y, 24, 0, 2 * Math.PI);
        crc2.fillStyle = this.color;
        crc2.fill();
            }
        }
    }