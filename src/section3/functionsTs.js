//funciones tipo ts
function multiplicar(x, y) {
    return x * y;
}
var producto = multiplicar(2, 4);
console.log(producto, 'resultado');
var sumatoria = 0;
console.log(sumatoria, 'sumatoria antes');
//funcion tipo void indefinida solo para sumar 1 a sumatoria
function sumar() {
    sumatoria++;
}
//funcion tipo number para sumar 1 a sumatoria, el ++ va antes para incrementarlo antes de mostrarlo
function sumar1() {
    return ++sumatoria;
}
sumar();
console.log(sumatoria, 'sumatoria despues de compilar');
sumar1();
//como ya lleva 1 de la funcion sumar tupo void el resultado sera 2
console.log(sumatoria, 'sumatoria1 despues de compilar');
