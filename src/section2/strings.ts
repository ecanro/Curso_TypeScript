let filme:string = 'Titanic';

let series: string = "Stranger things"

//template string
let poema: string = ` Lorem ipsum dolor sit amet 
consectetur adipisicing elit. 
Cum labore ab veritatis dignissimos 
ipsum recusandae necessitatibus porro 
earum reiciendis ex accusantium, atque, 
nihil doloribus corporis consectetur inventore 
unde. Quibusdam, itaque!`;

//forma legacy
let programas1: string = "Mis programas favoritos son: " + filme + " y " + series;
console.log(programas1);

//template strings literalls
let programas: string = `Mis programas favoritos son: ${filme} y ${series}`;
console.log(programas);

//usando template strings con formulas (operaciones)
let edad_actual: number = 42;
let edad_futura: string = `

    En Abril mi edad sera de: ${edad_actual + 1}

`;

console.log(edad_futura);

//metodos, al colocar la variable y el . me despliega un menu con los metodos disponibles apra strings

console.log(programas.charAt(0));
console.log(programas.toUpperCase());

// recordar que para las variables de resultado tambien se debe indicar el tipo
