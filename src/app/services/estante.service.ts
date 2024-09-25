import { Injectable } from "@angular/core";
import { range } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class EstanteService {

    constructor() {}

    getFilas() {
        return 5;        
    }

    getColumnas() {
        return 3;        
    }

    getNombre() {
        return "E9";
    }

    getRango() {
         return this.getFilas()*this.getColumnas();

    }
}
