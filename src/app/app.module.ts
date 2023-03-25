import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoSeriesComponent } from './listado-series/listado-series.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { DetalleSerieComponent } from './detalle-serie/detalle-serie.component';
import { ListadoCanalesComponent } from './listado-canales/listado-canales.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { DetalleCanalesComponent } from './detalle-canales/detalle-canales.component';
import { PersonajesSeriesComponent } from './personajes-series/personajes-series.component';
import { TemporadasSeriesComponent } from './temporadas-series/temporadas-series.component';
import { DetalleListadoComponent } from './detalle-listado/detalle-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoSeriesComponent,
    ListadoPersonajesComponent,
    DetalleSerieComponent,
    ListadoCanalesComponent,
    DetallePersonajesComponent,
    DetalleCanalesComponent,
    PersonajesSeriesComponent,
    TemporadasSeriesComponent,
    DetalleListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
