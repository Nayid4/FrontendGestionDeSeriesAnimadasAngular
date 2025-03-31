import { Routes } from "@angular/router";
import { GestionUsuarioLayoutComponent } from "./gestion-usuario-layout/gestion-usuario-layout.component";
import { ListaUsuarioComponent } from "./lista-usuario/lista-usuario.component";
import { FormularioUsuarioComponent } from "./formulario-usuario/formulario-usuario.component";


export const GESTION_USUARIO_ROUTES: Routes = [
    {
        path: '',
        component: GestionUsuarioLayoutComponent,
        children: [
            { path: '', component: ListaUsuarioComponent },
            { path: 'crear', component: FormularioUsuarioComponent },
            { path: 'editar/:id', component: FormularioUsuarioComponent }
        ]
    }
];