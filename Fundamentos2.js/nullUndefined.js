let valor // não inicializado
console.log(valor)

// usar o null para zerar a variável
valor = null // ausência de valor
console.log(valor)
//cuidado com o valor null
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!! produto.preco)
console.log(produto)

produto.preco = null // sem preço

console.log(!! produto.preco)
console.log(produto)


