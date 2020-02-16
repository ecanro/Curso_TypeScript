//js vanilla
function multiplicar(num1, num2){
    return num1 * num2;
}

let resultado = multiplicar(2, 8);
console.log("resultado es :", resultado);


//funcion con let global scope
let la_cuenta = 100;

function aumentarLacuenta(valor){
    console.log(la_cuenta, "es Valor de la cuenta dentro de la funcion");
    la_cuenta = la_cuenta + valor;
}

//llamar funcion
aumentarLacuenta(20);
console.log(la_cuenta);
