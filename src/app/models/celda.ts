export class Celda {
    _id?: number;
    public fila: number;
    public columna: number;

    constructor(fila:number, columna:number) {
        this.fila=fila;
        this.columna= columna;
    }
}