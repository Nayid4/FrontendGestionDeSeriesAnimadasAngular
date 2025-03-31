import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { AutenticacionService } from '../../../core/services/autenticacion.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-encabezado-administrador',
  imports: [
    BreadcrumbModule, 
    RouterModule,
    AvatarModule,
    MenubarModule,
    MenuModule,
    ButtonModule
  ],
  templateUrl: './encabezado-administrador.component.html',
  styleUrl: './encabezado-administrador.component.css'
})
export class EncabezadoAdministradorComponent  implements OnInit{
  
  @Output() toggleMenu = new EventEmitter<void>();

  nombre: string = ""

  items!: MenuItem[];

  inicial: string = 'A'

  constructor(private servicioAute: AutenticacionService, private router: Router) {
    
  }

  ngOnInit() {

    this.servicioAute.datosAutenticado$.subscribe({
      next: (datos) => {
        if (datos && datos.nombre) {
          this.inicial = datos.nombre[0]; // Asignar la primera letra solo si hay un nombre
          this.nombre = (datos.institucion ? datos.institucion + ' - ' : '') + datos.nombre;
        } else {
          this.inicial = 'A';  // Valor por defecto si no hay datos
          this.nombre = '';
        }
      }
    });
    


    this.items = [
      /*{
        label: 'Cambiar Contraseña',
        command: () => {}
      },*/
      {
        label: 'Cerrar Sesión',
        command: () => {
          this.servicioAute.cerrarSesion()
          this.router.navigate(['/'])
        }
      }
    ];
  }

  
}