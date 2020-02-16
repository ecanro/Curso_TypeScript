//parametros tipo rest, grupo de N cantidad usando ...solo para arreglos
function deportes(persona) {
    var deportes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        deportes[_i - 1] = arguments[_i];
    }
    console.log(deportes);
    return "A " + persona + ", le gusta esto: " + deportes.join(',');
}
console.log(deportes('Edgar', 'Lol', 'chess', 'basket'));
//resumen
//function ejemplo(requerido: tipo, por_default: tipo='algo', opcional?: tipo)
