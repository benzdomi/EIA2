var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let baumtyp = document.createElement("select");
    let halterung = document.createElement("select");
    let lieferopttyp = document.createElement("select");
    let persName = document.createElement("input");
    let persNachname = document.createElement("input");
    let persMail = document.createElement("input");
    let persAdresse = document.createElement("input");
    let persPlz = document.createElement("input");
    let prufen = document.createElement("div");
    //Warenkorb
    let wKorb = document.createElement("div");
    let h2 = document.createElement("h2");
    let gesamtpreis = 0;
    function init() {
        baumtyp.addEventListener("change", input);
        document.getElementById("baumtyp").appendChild(baumtyp);
        for (let i = 0; i < Aufgabe10.baumArten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.baumArten[i].name;
            baumtyp.id = Aufgabe10.baumArten[i].kategorie;
            baumtyp.appendChild(option);
        }
        halterung.addEventListener("change", input);
        document.getElementById("halterung").appendChild(halterung);
        for (let i = 0; i < Aufgabe10.halterungen.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.halterungen[i].name;
            halterung.id = Aufgabe10.halterungen[i].kategorie;
            halterung.appendChild(option);
        }
        for (let i = 0; i < Aufgabe10.kugelDaten.length; i++) {
            let kugeltyp = document.createElement("input");
            kugeltyp.type = "checkbox";
            kugeltyp.id = Aufgabe10.kugelDaten[i].kategorie;
            kugeltyp.addEventListener("change", function () {
                kugelInput(kugeltyp, "1");
            });
            document.getElementById("kugeln").appendChild(kugeltyp);
            //Labels hinzufügen
            let kugellabel = document.createElement("label");
            kugellabel.innerText = Aufgabe10.kugelDaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);
            //Anzahl Selektor
            let kugelanz = document.createElement("input");
            kugelanz.type = "number";
            kugelanz.step = "1";
            kugelanz.min = "0";
            kugelanz.value = "1";
            kugelanz.style.marginRight = "1.5em";
            kugelanz.addEventListener("change", function () {
                kugeltyp.checked = true;
                kugelInput(kugeltyp, kugelanz.value);
            });
            document.getElementById("kugeln").appendChild(kugelanz);
        }
        for (let i = 0; i < Aufgabe10.kerzenDaten.length; i++) {
            let kerzentyp = document.createElement("input");
            kerzentyp.type = "checkbox";
            kerzentyp.id = Aufgabe10.kerzenDaten[i].kategorie;
            kerzentyp.addEventListener("change", function () {
                kerzenInput(kerzentyp, "1");
            });
            document.getElementById("kerzen").appendChild(kerzentyp);
            //Labels hinzufügen
            let kerzenlabel = document.createElement("label");
            kerzenlabel.innerText = Aufgabe10.kerzenDaten[i].name;
            document.getElementById("kerzen").appendChild(kerzenlabel);
            //Anzahl Selektor
            let kerzenanz = document.createElement("input");
            kerzenanz.type = "number";
            kerzenanz.step = "1";
            kerzenanz.min = "0";
            kerzenanz.value = "1";
            kerzenanz.style.marginRight = "1.5em";
            kerzenanz.addEventListener("change", function () {
                kerzentyp.checked = true;
                kerzenInput(kerzentyp, kerzenanz.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanz);
        }
        //Lieferoptionen
        lieferopttyp.addEventListener("change", input);
        document.getElementById("lieferoption").appendChild(lieferopttyp);
        for (let i = 0; i < Aufgabe10.lieferOptionen.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.lieferOptionen[i].name;
            lieferopttyp.id = Aufgabe10.lieferOptionen[i].kategorie;
            lieferopttyp.appendChild(option);
        }
        //Daten
        persName.type = "text";
        persName.placeholder = "Name";
        persName.required = true;
        persName.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persName);
        persNachname.type = "text";
        persNachname.placeholder = "Nachname";
        persNachname.required = true;
        persNachname.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persNachname);
        persMail.type = "email";
        persMail.placeholder = "Email";
        persMail.required = true;
        persMail.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persMail);
        persAdresse.type = "text";
        persAdresse.placeholder = "Adresse";
        persAdresse.required = true;
        persAdresse.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persAdresse);
        persPlz.type = "text";
        persPlz.placeholder = "PLZ";
        persPlz.pattern = "[0-9]{5}";
        persPlz.required = true;
        document.getElementById("persdaten").appendChild(persPlz);
        //Button
        let button = document.createElement("button");
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }
    function kugelInput(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe10.kugelDaten.length; i++) {
            if (Aufgabe10.kugelDaten[i].kategorie == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe10.kugelDaten[i].name, Aufgabe10.kugelDaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function kerzenInput(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe10.kerzenDaten.length; i++) {
            if (Aufgabe10.kerzenDaten[i].kategorie == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe10.kerzenDaten[i].name, Aufgabe10.kerzenDaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function input() {
        var baumName = baumtyp.value;
        if (baumName != "") {
            inDenWarenkorb(Aufgabe10.baumArten, baumName, true);
        }
        else {
            inDenWarenkorb(Aufgabe10.baumArten, baumName, false);
        }
        var halterungName = halterung.value;
        if (halterungName != "") {
            inDenWarenkorb(Aufgabe10.halterungen, halterungName, true);
        }
        else {
            inDenWarenkorb(Aufgabe10.halterungen, halterungName, false);
        }
        var lieferant = lieferopttyp.value;
        if (lieferant != "") {
            inDenWarenkorb(Aufgabe10.lieferOptionen, lieferant, true);
        }
    }
    function inDenWarenkorb(daten, elementname, selected) {
        for (let i = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].kategorie, elementname, daten[i].preis, 1, selected);
            }
        }
    }
    function Warenkorb(_kategorie, _name, _preis, _anzahl, _selected) {
        h2.innerText = "Warenkorb";
        h2.style.color = "red";
        h2.style.position = "absolute";
        h2.style.right = "390px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";
        document.getElementById("korb").appendChild(h2);
        wKorb.style.display = "inline-block";
        wKorb.style.position = "absolute";
        wKorb.style.right = "10px";
        wKorb.style.top = "10px";
        wKorb.style.width = "500px";
        wKorb.style.height = "500px";
        wKorb.style.backgroundColor = "#359e16";
        wKorb.style.paddingTop = "40px";
        wKorb.style.paddingLeft = "10px";
        document.getElementById("korb").appendChild(wKorb);
        //Schleife schaut ob p schon vorhanden ist 
        for (let i = 0; i < wKorb.getElementsByTagName("p").length; i++) {
            if (wKorb.getElementsByTagName("p")[i].id == _kategorie) {
                var innerPreis = wKorb.getElementsByTagName("p")[i].innerText.split(": ")[1];
                wKorb.getElementsByTagName("p")[i].remove();
                gesamtpreis = gesamtpreis - parseInt(innerPreis.substring(0, innerPreis.length - 1));
            }
            //Gesamtpreis p entfernen um später aktualisiert zurück einzufügen
            if (wKorb.getElementsByTagName("p")[i].id == "gesamtpreis") {
                wKorb.getElementsByTagName("p")[i].remove();
            }
        }
        var preisObjekte = _anzahl * _preis;
        if (_selected) {
            var p = document.createElement("p");
            p.id = _kategorie;
            p.innerText = _anzahl + "x " + _name;
            if (_kategorie.substring(0, _kategorie.length - 1) == "kerzen") {
                p.innerText += " Kerzen";
            }
            if (_kategorie.substring(0, _kategorie.length - 1) == "kugel") {
                p.innerText += " Kugeln";
            }
            p.innerText += ":  " + preisObjekte + "€";
            wKorb.appendChild(p);
        }
        gesamtpreis += preisObjekte;
        var pGesamt = document.createElement("p");
        pGesamt.id = "gesamtpreis";
        pGesamt.innerText = "Gesamtpreis: " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "1px solid black";
        wKorb.appendChild(pGesamt);
    }
    function PrufeDaten() {
        prufen.innerText = "";
        if (persName.checkValidity() == false || persNachname.checkValidity() == false || persMail.checkValidity() == false || persPlz.checkValidity() == false || persAdresse.checkValidity() == false) {
            prufen.innerText = "Deine Eingabe war leider fehlerhaft! Überprüfe sie noch einmal.";
            prufen.style.color = "red";
            document.body.appendChild(prufen);
        }
        else {
            prufen.innerText = "Deine Bestellung wurde erfolgreich verifiziert!";
            prufen.style.color = "green";
            document.body.appendChild(prufen);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Main.js.map