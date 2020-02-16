//parametros tipo rest, grupo de N cantidad usando ...solo para arreglos

function deportes(persona: string, ...deportes: string[]): string {
    console.log(deportes);
    return `A ${persona}, le gusta esto: ${deportes.join(',')}`
}
console.log(deportes('Edgar', 'Lol', 'chess', 'basket'));


//resumen
//function ejemplo(requerido: tipo, por_default: tipo='algo', opcional?: tipo)