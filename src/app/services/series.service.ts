import { Injectable } from '@angular/core';
import { SERIES } from "../../db/series.db";

@Injectable({
  providedIn: 'root'
})
export class seriesService {

  constructor() { }

  getAll() {
    return SERIES
  }

  getById(idSerie: number) {
    return SERIES.find(serie => serie.id === idSerie)
  }

  getCanales() {
    const canales = SERIES.map(serie => serie.canal)
    const setCanales = new Set(canales)
    return [...setCanales]
  }

  getSeriesByCanal(canal: string) {
    return SERIES.filter(serie => serie.canal.toLowerCase() === canal.toLowerCase())
  }
}
