import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-estantes',
  standalone: true,
  imports: [],
  templateUrl: './listar-estantes.component.html',
  styleUrl: './listar-estantes.component.css'
})
export class ListarEstantesComponent {

  public test() {
    if(document.getElementById("grid").classList[1] != null) {
      document.getElementById("grid").classList.remove("has-4-cols");
      document.getElementById("grid").classList.add("has-3-cols")
    alert(document.getElementById("grid").classList[0])
    }
  }

  public dropdown() {
    document.getElementById("dropdown").classList.add("is-active");
  }

}
