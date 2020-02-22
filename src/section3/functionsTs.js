function multiplicar(x, y) {
    return x * y;
}
var producto = multiplicar(2, 4);
console.log(producto, 'resultado');
var sumatoria = 0;
console.log(sumatoria, 'sumatoria antes');
function sumar() {
    sumatoria++;
}
function sumar1() {
    return ++sumatoria;
}
sumar();
console.log(sumatoria, 'sumatoria despues de compilar');
sumar1();
console.log(sumatoria, 'sumatoria1 despues de compilar');
