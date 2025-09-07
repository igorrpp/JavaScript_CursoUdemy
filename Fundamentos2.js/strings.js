const escola = "cod3r"

//CharAt seria para pegar a posição da letra ex abaixo
console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))

// mostra a numeração da tabela unicode
console.log(escola.charCodeAt(4))

console.log(escola.indexOf('3'))

// Para mostrar a frase a partir da letra
console.log(escola.substring(1))
// Para mostrar a frase a partir da letra com 2 parametros
console.log(escola.substring(0, 3))

// Para concatenar
console.log('Escola '.concat(escola).concat("!"))

//subtituir o número por string ou outros
console.log(escola.replace(3, 'eeeee'))

// substituir todos os digitos pela letra "e"
console.log(escola.replace(/\d/, 'e'))

// Substituir todos as letrar por "e"
console.log(escola.replace(/\w/g, 'e'))

// Serve para separar texto/escritas com virgula e transformar em um array
console.log('Ana, Maria, Pedro'.split(','))
