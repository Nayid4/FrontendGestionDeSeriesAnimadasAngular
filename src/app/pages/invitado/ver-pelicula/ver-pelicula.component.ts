import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeliculaService } from '../../../core/services/pelicula.service';
import { Subject, takeUntil } from 'rxjs';
import { Pelicula } from '../../../core/models/pelicula.model';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TagModule } from 'primeng/tag';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-ver-pelicula',
  imports: [
    Tag
  ],
  templateUrl: './ver-pelicula.component.html',
  styleUrl: './ver-pelicula.component.css',
})
export class VerPeliculaComponent implements OnInit, OnDestroy {

  pelicula!: Pelicula
  private unsubscribe$ = new Subject<void>();
  safeTrailerUrl!: SafeResourceUrl;
  
  constructor(
    private servicioPelicula: PeliculaService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.servicioPelicula
      .ListarPorId(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (resp: Pelicula) => {
          this.pelicula = resp;
          this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.youtube.com/embed/' + this.pelicula.codigoDeTrailerEnYoutube
          );
        },
      });
  }
}
