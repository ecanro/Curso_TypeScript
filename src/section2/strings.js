var filme = 'Titanic';
var series = "Stranger things";
//template string
var poema = " Lorem ipsum dolor sit amet \nconsectetur adipisicing elit. \nCum labore ab veritatis dignissimos \nipsum recusandae necessitatibus porro \nearum reiciendis ex accusantium, atque, \nnihil doloribus corporis consectetur inventore \nunde. Quibusdam, itaque!";
//forma legacy
var programas1 = "Mis programas favoritos son: " + filme + " y " + series;
console.log(programas1);
//template strings literalls
var programas = "Mis programas favoritos son: " + filme + " y " + series;
console.log(programas);
//usando template strings con formulas (operaciones)
var edad_actual = 42;
var edad_futura = "\n\n    En Abril mi edad sera de: " + (edad_actual + 1) + "\n\n";
console.log(edad_futura);
//metodos, al colocar la variable y el . me despliega un menu con los metodos disponibles apra strings
console.log(programas.charAt(0));
console.log(programas.toUpperCase());
// recordar que para las variables de resultado tambien se debe indicar el tipo
