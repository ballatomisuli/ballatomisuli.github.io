var tsr = 30;
var tsc = 15;
var tr = new Array(tsr);
var tb = document.getElementById('main'); //Táblázat

var ceses = [];
var obj = 0;

let cszin = "smi";

let newobj = 0;

let endgame = 0;
var gameover = 0;

let setirany = 1;
let cirany = 1;

let birany = "";
var lentebbment = 0;

var pause = false;

var type;

var cspeed = 150;

var setdown = 0;

var cankey = 1;

//var tryforg = 0;

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

    endgame = 0;

    cinterval = setInterval(function() {
        if (pause == false) {

            console.log("Blockolt irány: " + birany + " Szin: " + cszin + " ceses: " + ceses + " type: " + type);
            gamemain(cszin);

            if (endgame == 1) {
                clearInterval(cinterval)
            }
        }
    }, 150);

}

function addElement() {
    ceses = null;
    ceses = [];
    //type = 5;
    type = Math.floor(Math.random() * 6);
    var rszin = Math.floor(Math.random() * 8);
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
            cszin = "lila";
            break;
        case 7:
            cszin = "szold";
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

document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
        case 40:
            //console.log("keyup")
            //alert('down');
            if (!pause) {

                clearInterval(cinterval);

                cinterval = setInterval(function() {
                    if (pause == false) {
                        for (var j = 0; j < ceses.length; j++) {
                            if (document.getElementById(ceses[j] + tsc).classList.contains("leesett") || document.getElementById(ceses[j] + tsc).classList.contains("oldal")) {
                                for (var i = 0; i < ceses.length; i++) {
                                    document.getElementById(ceses[i]).classList.add("leesett");
                                }
                                ceses = [];
                                addElement();
                            }
                        }


                        //console.log("Blockolt irány: " + birany + " Szin: " + cszin + " ceses: " + ceses + " type: " + type);
                        gamemain(cszin);
                        if (endgame == 1) {
                            clearInterval(cinterval)
                            start();
                        }
                    }
                }, 150);
            }
            setdown = 1;
            break;
    }
});

document.addEventListener('keydown', function(event) {
    for (var j = 0; j < ceses.length; j++) {
        if (document.getElementById(ceses[j] + tsc + 1).classList.contains("leesett") || document.getElementById(ceses[j] + tsc + 1).classList.contains("oldal")) {
            birany += "2";
        }
        if (document.getElementById(ceses[j] + tsc - 1).classList.contains("leesett") || document.getElementById(ceses[j] + tsc - 1).classList.contains("oldal")) {
            birany += "4";
        }
    }
    switch (event.keyCode) {
        case 39:
            console.log(birany);
            //alert('right');
            if (!pause) {
                if (!birany.includes("2"))
                    cirany = 2;
                else
                    cirany = 0;
                birany = "";
            }
            break;
        case 40:
            //alert('down');
            if (!pause) {
                if (setdown == 1) {
                    clearInterval(cinterval);

                    cinterval = setInterval(function() {
                        if (pause == false) {
                            for (var j = 0; j < ceses.length; j++) {
                                if (document.getElementById(ceses[j] + tsc).classList.contains("leesett") || document.getElementById(ceses[j] + tsc).classList.contains("oldal")) {
                                    for (var i = 0; i < ceses.length; i++) {
                                        document.getElementById(ceses[i]).classList.add("leesett");
                                    }
                                    ceses = [];
                                    addElement();
                                }
                            }

                            //console.log("Blockolt irány: " + birany + " Szin: " + cszin + " ceses: " + ceses + " type: " + type);
                            setdown = 0;
                            gamemain(cszin);

                            if (endgame == 1) {
                                clearInterval(cinterval)
                                start();
                            }
                        }
                    }, 50);
                }
            }
            break;
        case 37:
            //console.log(birany);
            //alert('left');
            if (!pause) {
                if (!birany.includes("4"))
                    cirany = 4;
                else
                    cirany = 0;
                birany = "";
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
});

function start() {

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
                    tr[i][j].classList.add("baloldal");
                    tr[i][j].classList.remove("hatter");
                } else if (j == tsc * a - 1) {
                    tr[i][j].style.backgroundColor = '#3d3d3d';
                    tr[i][j].classList.add("oldal");
                    tr[i][j].classList.add("jobboldal");
                    tr[i][j].classList.remove("hatter");
                }
            }

            tr[i][j].appendChild(imageCell);
        }
    }
    begin();
}

var tryforg = 0;
var forg = 0;

function forgatas() {
    var newceses = [];

    if (type == 0) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[2] + tryforg + tsc);
                newceses.push(ceses[2] + tryforg);
                newceses.push(ceses[2] + tryforg - tsc);
                newceses.push(ceses[2] + tryforg + tsc - 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                if (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    console.log('jobboldal')
                    tryforg -= 1;
                    forg = 1;
                    newceses = [];
                    newceses.push(ceses[2] + tryforg + tsc);
                    newceses.push(ceses[2] + tryforg);
                    newceses.push(ceses[2] + tryforg - tsc);
                    newceses.push(ceses[2] + tryforg + tsc - 1);
                }
                if (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 1;
                    newceses = [];
                    newceses.push(ceses[2] + tryforg + tsc);
                    newceses.push(ceses[2] + tryforg);
                    newceses.push(ceses[2] + tryforg - tsc);
                    newceses.push(ceses[2] + tryforg + tsc - 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 1;
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
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= 1;
                    forg = 2;
                    newceses.push(ceses[3] + tryforg - 1 - tsc);
                    newceses.push(ceses[3] + tryforg);
                    newceses.push(ceses[3] + tryforg + 1);
                    newceses.push(ceses[3] + tryforg - 1);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 2;
                    newceses.push(ceses[3] + tryforg - 1 - tsc);
                    newceses.push(ceses[3] + tryforg);
                    newceses.push(ceses[3] + tryforg + 1);
                    newceses.push(ceses[3] + tryforg - 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 2;
            return;
        } else if (forg == 2) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - tsc);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg + tsc);
                newceses.push(ceses[1] + tryforg - tsc + 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= 1;
                    forg = 3;
                    newceses.push(ceses[1] + tryforg - tsc);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + tsc);
                    newceses.push(ceses[1] + tryforg - tsc + 1);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 3;
                    newceses.push(ceses[1] + tryforg - tsc);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + tsc);
                    newceses.push(ceses[1] + tryforg - tsc + 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 3;
            return;
        } else if (forg == 3) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - 1);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg + 1);
                newceses.push(ceses[1] + tryforg + 1 + tsc);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= 1;
                    forg = 0;
                    newceses.push(ceses[1] + tryforg - 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg + 1 + tsc);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 0;
                    newceses.push(ceses[1] + tryforg - 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg + 1 + tsc);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 0;
            return;
        }
    } else if (type == 1) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[2] + tryforg + tsc);
                newceses.push(ceses[2] + tryforg);
                newceses.push(ceses[2] + tryforg - tsc);
                newceses.push(ceses[2] + tryforg - tsc - 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                if (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    console.log('jobboldal')
                    tryforg -= 1;
                    forg = 1;
                    newceses = [];
                    newceses.push(ceses[3] + tryforg + tsc);
                    newceses.push(ceses[3] + tryforg);
                    newceses.push(ceses[3] + tryforg - tsc);
                    newceses.push(ceses[3] + tryforg - tsc - 1);
                }
                if (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 1;
                    newceses = [];
                    newceses.push(ceses[3] + tryforg + tsc);
                    newceses.push(ceses[3] + tryforg);
                    newceses.push(ceses[3] + tryforg - tsc);
                    newceses.push(ceses[3] + tryforg - tsc - 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 1;
            return;
        } else if (forg == 1) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[3] + tryforg + 1 - tsc);
                newceses.push(ceses[3] + tryforg);
                newceses.push(ceses[3] + tryforg + 1);
                newceses.push(ceses[3] + tryforg - 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= 1;
                    forg = 2;
                    newceses.push(ceses[3] + tryforg + 1 - tsc);
                    newceses.push(ceses[3] + tryforg);
                    newceses.push(ceses[3] + tryforg + 1);
                    newceses.push(ceses[3] + tryforg - 1);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 2;
                    newceses.push(ceses[3] + tryforg + 1 - tsc);
                    newceses.push(ceses[3] + tryforg);
                    newceses.push(ceses[3] + tryforg + 1);
                    newceses.push(ceses[3] + tryforg - 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 2;
            return;
        } else if (forg == 2) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - tsc);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg + tsc);
                newceses.push(ceses[1] + tryforg + tsc + 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= 1;
                    forg = 3;
                    newceses.push(ceses[3] + tryforg - tsc);
                    newceses.push(ceses[3] + tryforg);
                    newceses.push(ceses[3] + tryforg + tsc);
                    newceses.push(ceses[3] + tryforg + tsc + 1);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 3;
                    newceses.push(ceses[3] + tryforg - tsc);
                    newceses.push(ceses[3] + tryforg);
                    newceses.push(ceses[3] + tryforg + tsc);
                    newceses.push(ceses[3] + tryforg + tsc + 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 3;
            return;
        } else if (forg == 3) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - 1);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg + 1);
                newceses.push(ceses[1] + tryforg - 1 + tsc);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= 1;
                    forg = 0;
                    newceses.push(ceses[1] + tryforg - 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg - 1 + tsc);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 0;
                    newceses.push(ceses[1] + tryforg - 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg - 1 + tsc);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 0;
            return;
        }
    } else if (type == 2) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[2] + tryforg - 1);
                newceses.push(ceses[2] + tryforg);
                newceses.push(ceses[2] + tryforg + 1);
                newceses.push(ceses[2] + tryforg + 2);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                if (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    console.log('jobboldal')
                    tryforg -= 1;
                    forg = 0;
                    newceses = [];
                    newceses.push(ceses[1] + tryforg - 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg + 2);
                }
                if (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 0;
                    newceses = [];
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg - 1);
                    newceses.push(ceses[1] + tryforg - 2);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 1;
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
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= (1 * tsc);
                    forg = 1;
                    newceses.push(ceses[1] + tryforg - tsc - tsc);
                    newceses.push(ceses[1] + tryforg - tsc);
                    newceses.push(ceses[1] + tryforg + tsc - tsc);
                    newceses.push(ceses[1] + tryforg + (tsc * 2) - tsc);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += (1 * tsc);
                    forg = 1;
                    newceses.push(ceses[1] + tryforg + (tsc) - tsc);
                    newceses.push(ceses[1] + tryforg - tsc);
                    newceses.push(ceses[1] + tryforg - (tsc) - tsc);
                    newceses.push(ceses[1] + tryforg - (tsc * 2) - tsc);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 0;
            return;
        }
    } else if (type == 4) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - tsc - 1);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg - 1);
                newceses.push(ceses[1] + tryforg + tsc);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                if (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    console.log('jobboldal')
                    tryforg -= 1;
                    forg = 0;
                    newceses = [];
                    newceses.push(ceses[1] + tryforg - 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg + 2);
                }
                if (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 0;
                    newceses = [];
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg - 1);
                    newceses.push(ceses[1] + tryforg - 2);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 1;
            return;
        } else if (forg == 1) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - 1);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg - tsc);
                newceses.push(ceses[1] + tryforg - tsc + 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= (1 * tsc);
                    forg = 1;
                    newceses.push(ceses[1] + tryforg - tsc - tsc);
                    newceses.push(ceses[1] + tryforg - tsc);
                    newceses.push(ceses[1] + tryforg + tsc - tsc);
                    newceses.push(ceses[1] + tryforg + (tsc * 2) - tsc);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += (1 * tsc);
                    forg = 1;
                    newceses.push(ceses[1] + tryforg + (tsc) - tsc);
                    newceses.push(ceses[1] + tryforg - tsc);
                    newceses.push(ceses[1] + tryforg - (tsc) - tsc);
                    newceses.push(ceses[1] + tryforg - (tsc * 2) - tsc);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 0;
            return;
        }
    } else if (type == 5) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[0] + tryforg);
                newceses.push(ceses[0] + tryforg + 1 - tsc);
                newceses.push(ceses[0] + tryforg + tsc);
                newceses.push(ceses[0] + tryforg + 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                if (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    console.log('jobboldal')
                    tryforg -= 1;
                    forg = 1;
                    newceses = [];
                    newceses.push(ceses[0] + tryforg);
                    newceses.push(ceses[0] + tryforg + 1 - tsc);
                    newceses.push(ceses[0] + tryforg + tsc);
                    newceses.push(ceses[0] + tryforg + 1);
                }
                if (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 1;
                    newceses = [];
                    newceses.push(ceses[0] + tryforg);
                    newceses.push(ceses[0] + tryforg + 1 - tsc);
                    newceses.push(ceses[0] + tryforg + tsc);
                    newceses.push(ceses[0] + tryforg + 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 1;
            return;
        } else if (forg == 1) {
            //console.log("forg1 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[0] + tryforg);
                newceses.push(ceses[0] + tryforg + 1);
                newceses.push(ceses[0] + tryforg - tsc);
                newceses.push(ceses[0] + tryforg - tsc - 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= 1;
                    forg = 0;
                    newceses.push(ceses[0] + tryforg);
                    newceses.push(ceses[0] + tryforg + 1);
                    newceses.push(ceses[0] + tryforg - tsc);
                    newceses.push(ceses[0] + tryforg - tsc - 1);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 0;
                    newceses.push(ceses[0] + tryforg);
                    newceses.push(ceses[0] + tryforg + 1);
                    newceses.push(ceses[0] + tryforg - tsc);
                    newceses.push(ceses[0] + tryforg - tsc - 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 0;
            return;
        }
    } else if (type == 6) {

        if (forg == 0) {
            //console.log("forg0 " + tryforg);
            if (tryforg == 0) {
                newceses.push(ceses[1] + tryforg - tsc);
                newceses.push(ceses[1] + tryforg);
                newceses.push(ceses[1] + tryforg + tsc);
                newceses.push(ceses[1] + tryforg + 1);
            }

            for (var i = 0; i < newceses.length; i++) {
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                if (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    console.log('jobboldal')
                    tryforg -= 1;
                    forg = 1;
                    newceses = [];
                    newceses.push(ceses[1] + tryforg - tsc);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + tsc);
                    newceses.push(ceses[1] + tryforg + 1);
                }
                if (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 1;
                    newceses = [];
                    newceses.push(ceses[1] + tryforg - tsc);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + tsc);
                    newceses.push(ceses[1] + tryforg + 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 1;
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
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= 1;
                    forg = 2;
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + tsc);
                    newceses.push(ceses[1] + tryforg - 1);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 2;
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg + tsc);
                    newceses.push(ceses[1] + tryforg - 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 2;
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
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= 1;
                    forg = 3;
                    newceses.push(ceses[3] + tryforg - tsc);
                    newceses.push(ceses[3] + tryforg);
                    newceses.push(ceses[3] + tryforg + tsc);
                    newceses.push(ceses[3] + tryforg + tsc + 1);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 3;
                    newceses.push(ceses[3] + tryforg - tsc);
                    newceses.push(ceses[3] + tryforg);
                    newceses.push(ceses[3] + tryforg + tsc);
                    newceses.push(ceses[3] + tryforg + tsc + 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 3;
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
                if (document.getElementById(newceses[i]).classList.contains("leesett") || document.getElementById(newceses[i]).classList.contains("also")) {
                    tryforg = 0;
                    forg = 0;
                    return;
                }
                while (document.getElementById(newceses[i]).classList.contains("jobboldal")) {
                    tryforg -= 1;
                    forg = 0;
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg - tsc);
                    newceses.push(ceses[1] + tryforg - 1);
                }
                while (document.getElementById(newceses[i]).classList.contains("baloldal")) {
                    tryforg += 1;
                    forg = 0;
                    newceses.push(ceses[1] + tryforg + 1);
                    newceses.push(ceses[1] + tryforg);
                    newceses.push(ceses[1] + tryforg - tsc);
                    newceses.push(ceses[1] + tryforg - 1);
                }
            }
            ceses = newceses;
            tryforg = 0;
            forg = 0;
            return;
        }
    }
}

var csorcount = 0;
var upcount = 0;

function gamemain(szin) {

    for (var i = 0; i < tsr; i++) {
        for (var j = 0; j < tsc; j++) {
            //console.log(tr[i][j].classList.contains("leesett"));
            if (tr[i][j].classList.contains("leesett"))
                csorcount += 1;
            //telesor[i] += 1;
        }
        if (csorcount >= 13) {
            for (var j = 0; j < tsc; j++) {
                for (var a = 0; a < tsc; a++) {
                    //document.getElementById(i * tsc + j).id = document.getElementById(i * tsc - tsc + j).id;
                    //for (var a = 0; a < tsc; a++) {
                    document.getElementById(i * tsc + j - a * tsc).classList = document.getElementById(i * tsc + j - tsc - a * tsc).classList;
                }
                //}
                //document.getElementById(i * tsc + j).innerHTML = document.getElementById(i * tsc - tsc + j).innerHTML;
                //document.getElementById(i * tsc + j).style = document.getElementById(i * tsc - tsc + j).style;
                //document.getElementById(i * tsc + j).innerHTML = "asd";
            }
        }
        //console.log("Sor: " + tsr + " szam: " + csorcount);
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
            console.log("vege");
            endgame = 1;
        }
        console.log("Sor: " + tsr + " szam: " + upcount);
    }
    upcount = 0;

    for (var i = 0; i < tsc * tsr; i++) {

        if (document.getElementById(i).classList.contains("hatter"))
            document.getElementById(i).style.backgroundColor = '#7a7a7a';

        if (document.getElementById(i).classList.contains("piros"))
            document.getElementById(i).style.backgroundColor = '#E40244';

        if (document.getElementById(i).classList.contains("vkek"))
            document.getElementById(i).style.backgroundColor = '#42F7F7';

        if (document.getElementById(i).classList.contains("vzold"))
            document.getElementById(i).style.backgroundColor = '#42F742';

        if (document.getElementById(i).classList.contains("citrom"))
            document.getElementById(i).style.backgroundColor = '#FFFF44';

        if (document.getElementById(i).classList.contains("narancs"))
            document.getElementById(i).style.backgroundColor = '#FF8800';

        if (document.getElementById(i).classList.contains("skek"))
            document.getElementById(i).style.backgroundColor = '#003DE4';

        if (document.getElementById(i).classList.contains("rozsaszin"))
            document.getElementById(i).style.backgroundColor = '#FF44FF';

        if (document.getElementById(i).classList.contains("lila"))
            document.getElementById(i).style.backgroundColor = '#9749E5';

        if (document.getElementById(i).classList.contains("szold"))
            document.getElementById(i).style.backgroundColor = '#007C01';

    }

    //if (tsc * tsr - tsc - tsc > ceses[0]) {
    for (var j = 0; j < ceses.length; j++) {
        for (var a = 0; a < tsc * tsr; a++) {
            if (!document.getElementById(a).classList.contains("oldal"))
                document.getElementById(a).classList.add("hatter");
            if (!document.getElementById(a).classList.contains("leesett"))
                document.getElementById(a).classList.remove(szin);
        }
        //console.log(ceses.length)
        if (cirany == 0) {

            ceses[j] = ceses[j] + tsc;
        } else if (cirany == 2) {
            ceses[j] = ceses[j] + tsc + 1;
        } else if (cirany == 4) {
            ceses[j] = ceses[j] + tsc - 1;
        }
        for (var a = 0; a < ceses.length; a++) {
            document.getElementById(ceses[a]).classList.add(szin);
            document.getElementById(ceses[a]).classList.remove("hatter");
        }
    }

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

    /*var tablem = document.getElementById("main");
    var rowCount = tablem.rows.length;
    for (var i = 0; i < rowCount; i++) {
        document.getElementById("main").row
    }*/
    //console.log("" + telesor[28]);

    //tr[1][1].style.class

    cirany = 0;

    cankey = 1;

}

start();