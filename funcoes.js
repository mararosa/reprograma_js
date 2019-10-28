// funcao anonima, quando nao tem um nome
var square = function (numero) { return numero * numero };
var x = square(4) //x recebe o valor 16

console.log(x);

// nome fornecido com uma expressao de funcao
var fatorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };

console.log(fatorial(3));

// funcao pode chamar a si mesma
function fatorial(n) {
    if ((n == 0) || (n == 1))
        return 1;
    else
        return (n * fatorial(n - 1));
}

console.log(fatorial(5));

// Um exemplo de função aninhada
let nome = "Mara";
function getScore() {
    var num1 = 6,
        num2 = 3;

    function add() {
        return nome + " scored " + (num1 + num2);
    }
    return add();
}

console.log(getScore()); // Retorna "Mara scored 9"

// Crie uma função que receba 1 parâmetro e calcule 5% de desconto, retornando o valor do desconto;

function calcularDesconto(x) {
    return x * 0.05;
}

console.log(calcularDesconto(1000));

// 2. Crie uma função que receba 2 parâmetros e exiba o resultado e o resto da divisão entre eles;

function calcularDivisao(x, y) {
    let divisao = x / y;
    let resto = x % y;

    console.log('Resultado da divisão: ' + divisao);
    console.log('Resto: ' + resto)
}

let nums = calcularDivisao(5, 2);

// 3. Crie uma função que recebe 2 parâmetros (altura e peso) e retorna o IMC;

function calcularIMC(altura, peso) {
    return peso / altura ** 2
}

console.log(calcularIMC(1.65, 69));

// 4. Crie uma função que recebe 3 parâmetros, e utilizando a fórmula de Báskara, mostre o resultado de x' e x".

function calcularBaskara(a, b, c) {
    let delta = (b ** 2) - (4 * a * c);
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log('x1 = ' + x1);
    console.log('x2 = ' + x2);
}

let valores = calcularBaskara(1, -1, -6)

