import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/Entities/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  @Input() peliculas: Pelicula[] = [];
  @Output() movieSelected = new EventEmitter<Pelicula>();


  Seleccionar(p: Pelicula) {
    console.log(p);
    this.movieSelected.emit(p);
  }

}
