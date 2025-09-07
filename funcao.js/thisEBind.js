saudacao = ' parte 3'

const pessoa = {
    saudacao: ' Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}


pessoa.falar()
const falar = pessoa.falar
falar()