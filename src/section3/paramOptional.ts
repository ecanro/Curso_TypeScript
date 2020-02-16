function nombre_completo(nombre: string, apellido?: string): string {
//los parametros en Ts son obligatorios, no asi en Js
//para evitar error en la compilacion podemos usar ? para indicar que es opcional
//pero el tipado no pasa a Js por lo que si no indicamos el parametro mostrara undefined
//tenemos que usar un if  
   if(apellido){
        return nombre + ' ' + apellido;
    } else {
        return nombre;
    }

}

let resultado: string = nombre_completo('Edgar', 'Canro')
let resultado2: string = nombre_completo('Edgar');
console.log(resultado);
console.log(resultado2);