import { Routes } from "@angular/router";
import { GestionPaisLayoutComponent } from "./gestion-pais-layout/gestion-pais-layout.component";
import { FormularioPaisComponent } from "./formulario-pais/formulario-pais.component";
import { ListaPaisComponent } from "./lista-pais/lista-pais.component";


export const GESTION_PAIS_ROUTES: Routes = [
    {
        path: '',
        component: GestionPaisLayoutComponent,
        children: [
            { path: '', component: ListaPaisComponent },
            { path: 'crear', component: FormularioPaisComponent },
            { path: 'editar/:id', component: FormularioPaisComponent }
        ]
    }
];