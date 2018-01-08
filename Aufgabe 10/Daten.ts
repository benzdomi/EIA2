namespace Aufgabe10{
            export interface Daten {
            kategorie: string;
            name: string;
            preis: number;
        }
            
        
        export let baumArten: Daten[] = [
            {
            kategorie: "baum",
            name: "", 
            preis: 0},
            {
            kategorie: "baum",
            name: "Fichte", 
            preis: 20},
            {
            kategorie:"baum",
            name: "Nordmanntanne", 
            preis: 30},
            {
            kategorie:"baum",
            name: "Blaufichte", 
            preis: 25},
            {
            kategorie:"baum",
            name: "Kiefer", 
            preis: 15}
        ];
           
        export let halterungen: Daten[] = [
            {
            kategorie:"halterung",
            name: "", 
            preis: 0},
            {
            kategorie:"halterung",
            name: "Sternhalterung", 
            preis: 30},
            {
            kategorie: "halterung",
            name: "Viereckhalterung", 
            preis: 20}
        ];
            
            
        export let kugelDaten: Daten[] = [
            {
            kategorie:"kugelR",
            name: "Rot", 
            preis: 10},
            {
            kategorie:"kugelG",
            name: "Gold", 
            preis: 7},
            { 
            kategorie:"kugelB",
            name: "Blau", 
            preis: 7}
        ];    
            
            
        export let kerzenDaten: Daten[] = [
            { 
            kategorie:"kerzenR",
            name: "Rot", 
            preis: 10},
            {
            kategorie:"kerzenB",
            name: "Bunt", 
            preis: 7},
            {
            kategorie:"kerzenG",
            name: "Gelb", 
            preis: 7}
        ]; 
            
            
          export let lieferOptionen: Daten[] = [
            {
            kategorie:"liefer",
            name: "DHL", 
            preis: 0},
            {
            kategorie:"liefer",
            name: "DHL Premium", 
            preis: 5},
            { 
            kategorie:"liefer",
            name: "Hermes", 
            preis: 0}
        ];
    }