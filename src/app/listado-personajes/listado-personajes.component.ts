import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personajes';
import { personajesService } from '../services/personajes.service';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class ListadoPersonajesComponent {

  listadoPersonajes!: Personaje[]

  constructor(private personajesService: personajesService) {}

  ngOnInit(): void {
    this.listadoPersonajes = this.personajesService.getAll()
  }

}
