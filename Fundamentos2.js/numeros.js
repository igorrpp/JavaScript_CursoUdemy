const Peso1 = 1.0;
const Peso2 = Number('2.0')

console.log(Peso1, Peso2);
console.log(Number.isInteger(Peso1));
console.log(Number.isInteger(Peso2));

const Avaliacao1 = 9.871 
const Avaliacao2 = 6.871

const Total = Avaliacao1 * Peso1 + Avaliacao2 * Peso2
const Media = Total / (Peso1 + Peso2) 

console.log(Media.toFixed(2))
console.log(Media.toString(2))  // passa para Numero em binário
console.log(typeof Media)