// 3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
//  a) O maior valor;
//  b) O menor valor;
//  c) O valor médio.
// Demonstre essa função com o paradigma funcional e imperativo
var retiraValores = function (lista) {
    var maiorValor = 0;
    var menorValor = lista[0];
    var mediaValores = 0;
    var validaLista = true;
    for (var i = 0; i < lista.length; i++) {
        if (isNaN(lista[i])) {
            validaLista = false;
        }
        else {
            if (lista[i] > maiorValor)
                maiorValor = lista[i];
            if (lista[i] < menorValor)
                menorValor = lista[i];
            mediaValores += lista[i];
        }
    }
    mediaValores = mediaValores / lista.length;
    if (validaLista)
        return [maiorValor, menorValor, mediaValores];
    else
        return [-1];
};
console.log(retiraValores([1, 2, 3, 4, 5]));
console.log(retiraValores(["aaa", 1, 3]));
