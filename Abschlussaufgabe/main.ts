/*
Aufgabe: Abschlussarbeit
Name: Dominik Benz
Matrikel: 256152
Datum: 23.02.2018
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace Abschlussarbeit {
    
    export let crc2: CanvasRenderingContext2D;

    
    let SuperClass: Elemente[] = [];


    
    var canvas: HTMLCanvasElement;
    var image : ImageData;
    //var zuschauer: string; 
    export var name: string; 
    export var scorePC : number = 0;
    export var scorePlayer:number = 0;
    var i: number;
    let repeat: number = 0;
    window.addEventListener("load", main);
    



    function main(): void {
        
        canvas = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
        
        crc2 = canvas.getContext("2d");
        
        var kappa : number = .5522848;
       var ox :number = (30 / 2) * kappa; // control point offset horizontal
      var oy :number = (10 / 2) * kappa; // control point offset vertical
      var xe :number = (975 - 15) + 30;           // x-end
      var ye :number = 860 + 10;           // y-end
      var xm :number = (975 - 15)  + 30/ 2;       // x-middle
      var ym :number = 860 + 10 / 2;       // y-middle

        

        //Tribne
        crc2.fillStyle = "#818181";
        crc2.fillRect(0, 0, 1950, 300);
        
        
        
        
        
         //Linien
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 556, 1950, 5);
        crc2.fillRect(0, 682, 1950, 5);
        crc2.beginPath();
        crc2.moveTo(975 -15, ym);
        crc2.bezierCurveTo(975 -15, ym - oy, xm - ox, 860, xm, 860);
        crc2.bezierCurveTo(xm + ox, 860, xe, ym - oy, xe, ym);
        crc2.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        crc2.bezierCurveTo(xm - ox, ye, 975 -15, ym + oy, 975 -15, ym);
        crc2.fill();
        
        
        
        let z : number= 1;
        let left : number= 18.4;
        
        for(let k :number = 0; k <4; k++){
        let div: HTMLDivElement = document.createElement("div");
        div.style.width = "30.7vw";
        div.style.height = "10.25vw";
        div.style.position = "absolute";
            div.style.zIndex = "100";
            if(z == 1){
        div.style.top = "8.35vw";
        div.style.left = left + "vw";
                z++;
                }else{
                div.style.top = "18.6vw";
        div.style.left = left + "vw";
                z=1;
                left += 30.7;
                }
        div.addEventListener("click", function(){tor(k+1)});
        document.body.appendChild(div);
            
            }
        
        for(i= 0; i<3; i++){
            let div: HTMLDivElement = document.createElement("div");
        
        
        div.style.position = "absolute";
            div.style.zIndex = "1";
            if(i==0){
                div.style.height = "20.4vw";
                div.style.width = "18.4vw";
        div.style.left = "0";
                div.style.top="8.4vw";
                }else if(i==1){
                div.style.height = "20.4vw";
                div.style.width = "20.3vw";
                div.style.right = "0";
                div.style.top="8.4vw";
                }else{
                div.style.height = "8.4vw";
                div.style.width = "100%";
        div.style.left = "0";
                div.style.top="0";
                }
            
        div.addEventListener("click", keinTreffer);
        document.body.appendChild(div);
            }
        
        //Torwart
        let torwart: Personen = new Personen(975, 275, "#e30613", false, "normal", true);
        SuperClass.push(torwart);
        
        let ball: Ball = new Ball(975, 838, "#ffffff", false, "", true);
        SuperClass.push(ball);
        
        name= prompt("Wie heißt du?");
        scoreBoard(name);
        let zuschauer:string= prompt("Wie viel Zuschauer willst du? (Zahl 0-150)");
        erstelleZuschauer(zuschauer);            

        
            
            
        for (let k:number = 2; k < SuperClass.length; k++) {
            let s: Elemente = SuperClass[k];
            
            s.hitbox(k);
            }
        
        
        image = crc2.getImageData(0,0,1950,893);
 
        animate();
    }
    
    export let aus :boolean = false;
    export let specX:number;
    export let specY:number;
    
    export let armeOben:boolean = false;
    
export function daneben(_i:number){
        
        specX = SuperClass[_i].x;
        specY = SuperClass[_i].y;
        aus = true;
        scorePC += 1;
        if(SuperClass[_i].drawBool){
        if(SuperClass[_i].mimik == "unhappy"){
            setTimeout(function(){
            document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC";
            SuperClass[_i].drawBool = false;
            alert("Jetzt hast du ein Fan weniger...");}, 2500);
            }else{
        setTimeout(function(){SuperClass[_i].mimik = "unhappy";
        document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC";
        alert("Autsch! So verscheuchst du deine Fans.");}, 2500);
            }
    }else{
          setTimeout(function() {document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC";}, 2500);
            }
        }
    
    export let r :number;
    export let pos:boolean = false;
    export let happy: boolean;
    export let schuss: number;
    export let wait: number;
    export let treffer:number = 0;
    
function tor(_pos:number){
    let s: Elemente = SuperClass[0];
    r = Math.floor(Math.random() * 4) + 1;
    schuss = _pos;
    pos = true;

    if(r==_pos){
    scorePC += 1;
        //document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC";
        treffer= 1;
        //setTimeout(function(){document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC"; alert("Gehalten " + name + scorePlayer + ":" + scorePC + " PC");}, 4000);
            happy = true;
    }else{
        scorePlayer += 1;
        treffer = 2;
        //document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC";
        //setTimeout(function(){document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC"; alert("Toooor!!! " + name + scorePlayer + ":" + scorePC + " PC");}, 4000);
        happy = false;
        }
    }
    
    function keinTreffer(_event: MouseEvent) :void{
        specX = _event.pageX * (1950 / window.innerWidth);
        specY = _event.pageY * (1950 / window.innerWidth);
        aus = true;
        scorePC +=1;
        setTimeout(function() {document.getElementById("score").innerText = name+ " " + scorePlayer + ":" + scorePC + " PC";}, 2500);
        }
    
    function scoreBoard(_name:string) :void {
        if(_name == ""){
            alert("Der Name darf nicht leer bleiben!");
            _name = prompt("Wie heißt du?");
            scoreBoard(_name);
            }else {
            name = _name;
        let p: HTMLParagraphElement = document.createElement("p");
        p.innerText= name+ " " + scorePlayer + ":" + scorePC + " PC";
        
        p.style.position = "absolute";
        p.style.padding = "3px";
        p.style.top = "1vw";
        p.style.left = "1vw";
        p.style.backgroundColor = "red";
        p.style.color = "white";
        p.id = "score";
        document.body.appendChild(p);
            }
        }
    
    function erstelleZuschauer(_zuschauer:string) :void{
        if(parseInt(_zuschauer) < 0 || parseInt(_zuschauer) > 150){
            alert("Es muss eine Zahl zwischen 0 und 150 sein!");
            _zuschauer = prompt("Wie viel Zuschauer willst du? (Zahl 0-150)");
            erstelleZuschauer(_zuschauer);
            }else if(Number.isNaN(parseInt(_zuschauer))){
            alert("Es muss eine Zahl sein und kein Wort!");
            _zuschauer = prompt("Wie viel Zuschauer willst du? (Zahl 0-150)");
            erstelleZuschauer(_zuschauer);
            }else
        if(parseInt(_zuschauer)>= 4){
        for ( i = 0; i < parseInt(_zuschauer) / 4; i++) {
            let c: Personen;
            if(i%2==0){     
            c = new Personen((990 + i * 30)+Math.random() * 50, 30, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy", true);
                }else{
                c = new Personen((960 - i * 30)+Math.random() * 50, 30, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy", true);
                }
            SuperClass.push(c);
        }
        
        for ( i = 0; i < parseInt(_zuschauer) / 4; i++) {
            let c: Personen;
            if(i%2==0){
            c = new Personen((990 + i * 30)+Math.random() * 50, 80, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy", true);
                }else{
                c = new Personen((960 - i * 30)+Math.random() * 50, 80, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy", true);
                }
            SuperClass.push(c);
        }
        
        for ( i = 0; i < parseInt(_zuschauer) / 4; i++) {
            let c: Personen;
            if(i%2==0){
            c = new Personen((990 + i * 30)+Math.random() * 50, 130, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy", true);
                }else{
                c = new Personen((960 - i * 30)+Math.random() * 50, 130, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy", true);
                }
            SuperClass.push(c);
        }
        
        for ( i = 0; i < parseInt(_zuschauer) / 4; i++) {
            let c: Personen;
            if(i%2==0){
            c = new Personen((990 + i * 30)+Math.random() * 50, 180, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy", true);
                }else{
                c = new Personen((960 - i * 30)+Math.random() * 50, 180, "hsl(" + Math.random() * 360 + ", 100%, 50%)", true, "happy", true);
                
                }
            SuperClass.push(c);
        }
            }else{
            for (let k:number = 2; k < parseInt(_zuschauer)+2; k++) {
            let c: Personen;
            if(i%2==0){
                let x:number = (990 + k * 30)+Math.random() * 50;
            c = new Personen(x, 30, "hsl(" + Math.random() * 360 + ", 100%, 50%)", false, "happy", true);
                let div: HTMLDivElement = document.createElement("div");
        div.style.width = "2.9vw";
        div.style.height = "2.9vw";
        div.style.position = "absolute";
                 div.style.left = ((x-28)/1950)*100 + "vw";
                div.style.top = ((30-28)/1950)*100 + "vw";
                div.addEventListener("click", function(){daneben(k);});
        document.body.appendChild(div);
                }else{
                let x:number = (960 - k * 30)+Math.random() * 50;
                c = new Personen(x, 30, "hsl(" + Math.random() * 360 + ", 100%, 50%)", false, "happy", true);
                let div: HTMLDivElement = document.createElement("div");
                div.style.width = "2.9vw";
        div.style.height = "2.9vw";
        div.style.position = "absolute";
                 div.style.left = ((x-28)/1950)*100 + "vw";
                div.style.top = ((30-28)/1950)*100 + "vw";
                div.addEventListener("click", function(){daneben(k);});
        document.body.appendChild(div);
                }
            SuperClass.push(c);
        }
            }
        }
    
    
    function animate(): void {
        crc2.clearRect(0, 0, 1950, 893);
        crc2.putImageData(image, 0,0);
         for ( i = 2; i < SuperClass.length; i++) {
        let s: Elemente = SuperClass[i];
            
            s.draw();
        }   
        
        
        
        //Wand
        crc2.fillStyle = "#dadada";
        crc2.fillRect(0, 241, 1950, 160);
       
        //Tor
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(337, 141, 22, 415);
        crc2.fillRect(1555, 141, 22, 415);
        crc2.fillRect(337, 141, 1230, 22);
        crc2.beginPath();
        crc2.moveTo(337, 556);
        crc2.lineTo(380, 500);
        crc2.lineTo(1530, 500);
        crc2.lineTo(1577, 556);
        crc2.lineTo(1555, 556);
        crc2.lineTo(1520, 515);
        crc2.lineTo(387, 515);
        crc2.lineTo(355, 556);
        crc2.closePath();
        crc2.fill();
        
        //Netz
        for(let i = 0; i<13; i++){
            
            crc2.beginPath();
        crc2.moveTo(337, 230 +i*25);
        crc2.lineTo(380, 174 +i*25);
        crc2.lineTo(1530, 174 +i*25);
        crc2.lineTo(1577, 230 +i*25);
        crc2.lineTo(1574, 230 +i*25);
        crc2.lineTo(1528, 177 +i*25);
        crc2.lineTo(382, 177 +i*25);
        crc2.lineTo(340, 230 +i*25);
       crc2.closePath();
        crc2.fill();
        }
        
        for(i = 0; i<47; i++){
            if(i==0){
        crc2.beginPath();
        crc2.moveTo(363, 150);
            crc2.lineTo(363, 540);
            crc2.lineTo(366, 540);
            crc2.lineTo(366, 150);
            crc2.closePath();
        crc2.fill();
                }
            if(i==46){
        crc2.beginPath();
        crc2.moveTo(1543, 150);
            crc2.lineTo(1543, 540);
            crc2.lineTo(1546, 540);
            crc2.lineTo(1546, 150);
            crc2.closePath();
        crc2.fill();
                }
            
            crc2.beginPath();
        crc2.moveTo(378  +i*25, 150);
            crc2.lineTo(378 +i*25, 510);
            crc2.lineTo(381 +i*25, 510);
            crc2.lineTo(381 +i*25, 150);
            crc2.closePath();
        crc2.fill();
            }
        
        SuperClass[0].update();
        SuperClass[1].update();
        
        window.setTimeout(animate, 20);
   
    }
    
    
    
}