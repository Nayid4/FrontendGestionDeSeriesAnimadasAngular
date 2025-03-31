import { Routes } from '@angular/router';
import { autenticadoGuard } from './core/guards/autenticado.guard';
import { PaginaNoEcontradaComponent } from './pages/extras/pagina-no-econtrada/pagina-no-econtrada.component';

export const routes: Routes = [
    {
        path: '',
        canActivate: [!autenticadoGuard],
        loadChildren: () => import('./pages/invitado/invitado.routes').then(m => m.INVITADO_ROUTES)
    },
    {
        path: 'autenticacion',
        canActivate: [!autenticadoGuard],
        loadChildren: () => import('./pages/autenticacion/autenticacion.routes').then(m => m.AUTENTICACION_ROUTES)
    },
    {
        path: 'dashboard',
        canActivate: [autenticadoGuard],
        loadChildren: () => import('./pages/administrador/administrador.routes').then(m => m.ADMINISTRADOR_ROUTES)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        //redirectTo: 'dashboard'
        component: PaginaNoEcontradaComponent
    }
];
