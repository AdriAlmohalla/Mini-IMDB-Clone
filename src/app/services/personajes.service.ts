import { Injectable } from '@angular/core';
import { PERSONAJES } from 'src/db/personajes.db';

@Injectable({
  providedIn: 'root'
})
export class personajesService {

  constructor() { }

  getAll() {
    return PERSONAJES
  }

  getById(idPersonaje: number) {
    return PERSONAJES.find(personaje => personaje.id === idPersonaje)
  }

  getPersonajesByPelicula(idSerie: number) {
    return PERSONAJES.filter(personaje => personaje.serie === idSerie)
  }
}
