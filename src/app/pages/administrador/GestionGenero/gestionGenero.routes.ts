import { Routes } from "@angular/router";
import { GestionGeneroLayoutComponent } from "./gestion-genero-layout/gestion-genero-layout.component";
import { ListaGeneroComponent } from "./lista-genero/lista-genero.component";
import { FormularioGeneroComponent } from "./formulario-genero/formulario-genero.component";

export const GESTION_GENERO_ROUTES: Routes = [
    {
        path: '',
        component: GestionGeneroLayoutComponent,
        children: [
            { path: '', component: ListaGeneroComponent },
            { path: 'crear', component: FormularioGeneroComponent },
            { path: 'editar/:id', component: FormularioGeneroComponent }
        ]
    }
];