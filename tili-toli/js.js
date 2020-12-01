//document.getElementById("ktest").width = "1920px";
//document.getElementById("ktest").height = "1080px";
//image1.src = "kep1.png";
//image2.src = "kep2.png";
//image3.src = "kep3.png";

//---------Változók létrehozása---------
//---------Változók létrehozása---------

//Képek
//var image = new Image();
var imgnew = new Image(); //Felvágott kép
var ures = new Image(); //Üres kép
ures.src = 'ures.png'; //Üres kép

var ta = 3; //Táblázat nagysága (3x3)

var tr = new Array(ta); //Táblázatok sorai, oszlopjai mentése változókba [1][2] = 1-es sor, 2-es oszlop

var imagePieces = ""; //A felvágott kép darabjai mentése array-be [0], [1], [2] stb, ""-re van beállítva alapból, hogy tudja, hogy nincs beállítva még kép

var lepesek = []; //Lépések, keverésnél, lépésnél, menti a 'volt üres kép' id-ját, és az 'új üres kép' id-ját, majd kirakásnál, kiveszi az adatokat, és visszafelé 'lejátsza'

var cphoto = 0; //Ha 0, akkor már meglévő képet használunk, ha 1, akkor új képet importáltunk be

let imgData; //Beimportált kép átméretezve, ezt fogja használni ezután, ha nem választunk ki beépített képet, vagy importálunk be másikat

var tb = document.getElementById('main'); //Táblázat
var kc = document.getElementById('kc'); //Táblázat 'div'-je

//Canvas
var canvasn = document.createElement('canvas');
var ctx = canvasn.getContext('2d');
canvasn.width = 772;
canvasn.height = 432;


//A 'Kép Feltöltése' gomb megnyomása után futtatja le
let imgInput = document.getElementById('fileInput');
imgInput.addEventListener('change', function(e) {
    if (e.target.files) {
        let imageFile = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onloadend = function(e) {
            var myImage = new Image();
            myImage.src = e.target.result;
            myImage.onload = function(ev) {
                canvasn.width = myImage.width;
                canvasn.height = myImage.height;
                ctx.drawImage(myImage, 0, 0);
                imgData = canvasn.toDataURL("image/jpeg", 0.75);
                document.getElementById("ktest").src = imgData;
                document.getElementById("ktest").onload = updateImageSize2();
            }
        }
    }
});

//---------Funkciók---------
//---------Funkciók---------

//Kép1-re kattintásnál
function kep1() {
    document.getElementById("ktest").src = "kep1.png";
    canvasn.width = 772;
    canvasn.height = 432;
    updateImageSize2();
}

//Kép2-re kattintásnál
function kep2() {
    document.getElementById("ktest").src = "kep2.png";
    canvasn.width = 772;
    canvasn.height = 432;
    updateImageSize2();
}

//Kép3-ra kattintásnál
function kep3() {
    document.getElementById("ktest").src = "kep3.png";
    canvasn.width = 772;
    canvasn.height = 432;
    updateImageSize2();
}

//'Kép Felvágása' slider húzásánál fut le
var updateImageSize = function(val) {
    lepesek = [];
    ta = parseInt(val);
    if (imagePieces != "") {
        imagePieces = [];
        cutImageUp();
    }
};

//Fájl kiválasztása
function chooseFile() {
    document.getElementById("fileInput").click();
}

//Ha új képet / meglévő képet kiválasztunk, ez fut le
var updateImageSize2 = function() {
    lepesek = [];

    imagePieces = [];
    var newImg = [];
    var width = canvasn.width;
    var height = canvasn.height / canvasn.width * width;
    offset = (height - canvasn.height) / 2;
    console.log(": " + document.getElementById("ktest"));
    ctx.drawImage(document.getElementById("ktest"), 0, -offset, width, height);
    newImg.push(canvasn.toDataURL());
    imgnew = new Image();
    imgnew.onload = cutImageUp;
    if (cphoto == 1) {
        imgnew.src = imgData;
        cphoto = 0;
    } else
        imgnew.src = newImg[0];
};

//Ugyanakkora legyen a kép 'div' nagysága, mint a képünk + 15 pixel

//kc.style.width = parseInt(imgnew.width + 15) + "px";
//kc.style.height = parseInt(imgnew.height + 30) + "px";

//Kép felvágása, annyi felé, ahány a 'ta' változó (táblázat nagysága)
function cutImageUp() {

    //Kitörli a meglévő sorokat
    var tablem = document.getElementById("main");
    var rowCount = tablem.rows.length;
    for (var i = 0; i < rowCount; i++) {
        tablem.deleteRow(0);
    }

    //Beállítva a 'darabok'-ek nagyságát
    widthOfOnePiece = imgnew.width / ta;
    heightOfOnePiece = imgnew.height / ta;

    //Felvágja a képet, majd menti az 'imagePieces' változóba
    for (var x = 0; x < ta; ++x) {
        for (var y = 0; y < ta; ++y) {
            var canvas = document.createElement('canvas');
            canvas.width = widthOfOnePiece;
            canvas.height = heightOfOnePiece;
            var context = canvas.getContext('2d');
            context.drawImage(imgnew, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, widthOfOnePiece, heightOfOnePiece);
            imagePieces.push(canvas.toDataURL());
        }
    }

    //Táblázat létrehozása, képek beállítása a megfelelő cellába
    var cpiece = 0;
    for (var i = 0; i < ta; i++) { //Amekkora a táblázat, annyiszor fut le (3-szor alapból)
        var newRow = tb.insertRow(); //Új sor
        tr[i] = new Array(ta); //Táblázat mentése [1][2]

        for (var j = 0; j < ta; j++) { //Oszlopok

            tr[i][j] = newRow.insertCell(); //Cella létrehozása
            tr[i][j].id = i * ta + j; //Cella id-je (jelenlegi sor * táblázat nagysága + jelenlegi oszlop a sorban)
            tr[i][j].style.padding = "0px 0px 0px 0px"; //0px padding

            var imageCell = document.createElement("img"); //Kép létrehozása
            imageCell.src = imagePieces[cpiece]; //Beállítja a létrehozott kép forrását a most következő 'darab'-ra
            imageCell.style.display = "block"; //A képek után ne rakjon üres helyet
            cpiece += ta; //Soronként működik, ezt nehéz lenne leírni
            if (cpiece != ta * ta + ta - 1)
                tr[i][j].appendChild(imageCell);
            else {
                console.log("cpiece last")
                var imageCellu = document.createElement("img");
                imageCellu.src = ures.src;
                tr[i][j].appendChild(imageCellu);
                tr[i][j].style.class = "ures";
                imageCellu.style.display = "block";
                imageCellu.width = widthOfOnePiece - 1;
                imageCellu.height = heightOfOnePiece - 1;
            }
            if (cpiece == ta * ta + i) {
                cpiece = i + 1;
            }
            tr[i][j].onclick = function() { step(this); }; //A képre kattintásnál, futtasa le a 'lépést'
        }
    }
}

//1 4 7
//2 5 8
//3 6 9

//---------Kirakás---------
//---------Kirakás---------

//Timer, animálás miatt
function kirakas() {
    var counter = 1;
    var i = setInterval(function() {
        kirakasi(counter);

        counter++;
        if (counter == lepesek.length + 1) {
            clearInterval(i);
        }
    }, 50);
}

//Kirakás main-je
function kirakasi(i) {
    //for (var i = 0; i < lepesek.length; i++) {
    alepes = lepesek[lepesek.length - i].toString().split(","); //kiveszi az adatokat, alepes[0] = új üres-sel, alepes[1] = volt üres-sel
    console.log("új üres: " + alepes[0] + " volt üres: " + alepes[1]); //Debug-hoz

    curesn = document.getElementById(alepes[1]);
    cures = alepes[0];

    //Kitörli a jelenlegi üres táblát
    while (document.getElementById(cures).lastElementChild) {
        document.getElementById(cures).removeChild(document.getElementById(cures).lastElementChild);
    }
    //Beállítja a fontos dolgokat
    curesn.style.class = "ures";
    var imageCelln = document.createElement("img");
    imageCelln.src = curesn.childNodes[0].src;
    imageCelln.style.display = "block";
    document.getElementById(cures).appendChild(imageCelln);
    document.getElementById(cures).style.class = "";

    //Üres kép beállítása
    var imageCell = document.createElement("img");
    imageCell.src = ures.src;
    while (curesn.lastElementChild) {
        curesn.removeChild(curesn.lastElementChild);
    }
    curesn.appendChild(imageCell);
    imageCell.style.display = "block";
    imageCell.width = widthOfOnePiece;
    imageCell.height = heightOfOnePiece;
    //}
}

//---------Keverés---------
//---------Keverés---------

var keveresspeed = 15; //millisec
var keveresszam = 50 * ta; //millisec * táblázat nagysága (minél nagyobb a táblázat, annál több keverés legyen)

//Timer, animáláshoz
function keveres() {
    var counter = 0;
    var i = setInterval(function() {
        keveresi();

        counter++;
        if (counter === keveresszam) {
            clearInterval(i);
        }
    }, keveresspeed);
}

var lastrnd = 0; //Legutóbbi lépés (ne legyen ugyanaz a lépés visszafele)

//Keverés main-je
function keveresi() {

    var canswitch = 1; //Lehetséges-e, a lépés
    var cures; //Jelenlegi üres
    for (var i = 0; i < ta; i++) {
        for (var j = 0; j < ta; j++) {
            if (tr[i][j].style.class == "ures")
                cures = i * ta + j; //Jelenlegi üres kiszámolása, beállítása
        }
    }

    var rnd = Math.floor(Math.random() * 4); //Random lépés

    //   0
    // 3 x 1
    //   2
    //x = üres rész

    //Ha 0, Felfele lép (megnézi hogy lehetséges e felfele lépni)
    //Ha 1, Jobbra lép (megnézi hogy lehetséges e jobbra lépni)
    //Ha 2, Lefele lép (megnézi hogy lehetséges e lefele lépni)
    //Ha 3, Balra lép (megnézi hogy lehetséges e balra lépni)

    switch (lastrnd) { //Ha a legutóbbi lépés, megegyezik a mostani lépés fordítottjával, sorsoljon újat, ezzel elkerülve, hogy sokszor kb ugyanazt keverje
        case 0:
            if (rnd == lastrnd + 2) {
                console.log("erre nem lépni: " + parseInt(lastrnd + 2));
                rnd = Math.floor(Math.random() * 4);
                return;
            }
            break;
        case 1:
            if (rnd == lastrnd + 2) {
                console.log("erre nem lépni: " + parseInt(lastrnd + 2));
                rnd = Math.floor(Math.random() * 4);
                return;
            }
            break;
        case 2:
            if (rnd == lastrnd - 2) {
                console.log("erre nem lépni: " + parseInt(lastrnd - 2));
                rnd = Math.floor(Math.random() * 4);
                return;
            }
            break;
        case 3:
            if (rnd == lastrnd - 2) {
                console.log("erre nem lépni: " + parseInt(lastrnd - 2));
                rnd = Math.floor(Math.random() * 4);
                return;
            }
            break;
    }

    //Ha kisorsolta a lépést, megnézi, mit sorsolt
    switch (rnd) {
        case 0: //Ha Felfele
            console.log("keverve: " + rnd + " ures: " + cures)
            if (ta * ta > cures - ta && cures - ta > 0) { //Ha lehetséges a lépés
                curesn = document.getElementById(cures - ta);

                while (document.getElementById(cures).lastElementChild) {
                    document.getElementById(cures).removeChild(document.getElementById(cures).lastElementChild);
                }
                curesn.style.class = "ures";
                var imageCelln = document.createElement("img");
                imageCelln.src = curesn.childNodes[0].src;
                imageCelln.style.display = "block";
                document.getElementById(cures).appendChild(imageCelln);
                document.getElementById(cures).style.class = "";

                var imageCell = document.createElement("img");
                imageCell.src = ures.src;
                while (curesn.lastElementChild) {
                    curesn.removeChild(curesn.lastElementChild);
                }
                curesn.appendChild(imageCell);
                imageCell.style.display = "block";
                imageCell.width = widthOfOnePiece;
                imageCell.height = heightOfOnePiece;
                lepesek.push(curesn.id + "," + cures);
            } else { //Ha nem lehetséges a lépés, sorsoljon új számot (keverési folyamat elölről)
                keveresi();
            }
            break;
        case 1: //Ha Jobbra
            console.log("keverve: " + rnd + " ures: " + cures)
            if (ta * ta > cures + 1 && cures + 1 >= 0) { //Ha lehetséges a lépés
                for (var i = 0; i < ta; i++) {
                    for (var j = 0; j < ta; j++) {
                        if (cures + 1 == i * ta) {
                            canswitch = 0;
                        }
                    }
                }

                if (canswitch == 1) {

                    curesn = document.getElementById(cures + 1);

                    while (document.getElementById(cures).lastElementChild) {
                        document.getElementById(cures).removeChild(document.getElementById(cures).lastElementChild);
                    }
                    curesn.style.class = "ures";
                    var imageCelln = document.createElement("img");
                    imageCelln.src = curesn.childNodes[0].src;
                    imageCelln.style.display = "block";
                    document.getElementById(cures).appendChild(imageCelln);
                    document.getElementById(cures).style.class = "";

                    var imageCell = document.createElement("img");
                    imageCell.src = ures.src;
                    while (curesn.lastElementChild) {
                        curesn.removeChild(curesn.lastElementChild);
                    }
                    curesn.appendChild(imageCell);
                    imageCell.style.display = "block";
                    imageCell.width = widthOfOnePiece;
                    imageCell.height = heightOfOnePiece;
                    lepesek.push(curesn.id + "," + cures);
                }
            } else { //Ha nem lehetséges a lépés, sorsoljon új számot (keverési folyamat elölről)
                keveresi();
            }
            break;
        case 2: //Ha Lefele
            console.log("keverve: " + rnd + " üres: " + cures)
            if (ta * ta > cures + ta && cures + ta > 0) { //Ha lehetséges a lépés
                curesn = document.getElementById(cures + ta);

                console.log("átrakva: " + cures + " " + curesn)

                while (document.getElementById(cures).lastElementChild) {
                    document.getElementById(cures).removeChild(document.getElementById(cures).lastElementChild);
                }
                curesn.style.class = "ures";
                var imageCelln = document.createElement("img");
                imageCelln.src = curesn.childNodes[0].src;
                imageCelln.style.display = "block";
                document.getElementById(cures).appendChild(imageCelln);
                document.getElementById(cures).style.class = "";

                var imageCell = document.createElement("img");
                imageCell.src = ures.src;
                while (curesn.lastElementChild) {
                    curesn.removeChild(curesn.lastElementChild);
                }
                curesn.appendChild(imageCell);
                imageCell.style.display = "block";
                imageCell.width = widthOfOnePiece;
                imageCell.height = heightOfOnePiece;
                lepesek.push(curesn.id + "," + cures);
            } else { //Ha nem lehetséges a lépés, sorsoljon új számot (keverési folyamat elölről)
                keveresi();
            }
            break;
        case 3: //Ha balra
            console.log("keverve: " + rnd + " ures: " + cures)
            if (ta * ta > cures - 1 && cures - 1 >= 0) { //Ha lehetséges a lépés
                for (var i = 0; i < ta; i++) {
                    for (var j = 0; j < ta; j++) {
                        if (cures - 1 == i * ta - 1) {
                            canswitch = 0;
                        }
                    }
                }

                if (canswitch == 1) {

                    curesn = document.getElementById(cures - 1);

                    while (document.getElementById(cures).lastElementChild) {
                        document.getElementById(cures).removeChild(document.getElementById(cures).lastElementChild);
                    }
                    curesn.style.class = "ures";
                    var imageCelln = document.createElement("img");
                    imageCelln.src = curesn.childNodes[0].src;
                    imageCelln.style.display = "block";
                    document.getElementById(cures).appendChild(imageCelln);
                    document.getElementById(cures).style.class = "";

                    var imageCell = document.createElement("img");
                    imageCell.src = ures.src;
                    while (curesn.lastElementChild) {
                        curesn.removeChild(curesn.lastElementChild);
                    }
                    curesn.appendChild(imageCell);
                    imageCell.style.display = "block";
                    imageCell.width = widthOfOnePiece;
                    imageCell.height = heightOfOnePiece;
                    lepesek.push(curesn.id + "," + cures);
                }
            } else { //Ha nem lehetséges a lépés, sorsoljon új számot (keverési folyamat elölről)
                keveresi();
            }
            break;

    }
    console.log("Lépve erre: " + rnd, " Lastrnd: " + lastrnd);
    //lepesek.push(rnd);
    lastrnd = rnd; //Menti, hogy mi volt a mostani lépés, ezzel elkerülve, hogy visszafele lépjen
}

//---------Lépés---------
//---------Lépés---------

//Lépés main-je, olyankor fut le, mikor rákattintunk egy képre
function step(item) {
    var cid = parseInt(item.id); //Jelenlegi cella id-je
    var cures; //Jelenelgi üres
    var canswitch = 1; //Lehetséges-e, a lépés

    for (var i = 0; i < ta; i++) {
        for (var j = 0; j < ta; j++) {
            if (tr[i][j].style.class == "ures")
                cures = i * ta + j //Jelenlegi üres, kiszámolása, beállítása
        }
    }

    console.log("jelenleg: " + cures) //Debug-hoz

    if (cid + 1 == cures) { //A jelenlegitől, jobbra van az üres cella

        console.log("+1");

        for (var i = 0; i < ta; i++) {
            for (var j = 0; j < ta; j++) {
                if (cid + 1 == i * ta) {
                    canswitch = 0; //Ha a Jelenlegitől, a jobbra lévő üres cella, egyezik az első oszloppal, akkor oda nem lehet lépni
                }
            }
        }

        if (canswitch == 1) { //Lehetséges a lépés

            while (document.getElementById(cures).lastElementChild) {
                document.getElementById(cures).removeChild(document.getElementById(cures).lastElementChild);
            }
            item.style.class = "ures";
            var imageCelln = document.createElement("img");
            imageCelln.src = item.childNodes[0].src;
            imageCelln.style.display = "block";
            document.getElementById(cures).appendChild(imageCelln);
            document.getElementById(cures).style.class = "";

            var imageCell = document.createElement("img");
            imageCell.src = ures.src;
            while (item.lastElementChild) {
                item.removeChild(item.lastElementChild);
            }
            item.appendChild(imageCell);
            imageCell.style.display = "block";
            imageCell.width = widthOfOnePiece;
            imageCell.height = heightOfOnePiece;
            lepesek.push(item.id + "," + cures);
        }
        canswitch = 1;
    }

    if (cid - 1 == cures) { //Jobbra lépés, ugyanúgy, mint az előzőnél

        console.log("-1");

        for (var i = 0; i < ta; i++) {
            for (var j = 0; j < ta; j++) {
                if (cid - 1 == i * ta - 1) {
                    canswitch = 0;
                }
            }
        }

        if (canswitch == 1) {

            while (document.getElementById(cures).lastElementChild) {
                document.getElementById(cures).removeChild(document.getElementById(cures).lastElementChild);
            }
            item.style.class = "ures";
            var imageCelln = document.createElement("img");
            imageCelln.src = item.childNodes[0].src;
            imageCelln.style.display = "block";
            document.getElementById(cures).appendChild(imageCelln);
            document.getElementById(cures).style.class = "";

            var imageCell = document.createElement("img");
            imageCell.src = ures.src;
            while (item.lastElementChild) {
                item.removeChild(item.lastElementChild);
            }
            imageCell.width = widthOfOnePiece;
            imageCell.height = heightOfOnePiece;
            item.appendChild(imageCell);
            imageCell.style.display = "block";
            lepesek.push(item.id + "," + cures); //Lépések mentése
        }
        canswitch = 1;
    }

    if (cid + ta == cures) { //Lefele lépés, megnézi, hogy a jelenlegi cella + táblázat nagysága (ezzel lépve, pontosan egy sor-t), megegyezik-e, az üres cellával

        console.log("+" + ta);
        while (document.getElementById(cures).lastElementChild) {
            document.getElementById(cures).removeChild(document.getElementById(cures).lastElementChild);
        }
        item.style.class = "ures";
        var imageCelln = document.createElement("img");
        imageCelln.src = item.childNodes[0].src;
        imageCelln.style.display = "block";
        document.getElementById(cures).appendChild(imageCelln);
        document.getElementById(cures).style.class = "";

        var imageCell = document.createElement("img");
        imageCell.src = ures.src;
        while (item.lastElementChild) {
            item.removeChild(item.lastElementChild);
        }
        imageCell.width = widthOfOnePiece;
        imageCell.height = heightOfOnePiece;
        item.appendChild(imageCell);
        imageCell.style.display = "block";
        lepesek.push(item.id + "," + cures); //Lépések mentése
    }

    if (cid - ta == cures) { //Lefele lépés, megnézi, hogy a jelenlegi cella - táblázat nagysága (ezzel lépve, visszafele pontosan egy sor-t), megegyezik-e, az üres cellával

        console.log("+" + ta);
        while (document.getElementById(cures).lastElementChild) {
            document.getElementById(cures).removeChild(document.getElementById(cures).lastElementChild);
        }
        item.style.class = "ures";
        var imageCelln = document.createElement("img");
        imageCelln.src = item.childNodes[0].src;
        imageCelln.style.display = "block";
        document.getElementById(cures).appendChild(imageCelln);
        document.getElementById(cures).style.class = "";

        var imageCell = document.createElement("img");
        imageCell.src = ures.src;
        while (item.lastElementChild) {
            item.removeChild(item.lastElementChild);
        }
        imageCell.width = widthOfOnePiece;
        imageCell.height = heightOfOnePiece;
        item.appendChild(imageCell);
        imageCell.style.display = "block";
        lepesek.push(item.id + "," + cures); //Lépések mentése
    }
}