import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../interfaces/personajes';
import { personajesService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes-series',
  templateUrl: './personajes-series.component.html',
  styleUrls: ['./personajes-series.component.css']
})
export class PersonajesSeriesComponent {

  personajes!: Personaje[]

  constructor(private activateRoute: ActivatedRoute,
              private personajesService: personajesService) {}

  ngOnInit(): void {
    // necesito la informacion de la serie -- obtener el id de la serie
    // ir al servicio y pedir todos los personajes de esa serie
    // mostralos

    this.activateRoute.parent?.params.subscribe(param => {
      const descripcion = param['serie'].split('-')
      const id = descripcion[descripcion.length - 1]
      this.personajes = this.personajesService.getPersonajesByPelicula(parseInt(id))
    })

  }

  

}
