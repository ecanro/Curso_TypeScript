function asignar_posicion(nombre, numero, posicion) {
    if (posicion === void 0) { posicion = 'defensa'; }
    return nombre + " jugara con el numero " + numero + " en la posicion de " + posicion;
}
var judador1 = asignar_posicion('Saed', 11);
var judador2 = asignar_posicion('Edgar', 10, 'Puntero');
console.log(judador1);
console.log(judador2);
