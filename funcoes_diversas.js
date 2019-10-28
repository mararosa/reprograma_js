// 1. Crie uma função que dado um número seja retornado o número reverso. Ex.: dado 1234, devolve 4321.

/* function reverterNumero(num)
{
    if(num > 10)
    {
        num1 = num % 10;
        num /= 10;
        num2 = num % 10;
        num /= 10;
        num3 = num % 10;
        num /= 10;
        num4 = num % 10;
    }

    return 0;
}

let numero = reverterNumero(2357)

console.log(num1,num2,num3,num4); */

// Crie uma função que recebe uma palavra e ordena suas letras em ordem alfabética.

/* function inverter(palavra) {
    return palavra.split('').reverse().join('');
}

let palavra = inverter('mara')

console.log(palavra);
 */
/////////////////////OU////////////////////////////////////////

function inverter(palavra) {
    let  x = '';

    for (let i = palavra.length - 1; i >= 0; i--) {

        x += palavra[i];
    }

    return x;
}

console.log(inverter('mara'));


let n = 10
for(i = n; i >= 0; i--)
{
   
    console.log(i);
}

// 3. Crie uma função que receba uma string, contendo nome e sobrenome, e retorne as inicias. Ex.: dado "Débora Borges", retorne "DB".

//4. Crie uma função que receba a quantidade de bilhetes vendidos em um concurso e sorteie um bilhete.

//5. Altere a função que calcula IMC de maneira que o valor do IMC tenha apenas duas casas decimais.

