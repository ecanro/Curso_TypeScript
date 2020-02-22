function nombre_completo(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var resultado = nombre_completo('Edgar', 'Canro');
var resultado2 = nombre_completo('Edgar');
console.log(resultado);
console.log(resultado2);
