// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// tire de dentro do objeto: nome e idade, depois o nome do objeto 'pessoa'
const { nome, idade } = pessoa
console.log(nome, idade)

// crie um variavel com a letra n e i
const { nome: n, idade: i } = pessoa
console.log(n, i)

//sintaxe para saber se o valor está vazio retornar uma msg personalizada"
const { sobrenome, bemHumorada = 'Sem' } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)