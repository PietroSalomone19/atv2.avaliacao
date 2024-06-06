
function encontrarMaior(numero1: number, numero2: number, numero3: number,): number{
    let maior: number =0;
    if (numero1 > numero2 && numero1 > numero3) {maior = numero1}
    else if (numero2 > numero1 && numero2 > numero3) {maior = numero2}
    else if (numero3 > numero1 && numero3 > numero2) {maior = numero3}

    return maior;
}

function encontrarMenor(numero1: number, numero2: number, numero3: number,): number{
    let menor: number =0;
    if (numero1 < numero2 && numero1 < numero3) {menor = numero1}
    else if (numero2 < numero1 && numero2 < numero3) {menor = numero2}
    else if (numero3 < numero1 && numero3 < numero2) {menor = numero3}

  return menor;
}

function calcularMedia (x:number, y:number): number{
   
    return (x+y)/2;

}

function principal (){

console.clear();

const teclado = require (`prompt-sync`)();

let n1: number = parseFloat(teclado(`digite o primeiro numero: `));
let n2: number = parseFloat(teclado(`digite o segundo numero: `));
let n3: number = parseFloat(teclado(`digite o terceiro numero: `));

let maior: number =  encontrarMaior(n1,n2,n3);
let menor: number = encontrarMenor(n1,n2,n3)

console.log (`O maior numero é ${encontrarMaior(n1,n2,n3)} e o menor numero é ${encontrarMenor(n1,n2,n3)}, e a media é ${calcularMedia(maior,menor)}`)

}
 
principal();