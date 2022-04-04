const input = document.getElementById('input');

//handle when the number is pressed. It renders the number into #input element
function number(number) {
    input.value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    switch (operator) {
        case 'AC': {
            input.value = '';
            break;
        }
        case 'Del': {
            input.value = input.value.slice(0, -1);
            break;
        }
        default: {
            input.value += operator;
        }
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    try {
        input.value = eval(input.value);
    } catch (e) {
        alert('Invalid input');
    }
}