console.log(`Trabalhando com condicionais`);

//ctrl + shift + A - Comentar varias linhas
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);


if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(2,1);//removendo um item
}else{
    console.log("Não é maior de idade\n");
}

console.log("Embarque:");
if(idadeComprador>=18 && temPassagemComprada){
console.log("Boa viagem!");
}else{
console.log("Você não pode embarcar");
}
    
console.log(listaDeDestinos);
