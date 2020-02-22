//atributos opcionales

interface Casa {
    ancho:number;
    largo:number;
    //opcianal
    alto?:number;
}

function dimensiones(medidas: Casa): string {
    let area: number = medidas.ancho * medidas.largo;
    //como tenemos opcional tenemos que usar un condicional

    if(medidas.alto) {
        return `El area de tu casa es ${area} mts2 y de alto ${medidas.alto} mst2`;
    } else {
        return `El area de tu casa es ${area} mts2`;
    }

}
console.log(dimensiones({ancho:10, largo:12, alto:3}));
console.log(dimensiones({ancho:10, largo:12}));

