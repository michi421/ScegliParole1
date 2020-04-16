//cose che puoi modificare
var imagenames = ["piano", "piede", "pieno", "piuma", "ruota", "sedia", "siepe", "suola", "suono", "suora", "viale", "viola", "zaino"];     //Nome Immagine
var name1 = ["il piano", "il piede", "il pieno", "la piuma", "la ruota", "la sedia", "la siepe", "la suola", "il suono", "la suora", "il viale", "il viola", "lo zaino"];     //Risposta corretta
var name2 = ["piap", "peep", "vuoto", "mattone", "quadrato", "sees", "muro", "NO", "earrape", "prete", "superale", "voov", "zaaz"];    //Risposta sbagliata 1
var name3 = ["piap", "peep", "vuoto", "mattone", "quadrato", "sees", "muro", "NO", "earrape", "prete", "superale", "voov", "zaaz"];    //Risposta sbagliata 2

//Da qui in poi c'è il sistema da non modificare
var lastrng = 0;
var lastarr;
var imagerng;
var correct;
var ImageNumber = imagenames.length;


function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function shufflearray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function newimage() {
    document.getElementById('1').style.backgroundColor = "#FFF";
    document.getElementById('2').style.backgroundColor = "#FFF";
    document.getElementById('3').style.backgroundColor = "#FFF";
    while (true) {
        imagerng = Math.floor(Math.random() * 100);

        if (imagerng <= ImageNumber) {
            if (imagerng != lastrng) {
                if (imagerng != undefined) {
                    lastrng = imagerng;
                    var urltocheck = './res/images/' + imagenames[imagerng] + '.png'
                    if(UrlExists(urltocheck)){
                        document.getElementById('image').setAttribute("src", urltocheck);

                        var elems = [name1[imagerng], name2[imagerng], name3[imagerng]];
                            
                        var arrrng = [0, 1, 2]

                        arrrng = shufflearray(arrrng);


                        while(lastarr == arrrng){
                            arrrng = shufflearray(arrrng);
                        }
                        console.log(arrrng);

                        lastarr = arrrng;

                        document.getElementById('1').innerHTML = elems[arrrng[0]];
                        document.getElementById('2').innerHTML = elems[arrrng[1]];
                        document.getElementById('3').innerHTML = elems[arrrng[2]];
                    }
                    else {
                        newimage();
                        break;
                    }
                    break;
                }
            }
        }
    }
}

function check(src) {
    document.getElementById('1').disabled = true;
    document.getElementById('2').disabled = true;
    document.getElementById('3').disabled = true;
    if (src.innerHTML == name1[imagerng]) {
        correct = true;
        src.style.backgroundColor = "#008000";
    } else {
        correct = false;
        src.style.backgroundColor = "#FF0000";
    }
    setTimeout(hidecontrols, 2000);
}

var hidecontrols = function () {

    if (correct) {
        document.getElementById('emo').setAttribute("src", './res/smiley/smile' + imagerng + '.gif');
        console.log("si");
        newimage();

    } else {
        document.getElementById('emo').setAttribute("src", './res/ops.gif');
        console.log("no")
    }


    document.getElementById('image').style.visibility = "hidden";
    document.getElementById('Buttons').style.visibility = "hidden";
    document.getElementById('emo').style.visibility = "visible";

    setTimeout(showcontrols, 3000);
}

var showcontrols = function () {
    document.getElementById('image').style.visibility = "visible";
    document.getElementById('Buttons').style.visibility = "visible";
    document.getElementById('emo').style.visibility = "hidden";
    document.getElementById('1').disabled = false;
    document.getElementById('2').disabled = false;
    document.getElementById('3').disabled = false;


}