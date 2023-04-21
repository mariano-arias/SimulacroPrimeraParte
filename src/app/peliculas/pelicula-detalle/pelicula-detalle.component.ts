import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/Entities/pelicula';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent {

  @Input() pelicula: Pelicula | undefined;

}
