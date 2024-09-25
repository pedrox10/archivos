import { Component, OnInit } from '@angular/core';
import { EstanteService } from '../../services/estante.service';
import { Celda } from '../../models/celda';

@Component({
  selector: 'app-estante',
  standalone: true,
  imports: [],
  templateUrl: './estante.component.html',
  styleUrl: './estante.component.css'
})
export class EstanteComponent implements OnInit {
    public filas:number;
    public columnas:number;
    public nombre:string;
    public celdas: Celda[];
    constructor( public estanteService: EstanteService) {

    }
  ngOnInit(): void {
    this.filas = this.estanteService.getFilas();
    this.columnas = this.estanteService.getColumnas();
    this.nombre = this.estanteService.getNombre();
    this.celdas = new Array();
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        this.celdas.push(new Celda(this.filas-i, j+1));
      }
    }

  }
}
