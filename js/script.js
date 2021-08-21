
// add eventListener to each button
const display = document.getElementById('calculator-display');
const storageDisplay = document.getElementById('storage-display');
const tempDisplay = document.getElementById('temp-display');
const buttons = document.getElementsByTagName('button');
const oparators = document.getElementsByClassName('key--operator');


function equalCalculate(num1, oparator, num2) {
    num1.innerText = parseFloat(tempDisplay.innerText) + parseFloat(display.innerText);
}

// Event Listener
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const clickButtonValue = event.target.innerText;
        if (clickButtonValue == '=') {
            if (display.innerText == '') return
            if (storageDisplay.innerText.slice(-1) == '+') {
                display.innerText = parseFloat(tempDisplay.innerText) + parseFloat(display.innerText);
            }
            else if (storageDisplay.innerText.slice(-1) == '-') {
                display.innerText = parseFloat(tempDisplay.innerText) - parseFloat(display.innerText);
            }
            else if (storageDisplay.innerText.slice(-1) == '×') {
                display.innerText = parseFloat(tempDisplay.innerText) * parseFloat(display.innerText);
            }
            else if (storageDisplay.innerText.slice(-1) == '÷') {
                if (display.innerText == 0) {
                    display.innerText = 'Cannot divide by zero';
                } else {
                    display.innerText = parseFloat(tempDisplay.innerText) / parseFloat(display.innerText);
                }

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
            tempDisplay.innerText = '0';
        }

        // DEL Button
        else if (clickButtonValue == 'DEL') {
            display.innerText = display.innerText.slice(0, -1);
        }
        // add number
        else if (clickButtonValue == '+') {
            if (display.innerText == '') return
            calculate('+', clickButtonValue)
            tempDisplay.innerText = parseFloat(display.innerText) + parseFloat(tempDisplay.innerText);
            display.innerText = '';
        }
        // Minus Number
        else if (clickButtonValue == '-') {
            if (display.innerText == '') return
            calculate('-', clickButtonValue)
            tempDisplay.innerText = parseFloat(display.innerText) - parseFloat(tempDisplay.innerText);
            display.innerText = '';
        }
        // Mumtiply Number
        else if (clickButtonValue == '×') {
            if (display.innerText == '') return
            calculate('×', clickButtonValue)
            if (tempDisplay.innerText == 0) {
                tempDisplay.innerText = 1;
            }
            tempDisplay.innerText = parseFloat(display.innerText) * parseFloat(tempDisplay.innerText);
            display.innerText = '';
        }
        else if (clickButtonValue == '÷') {
            if (display.innerText == '') return
            calculate('÷', clickButtonValue)
            if (tempDisplay.innerText == 0) {
                tempDisplay.innerText = 1;
            }
            tempDisplay.innerText = parseFloat(display.innerText) / parseFloat(tempDisplay.innerText);
            display.innerText = '';
        }
        else {
            display.innerText += clickButtonValue;
        }
    });
}
document.getElementById('key--equal').addEventListener('click', function () {
    // if (display.innerText == '') return;
    // display.innerText = eval(display.innerText);
})

function calculate(operatorKey, clickValue) {
    if (display.innerText.indexOf(operatorKey) != -1) return;
    display.innerText += clickValue;
    storageDisplay.innerText += display.innerText;
}


// calculate function
