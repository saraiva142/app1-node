let valor1 = document.getElementById('num1');
let valor2 = document.getElementById('num2');
let opAritmetico = document.getElementById('opAritmetico');
let resultado = document.getElementById('resultado');


function calculoAritmetico(operador, valor1, valor2) {
    switch (operador) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            return valor1 / valor2;
        default:
            return 'Operação inválida';
    }
}

valor1.addEventListener('input', function () {
    resultado.innerHTML = calculoAritmetico(opAritmetico.value, Number(valor1.value), Number(valor2.value));
});
valor2.addEventListener('input', function () {
    resultado.innerHTML = calculoAritmetico(opAritmetico.value, Number(valor1.value), Number(valor2.value));
});
opAritmetico.addEventListener('input', function () {
    resultado.innerHTML = calculoAritmetico(opAritmetico.value, Number(valor1.value), Number(valor2.value));
});