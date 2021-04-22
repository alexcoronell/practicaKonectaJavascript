var numberAbox = document.getElementById('numberAbox');
var numberBbox = document.getElementById('numberBbox');
var result = document.getElementById('result');
var calc = document.getElementById('calc');
var clean = document.getElementById('clean');
var validData = /^[0-9]+$/;
var mainColor = '#004d40'


window.addEventListener('load', init, false);
console.log(mainColor);

function init() {
    calc.addEventListener('click', function(e) {
        var numberA = document.getElementById('numberA').value;
        var numberB = document.getElementById('numberB').value;
        e.preventDefault();
        var operation = document.getElementById('operation').value;
        var resultadoOperacion;
        if (numberA.match(validData)) {
            if (numberB.match(validData)) {
                numberAbox.style.borderColor = mainColor;
                numberBbox.style.borderColor = mainColor;
                switch (operation) {
                    case '+':
                        result.value = parseInt(numberA) + parseInt(numberB);
                        break;
                    case '-':
                        result.value = parseInt(numberA) - parseInt(numberB);
                        break;
                    case '*':
                        result.value = parseInt(numberA) * parseInt(numberB);
                        break;
                    case '/':
                        result.value = parseInt(numberA) / parseInt(numberB);
                        break;
                    default:
                        alert('Por favor elegir una de las operaciones matemáticas');

                }
            } else {
                alert('Introduce un número entero válido en la segunda casilla');
                numberBbox.style.borderColor = 'red';
                return false;
            }
        } else {
            alert('Introduce un número entero válido en la primera casilla');
            numberAbox.style.borderColor = 'red';
            return false;
        }
    })

    clean.addEventListener('click', function() {
        document.getElementById('Form').reset();
        document.getElementById('result').value = '';
        numberAbox.style.borderColor = mainColor;
        numberBbox.style.borderColor = mainColor;
    })
}