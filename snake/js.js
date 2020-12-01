var ts = 20;
var tr = new Array(ts);
var tb = document.getElementById('main'); //Táblázat

let chely = [];

let endgame = 0;
var gameover = 0;

let setirany = 1;
let cirany = 1;

var pause = false;

//  0
//3 s 1
//  2

document.addEventListener('keydown', function(event) {
    //alert(event.keyCode);
    switch (event.keyCode) {
        case 38:
            //alert('up');
            if (!pause)
                if (cirany != 2)
                    setirany = 0;
            break;
        case 39:
            //alert('right');
            if (!pause)
                if (cirany != 3)
                    setirany = 1;
            break;
        case 40:
            //alert('down');
            if (!pause)
                if (cirany != 0)
                    setirany = 2;
            break;
        case 37:
            //alert('left');
            if (!pause)
                if (cirany != 1)
                    setirany = 3;
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

    for (var i = 0; i < ts; i++) { //Amekkora a táblázat, annyiszor fut le (3-szor alapból)
        var newRow = tb.insertRow(); //Új sor
        tr[i] = new Array(ts); //Táblázat mentése [1][2]

        for (var j = 0; j < ts; j++) { //Oszlopok

            tr[i][j] = newRow.insertCell(); //Cella létrehozása
            tr[i][j].id = parseInt(i * ts + j); //Cella id-je (jelenlegi sor * táblázat nagysága + jelenlegi oszlop a sorban)
            tr[i][j].style.padding = "0px 0px 0px 0px"; //0px padding
            tr[i][j].style.margin = "0px 0px 0px 0px"; //0px padding

            var imageCell = document.createElement("img"); //Kép létrehozása
            imageCell.src = './trans.png'; //Beállítja a létrehozott kép forrását a most következő 'darab'-ra
            imageCell.style.display = "block";


            tr[i][j].style.backgroundColor = '#4f9e00';

            tr[i][j].appendChild(imageCell);
        }
    }
    begin();
}

function begin() {

    for (var i = 0; i < ts * ts; i++) {
        document.getElementById(i).childNodes[0].style.class = '';
    }

    cirany = 1;

    endgame = 0;
    gameover = 0;
    setirany = 1;

    chely = [];

    chely.push(parseInt(150));
    chely.push(parseInt(151));
    chely.push(parseInt(152));

    randomAlma();
    randomBomba();
    randomBomba();
    randomBomba();
}

function randomAlma() {
    var rnd = Math.floor(Math.random() * ts * ts - 1);
    var cclass = document.getElementById(rnd).style.class;
    if (cclass == 'kigyo' || cclass == 'bomba' || cclass == 'alma') {
        randomAlma();
        return;
    }
    var almahely = rnd;
    document.getElementById(almahely).style.class = 'alma';
}

function randomBomba() {
    var rnd = Math.floor(Math.random() * ts * ts - 1);
    var cclass = document.getElementById(rnd).style.class;
    if (cclass == 'kigyo' || cclass == 'bomba' || cclass == 'alma') {
        randomBomba();
        return;
    }
    var bombahely = rnd;
    document.getElementById(bombahely).style.class = 'bomba';
}

function removeBomba() {
    let bombak = [];
    for (var i = 0; i < ts * ts; i++) {
        if (document.getElementById(i).style.class == 'bomba') {
            bombak.push(i);
        }
    }

    var rnd = Math.floor(Math.random() * bombak.length);
    var bombahely = rnd;

    document.getElementById(bombak[rnd]).style.class = '';
}

function gamemain() {

    switch (setirany) {
        case 0:
            cirany = 0;
            break;
        case 1:
            cirany = 1;
            break;
        case 2:
            cirany = 2;
            break;
        case 3:
            cirany = 3;
            break;
    }

    for (var i = 0; i < ts * ts; i++) {
        if (document.getElementById(i).childNodes[0].style.class == 'kigyo') {
            document.getElementById(i).childNodes[0].style.backgroundColor = '#2f5e00';
        } else if (document.getElementById(i).style.class == 'bomba') {
            document.getElementById(i).childNodes[0].style.backgroundColor = '#000000';
        } else if (document.getElementById(i).style.class == 'alma') {
            document.getElementById(i).childNodes[0].style.backgroundColor = '#FF0000';
        } else {
            document.getElementById(i).childNodes[0].style.backgroundColor = '#4f9e00';
        }
    }

    if (document.getElementById(chely[chely.length - 1]).style.class == 'alma') {
        document.getElementById(chely[chely.length - 1]).style.class = '';
        if (chely[0] + 1 == chely[1]) {
            chely.unshift(chely[0]);
        }
        if (chely[0] - 1 == chely[1]) {
            chely.unshift(chely[0]);
        }
        if (chely[0] - ts == chely[1]) {
            chely.unshift(chely[0]);
        }
        if (chely[0] + ts == chely[1]) {
            chely.unshift(chely[0]);
        }
        randomAlma();
        removeBomba();
    } else if (document.getElementById(chely[chely.length - 1]).style.class == 'bomba') {
        if (chely.length <= 3) {
            endgame = 1;
            return;
        }
        document.getElementById(chely[chely.length - 1]).style.class = '';
        document.getElementById(chely[0]).childNodes[0].style.class = '';
        document.getElementById(chely[1]).childNodes[0].style.class = '';
        chely.shift();
        chely.shift();
        randomBomba();
    }

    switch (cirany) {

        case 0:
            var cchely = chely[chely.length - 1] - ts;
            var cclast = chely[0];
            if (cchely < 0) {
                endgame = 1;
                return;
            }

            if (document.getElementById(cchely).childNodes[0].style.class == 'kigyo') {
                endgame = 1;
                return;
            }
            document.getElementById(cclast).childNodes[0].style.class = 'hatter';
            document.getElementById(cchely).childNodes[0].style.class = 'kigyo';
            chely.push(cchely);
            chely.shift();
            break;
        case 1:
            var cchely = chely[chely.length - 1] + 1;
            var cclast = chely[0];
            for (var i = 0; i < ts; i++) {
                if (cchely == i * ts) {
                    endgame = 1;
                    return;
                }
            }

            if (document.getElementById(cchely).childNodes[0].style.class == 'kigyo') {
                endgame = 1;
                return;
            }
            document.getElementById(cclast).childNodes[0].style.class = 'hatter';
            document.getElementById(cchely).childNodes[0].style.class = 'kigyo';
            chely.push(cchely);
            chely.shift();
            break;
        case 2:
            var cchely = chely[chely.length - 1] + ts;
            var cclast = chely[0];
            if (cchely > ts * ts) {
                endgame = 1;
                return;
            }

            if (document.getElementById(cchely).childNodes[0].style.class == 'kigyo') {
                endgame = 1;
                return;
            }
            document.getElementById(cclast).childNodes[0].style.class = 'hatter';
            document.getElementById(cchely).childNodes[0].style.class = 'kigyo';
            chely.push(cchely);
            chely.shift();
            break;
        case 3:
            var cchely = chely[chely.length - 1] - 1;
            var cclast = chely[0];
            for (var i = 0; i < ts; i++) {
                if (cchely == i * ts - 1) {
                    endgame = 1;
                    return;
                }
            }

            if (document.getElementById(cchely).childNodes[0].style.class == 'kigyo') {
                endgame = 1;
                return;
            }
            document.getElementById(cclast).childNodes[0].style.class = 'hatter';
            document.getElementById(cchely).childNodes[0].style.class = 'kigyo';
            chely.push(cchely);
            chely.shift();
            break;
    }
}

start();

binterval = setInterval(function() {
    if (pause == false) {
        randomBomba();
    }
}, 3000);

cinterval = setInterval(function() {
    if (pause == false) {
        gamemain();

        console.log(chely.length);

        if (gameover == 1) {
            start();
        }

        if (endgame == 1) {
            gameover = 1;
        }
    }
}, 100);