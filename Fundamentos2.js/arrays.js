const valores = [7.7, 8.9, 6.3, 9.2]
console.log([0], valores[3])
console.log(valores[4])

// Para adicionar elementos no array com a posição correta expressa em número
valores[4] = 10
console.log(valores)
//Para saber a quantidade de elementos dentro do array
console.log(valores.length)

//Inserindo mais de um valor e tipo dentro do array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Ele retira o ultimo valor que está dentro do array
console.log(valores.pop())
console.log(valores)
delete valores[0]
console.log(valores)

console.log(typeof valores)