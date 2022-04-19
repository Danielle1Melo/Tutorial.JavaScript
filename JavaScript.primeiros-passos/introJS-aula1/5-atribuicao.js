console.log("Trabalhando com Atribuição de variáveis");

//const: não pode mudar
//let: variável comum - pode mudar
//let nome = "Danielle";
const primeiroNome = "Danielle";
const sobrenome = "Melo";

//console.log(nome + "" + sobrenome)
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

//let: variável comum - pode mudar
let idade; //declarando variável
idade = 26; //atribuindo valor
idade= idade+1;
console.log(idade)
