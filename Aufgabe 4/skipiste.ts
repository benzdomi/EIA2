/*
Aufgabe: Aufgabe 4
Name: Dominik Benz
Matrikel: 256152
Datum: 11.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe4 {
    
    interface skier {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
}
    
    interface snow {
        x: number,
        y: number,
        dy: number
        }
    
    var canvas: HTMLCanvasElement;
    var crc2: CanvasRenderingContext2D;
    let snowAnimate: snow[] = [];
    let cloudX: number[] = [];
    let cloudY: number[] = [];
    let skierAnimate: skier[] = [];
    var image :any;
    window.addEventListener("load", main);
    



    function main(): void {
        canvas = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        crc2.fillStyle = "#1e8cfd";
        crc2.fillRect(0, 0, 800, 600);



        //Berge
        crc2.beginPath();
        crc2.moveTo(225, 260);
        crc2.lineTo(425, 80);
        crc2.lineTo(700, 390);
        crc2.lineTo(700, 450);
        crc2.closePath();
        crc2.fillStyle = "#d7d7d7";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(325, 350);
        crc2.lineTo(655, 55);
        crc2.lineTo(800, 217);
        crc2.lineTo(800, 600);
        crc2.closePath();
        crc2.fill();

        //Skipiste
        crc2.beginPath();
        crc2.moveTo(0, 165);
        crc2.lineTo(800, 486);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Skilift
        crc2.beginPath();
        crc2.moveTo(0, 90);
        crc2.lineTo(800, 390);
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(365, 225);
        crc2.lineTo(360, 245);
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();

        crc2.fillStyle = "#9dcff4";
        crc2.fillRect(325, 245, 55, 50);
        crc2.beginPath();
        crc2.moveTo(325, 245);
        crc2.lineTo(380, 245);
        crc2.lineTo(380, 295);
        crc2.lineTo(325, 295);
        crc2.closePath();
        crc2.stroke();

        for (let i: number = 0; i < 4; i++) {
            drawTree(Math.random() * 50 + i * 100, Math.random() * 100 + 475)
        }

        for (let i: number = 0; i < 4; i++) {
            cloudX[i] = Math.random() * 50 + i * 200;
            cloudY[i] = Math.random() * 100 + 0;
        }
        
        for (let i: number = 0; i < 800; i++) {
            snowAnimate[i] = {
                x : Math.random() * 800 + 0,
                dy: 1,
                y : Math.random() * 600 + 0};
        }
        
        for (let i: number = 0; i < 10; i++) {
            skierAnimate[i] = {
                x: Math.random() * 100 + 10,
                y: Math.random() * 200 + 195,
                dx: 1.75,
                dy: 0.75,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"};
        }
        
        image = crc2.getImageData(0,0,800,600);
        
        animate();
    }
    


    function drawTree(x: number, y: number): void {
        crc2.fillStyle = "#603e1b";
        crc2.fillRect(x, y, 28, 27);
        crc2.beginPath();
        crc2.moveTo(x - 43, y + 5);
        crc2.lineTo(x + 17, y - 95);
        crc2.lineTo(x + 72, y + 8);
        crc2.closePath();
        crc2.fillStyle = "#3a5d25";
        crc2.fill();
    }

    function drawSnow(_snow : snow): void {
            
            
            _snow.y += _snow.dy; 

        crc2.beginPath();
        crc2.arc(_snow.x, _snow.y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function drawClouds(x: number, y: number): void {
        crc2.beginPath();
        crc2.arc(x,y + 25, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 25, y, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 50, y + 25, 30, 0, 2 * Math.PI);
        crc2.fill();
            }
    
    function skifahrer(_skier : skier) :void{
        _skier.x += _skier.dx
        _skier.y += _skier.dy
            
        crc2.fillStyle = _skier.color;
        crc2.fillRect(_skier.x, _skier.y, 5, -20);
        crc2.beginPath();
        crc2.arc(_skier.x + 2.5, _skier.y - 20, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_skier.x - 10, _skier.y - 5);
        crc2.lineTo(_skier.x + 15, _skier.y + 4);
        crc2.stroke();
            }
    
    
    function animate(): void {
        
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(image, 0,0);
        for (let i: number = 0; i < skierAnimate.length; i++) {
             if(skierAnimate[i].x >= 800 || skierAnimate[i].y >= 600){
                skierAnimate[i].x = Math.random() * 50 + 10;
                skierAnimate[i].y = Math.random() * 200 + 175;
                 skierAnimate[i].color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                }
          
            skifahrer(skierAnimate[i]);
        } 
        
            for (let i: number = 0; i < snowAnimate.length; i++) {
             if(snowAnimate[i].y >= 600){
                snowAnimate[i].y = 0;
                }
          
            drawSnow(snowAnimate[i]);
        } 
            
       
            
         for (let i: number = 0; i < cloudX.length; i++) {
             if(cloudX[i] >= 800){
                cloudX[i] = 0;
                }
             
            cloudX[i] += Math.random() * 0.25 - 0;
            cloudY[i] += 0 // andere Bewegungsmuster zu finden
            drawClouds(cloudX[i], cloudY[i]);
             
        }    
        
        
        window.setTimeout(animate, 20);
    
    }
    
    
}