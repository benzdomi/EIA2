/*
Aufgabe: Aufgabe 5
Name: Dominik Benz
Matrikel: 256152
Datum: 17.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {
    
    export let crc2: CanvasRenderingContext2D;
    
let skierClass: skier[] = [];
let snowClass : snow[] = [];
let cloudClass: cloud[] = [];
    
    var canvas: HTMLCanvasElement;
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
            let s: cloud = new cloud(Math.random() * 50 + i * 200, Math.random() * 100 + 0);
            
            cloudClass[i] = s;
        }
        
        for (let i: number = 0; i < 800; i++) {
            let s: snow = new snow(Math.random() * 800 + 0, Math.random() * 600 + 0);
            
            snowClass[i] = s;
        }
        
        for (let i: number = 0; i < 10; i++) {
            let s: skier = new skier(Math.random() * 100 + 10, Math.random() * 200 + 195, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            skierClass[i] = s;
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


    

    
    
    function animate(): void {
        
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(image, 0,0);
        for (let i: number = 0; i < skierClass.length; i++) {
        let s: skier = skierClass[i];
            
            s.update();
        } 
        
            for (let i: number = 0; i < snowClass.length; i++) {
            let s: snow = snowClass[i];
          
            s.update();
        } 
            
            
         for (let i: number = 0; i < cloudClass.length; i++) {
             let s: cloud = cloudClass[i];
             
             s.update();
        }    
        
        
        window.setTimeout(animate, 20);
    
    }
    
    
}