function nombre_completo(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
//los parametros en Ts son obligatorios, no asi en Js
//para evitar error en la compilacion podemos usar ? para indicar que es opcional
//pero el tipado no pasa a Js por lo que si no indicamos el parametro mostrara undefined
var resultado = nombre_completo('Edgar', 'Canro');
var resultado2 = nombre_completo('Edgar');
console.log(resultado);
console.log(resultado2);
