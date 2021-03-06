// 3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
//  a) O maior valor;
//  b) O menor valor;
//  c) O valor médio.
// Demonstre essa função com o paradigma funcional e imperativo

const retiraValores = (lista : Array<Number>) : Array<Number> => {
    let maiorValor : Number = 0;
    let menorValor : Number = lista[0];
    let mediaValores : Number = 0;
    let validaLista : Boolean = true;
    for(let i = 0; i < lista.length; i++) {
        if(isNaN(lista[i])){
            validaLista = false;
        }
        else {
            if(lista[i] > maiorValor) maiorValor = lista[i];
            if(lista[i] < menorValor) menorValor = lista[i];
            mediaValores += lista[i];
        }
    }
    mediaValores = mediaValores / lista.length;
    if(validaLista) return [maiorValor, menorValor, mediaValores];
    else return [-1];
}

console.log(retiraValores([1, 2, 3, 4, 5]));
console.log(retiraValores(["aaa", 1, 3]));
