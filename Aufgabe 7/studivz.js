/*
Aufgabe: Aufgabe 7
Name: Dominik Benz
Matrikel: 256152
Datum: 01.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Aufgabe7;
(function (Aufgabe7) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let splitString = _input.split(",", 6);
        for (let i = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].replace(/\ /, "");
        }
        if (parseInt(splitString[0]) == NaN) {
            return "Matrikelnummer ist keine Nummer...";
        }
        else if (splitString[1] == "") {
            return "Name muss ein Wort sein...";
        }
        else if (splitString[2] == "") {
            return "Vorname muss ein Wort sein...";
        }
        else if (parseInt(splitString[3]) == NaN) {
            return "Alter ist keine Nummer...";
        }
        else if (parseInt(splitString[4]) != 0 && parseInt(splitString[4]) != 1) {
            return "Geschlecht ist nicht 0 oder 1...";
        }
        else if (splitString[5] == "") {
            return "Kommentar muss ein Wort sein...";
        }
        else {
            console.log(parseInt(splitString[0]));
            let student = {
                matrikelnummer: parseInt(splitString[0]),
                name: splitString[1],
                vorname: splitString[2],
                alter: parseInt(splitString[3]),
                geschlecht: parseInt(splitString[4]) == 1,
                kommentar: splitString[5]
            };
            return "Data saved.";
        }
    }
    function queryData(_matrikel) {
        return "Hier fehlt noch der richtige Code...";
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=studivz.js.map