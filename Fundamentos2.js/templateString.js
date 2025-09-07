const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// template e pode quebrar linha de acordo como escrito
const template = ` 
olá 
${nome}!`

console.log(concatenacao, template)

// Expressoes...
console.log(`1 + 1 = ${1 + 1}`)

// função arrow para transformar todo texto em maiusculo

const up = texto => texto.toUpperCase()
console.log(` Ei.. ${up('cuidado')}!`)
