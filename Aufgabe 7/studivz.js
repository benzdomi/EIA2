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
        if (Number.isNaN(parseInt(splitString[0]))) {
            return "Matrikelnummer ist keine Nummer...";
        }
        else if (splitString[1] == "") {
            return "Name muss ein Wort sein...";
        }
        else if (splitString[2] == "") {
            return "Vorname muss ein Wort sein...";
        }
        else if (Number.isNaN(parseInt(splitString[3]))) {
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
            students.push(student);
            return "Data saved.";
        }
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {
                let matrikelOut = "Matrikelnummer: " + students[i].matrikelnummer;
                let nameOut = "Name: " + students[i].name;
                let vornameOut = "Vorname: " + students[i].vorname;
                let alterOut = "Alter: " + students[i].alter;
                let geschlechtOut = "Geschlecht: ";
                if (students[i].geschlecht) {
                    geschlechtOut += "m�nnlich";
                }
                else
                    geschlechtOut += "weiblich";
                let kommentarOut = "Kommentar: " + students[i].kommentar;
                return matrikelOut + nameOut + vornameOut + alterOut + geschlechtOut + kommentarOut;
            }
        }
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=studivz.js.map