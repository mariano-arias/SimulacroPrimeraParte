import { Component, EventEmitter, Output } from '@angular/core';
import { Pelicula } from 'src/app/Entities/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {

  peliculas: Pelicula[] = [
    new Pelicula(
      1, 'Matrix', 'terror', new Date('20/2/1999'), 1200, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpics.filmaffinity.com%2FMatrix-155050517-large.jpg&tbnid=nkNB_q6wBgx2AM&vet=12ahUKEwjkxPOt87n-AhWwBrkGHbiVA9wQMygBegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fwww.filmaffinity.com%2Fes%2Ffilm932476.html&docid=cvrSZyZpfw_4-M&w=840&h=1200&q=matrix&ved=2ahUKEwjkxPOt87n-AhWwBrkGHbiVA9wQMygBegUIARDjAQ'
    ),
    new Pelicula(
      2, 'Duro de matar', 'comedia', new Date('19/9/1985'), 4567, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpics.filmaffinity.com%2FMatrix-155050517-large.jpg&tbnid=nkNB_q6wBgx2AM&vet=12ahUKEwjkxPOt87n-AhWwBrkGHbiVA9wQMygBegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fwww.filmaffinity.com%2Fes%2Ffilm932476.html&docid=cvrSZyZpfw_4-M&w=840&h=1200&q=matrix&ved=2ahUKEwjkxPOt87n-AhWwBrkGHbiVA9wQMygBegUIARDjAQ'
    ),
    new Pelicula(
      3, 'Forrest Gump', 'otros', new Date('5/12/2022'), 4455, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpics.filmaffinity.com%2FMatrix-155050517-large.jpg&tbnid=nkNB_q6wBgx2AM&vet=12ahUKEwjkxPOt87n-AhWwBrkGHbiVA9wQMygBegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fwww.filmaffinity.com%2Fes%2Ffilm932476.html&docid=cvrSZyZpfw_4-M&w=840&h=1200&q=matrix&ved=2ahUKEwjkxPOt87n-AhWwBrkGHbiVA9wQMygBegUIARDjAQ'
    )
  ];

  p: Pelicula | undefined;
  @Output() movieSelected = new EventEmitter<Pelicula>();

  movieClicked(p: Pelicula) {
    this.p = p;
    console.log(this.p);
    this.movieSelected.emit(p);
  }




}
