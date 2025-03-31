import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ListaOpciones } from '../../../core/models/listaOpciones.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutenticacionService } from '../../../core/services/autenticacion.service';
import { DatosUsuario } from '../../../core/models/datosUsuario.model';
import { ListaDeOpcionesMenu } from '../../../assets/datos/listaDeOpcionesMenu';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-menu-lateral-administrador',
  imports: [
    AccordionModule, 
    CommonModule, 
    RouterModule
  ],
  templateUrl: './menu-lateral-administrador.component.html',
  styleUrl: './menu-lateral-administrador.component.css'
})
export class MenuLateralAdministradorComponent implements OnInit {
  @Input() isMenuVisible!: boolean;
  @Output() toggleMenu = new EventEmitter<void>();

  selectedOption: string | null = "Inicio";
  selectedAccordionOption: string | null = null;
  opcionUsuario: boolean = false;
  listaOpciones: ListaOpciones[] = ListaDeOpcionesMenu;


  ngOnInit(): void {
    
  }
  

  cambiarOpcion() {
    this.opcionUsuario = !this.opcionUsuario;
  }

  cambiarEstado() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.selectedAccordionOption = null;
    this.clearFocus();
  }

  handleToggle(event: any, opcion: any): void {
    const headerElement = event.originalEvent.target.closest('.p-accordion-header');
    this.selectedOption = opcion.titulo;

    if (event.collapsed) {
      const hasSelectedOptions = this.hasSelectedOptions(opcion.opciones);
      if (!hasSelectedOptions) {
        this.clearFocus();
        this.selectedOption = null;
        headerElement.classList.remove('expanded');
      } else {
        headerElement.classList.add('expanded');
      }
    } else {
      this.clearFocus();
      headerElement.classList.remove('expanded');
    }
  }

  clearFocus(): void {
    const allHeaders = document.querySelectorAll('.p-accordion-header');
    allHeaders.forEach(header => {
      header.classList.remove('expanded');
    });
  }

  handleOptionClick(event: any, op: any): void {
    this.selectedOption = op.titulo;
    this.selectedAccordionOption = op.titulo;

    const allOptions = document.querySelectorAll('.p-accordion .p-accordion-content a');
    allOptions.forEach(option => {
      option.classList.remove('selected');
    });

    event.target.classList.add('selected');
    this.clearFocus();
  }

  hasSelectedOptions(opciones: any[]): boolean {
    return opciones.some(op => this.selectedOption === op.titulo);
  }
}
