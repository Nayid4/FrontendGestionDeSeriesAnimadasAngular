import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPeliculaComponent } from './ver-pelicula.component';

describe('VerPeliculaComponent', () => {
  let component: VerPeliculaComponent;
  let fixture: ComponentFixture<VerPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerPeliculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
