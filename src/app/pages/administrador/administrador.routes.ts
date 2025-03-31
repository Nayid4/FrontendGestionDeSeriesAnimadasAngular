import { Routes } from "@angular/router";
import { AdministradorLayoutComponent } from "./administrador-layout/administrador-layout.component";
import { InicioDashboardComponent } from "./inicio-dashboard/inicio-dashboard.component";

export const ADMINISTRADOR_ROUTES: Routes = [
    {
        path: '',
        component: AdministradorLayoutComponent,
        children: [
            { 
                path: '', component: InicioDashboardComponent 
            },
            { 
                path: 'gestion-genero', 
                loadChildren: () => import('./GestionGenero/gestionGenero.routes').then(m => m.GESTION_GENERO_ROUTES) 
            }
        ]
    }
]