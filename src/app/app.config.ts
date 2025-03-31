import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { autenticacionInterceptor } from './core/interceptors/autenticacion.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { cargandoInterceptor } from './core/interceptors/cargando.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(
      routes,
      withComponentInputBinding(),
    ), 
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        autenticacionInterceptor,
        cargandoInterceptor
      ])
    ),
    provideAnimations(),
    provideAnimations()
  ]
};
