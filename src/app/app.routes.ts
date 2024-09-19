import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarEstantesComponent } from './components/estante/listar-estantes/listar-estantes.component';
import { NgModule } from '@angular/core';
import { CrearEstanteComponent } from './components/estante/crear-estante/crear-estante.component';

export const routes: Routes = [
    { path: "", component: ListarEstantesComponent},
    { path: "listar-estantes", component: ListarEstantesComponent}, 
    { path: "crear-estante", component: CrearEstanteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutes{}
