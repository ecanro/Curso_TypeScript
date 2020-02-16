//tipo any para objetos deconocidos, librerias desconocidas com
var obj_libreria;
obj_libreria = 4;
obj_libreria = true;
obj_libreria = "no se que es",
    obj_libreria = [1, 2],
    //no da error para ningun tipo de variable en ts, pero para js no importa el no usa tipado
    console.log(obj_libreria.atributo_desconocido);
//ts no detectar error, solo al compilar
console.log(obj_libreria.metodo_desconocido());
var lista = [20, true, false, "string"];
