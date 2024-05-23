
function calcularIMCEnKilos(pesoEnKilos, alturaEnMetros) {
    return pesoEnKilos / (alturaEnMetros * alturaEnMetros);
}


function calcularIMCEnLibras(pesoEnLibras, alturaEnMetros) {
    // Convertir libras a kilogramos: 1 libra equivale a 0.453592 kilogramos
    const pesoEnKilos = pesoEnLibras * 0.453592;
    return calcularIMCEnKilos(pesoEnKilos, alturaEnMetros);
}


function interpretarIMC(imc) {
    if (imc < 18.5) {
        return 'Peso inferior al normal';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Peso superior al normal';
    } else {
        return 'Obesidad';
    }
}



let resultLibras = calcularIMCEnKilos(50, 1.70);

let resultKilos = calcularIMCEnLibras(180, 1.65);

console.log(resultLibras, resultKilos);
