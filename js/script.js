
// add eventListener to each button
const display = document.getElementById('calculator-display');
const storageDisplay = document.getElementById('storage-display');
const tempDisplay = document.getElementById('temp-display');

const buttons = document.querySelectorAll('.calculator-keys button');
const oparators = document.getElementsByClassName('key--operator');

let storeValue = [];

// Stored Value
function calculate(operatorKey, clickValue) {
    if (display.innerText.indexOf(operatorKey) != -1) return;
    display.innerText += clickValue;
    storageDisplay.innerText += display.innerText;
}

// calculate Total
function totalSum(arr) {
    return new Function('return ' + arr)();
}

// Calculate Equal Total
function equalTotal() {
    storeValue.push(display.innerText)
    display.innerText = totalSum(storeValue.join(""));
    storeValue = []
}

// Calcuate Oparate Total
function oparateTotal(oparator) {
    if (tempDisplay.innerText == '') {
        tempDisplay.innerText = parseFloat(display.innerText);
    }
    else {
        storeValue.pop();
        tempDisplay.innerText = totalSum(storeValue.join(""));
        storeValue.push(oparator);
    }
}


// Event Listener
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const clickButtonValue = event.target.innerText;
        if (clickButtonValue == '=') {
            if (display.innerText == '') return
            if (storageDisplay.innerText.slice(-1) == '+') {
                equalTotal()
            }
            else if (storageDisplay.innerText.slice(-1) == '-') {
                equalTotal()
            }
            else if (storageDisplay.innerText.slice(-1) === '×') {
                equalTotal()
            }
            else if (storageDisplay.innerText.slice(-1) === '÷') {
                equalTotal()
            }
            if (display.innerText == Number) return;
            storageDisplay.innerText = '';
            tempDisplay.innerText = '';
        }

        // decimal button
        else if (clickButtonValue == '.') {
            if (display.innerText.indexOf('.') != -1) {
                return;
            }
            display.innerText += clickButtonValue;
        }

        // AC button
        else if (clickButtonValue == 'AC') {
            display.innerText = '';
            storageDisplay.innerText = '';
            tempDisplay.innerText = '';
            storeValue = []
        }

        // DEL Button
        else if (clickButtonValue == 'DEL') {
            display.innerText = display.innerText.slice(0, -1);
        }

        // Add Numbers
        else if (clickButtonValue == '+') {
            // Code Goes Here
            if (display.innerText == '') return
            storeValue.push(display.innerText, clickButtonValue);
            console.log(storeValue);
            calculate('+', clickButtonValue)
            oparateTotal('+')
            display.innerText = '';
        }

        // Subtract Numbers
        else if (clickButtonValue == '-') {
            // Code Goes Here
            if (display.innerText == '') return
            storeValue.push(display.innerText, clickButtonValue);
            console.log(storeValue);
            calculate('-', clickButtonValue)
            oparateTotal('-')
            display.innerText = '';
        }

        // multiplay Numbers
        else if (clickButtonValue == '×') {
            // Code Goes Here
            if (display.innerText == '') return
            storeValue.push(display.innerText, '*');
            console.log(storeValue);
            calculate('×', clickButtonValue)
            oparateTotal('*')
            display.innerText = '';
        }

        // Divide Numbers
        else if (clickButtonValue == '÷') {
            // Code Goes Here
            if (display.innerText == '') return
            storeValue.push(display.innerText, '/');
            console.log(storeValue);
            calculate('÷', clickButtonValue)
            oparateTotal('/')
            display.innerText = '';
        }
        else {
            display.innerText += clickButtonValue;
        }
    });
}
