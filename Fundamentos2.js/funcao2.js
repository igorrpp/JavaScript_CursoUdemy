// Armazenando uma funcao em um variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 8))

// retorno implíicito, arrow function mais reduzido
const subtracao = (a, b, k) => a - b - k

console.log(subtracao(90, 2, 8))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')