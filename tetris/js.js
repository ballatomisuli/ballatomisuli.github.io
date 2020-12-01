var tsr = 30;
var tsc = 15;
var tr = new Array(tsr);
var tb = document.getElementById('main'); //Táblázat

var tsr2 = 6;
var tsc2 = 6;
var tr2 = new Array(tsc2);
var tb2 = document.getElementById('mutato'); //Táblázat


var ceses = [];
var obj = 0;

let cszin = "smi";

let setirany = 1;
let cirany = 1;

let birany = "";

var pause = false;

var rszin2, type2, einterval, binterval;

var rszin = Math.floor(Math.random() * 8);
var type = Math.floor(Math.random() * 7);

var ctype = 0;

var jelzo = [];

//  0
//3 s 1
//  2

function begin() {

    cirany = 0;
    ceses = [];
    birany = "";
    cszin = "smi";
    obj = 0;

    addElement();

    einterval = setInterval(function() {
        if (pause == false) {

            updateBack();
            lefelejelzo();
        }
    }, 1);

    binterval = setInterval(function() {
        if (pause == false) {

            //console.log("Blockolt irány: " + birany + " Szin: " + cszin + " ceses: " + ceses + " type: " + type);
            lefele();
        }
    }, 800);
}

var ncount = 0;

function addElement() {

    for (var i = 0; i < tsc2 * tsr2; i++) {
        if (!document.getElementById("mutato" + i).classList.contains("oldal2")) {
            document.getElementById("mutato" + i).classList = "";
            document.getElementById("mutato" + i).style.backgroundColor = " #7a7a7a";
        }
    }
    if (ncount == 1) {
        rszin = Math.floor(Math.random() * 8);
        type = Math.floor(Math.random() * 7);
        nextElement(type, rszin);
        rollElement(type2, rszin2);
        ncount = 0;
        return;
    } else {
        rszin2 = Math.floor(Math.random() * 8);
        type2 = Math.floor(Math.random() * 7);
        nextElement(type2, rszin2);
        rollElement(type, rszin);
        ncount++;
        return;
    }
}

function nextElement(typee, rszine) {
    var neses = [];
    switch (rszine) {
        case 0:
            cszin = "piros";
            break;
        case 1:
            cszin = "vkek";
            break;
        case 2:
            cszin = "vzold";
            break;
        case 3:
            cszin = "citrom";
            break;
        case 4:
            cszin = "narancs";
            break;
        case 5:
            cszin = "skek";
            break;
        case 6:
            cszin = "rozsaszin";
            break;
        case 7:
            cszin = "lila";
            break;
    }
    switch (typee) {
        case 0:
            //J
            obj = 13;
            neses.push(obj + 2 + tsc2);
            neses.push(obj + 2);
            neses.push(obj + 1);
            neses.push(obj);
            break;
        case 1:
            //L
            obj = 13;
            neses.push(obj + tsc2);
            neses.push(obj + 2);
            neses.push(obj + 1);
            neses.push(obj);
            break;
        case 2:
            //I
            obj = 8;
            neses.push(obj);
            neses.push(obj + tsc2);
            neses.push(obj + tsc2 + tsc2);
            neses.push(obj + tsc2 + tsc2 + tsc2);
            break;
        case 3:
            //o
            obj = 14;
            neses.push(obj);
            neses.push(obj + 1);
            neses.push(obj + tsc2 + 1);
            neses.push(obj + tsc2);
            break;
        case 4:
            //S
            obj = 21;
            neses.push(obj + tsc2);
            neses.push(obj + tsc2 + 1);
            neses.push(obj + 1);
            neses.push(obj);
            break;
        case 5:
            //Z
            obj = 13
            neses.push(obj + tsc2 + 1);
            neses.push(obj + tsc2 + 2);
            neses.push(obj + 1);
            neses.push(obj);
            break;
        case 6:
            //T
            obj = 13
            neses.push(obj + tsc2 + 2);
            neses.push(obj + tsc2 + 1);
            neses.push(obj + tsc2);
            neses.push(obj + 1);
            break;
    }

    for (var i = 0; i < neses.length; i++) {
        document.getElementById("mutato" + neses[i]).classList.add(cszin);
    }
    return;
}

function rollElement(type, rszin) {
    ceses = null;
    ceses = [];
    ctype = type;
    switch (rszin) {
        case 0:
            cszin = "piros";
            break;
        case 1:
            cszin = "vkek";
            break;
        case 2:
            cszin = "vzold";
            break;
        case 3:
            cszin = "citrom";
            break;
        case 4:
            cszin = "narancs";
            break;
        case 5:
            cszin = "skek";
            break;
        case 6:
            cszin = "rozsaszin";
            break;
        case 7:
            cszin = "lila";
            break;
    }
    switch (type) {
        case 0:
            //J
            obj = 21;
            ceses.push(obj + 2 + tsc);
            ceses.push(obj + 2);
            ceses.push(obj + 1);
            ceses.push(obj);
            document.getElementById(obj + 2 + tsc).classList.add(cszin);
            document.getElementById(obj).classList.add(cszin);
            document.getElementById(obj + 1).classList.add(cszin);
            document.getElementById(obj + 2).classList.add(cszin);
            document.getElementById(obj + 2 + tsc).classList.remove("hatter");
            document.getElementById(obj).classList.remove("hatter");
            document.getElementById(obj + 1).classList.remove("hatter");
            document.getElementById(obj + 2).classList.remove("hatter");
            break;
        case 1:
            //L
            obj = 21;
            ceses.push(obj + tsc);
            ceses.push(obj + 2);
            ceses.push(obj + 1);
            ceses.push(obj);
            document.getElementById(obj + tsc).classList.add(cszin);
            document.getElementById(obj).classList.add(cszin);
            document.getElementById(obj + 1).classList.add(cszin);
            document.getElementById(obj + 2).classList.add(cszin);
            document.getElementById(obj + tsc).classList.remove("hatter");
            document.getElementById(obj).classList.remove("hatter");
            document.getElementById(obj + 1).classList.remove("hatter");
            document.getElementById(obj + 2).classList.remove("hatter");
            break;
        case 2:
            //I
            obj = 21;
            ceses.push(obj);
            ceses.push(obj + tsc);
            ceses.push(obj + tsc + tsc);
            ceses.push(obj + tsc + tsc + tsc);
            document.getElementById(obj + tsc).classList.add(cszin);
            document.getElementById(obj + tsc + tsc).classList.add(cszin);
            document.getElementById(obj + tsc + tsc + tsc).classList.add(cszin);
            document.getElementById(obj).classList.add(cszin);
            document.getElementById(obj + tsc).classList.remove("hatter");
            document.getElementById(obj + tsc + tsc).classList.remove("hatter");
            document.getElementById(obj + tsc + tsc + tsc).classList.remove("hatter");
            document.getElementById(obj).classList.remove("hatter");
            break;
        case 3:
            //o
            obj = 21;
            ceses.push(obj + 1);
            ceses.push(obj);
            ceses.push(obj + tsc + 1);
            ceses.push(obj + tsc);
            document.getElementById(obj + tsc + 2).classList.add(cszin);
            document.getElementById(obj + tsc + 1).classList.add(cszin);
            document.getElementById(obj + tsc).classList.add(cszin);
            document.getElementById(obj + 1).classList.add(cszin);
            document.getElementById(obj + tsc + 2).classList.remove("hatter");
            document.getElementById(obj + tsc + 1).classList.remove("hatter");
            document.getElementById(obj + tsc).classList.remove("hatter");
            document.getElementById(obj + 1).classList.remove("hatter");
            break;
        case 4:
            //S
            obj = 21;
            ceses.push(obj + tsc);
            ceses.push(obj + tsc + 1);
            ceses.push(obj + 1);
            ceses.push(obj + 2);
            document.getElementById(obj + tsc).classList.remove(cszin);
            document.getElementById(obj + tsc + 1).classList.remove(cszin);
            document.getElementById(obj + 1).classList.remove(cszin);
            document.getElementById(obj + 2).classList.remove(cszin);
            document.getElementById(obj + tsc).classList.remove("hatter");
            document.getElementById(obj + tsc + 1).classList.remove("hatter");
            document.getElementById(obj + 1).classList.remove("hatter");
            document.getElementById(obj + 2).classList.remove("hatter");
            break;
        case 5:
            //Z
            obj = 21;
            ceses.push(obj + tsc + 1);
            ceses.push(obj + tsc + 2);
            ceses.push(obj + 1);
            ceses.push(obj);
            document.getElementById(obj + tsc + 1).classList.add(cszin);
            document.getElementById(obj + tsc + 2).classList.add(cszin);
            document.getElementById(obj + 1).classList.add(cszin);
            document.getElementById(obj).classList.add(cszin);
            document.getElementById(obj + tsc + 1).classList.remove("hatter");
            document.getElementById(obj + tsc + 2).classList.remove("hatter");
            document.getElementById(obj + 1).classList.remove("hatter");
            document.getElementById(obj).classList.remove("hatter");
            break;
        case 6:
            //T
            obj = 21;
            ceses.push(obj + tsc + 2);
            ceses.push(obj + tsc + 1);
            ceses.push(obj + tsc);
            ceses.push(obj + 1);
            document.getElementById(obj + tsc + 2).classList.add(cszin);
            document.getElementById(obj + tsc + 1).classList.add(cszin);
            document.getElementById(obj + tsc).classList.add(cszin);
            document.getElementById(obj + 1).classList.add(cszin);
            document.getElementById(obj + tsc + 2).classList.remove("hatter");
            document.getElementById(obj + tsc + 1).classList.remove("hatter");
            document.getElementById(obj + tsc).classList.remove("hatter");
            document.getElementById(obj + 1).classList.remove("hatter");
            break;
    }
}

document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 39:
            //console.log(birany);
            //alert('right');
            if (!pause) {
                cirany = 2;
            }
            break;
        case 40:
            //alert('down');
            if (!pause) {
                lefele();
            }
            break;
        case 37:
            //console.log(birany);
            //alert('left');
            if (!pause) {
                cirany = 4;
            }
            break;
        case 38:
            if (tryforg == 0)
                forgatas();
            break;
        case 27:
            if (pause) pause = false;
            else pause = true;
            break;
    }
    mozgas();
});

document.addEventListener('keyup', function(event) {
    cirany = 0;
});

function start() {

    var tablem2 = document.getElementById("mutato");
    var rowCount2 = tablem2.rows.length;
    for (var i = 0; i < rowCount2; i++) {
        tablem2.deleteRow(0);
    }

    for (var i = 0; i < tsr2; i++) { //Amekkora a táblázat, annyiszor fut le (3-szor alapból)
        var newRow2 = tb2.insertRow(); //Új sor
        tr2[i] = new Array(tsc2); //Táblázat mentése [1][2]

        for (var j = 0; j < tsc2; j++) { //Oszlopok

            tr2[i][j] = newRow2.insertCell(); //Cella létrehozása
            tr2[i][j].id = "mutato" + parseInt(i * tsc2 + j); //Cella id-je (jelenlegi sor * táblázat nagysága + jelenlegi oszlop a sorban)
            tr2[i][j].style.padding = "0px 0px 0px 0px"; //0px padding
            tr2[i][j].style.margin = "0px 0px 0px 0px"; //0px padding

            var imageCell = document.createElement("img"); //Kép létrehozása
            imageCell.src = './trans.png'; //Beállítja a létrehozott kép forrását a most következő 'darab'-ra
            imageCell.style.display = "block";

            var contCell = document.createElement("div");
            contCell.classList.add("container");

            var centCell = document.createElement("div");
            centCell.classList.add("centered");

            tr2[i][j].style.backgroundColor = '#7a7a7a';
            tr2[i][j].classList.add("hatter");

            if (i == 0) {
                tr2[i][j].style.backgroundColor = '#3d3d3d';
                tr2[i][j].classList.add("oldal2");
                tr2[i][j].classList.add("fenti2");
                tr2[i][j].classList.remove("hatter");
            } else if (i == tsr2 - 1) {
                tr2[i][j].style.backgroundColor = '#3d3d3d';
                tr2[i][j].classList.add("oldal2");
                tr2[i][j].classList.add("also2");
                tr2[i][j].classList.remove("hatter");
            }

            for (var a = 0; a < tsc2; a++) {
                if (j == tsc2 * a) {
                    tr2[i][j].style.backgroundColor = '#3d3d3d';
                    tr2[i][j].classList.add("oldal2");
                    //tr[i][j].classList.add("baloldal");
                    tr2[i][j].classList.remove("hatter");
                } else if (j == tsc2 * a - 1) {
                    tr2[i][j].style.backgroundColor = '#3d3d3d';
                    tr2[i][j].classList.add("oldal2");
                    //tr[i][j].classList.add("jobboldal");
                    tr2[i][j].classList.remove("hatter");
                }
            }

            tr2[i][j].appendChild(contCell);
            contCell.appendChild(imageCell);
            contCell.appendChild(centCell);
        }
    }




    var tablem = document.getElementById("main");
    var rowCount = tablem.rows.length;
    for (var i = 0; i < rowCount; i++) {
        tablem.deleteRow(0);
    }

    for (var i = 0; i < tsr; i++) { //Amekkora a táblázat, annyiszor fut le (3-szor alapból)
        var newRow = tb.insertRow(); //Új sor
        tr[i] = new Array(tsr); //Táblázat mentése [1][2]

        for (var j = 0; j < tsc; j++) { //Oszlopok

            tr[i][j] = newRow.insertCell(); //Cella létrehozása
            tr[i][j].id = parseInt(i * tsc + j); //Cella id-je (jelenlegi sor * táblázat nagysága + jelenlegi oszlop a sorban)
            tr[i][j].style.padding = "0px 0px 0px 0px"; //0px padding
            tr[i][j].style.margin = "0px 0px 0px 0px"; //0px padding

            var imageCell = document.createElement("img"); //Kép létrehozása
            imageCell.src = './trans.png'; //Beállítja a létrehozott kép forrását a most következő 'darab'-ra
            imageCell.style.display = "block";

            var contCell = document.createElement("div");
            contCell.classList.add("container");

            var centCell = document.createElement("div");
            centCell.classList.add("centered");

            tr[i][j].style.backgroundColor = '#7a7a7a';
            tr[i][j].classList.add("hatter");

            if (i == 0) {
                tr[i][j].style.backgroundColor = '#3d3d3d';
                tr[i][j].classList.add("oldal");
                tr[i][j].classList.add("fenti");
                tr[i][j].classList.remove("hatter");
            } else if (i == tsr - 1) {
                tr[i][j].style.backgroundColor = '#3d3d3d';
                tr[i][j].classList.add("oldal");
                tr[i][j].classList.add("also");
                tr[i][j].classList.remove("hatter");
            }

            for (var a = 0; a < tsr; a++) {
                if (j == tsr * a) {
                    tr[i][j].style.backgroundColor = '#3d3d3d';
                    tr[i][j].classList.add("oldal");
                    //tr[i][j].classList.add("baloldal");
                    tr[i][j].classList.remove("hatter");
                } else if (j == tsc * a - 1) {
                    tr[i][j].style.backgroundColor = '#3d3d3d';
                    tr[i][j].classList.add("oldal");
                    //tr[i][j].classList.add("jobboldal");
                    tr[i][j].classList.remove("hatter");
                }
            }

            tr[i][j].appendChild(contCell);
            contCell.appendChild(imageCell);
            contCell.appendChild(centCell);
        }
    }
    begin();
}

var tryforg = 0;
var forg = 0;

function forgatas() {
    var newceses = [];

    var canset = 1;

    if (ctype == 0) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg + tsc + tsc);
                newceses.push(ceses[1] + tryforg + tsc);
                newceses.push(ceses[1] + tryforg - tsc + tsc);
                newceses.push(ceses[1] + tryforg + tsc - 1 + tsc);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 1;
            }
            newceses = [];
            return;
        } else if (forg == 1) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[3] + tryforg - 1 - tsc);
                newceses.push(ceses[3] + tryforg);
                newceses.push(ceses[3] + tryforg + 1);
                newceses.push(ceses[3] + tryforg - 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 2;
            }
            newceses = [];
            return;
        } else if (forg == 2) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[0] + tryforg - tsc);
                newceses.push(ceses[0] + tryforg);
                newceses.push(ceses[0] + tryforg + tsc);
                newceses.push(ceses[0] + tryforg - tsc + 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    tryforg = 0;
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 3;
            }
            newceses = [];
            return;
        } else if (forg == 3) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - 1 - tsc + 1);
                newceses.push(ceses[1] + tryforg + 1 - tsc + 1);
                newceses.push(ceses[1] + tryforg - tsc + 1);
                newceses.push(ceses[1] + tryforg + 1 + tsc - tsc + 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 0;
            }
            newceses = [];
            return;
        }
    } else if (ctype == 1) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            newceses.push(ceses[1] + tryforg - tsc + tsc);
            newceses.push(ceses[1] + tryforg + tsc);
            newceses.push(ceses[1] + tryforg + tsc + tsc);
            newceses.push(ceses[1] + tryforg - tsc - 1 + tsc);

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 1;
            }
            newceses = [];
            return;
        } else if (forg == 1) {
            //console.log("forg1 " + tryforg);
            newceses.push(ceses[3] + tryforg + 1 + tsc + tsc);
            newceses.push(ceses[3] + tryforg + tsc + tsc);
            newceses.push(ceses[3] + tryforg + 1 - tsc + tsc + tsc);
            newceses.push(ceses[3] + tryforg - 1 + tsc + tsc);

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 2;
            }
            newceses = [];
            return;
        } else if (forg == 2) {
            //console.log("forg1 " + tryforg);
            newceses.push(ceses[3] + tryforg - tsc - tsc);
            newceses.push(ceses[3] + tryforg - tsc);
            newceses.push(ceses[3] + tryforg + tsc - tsc);
            newceses.push(ceses[3] + tryforg + tsc + 1 - tsc);

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 3;
            }
            newceses = [];
            return;
        } else if (forg == 3) {
            //console.log("forg1 " + tryforg);
            newceses.push(ceses[3] + tryforg - 1 + tsc - tsc);
            newceses.push(ceses[3] + tryforg + 1 - tsc);
            newceses.push(ceses[3] + tryforg - 1 - tsc);
            newceses.push(ceses[3] + tryforg - tsc);

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 0;
            }
            newceses = [];
            return;
        }
    } else if (ctype == 2) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[2] + tryforg - 1);
                newceses.push(ceses[2] + tryforg);
                newceses.push(ceses[2] + tryforg + 1);
                newceses.push(ceses[2] + tryforg + 2);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 1;
            }
            newceses = [];
            return;
        } else if (forg == 1) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - tsc - tsc);
                newceses.push(ceses[1] + tryforg - tsc);
                newceses.push(ceses[1] + tryforg + tsc - tsc);
                newceses.push(ceses[1] + tryforg + (tsc * 2) - tsc);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 0;
            }
            newceses = [];
            return;
        }
    } else if (ctype == 4) {

        if (forg == 0) {
            if (tryforg == 0) {
                newceses.push(ceses[3] + tryforg - tsc - 1);
                newceses.push(ceses[3] + tryforg);
                newceses.push(ceses[3] + tryforg - 1);
                newceses.push(ceses[3] + tryforg + tsc);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 1;
            }
            newceses = [];
            return;
        } else if (forg == 1) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[2] + tryforg + tsc);
                newceses.push(ceses[2] + tryforg - 1 + tsc);
                newceses.push(ceses[2] + tryforg - tsc + tsc);
                newceses.push(ceses[2] + tryforg - tsc + 1 + tsc);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 0;
            }
            newceses = [];
            return;
        }
    } else if (ctype == 5) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[0] + tryforg + tsc);
                newceses.push(ceses[0] + tryforg + 1 - tsc);
                newceses.push(ceses[0] + tryforg);
                newceses.push(ceses[0] + tryforg + 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 1;
            }
            newceses = [];
            return;
        } else if (forg == 1) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[0] + tryforg - tsc);
                newceses.push(ceses[0] + tryforg);
                newceses.push(ceses[0] + tryforg - tsc - 1);
                newceses.push(ceses[0] + tryforg + 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 0;
            }
            newceses = [];
            return;
        }
    } else if (ctype == 6) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - tsc);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg + tsc);
                newceses.push(ceses[1] + tryforg + 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 1;
            }
            newceses = [];
            return;
        } else if (forg == 1) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg + 1);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg + tsc);
                newceses.push(ceses[1] + tryforg - 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 2;
            }
            newceses = [];
            return;
        } else if (forg == 2) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - tsc);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg + tsc);
                newceses.push(ceses[1] + tryforg - 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 3;
            }
            newceses = [];
            return;
        } else if (forg == 3) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg + 1);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg - tsc);
                newceses.push(ceses[1] + tryforg - 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also") || document.getElementById(newceses[i]).classList.contains("oldal")) {
                    canset = 0;
                    //console.log("van benne");
                }
            }
            if (canset == 1) {
                ceses = newceses;
                tryforg = 0;
                forg = 0;
            }
            newceses = [];
            return;
        }
    }
}

var ccount = 0;

function updateBack() {


    for (var i = 0; i < tsc * tsr; i++) {

        document.getElementById(i).childNodes[0].childNodes[1].classList.remove("jelzokor");
        document.getElementById(i).childNodes[0].childNodes[1].classList.remove("piros");
        document.getElementById(i).childNodes[0].childNodes[1].classList.remove("vkek");
        document.getElementById(i).childNodes[0].childNodes[1].classList.remove("vzold");
        document.getElementById(i).childNodes[0].childNodes[1].classList.remove("citrom");
        document.getElementById(i).childNodes[0].childNodes[1].classList.remove("narancs");
        document.getElementById(i).childNodes[0].childNodes[1].classList.remove("skek");
        document.getElementById(i).childNodes[0].childNodes[1].classList.remove("rozsaszin");
        document.getElementById(i).childNodes[0].childNodes[1].classList.remove("lila");
        document.getElementById(i).childNodes[0].childNodes[1].classList.remove("szold");

        if (document.getElementById(i).classList.contains("jelzo")) {
            //document.getElementById(i).style.backgroundColor = '#FF0000';
            document.getElementById(i).childNodes[0].childNodes[1].classList.add("jelzokor");
        }

        document.getElementById(i).classList.remove("jelzo");

        if (document.getElementById(i).classList.contains("piros")) {
            document.getElementById(i).childNodes[0].childNodes[1].classList.add("piros");
        }

        if (document.getElementById(i).classList.contains("vkek")) {
            document.getElementById(i).childNodes[0].childNodes[1].classList.add("vkek");
        }

        if (document.getElementById(i).classList.contains("vzold")) {
            document.getElementById(i).childNodes[0].childNodes[1].classList.add("vzold");
        }

        if (document.getElementById(i).classList.contains("citrom")) {
            document.getElementById(i).childNodes[0].childNodes[1].classList.add("citrom");
        }

        if (document.getElementById(i).classList.contains("narancs")) {
            document.getElementById(i).childNodes[0].childNodes[1].classList.add("narancs");
        }

        if (document.getElementById(i).classList.contains("skek")) {
            document.getElementById(i).childNodes[0].childNodes[1].classList.add("skek");
        }

        if (document.getElementById(i).classList.contains("rozsaszin")) {
            document.getElementById(i).childNodes[0].childNodes[1].classList.add("rozsaszin");
        }

        if (document.getElementById(i).classList.contains("lila")) {
            document.getElementById(i).childNodes[0].childNodes[1].classList.add("lila");
        }

        if (document.getElementById(i).classList.contains("szold")) {
            document.getElementById(i).childNodes[0].childNodes[1].classList.add("szold");
        }

    }

    for (var j = 0; j < ceses.length; j++) {
        for (var a = 0; a < tsc * tsr; a++) {
            if (!document.getElementById(a).classList.contains("oldal"))
                document.getElementById(a).classList.add("hatter");
            if (!document.getElementById(a).classList.contains("leesett")) {
                document.getElementById(a).classList.remove(cszin);
                document.getElementById(a).classList.remove("jelzo");
            }
        }
        for (var a = 0; a < ceses.length; a++) {
            document.getElementById(ceses[a]).classList.add(cszin);
            document.getElementById(ceses[a]).classList.remove("hatter");
        }
    }
}
var csorcount = 0;
var upcount = 0;

function lefele() {
    szin = cszin;
    for (var j = 0; j < ceses.length; j++) {
        if (document.getElementById(ceses[j] + tsc).classList.contains("leesett") || document.getElementById(ceses[j] + tsc).classList.contains("oldal")) {
            for (var i = 0; i < ceses.length; i++) {
                document.getElementById(ceses[i]).classList.add("leesett");
                document.getElementById(ceses[i]).classList.remove("hatter");
            }
            ceses = [];
            forg = 0;
            tryforg = 0;
            addElement();
        }
    }
    for (var j = 0; j < ceses.length; j++) {
        ceses[j] = ceses[j] + tsc;
    }
    for (var i = 0; i < tsr; i++) {
        for (var j = 0; j < tsc; j++) {
            if (tr[i][j].classList.contains("leesett"))
                csorcount += 1;
        }
        if (csorcount >= 13) {
            for (var j = 0; j < tsc; j++) {
                for (var a = 0; a < tsc; a++) {
                    document.getElementById(i * tsc + j - a * tsc).classList = document.getElementById(i * tsc + j - tsc - a * tsc).classList;
                }
            }
        }
        csorcount = 0;
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < tsc; j++) {
            //console.log(tr[i][j].classList.contains("leesett"));
            if (tr[i][j].classList.contains("leesett"))
                upcount += 1;
            //telesor[i] += 1;
        }
        if (upcount >= 2) {
            //console.log("vege");
            clearInterval(binterval);
            clearInterval(einterval);
            start();
        }
        //console.log("Sor: " + tsr + " szam: " + upcount);
        upcount = 0;
    }
}

var mehetlentebb = 1;

function lefelejelzo() {

    jelzo = [];
    mehetlentebb = 1;
    //mehetlentebb = 1;

    for (var a = 0; a < ceses.length; a++) {
        jelzo.push(ceses[a]);
    }

    for (var a = 0; a < tsr; a++) {

        for (var i = 0; i < jelzo.length; i++) {
            for (var j = 0; j < ceses.length; j++) {
                if (document.getElementById(jelzo[i] + tsc).classList.contains("leesett") || document.getElementById(jelzo[i] + tsc).classList.contains("also"))
                    mehetlentebb = 0;
            }
        }

        if (mehetlentebb == 1) {
            for (var j = 0; j < jelzo.length; j++) {
                jelzo[j] = jelzo[j] + tsc;
            }
            //console.log(mehetlentebb);
            szin = cszin;
            for (var j = 0; j < jelzo.length; j++) {
                if (document.getElementById(jelzo[j] + tsc) != null) {
                    if (document.getElementById(jelzo[j] + tsc).classList.contains("leesett") || document.getElementById(jelzo[j] + tsc).classList.contains("also")) {
                        for (var i = 0; i < jelzo.length; i++) {
                            document.getElementById(jelzo[i]).classList.add("jelzo");
                            document.getElementById(jelzo[i]).classList.remove("hatter");
                        }
                        //console.log(jelzo);
                        return;
                    }
                }
            }
        }
    }
}

function mozgas() {

    birany = "";

    for (var j = 0; j < ceses.length; j++) {
        if ( /*document.getElementById(ceses[j] + tsc + 1).classList.contains("leesett") || document.getElementById(ceses[j] + tsc + 1).classList.contains("oldal") || */ document.getElementById(ceses[j] + 1).classList.contains("leesett") || document.getElementById(ceses[j] + 1).classList.contains("oldal")) {
            birany += "2";
        }
        if ( /*document.getElementById(ceses[j] + tsc - 1).classList.contains("leesett") || document.getElementById(ceses[j] + tsc - 1).classList.contains("oldal") || */ document.getElementById(ceses[j] - 1).classList.contains("leesett") || document.getElementById(ceses[j] - 1).classList.contains("oldal")) {
            birany += "4";
        }
    }

    if (cirany == 2) {
        if (!birany.includes("2"))
            for (var j = 0; j < ceses.length; j++)
                ceses[j] = ceses[j] + 1;
    } else if (cirany == 4) {
        for (var j = 0; j < ceses.length; j++)
            if (!birany.includes("4"))
                ceses[j] = ceses[j] - 1;
    }
}

start();