import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaAltaComponent } from './peliculas/alta/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './peliculas/listado/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from './actor/listado/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './actor/alta/actor-alta/actor-alta.component';
import { TablaPeliculaComponent } from './peliculas/tabla-pelicula/tabla-pelicula.component';
import { PeliculaDetalleComponent } from './peliculas/pelicula-detalle/pelicula-detalle.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorListadoComponent,
    ActorAltaComponent,
    TablaPeliculaComponent,
    PeliculaDetalleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
