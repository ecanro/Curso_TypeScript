//para tipos undefined o null

let inutil: void = undefined;
let empty: void = null;

let resultado: any = "Datos Cargados";

if(resultado != empty) {
    console.log('Cargar Pagina')
} else {
    console.log('Error al cargar datos');
}
