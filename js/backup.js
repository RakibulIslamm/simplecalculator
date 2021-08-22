
        // add number
        else if (clickButtonValue == '+') {
    if (display.innerText == '') return
    calculate('+', clickButtonValue)
    if (tempDisplay.innerText == '') {
        tempDisplay.innerText = parseFloat(display.innerText);
    } else {
        tempDisplay.innerText = parseFloat(display.innerText) + parseFloat(display.innerText);
    }
    display.innerText = '';
}
// Minus Number
else if (clickButtonValue == '-') {
    if (display.innerText == '') return
    calculate('-', clickButtonValue)
    if (tempDisplay.innerText == '') {
        tempDisplay.innerText = parseFloat(display.innerText);
    } else {
        tempDisplay.innerText = parseFloat(tempDisplay.innerText) - parseFloat(display.innerText);
    }

    display.innerText = '';
}


// Mumtiply Number
else if (clickButtonValue == '×') {
    if (display.innerText == '') return
    calculate('×', clickButtonValue);
    /* if (tempDisplay.innerText == '') {
        tempDisplay.innerText = parseFloat(display.innerText);
    } else {
        tempDisplay.innerText = parseFloat(display.innerText) * parseFloat(tempDisplay.innerText);
    } */

    if (tempDisplay.innerText == '') {
        tempDisplay.innerText = parseFloat(display.innerText);
    }
    else {
        tempDisplay.innerText = parseFloat(tempDisplay.innerText) * parseFloat(display.innerText);
    }
    display.innerText = '';
}


// Divide
else if (clickButtonValue == '÷') {
    if (display.innerText == '') return
    calculate('÷', clickButtonValue)

    /* if (tempDisplay.innerText == '') {
        tempDisplay.innerText = parseFloat(display.innerText);
    } else {
        // tempDisplay.innerText = parseFloat(tempDisplay.innerText) / parseFloat(display.innerText);
    } */

    if (tempDisplay.innerText == '') {
        tempDisplay.innerText = parseFloat(display.innerText);
    }
    else {
        tempDisplay.innerText = parseFloat(tempDisplay.innerText) / parseFloat(display.innerText);
    }
    display.innerText = '';
}










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


function totalSum(str) {
    return new Function('return ' + str)();
}













function totalCalculate() {
    // debugger
    if (storeValue.slice(-2)[0].slice(-1) == '+') {
        tempDisplay.innerText = parseFloat(tempDisplay.innerText) + parseFloat(display.innerText);

    }
    else if (storeValue.slice(-2)[0].slice(-1) == '-') {
        tempDisplay.innerText = parseFloat(tempDisplay.innerText) - parseFloat(display.innerText);

    }
    else if (storeValue.slice(-2)[0].slice(-1) == '×') {
        tempDisplay.innerText = parseFloat(tempDisplay.innerText) * parseFloat(display.innerText);
    }
    if (storeValue.slice(-2)[0].slice(-1) == '÷') {
        if (tempDisplay.innerText == '') {
            tempDisplay.innerText = parseFloat(display.innerText);
        } else {
            tempDisplay.innerText = parseFloat(tempDisplay.innerText) / parseFloat(display.innerText);
        }

    }
}


// Event Listener
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const clickButtonValue = event.target.innerText;
        if (clickButtonValue == '=') {
            if (display.innerText == '') return
            /* 
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

            } */
            if (storageDisplay.innerText.slice(-1) == '+') {
                storeValue.pop();
                display.innerText = totalSum(storeValue.join("")) + parseFloat(display.innerText);
                storeValue = []
            }
            else if (storageDisplay.innerText.slice(-1) == '-') {
                storeValue.pop();
                display.innerText = totalSum(storeValue.join("")) - parseFloat(display.innerText);
                storeValue = []
            }
            else if (storageDisplay.innerText.slice(-1) === '×') {
                storeValue.push(display.innerText)
                // storeValue.pop();
                display.innerText = totalSum(storeValue.join("")) /* * parseFloat(display.innerText) */;
                storeValue = []
            }
            else if (storageDisplay.innerText.slice(-1) === '÷') {
                storeValue.push(display.innerText)
                // storeValue.pop();
                display.innerText = totalSum(storeValue.join("")) /* * parseFloat(display.innerText) */;
                storeValue = []
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
            if (tempDisplay.innerText == '') {
                tempDisplay.innerText = parseFloat(display.innerText);
            }
            else {
                totalCalculate();
            }
            display.innerText = '';
        }

        // Subtract Numbers
        else if (clickButtonValue == '-') {
            // Code Goes Here
            if (display.innerText == '') return
            storeValue.push(display.innerText, clickButtonValue);
            console.log(storeValue);
            calculate('-', clickButtonValue)
            if (tempDisplay.innerText == '') {
                tempDisplay.innerText = parseFloat(display.innerText);
            }
            else {
                totalCalculate();
            }
            display.innerText = '';
        }

        // multiplay Numbers
        else if (clickButtonValue == '×') {
            // Code Goes Here
            if (display.innerText == '') return
            storeValue.push(display.innerText, '*');
            console.log(storeValue);
            calculate('×', clickButtonValue)
            if (tempDisplay.innerText == '') {
                tempDisplay.innerText = parseFloat(display.innerText);
            }
            else {
                totalCalculate();
            }
            display.innerText = '';
        }

        // Divide Numbers
        else if (clickButtonValue == '÷') {
            // Code Goes Here
            if (display.innerText == '') return
            storeValue.push(display.innerText, '/');
            console.log(storeValue);
            calculate('÷', clickButtonValue)
            if (tempDisplay.innerText == '') {
                tempDisplay.innerText = parseFloat(display.innerText);
            }
            else {
                totalCalculate();
            }
            display.innerText = '';
        }
        else {
            display.innerText += clickButtonValue;
        }
    });
}


