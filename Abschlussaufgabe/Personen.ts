namespace Abschlussarbeit {
    export class Personen extends Elemente {

        
        constructor(_x: number, _y: number, _color: string, _bool: boolean, _mimik: string){
            super(_x, _y, _color, _bool, _mimik);
        }
        
update(): void {
            this.draw();
            this.moveT();
            }
        
        moveT(): void{
            if(pos){
                wait = 0;
                if(r==1){
                if(this.x != 450){
                this.x -= 2.5;

                    }else{
                    pos = false;
                    }
                    }
                if(r==2){
                if(this.x != 650){
                this.x -= 2.5;

                    }else{
                    pos = false;
                    }
                    }
                if(r==3){
                if(this.x != 1450){
                this.x += 2.5;

                    }else{
                    pos = false;
                    }
                    }
                if(r==4){
                if(this.x != 1250){
                this.x += 2.5;

                    }else{
                    pos = false;
                    }
                    }
                }else{
                if((r== 1 || r==3) && this.x != 975){
                    armeOben = true;
                    }
                if(treffer == 2){
                    document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC"; 
                    alert("Toooor!!! " + name + " " + scorePlayer + ":" + scorePC + " PC");
                    treffer = 0;
                    }
            if(treffer == 1){
                    document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC"; 
                    alert("Gehalten " + name + " " + scorePlayer + ":" + scorePC + " PC");
                treffer = 0;
                    }
                if(wait >= 100){
                    
                if(this.x != 975){
                    armeOben= false;
                    if(r== 1 || r== 2){
                    this.x +=2.5;
                        }else{
                        this.x -=2.5;
                        }
                    if(happy){
                        this.mimik = "happy";
                        }else{
                        this.mimik = "unhappy";
                        }
                    }else{
                    this.mimik = "normal";
                    }
                }else{
                    wait++;
                    }
                }
          }
        
        hitbox(_i:number): void{
            if(this.bool){
                let hitbox: HTMLDivElement = document.createElement("div");
                hitbox.style.width = "2.9vw";
        hitbox.style.height = "2.9vw";
        hitbox.style.position = "absolute";
                hitbox.style.left = ((this.x-28)/1950)*100 + "vw";
                hitbox.style.top = ((this.y-28)/1950)*100 + "vw";
                hitbox.addEventListener("click", function(){daneben(_i);});
        document.body.appendChild(hitbox);
                }
            }
        
        draw(): void {
        crc2.beginPath();
        crc2.arc(this.x, this.y, 28, 0, 2 * Math.PI);
        crc2.fillStyle = "#f7b284";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(this.x, this.y + 63, 35, Math.PI,  0);
        crc2.fillStyle = this.color;
        crc2.fill();
         crc2.fillRect(this.x-35, this.y + 63, 70, 60);
            
                
      
            
            if(this.bool == false){
        crc2.fillStyle = "#000000";
        crc2.fillRect(this.x-35, this.y + 123, 70, 35);
        crc2.fillRect(this.x-35, this.y + 158, 28, 30);
        crc2.fillRect(this.x+7, this.y + 158, 28, 30);
        crc2.fillStyle = "#f7b284";
        crc2.fillRect(this.x-30, this.y + 188, 20, 25);
        crc2.fillRect(this.x+11, this.y + 188, 20, 25);
        crc2.fillStyle = "#e30613";
        crc2.fillRect(this.x-30, this.y + 213, 20, 60);
        crc2.fillRect(this.x+11, this.y + 213, 20, 60);
         crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(this.x - 20, this.y + 273, 13, 0,  2*Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(this.x + 20, this.y + 273, 13, 0,  2*Math.PI);
        crc2.fill();
                
                if(armeOben){
                    crc2.fillStyle = this.color;
           crc2.beginPath();
            crc2.arc(this.x - 35, this.y + 43, 11, 0, Math.PI);
             crc2.lineTo(this.x - 46, this.y - 45);
                crc2.arc(this.x - 35, this.y - 45, 11, Math.PI, 0);
          crc2.fill(); 
                
                crc2.beginPath();
        crc2.arc(this.x + 35, this.y + 43, 11, 0, Math.PI);
            crc2.lineTo(this.x + 24, this.y - 45);
            crc2.arc(this.x + 35, this.y - 45, 11, Math.PI, 0);
                crc2.fill(); 
                
            }else{
                    crc2.fillStyle = this.color;
                crc2.beginPath();
        crc2.arc(this.x - 35, this.y + 43, 12, Math.PI,  0.25*Math.PI);
            crc2.lineTo(this.x - 45, this.y + 100);
            crc2.arc(this.x - 60, this.y + 113, 12, 0, 1.25*Math.PI);
      crc2.fill(); 
            
            crc2.beginPath();
        crc2.arc(this.x + 35, this.y + 43, 12, 0.75 * Math.PI,  0);
            crc2.lineTo(this.x + 65, this.y + 100);
            crc2.arc(this.x + 60, this.y + 113, 12, 1.75*Math.PI, Math.PI);
                crc2.fill(); 
                }
                }else{
                crc2.beginPath();
        crc2.arc(this.x - 35, this.y + 43, 12, Math.PI,  0.25*Math.PI);
            crc2.lineTo(this.x - 45, this.y + 100);
            crc2.arc(this.x - 60, this.y + 113, 12, 0, 1.25*Math.PI);
      crc2.fill(); 
            
            crc2.beginPath();
        crc2.arc(this.x + 35, this.y + 43, 12, 0.75 * Math.PI,  0);
            crc2.lineTo(this.x + 65, this.y + 100);
            crc2.arc(this.x + 60, this.y + 113, 12, 1.75*Math.PI, Math.PI);
                crc2.fill(); 
                }
            
            crc2.beginPath();
        crc2.arc(this.x - 10, this.y -5, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(this.x + 10, this.y - 5, 5, 0, 2 * Math.PI);
        crc2.fill();
            
            if(this.mimik == "normal"){
        crc2.fillRect(this.x - 10, this.y+10, 20, 3);
                }
            if(this.mimik == "unhappy"){
        crc2.beginPath();
                crc2.arc(this.x, this.y +18, 15, Math.PI, 0);
        crc2.fill();
                crc2.beginPath();
                crc2.arc(this.x, this.y +18, 12, Math.PI, 0);
                crc2.fillStyle = "#f7b284";
        crc2.fill();
                }
            if(this.mimik == "happy"){
                crc2.beginPath();
                crc2.arc(this.x, this.y +8, 15, 0, Math.PI);
        crc2.fill();
                crc2.beginPath();
                crc2.arc(this.x, this.y +8, 12, 0, Math.PI);
                crc2.fillStyle = "#f7b284";
        crc2.fill();
                }
            }
        }
    }