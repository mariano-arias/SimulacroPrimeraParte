import { Component, Input, Output } from '@angular/core';
import { Pelicula } from '../Entities/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  p: Pelicula | undefined;

  getMovieSelected(p: Pelicula) {
    this.p = p;
  }
}
