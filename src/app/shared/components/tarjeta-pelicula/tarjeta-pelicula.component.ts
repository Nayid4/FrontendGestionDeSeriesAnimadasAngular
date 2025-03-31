import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tarjeta-pelicula',
  imports: [
    CardModule, 
    ButtonModule
  ],
  templateUrl: './tarjeta-pelicula.component.html',
  styleUrl: './tarjeta-pelicula.component.css'
})
export class TarjetaPeliculaComponent {

}
