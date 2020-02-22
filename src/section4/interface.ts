interface perro{
    //atributos
    nombre: string;
}

function adoptar(mascota:perro): void {
    console.log(`Yo adopte a  ${mascota.nombre}`)
        
}
//si tengo una interface debo cumplir con todos sus atributos
let mi_mascota = {nombre: "hanna", raza: 'pincher'}

adoptar(mi_mascota)