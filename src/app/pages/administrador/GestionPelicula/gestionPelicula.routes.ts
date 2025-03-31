import { Routes } from "@angular/router";
import { GestionPeliculaLayoutComponent } from "./gestion-pelicula-layout/gestion-pelicula-layout.component";
import { ListaPeliculaComponent } from "./lista-pelicula/lista-pelicula.component";
import { FormularioPeliculaComponent } from "./formulario-pelicula/formulario-pelicula.component";


export const GESTION_PELICULA_ROUTES: Routes = [
    {
        path: '',
        component: GestionPeliculaLayoutComponent,
        children: [
            { path: '', component: ListaPeliculaComponent },
            { path: 'crear', component: FormularioPeliculaComponent },
            { path: 'editar/:id', component: FormularioPeliculaComponent }
        ]
    }
];