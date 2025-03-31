import { Routes } from "@angular/router";
import { GestionActorLayoutComponent } from "./gestion-actor-layout/gestion-actor-layout.component";
import { ListaActorComponent } from "./lista-actor/lista-actor.component";
import { FormularioActorComponent } from "./formulario-actor/formulario-actor.component";


export const GESTION_ACTOR_ROUTES: Routes = [
    {
        path: '',
        component: GestionActorLayoutComponent,
        children: [
            { path: '', component: ListaActorComponent },
            { path: 'crear', component: FormularioActorComponent },
            { path: 'editar/:id', component: FormularioActorComponent }
        ]
    }
];