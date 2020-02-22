interface Punto {
    readonly coordena_x: number;
    readonly coordena_y: number;
}

let punto: Punto = {coordena_x: 34, coordena_y: 23}


//no se le puede cambiar el valor
//punto.coordena_x = 30; da error
console.log(punto);
console.log(punto.coordena_y)