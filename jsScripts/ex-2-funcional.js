// Dado o array:
// a) Crie uma função que retorne a bio do id passado
// b) Crie uma função que retorne o name do id passado
// c) Crie uma função que apague um item da lista a partir de um id passado
// d) Crie uma função que altere a bio ou o name a partir de um id passado
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
var lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// verifica se o id passado é válido
var verificaIndice = function (lista, identificador) {
    if ((lista.findIndex(function (objeto) { return objeto.id === identificador; })) != -1) {
        return true;
    }
    else {
        return false;
    }
};
var pegaBio = function (lista, identificador) {
    if (verificaIndice(lista, identificador)) {
        if (lista.find(function (objeto) { return objeto.id === identificador; })) {
            // não existe id = 0, por isso o uso do -1
            return lista[identificador - 1].bio;
        }
    }
    else {
        return "Id inválido!";
    }
};
console.log(pegaBio(lista, 1));
var pegaNome = function (lista, identificador) {
    if (verificaIndice(lista, identificador)) {
        if (lista.find(function (objeto) { return objeto.id === identificador; })) {
            // não existe id = 0, por isso o uso do -1
            return lista[identificador - 1].name;
        }
    }
    else {
        return "Id inválido!";
    }
};
console.log(pegaNome(lista, 1));
var deletaItem = function (lista, identificador) {
    // indice necessário, por isso a não utilização da verificaInidice
    if ((lista.findIndex(function (objeto) { return objeto.id === identificador; })) !== -1) {
        return lista.filter(function (objeto) { return objeto.id != identificador; });
    }
    else {
        console.log("Id inválido!");
    }
};
console.log(deletaItem(lista, 1));
var modificaNome = function (lista, identificador, nome) {
    // indice necessário, por isso a não utilização da verificaInidice
    if ((lista.findIndex(function (objeto) { return objeto.id === identificador; })) !== -1) {
        return lista.filter(function (objeto) {
            // se objeto id == identificador, entao modifica o nome e retorna o objeto
            if (objeto.id == identificador) {
                objeto.name = nome;
                return true;
            }
            // se não apenas retorna o objeto
            else {
                return true;
            }
        });
    }
    else {
        console.log("Id inválido!");
    }
};
modificaNome(lista, 2, "TESTANDO");
console.log(lista);