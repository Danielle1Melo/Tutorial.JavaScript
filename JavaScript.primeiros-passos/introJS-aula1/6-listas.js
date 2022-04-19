console.log(`Trabalhando com Listas`);

//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiva`); //adicionando um item na lista

console.log("Destinos possíveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//removendo um item
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);//mostrar apenas um item
console.log(listaDeDestinos[1], listaDeDestinos[0]);




