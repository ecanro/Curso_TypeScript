//Clases en TS
class Vehiculo{
    //class declaration
    marca:string;
    ano:string;
    color:string;
    puertas:number;
    kilometraje:number = 0;

    constructor(marca_:string, ano_:string, color_:string, puertas_:number){
        this.marca = marca_;
        this.ano = ano_;
        this.color = color_;
        this.puertas = puertas_;
    }
}