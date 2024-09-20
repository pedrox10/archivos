export class Estante {
    _id: number;
    nombre: string;
    num_filas: number;
    num_columnas: Number;

    constructor(nombre: string, num_filas: number, num_columnas: number ) {
        this.nombre = nombre;
        this.num_filas = num_filas;
        this.num_columnas = num_columnas;

    }
}