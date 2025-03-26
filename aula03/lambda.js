//Funções
function soma(a, b){
    return a + b;
}

//Funções Anônimas
let soma0 = function(a, b){
    return a + b;
}

console.log(soma0(2, 3))

//Arrow function
let soma1 = (a, b) => {
    return a + b;
}

let soma2 = (a, b) => a + b;
console.log(soma2(2, 3));

//Eventos <=== Se usa com arrow function
let botao = document.querySelector('button');
botao.addEventListener('click', () => {
    console.log('Clicou');
});
