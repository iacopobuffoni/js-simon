function GetRandomNumber (min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

}

function Disapper () {
    _PlayGround.innerHTML = '';
}

const _PlayGround = document.getElementById('simon');
const _Numbers = [];
const _CorrectNumbers = [];
let _Points = 0;

for (i = 0; i < 5; i++) {

    let _RandomNumber = GetRandomNumber(1, 100);
    _Numbers.push(_RandomNumber);
    console.log(_Numbers);
    _PlayGround.innerHTML += ' ' + _RandomNumber;

}

setTimeout (Disapper, 3000);

setTimeout (function () {

    for (i = 0; i < _Numbers.length; i++) {

    const _AskedNumber = prompt('Inserisci un numero.');
    
    if (_AskedNumber == _Numbers[i]) {
        _CorrectNumbers.push(_AskedNumber);
        _Points ++;
    }

    }
    
    if (_Points == 0) {

        alert('Mi dispiace, non hai indovinato nessun numero. Riprova !')
        
    } else {

        alert('I numeri indovinati sono ' + _CorrectNumbers);
        alert('Hai totalizzato ' + _Points + ' punti!');

    }
 
 }, 3010)

