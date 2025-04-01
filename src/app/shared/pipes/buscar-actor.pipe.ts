import { Pipe, PipeTransform } from '@angular/core';
import { Actor } from '../../core/models/actor.model';

@Pipe({
  name: 'buscarActor'
})
export class BuscarActorPipe implements PipeTransform {

  transform(listaActores: Actor[], entradaInput: string): Actor[] | undefined[] {
      entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
      
      return entradaInput ? listaActores.filter(valor => valor.nombre.toLowerCase()
      .includes(entradaInput))  : listaActores
  
    }

}
