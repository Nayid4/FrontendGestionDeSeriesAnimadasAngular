import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../../core/services/pelicula.service';
import { Subject, takeUntil } from 'rxjs';
import { Pelicula } from '../../../core/models/pelicula.model';
import { TarjetaPeliculaComponent } from '../../../shared/components/tarjeta-pelicula/tarjeta-pelicula.component';

@Component({
  selector: 'app-inicio',
  imports: [
    TarjetaPeliculaComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  listaPeliculas: Pelicula[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private servicioPelicula: PeliculaService) {}

  ngOnInit(): void {
    this.servicioPelicula
    .ListarTodos()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (resp: Pelicula[]) => {
        this.listaPeliculas = resp;
      },
    });
  }
}
