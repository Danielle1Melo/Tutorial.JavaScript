console.log("\nTrabalhando com Loops\n");

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis", "\n",listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa VIagem!");
}else{
    console.log("Desculpe, tivemos um erro!");
}

for(let i=0 /*contador*/; i<3; i+= 1){
    
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
}