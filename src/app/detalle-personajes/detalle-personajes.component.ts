import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../interfaces/personajes';
import { Serie } from '../interfaces/serie';
import { personajesService } from '../services/personajes.service';
import { seriesService } from '../services/series.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.css']
})
export class DetallePersonajesComponent implements OnInit {

  serie!: Serie
  infoPersonaje!: Personaje

  constructor(private personajesService: personajesService,
              private seriesService: seriesService,
              private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      const nombrePersonaje = param['personaje'].split('-')
      const id = nombrePersonaje[nombrePersonaje.length - 1]
      const response = this.personajesService.getById(parseInt(id))
      if (response) {
        this.infoPersonaje = response
        const response2 = this.seriesService.getById(this.infoPersonaje.serie)
        if (response2) {
          this.serie = response2
        }
      }
    })
  }

}
