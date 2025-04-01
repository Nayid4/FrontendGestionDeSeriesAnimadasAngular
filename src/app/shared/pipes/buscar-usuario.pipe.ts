import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../../core/models/usuario.model';

@Pipe({
  name: 'buscarUsuario'
})
export class BuscarUsuarioPipe implements PipeTransform {

  transform(listaUsuarios: Usuario[], entradaInput: string): Usuario[] | undefined[] {
      entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
      
      return entradaInput ? listaUsuarios.filter(valor => valor.nombre.toLowerCase()
      .includes(entradaInput))  : listaUsuarios
  
    }

}
