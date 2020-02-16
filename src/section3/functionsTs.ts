//funciones tipo ts

function multiplicar(x: number, y: number): number {
    return x* y;
}

let producto: number = multiplicar(2, 4);
console.log(producto, 'resultado');

let sumatoria: number = 0;
console.log(sumatoria, 'sumatoria antes');


//funcion tipo void indefinida solo para sumar 1 a sumatoria
function sumar(): void {
    sumatoria++;
}

//funcion tipo number para sumar 1 a sumatoria, el ++ va antes para incrementarlo antes de mostrarlo
//porque sino mostraria 0
function sumar1(): number {
    return ++sumatoria;
}

sumar();
console.log(sumatoria, 'sumatoria despues de compilar')

sumar1();
//como ya lleva 1 de la funcion sumar tupo void el resultado sera 2
console.log(sumatoria, 'sumatoria1 despues de compilar')