let a = 7;
let b = 94;
let troca = 0;
console.log("Antes da troca:")
console.log("O valor de a é: ", a)
console.log("O valor de b é: ", b)

troca = a;
a = b;
b = troca;
/* Formula mais indicada para troca de valores seria

[a, b] = [b, a];
*/

console.log("Depois da troca:")
console.log("O valor de a é: ", a)
console.log("O valor de b é: ", b)
