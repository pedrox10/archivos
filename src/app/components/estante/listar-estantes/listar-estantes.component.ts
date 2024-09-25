import { Component } from '@angular/core';
import { EstanteComponent } from '../estante.component';
import { Estante } from "../../../models/estante";
import { EstanteService } from '../../../services/estante.service';

@Component({
  selector: 'app-listar-estantes',
  standalone: true,
  imports: [EstanteComponent],
  templateUrl: './listar-estantes.component.html',
  styleUrl: './listar-estantes.component.css'
})
export class ListarEstantesComponent {

  public constructor(public estanteService: EstanteService) {
  }

  public test() {
     
    /*if (document.getElementById("grid").classList[1] != null) {
      document.getElementById("grid").classList.remove("has-4-cols");
      document.getElementById("grid").classList.add("has-3-cols")
      alert(document.getElementById("grid").classList[0])
    }*/
  }

  public dropdown() {
    document.getElementById("dropdown").classList.add("is-active");
  }

}
