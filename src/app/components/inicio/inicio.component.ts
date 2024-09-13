import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

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
