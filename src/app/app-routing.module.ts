import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleCanalesComponent } from './detalle-canales/detalle-canales.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { DetalleSerieComponent } from './detalle-serie/detalle-serie.component';
import { ListadoCanalesComponent } from './listado-canales/listado-canales.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { ListadoSeriesComponent } from './listado-series/listado-series.component';
import { PersonajesSeriesComponent } from './personajes-series/personajes-series.component';
import { TemporadasSeriesComponent } from './temporadas-series/temporadas-series.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'series'},
  {path: 'series', component: ListadoSeriesComponent},
  {path: 'serie/:serie', component: DetalleSerieComponent, children: [
    // serie/juego-tronos-1/episodios
    {path: "", pathMatch: 'full', redirectTo: 'personajes'},
    {path: 'personajes', component: PersonajesSeriesComponent},
    {path: 'temporadas', component: TemporadasSeriesComponent}
  ]},
  {path: 'personajes', component: ListadoPersonajesComponent},
  {path: 'personaje/:personaje', component: DetallePersonajesComponent},
  {path: 'canales', component: ListadoCanalesComponent},
  {path: 'canales/:canal', component: DetalleCanalesComponent},
  {path: '**', redirectTo: 'series'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
