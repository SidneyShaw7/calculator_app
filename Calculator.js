
// ******   SELECT ELEMENTS    *******

const formControl = document.getElementById('form-control');
const btnC = document.getElementById('c');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btn0 = document.getElementById('0')
const btnSlash = document.getElementById('/');
const btnEqual = document.getElementById('=');
const btnX = document.getElementById('x');
const btnDot = document.getElementById('.');
const btnPlus = document.getElementById('+');
const btnMinus = document.getElementById('-');
const input = document.getElementById('value-screen');

let value1 = 0;
let value2 = 0;

// *********    GIVE VALUE TO BUTTONS       **********
let btnXClicked = false;
let btnSlashClicked = false;
let btnPlusclicked = false;
let btnMinusClicked = false;

// *********    EVENT LISTENERS    ************

formControl.addEventListener('submit', getResult);
btnC.addEventListener('click', fullReset);
btn0.addEventListener('click', () => {
    input.value = input.value + '0';
});

btn1.addEventListener('click', () => {
    input.value = input.value + '1';
});

btn2.addEventListener('click', () => {
    input.value = input.value + '2';
});

btn3.addEventListener('click', () => {
    input.value = input.value + '3';
});

btn4.addEventListener('click', () => {
    input.value = input.value + '4';
});

btn5.addEventListener('click', () => {
    input.value = input.value + '5';
});

btn6.addEventListener('click', () => {
    input.value = input.value + '6';
});

btn7.addEventListener('click', () => {
    input.value = input.value + '7';
});

btn8.addEventListener('click', () => {
    input.value = input.value + '8';
});

btn9.addEventListener('click', () => {
    input.value = input.value + '9';
});

btnDot.addEventListener('click', () => {
    input.value = input.value + '.';
});

btnSlash.addEventListener('click', () => {
    if (btnSlashClicked) {
        value1 = value1 / input.value;
        reset();
        resetTheRest();
        console.log(value1);
    } else if (btnMinusClicked) {
        value1 = value1 - input.value;
        btnMinusClicked = false;
        btnSlashClicked = true;
        reset();
        console.log(value1);
    } else if (btnPlusclicked) {
        value1 = +value1 + +input.value;
        btnPlusclicked = false;
        btnSlashClicked = true;
        reset();
        console.log(value1);
    } else if (btnXClicked) {
        value1 = value1 * input.value;
        btnXClicked = false;
        btnSlashClicked = true;
        reset();
        console.log(value1);
    } else {
        btnSlashClicked = true;
        value1 = input.value;
        reset();
        resetTheRest();
        console.log(value1);
    }
});

btnMinus.addEventListener('click', () => {
    if (!input.value) {
        input.value = '-';
    } else if (btnMinusClicked) {
        value1 = value1 - input.value;
        reset();
        resetTheRest();
        console.log(value1);
    } else if (btnPlusclicked) {
        value1 = +value1 + +input.value;
        btnMinusClicked = true;
        btnPlusclicked = false;
        reset();
        console.log(value1);
    } else if (btnSlashClicked) {
        value1 = value1 / input.value;
        btnMinusClicked = true;
        btnSlashClicked = false;
        reset();
        console.log(value1);
    } else if (btnXClicked) {
        value1 = value1 * input.value;
        btnMinusClicked = true;
        btnXClicked = false;
        reset();
        console.log(value1);
    } else {
        btnMinusClicked = true;
        value1 = value1;
        reset();
        resetTheRest();
        console.log(value1);
    }
});

btnPlus.addEventListener('click', () => {
    if (btnPlusclicked) {
        value1 = +value1 + +input.value;
        reset();
        resetTheRest();
        console.log(value1);
    } else if (btnMinusClicked) {
        value1 = value1 - input.value;
        btnMinusClicked = false;
        btnPlusclicked = true;
        reset();
        console.log(value1);
    } else if (btnSlashClicked) {
        value1 = value1 / input.value;
        btnSlashClicked = false;
        btnPlusclicked = true;
        reset();
        console.log(value1);
    } else if (btnXClicked) {
        value1 = value1 * input.value;
        btnXClicked = false;
        btnPlusclicked = true;
        reset();
        console.log(value1);
    } else {
        btnPlusclicked = true;
        value1 = value1 + input.value;
        reset();
        resetTheRest();
        console.log(value1);
    }
});

btnX.addEventListener('click', () => {
    if (btnXClicked) {
        value1 = value1 * input.value;
        reset();
        resetTheRest();
        console.log(value1);
    } else if (btnSlashClicked) {
        value1 = value1 / input.value;
        btnSlashClicked = false;
        btnXClicked = true;
        reset();
        console.log(value1);
    } else if (btnPlusclicked) {
        value1 = +value1 + +input.value;
        btnPlusclicked = false;
        btnXClicked = true;
        reset();
        console.log(value1);
    } else if (btnMinusClicked){
        value1 = value1 - input.value;
        btnMinusClicked = false;
        btnXClicked = true;
        reset();
        console.log(value1);
    } else {
        btnXClicked = true;
        value1 = input.value;
        reset();
        resetTheRest();
        console.log(value1);
    }
});

// *********    FUNCTIONS       **************

function getResult(e) {
    e.preventDefault();
    value2 = input.value;
    if (btnXClicked) {
        multiplication(value1, value2);
        btnXClicked = false;
    } else if (btnMinusClicked) {
        substruction(value1, value2);
        btnMinusClicked = false;
    } else if (btnSlashClicked) {
        division(value1, value2);
        btnSlashClicked = false;
    } else if (btnPlusclicked) {
        addition(value1, value2);
        btnPlusclicked = false;
    }
}

function reset() {
    input.value = '';
}

function multiplication(value1, value2) {
    input.value = value1 * value2;
}

function division(value1, value2) {
    input.value = value1 / value2;
}

function addition(value1, value2) {
    input.value = +value1 + +value2;
}

function substruction(value1, value2) {
    input.value = value1 - value2;
}

function fullReset() {
    input.value = '';
    btnXClicked = false;
    btnSlashClicked = false;
    btnPlusclicked = false;
    btnMinusClicked = false;
}

function resetTheRest() {
    if (btnMinusClicked) {
        btnXClicked = false;
        btnSlashClicked = false;
        btnPlusclicked = false;
    } else if (btnXClicked) {
        btnSlashClicked = false;
        btnPlusclicked = false;
        btnMinusClicked = false;
    } else if (btnSlashClicked) {
        btnXClicked = false;
        btnPlusclicked = false;
        btnMinusClicked = false;
    } else if (btnPlusclicked) {
        btnXClicked = false;
        btnSlashClicked = false;
        btnMinusClicked = false;
    }
}