function multiplicar(num1, num2) {
    return num1 * num2;
}
var resultado = multiplicar(2, 8);
console.log("resultado es :", resultado);
var la_cuenta = 100;
function aumentarLacuenta(valor) {
    console.log(la_cuenta, "es Valor de la cuenta dentro de la funcion");
    la_cuenta = la_cuenta + valor;
}
aumentarLacuenta(20);
console.log(la_cuenta);
