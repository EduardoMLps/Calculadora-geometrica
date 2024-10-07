const shapeObjElement = document.getElementById("geometricShape");
const objectPropertyArea = document.getElementById("objProp");
const answerObjElement = document.getElementById("answer");

var Forma = null;

var XSizeObj = null;
var YSizeObj = null;
var ZSizeObj = null;

var submitButton = null;

shapeObjElement.onloadstart = checkForm;
shapeObjElement.onchange = checkForm;

function checkForm(val) {
    answerObjElement.innerHTML = "V = 0";
    switch(shapeObjElement.value) {
        case "Prisma":
            objectPropertyArea.innerHTML = "Tamanho X <input id='X'></input> Tamanho Y <input id='Y'></input> Tamanho Z <input id='Z'></input> <input id='submitB' type='submit'></input>"
            XSizeObj = document.getElementById("X");
            YSizeObj = document.getElementById("Y");
            ZSizeObj = document.getElementById("Z");
            submitButton = document.getElementById("submitB").addEventListener("click", calculate);
            Forma = "cube";
            break;
        case "Pirâmide":
            objectPropertyArea.innerHTML = "Tamanho X <input id='X'></input> Tamanho Z <input id='Z'></input> Altura <input id='Y'></input> <input id='submitB' type='submit'></input>"
            XSizeObj = document.getElementById("X");
            YSizeObj = document.getElementById("Y");
            ZSizeObj = document.getElementById("Z");
            submitButton = document.getElementById("submitB").addEventListener("click", calculate);
            Forma = "piramid";
            break;
        case "Esfera":
            objectPropertyArea.innerHTML = "Raio <input id='X'></input> <input id='submitB' type='submit'></input>"
            XSizeObj = document.getElementById("X");
            YSizeObj = document.getElementById("Y");
            ZSizeObj = document.getElementById("Z");
            submitButton = document.getElementById("submitB").addEventListener("click", calculate);
            Forma = "esphere";
            break;
    }
}

function calculate() {
    switch(Forma) {
        case "cube":
            answerObjElement.innerHTML = "V = " + XSizeObj.value * YSizeObj.value * ZSizeObj.value;
            break;
        case "piramid":
            answerObjElement.innerHTML = "V = " + (XSizeObj.value * ZSizeObj.value * YSizeObj.value) / 3;
            break;
        case "esphere":
            answerObjElement.innerHTML = "V = " + (4/3) * Math.PI * (XSizeObj.value * XSizeObj.value * XSizeObj.value);
            break;
    }
}