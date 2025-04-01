import { Pipe, PipeTransform } from '@angular/core';
import { Director } from '../../core/models/director.model';

@Pipe({
  name: 'buscarDirector'
})
export class BuscarDirectorPipe implements PipeTransform {

  transform(lista: Director[], entradaInput: string): Director[] | undefined[] {
      entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
      
      return entradaInput ? lista.filter(valor => valor.nombre.toLowerCase()
      .includes(entradaInput))  : lista
  
    }

}
