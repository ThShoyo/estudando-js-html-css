const inputNum1 = documemt.getElementById('num1');
const inputNum2 = documemt.getElementById('num2');
const resultado = documemt.getElementById('resultado');
const btnSomar = documemt.getElementById('btnSomar');

function soma(num1, num2){
    return num1 + num2;
}

btnSomar.addEventListener('click', function() {
    const num1 = Number(inputNum1.value);
    const num2 = Number(inputNum2.value);       

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = 'Por favor, insira números válidos.';
        return;
    }

    const somaResultado = soma(num1, num2);
    resultado.textContent = `Resultado: ${somaResultado}`; 
});