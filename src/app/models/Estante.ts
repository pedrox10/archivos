import { Celda } from "./celda";

export class Estante {
    _id?: number;
    nombre: string;
    filas: number;
    columnas: number;
    celdas: Celda[];

    constructor() {
        
    }
} 