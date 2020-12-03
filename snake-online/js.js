var ts = 40;
var tr = new Array(ts);
var tb = document.getElementById('main'); //Táblázat

let chely = [];

let chely2 = [];

let endgame = 0;
var gameover = 0;

let setirany = 1;
let cirany = 1;

var pause = true;

var pontszam = document.getElementById("pontszam");
var pontok = 0;

var enidm = Math.floor(Math.random() * 10000000);

var ckigyo2 = [];

var connections = 0;

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

document.getElementById("all").style.display = "none";

name = getCookie("nickname");

if (name != "null") {
    console.log(name);
    document.getElementById("usernametext").value = name;
}


var szoba = "ioauzgfoiaegfoigaesoif";

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

document.getElementById("createRoom").addEventListener("click", function() {
    //createRoom(document.getElementById("usernametext").value);
    name = document.getElementById("usernametext").value;
    setCookie('nickname', name, 14);
    createRoom();
})

document.getElementById("joinRoom").addEventListener("click", function() {
    //createRoom(document.getElementById("usernametext").value);
    name = document.getElementById("joinRoomtext").value;
    joinRoom(name);
})

function createRoom() {
    document.getElementById("all").style.display = "block";
    document.getElementById("login").style.display = "none";

    szoba = makeid(5);

    appendMessage("System: Szoba kódja: " + szoba.toString());

    console.log(szoba);

    startsocket();
}

function joinRoom(cszoba) {
    document.getElementById("all").style.display = "block";
    document.getElementById("login").style.display = "none";

    szoba = cszoba;

    startsocket()
}

host = false;

var started = false;

//http://snakeee-online.herokuapp.com:3000/socket.io/socket.io.js

const socket = io.connect('https://snakeee-online.herokuapp.com')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}

function startsocket() {

    socket.emit('new-user', szoba + " " + name);

    socket.on('chat-message', data => {
        appendMessage(`${data.name}: ${data.message}`)
    })

    socket.on('vege-broadcast', data => {
        alert("Gratulálok, Nyertél!");
        //start();
        history.go();
    })

    socket.on('start-game', data => {
        console.log("start-game");
        if (data.message == szoba) {
            console.log("elindult");
            host = false;
            start();
        }
    })

    socket.on('bomba-spawn', data => {
        if (data.message.startsWith(szoba)) {
            document.getElementById(data.message.toString().split(" ")[1]).style.class = 'bomba';
        }
    })

    socket.on('bomba-remove', data => {
        if (data.message.startsWith(szoba)) {
            document.getElementById(data.message.toString().split(" ")[1]).style.class = '';
        }
    })

    socket.on('alma-spawn', data => {
        if (data.message.startsWith(szoba)) {
            console.log("new alma");
            for (var i = 0; i < ts * ts; i++) {
                if (document.getElementById(i).style.class == 'alma')
                    document.getElementById(i).style.class = '';
            }
            document.getElementById(data.message.toString().split(" ")[1]).style.class = 'alma';
        }
    })

    socket.on('kigyo-message', data => {
        if (data.message.startsWith(szoba)) {
            console.log("kigyo kaptam");
            chely2 = [];
            var splitfirst = data.message.toString().split(" ");
            var splitmsg = splitfirst[1].split(",");
            for (var i = 0; i < splitmsg.length; i++) {
                chely2.push(splitmsg[i]);
            }
        }
    })

    socket.on('user-connected', name => {
        if (name.startsWith(szoba)) {
            appendMessage(`${name} Csatlakozott`);
            host = true;
            socket.emit('startgame', szoba);
            started = true;
            start();
        }
    })

    socket.on('user-disconnected', name => {
        if (name.startsWith(szoba))
            appendMessage(`${name} Kilépett`)
    })

    socket.on('tulsokplayer', name => {
        alert("Túl sok játékos van ebben a szobában");
        history.go();
    })
}

//  0
//3 s 1
//  2

document.addEventListener('keydown', function(event) {
    //alert(event.keyCode);
    switch (event.keyCode) {
        case 38:
            //alert('up');
            pause = false;
            if (!pause)
                if (cirany != 2)
                    setirany = 0;
            break;
        case 39:
            //alert('right');
            pause = false;
            if (!pause)
                if (cirany != 3)
                    setirany = 1;
            break;
        case 40:
            //alert('down');
            pause = false;
            if (!pause)
                if (cirany != 0)
                    setirany = 2;
            break;
        case 37:
            //alert('left');
            pause = false;
            if (!pause)
                if (cirany != 1)
                    setirany = 3;
            break;
            /*case 27:
                if (pause) pause = false;
                else pause = true;
                break;*/
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

    binterval = setInterval(function() {
        if (host)
            if (started)
                randomBomba();
    }, 3000);

    cinterval = setInterval(function() {
        updateBack();
        if (pause == false) {
            gamemain();
            socket.emit('kigyohely', szoba + " " + chely);

            //console.log(chely.length);



            /*if (gameover == 1) {
                start();
            }*/

            if (endgame == 1) {
                socket.emit('vege', name);
                alert("Sajnos Vesztettél :/");
                history.go();
                endgame = 0;
            }
        }
    }, 150);

    begin();
}

function begin() {

    for (var i = 0; i < ts * ts; i++) {
        document.getElementById(i).childNodes[0].style.class = '';
    }

    cirany = 1;
    cirany2 = 1;

    endgame = 0;
    gameover = 0;
    setirany = 1;
    setirany2 = 3;

    chely = [];

    pontok = 3;

    pontszam.innerHTML = "Kukac Hossza: " + chely.length + "<br>Pálya Nagysága: " + ts + "x" + ts;

    var spawnhely = Math.floor(Math.random() * ts * ts - 1);

    chely.push(spawnhely);
    chely.push(spawnhely + 1);
    chely.push(spawnhely + 2);

    pontok = 3;

    pontszam.innerHTML = "Kukac Hossza: " + chely2.length + "<br>Pálya Nagysága: " + ts + "x" + ts;
    if (host)
        if (started)
            randomAlma();
        //randomBomba();
        //randomBomba();
        //randomBomba();
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
    socket.emit("almaspawn", szoba + " " + almahely);
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
    socket.emit("bombaspawn", szoba + " " + bombahely);
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
    socket.emit("bombaremove", szoba + " " + bombak[rnd]);
}

function updateBack() {
    for (var i = 0; i < ts * ts; i++) {
        if (document.getElementById(i).childNodes[0].style.class == 'kigyo2') {
            document.getElementById(i).childNodes[0].style.class = 'hatter';
        }

        //chely2 = localStorage.getItem("chely2");

        for (var b = 0; b < chely2.length; b++) {
            document.getElementById(chely2[b]).childNodes[0].style.class = "kigyo2";
        }

        if (document.getElementById(i).childNodes[0].style.class == 'kigyo') {
            document.getElementById(i).childNodes[0].style.backgroundColor = '#2f5e00';
        } else if (document.getElementById(i).childNodes[0].style.class == 'kigyo2') {
            document.getElementById(i).childNodes[0].style.backgroundColor = '#0377fc';
        } else if (document.getElementById(i).style.class == 'bomba') {
            document.getElementById(i).childNodes[0].style.backgroundColor = '#000000';
        } else if (document.getElementById(i).style.class == 'alma') {
            document.getElementById(i).childNodes[0].style.backgroundColor = '#FF0000';
        } else {
            document.getElementById(i).childNodes[0].style.backgroundColor = '#4f9e00';
        }
    }
}

function gamemain() {

    //console.log(localStorage.getItem("myname"));

    /*var send = enidm + " hely: " + chely + " mozgás";
    webconnection.publish({
        channel: channel,
        message: send
    });*/

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
        pontszam.innerHTML = "Kukac Hossza: " + chely.length + "<br>Pálya Nagysága: " + ts + "x" + ts;
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
        socket.emit("bombaremove", chely[chely.length - 1]);
        randomBomba();
        pontszam.innerHTML = "Kukac Hossza: " + chely.length + "<br>Pálya Nagysága: " + ts + "x" + ts;
    }

    switch (cirany) {

        case 0:
            var cchely = chely[chely.length - 1] - ts;
            var cclast = chely[0];
            if (cchely < 0) {
                endgame = 1;
                return;
            }

            if (document.getElementById(cchely).childNodes[0].style.class == 'kigyo' || document.getElementById(cchely).childNodes[0].style.class == 'kigyo2') {
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

            if (document.getElementById(cchely).childNodes[0].style.class == 'kigyo' || document.getElementById(cchely).childNodes[0].style.class == 'kigyo2') {
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

            if (document.getElementById(cchely).childNodes[0].style.class == 'kigyo' || document.getElementById(cchely).childNodes[0].style.class == 'kigyo2') {
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

            if (document.getElementById(cchely).childNodes[0].style.class == 'kigyo' || document.getElementById(cchely).childNodes[0].style.class == 'kigyo2') {
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