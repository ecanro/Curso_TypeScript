//parametros por defecto, son obligatorios
//la diferencia es que ya le indicamos que valor tiene el parametro por defecto

function asignar_posicion(nombre: string, numero: number, posicion: string='defensa'): string {
    return `${nombre} jugara con el numero ${numero} en la posicion de ${posicion}`;
}
//los parametros por defecto son opcionales, por lo que si indico un valor lo sobreescribre
let judador1: string = asignar_posicion('Saed', 11);
let judador2: string = asignar_posicion('Edgar', 10, 'Puntero');

console.log(judador1);
console.log(judador2);

