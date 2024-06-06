function encontrarMaior(numero1, numero2, numero3) {
    var maior = 0;
    if (numero1 > numero2 && numero1 > numero3) {
        maior = numero1;
    }
    else if (numero2 > numero1 && numero2 > numero3) {
        maior = numero2;
    }
    else if (numero3 > numero1 && numero3 > numero2) {
        maior = numero3;
    }
    return maior;
}
function encontrarMenor(numero1, numero2, numero3) {
    var menor = 0;
    if (numero1 < numero2 && numero1 < numero3) {
        menor = numero1;
    }
    else if (numero2 < numero1 && numero2 < numero3) {
        menor = numero2;
    }
    else if (numero3 < numero1 && numero3 < numero2) {
        menor = numero3;
    }
    return menor;
}
function calcularMedia(x, y) {
    return (x + y) / 2;
}
function principal() {
    console.clear();
    var teclado = require("prompt-sync")();
    var n1 = parseFloat(teclado("digite o primeiro numero: "));
    var n2 = parseFloat(teclado("digite o segundo numero: "));
    var n3 = parseFloat(teclado("digite o terceiro numero: "));
    var maior = encontrarMaior(n1, n2, n3);
    var menor = encontrarMenor(n1, n2, n3);
    console.log("O maior numero \u00E9 " + encontrarMaior(n1, n2, n3) + " e o menor numero \u00E9 " + encontrarMenor(n1, n2, n3) + ", e a media \u00E9 " + calcularMedia(maior, menor));
}
principal();
