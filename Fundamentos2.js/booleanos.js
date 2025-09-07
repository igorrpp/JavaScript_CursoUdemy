let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// para transformar um valor numero em boolean
isAtivo = 1
// "! " é a negação
console.log(!!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{ })
console.log(!![ ])
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//Retirando a negação "!!"  ele exibirá o único valor verdadeiro na expressão
console.log('Pra finalizar')
console.log(!!('' || null || 0 || 'Olá caraio '))

// expressão "ou", mostrando um valor quando a variável estiver vazia retorando uma msg
let nome = ''
console.log(nome || 'Variável está vazia!!')