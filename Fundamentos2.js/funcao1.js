// Função em retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2, 8, 4, 5, 6)

// Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log((soma(2)))

