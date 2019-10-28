// 1. Faça um algoritmo que imprima números inteiros de n a 1;

/* let n = 10;

while (n > 0) {
    console.log(n);
    n--;
}
 */
// 2. Faça um algoritmo que imprima apenas os números ímpares de 1 a 100; (do-while)
/* 
let n = 0

do {
    if (n % 2 === 1) {

        console.log(n)
    }

    n++;
}
while (n < 100); */
 
// 3. Dados dois números calcule o MDC deles.

// 4. Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000.

//5. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa que dado um número, print (console.log) a tabuada do mesmo de 1 a 10.

let n = 5;
let tab = 1;

for(;tab <= 10; tab++) {

    console.log(n + ' x ' + tab + ' = ' + (n * tab))
}

// 6. Faça um programa que leia 5 números e informe o maior número.

// 7. Faça um Programa que leia um array de 5 números inteiros e mostre-os. (Fazer com a mamãe)

// O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:

    

let unid = 1;


for(; unid <= 50; unid++) {

    let valorTotal = unid * 1.99;

    console.log('Quantidade ' + unid + ' O valor total é: ' + valorTotal);
}

// 9. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.

P = 0;
N = 0;
Exit = false;
 do {
  N = prompt('Entre com um número:','');
  if(N == 0)
   alert('Entre com um número diferente de 0!\nDigite "FIM" para sair.');
  if(N == "FIM")
   Exit = true;
 }
 while(N == 0);
 if(Exit == false) {
  for(var i=2;i<N;i++) {
   if(N % i == 0) {    
    P = 1;
    alert('O número ' + N + ' não é primo, pois ' + N + ' / ' + i + ' = 0.');    
    // O uso de break; é opcional
   }  
  }
  if(N == 2) {
    P = 1;
    alert('O número ' + N + ' não é primo, pois ' + N + ' / ' + i + ' = 0.');    
  }
  if(P == 0 || N == 1)
   alert('O número ' + N + ' é primo!');    
 } 
