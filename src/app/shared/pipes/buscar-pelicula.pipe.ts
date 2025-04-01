import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from '../../core/models/pelicula.model';

@Pipe({
  name: 'buscarPelicula'
})
export class BuscarPeliculaPipe implements PipeTransform {

  transform(listaPeliculas: Pelicula[], entradaInput: string): Pelicula[] | undefined[] {
      entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
      
      return entradaInput ? listaPeliculas.filter(valor => valor.titulo.toLowerCase()
      .includes(entradaInput))  : listaPeliculas
  
    }

}
