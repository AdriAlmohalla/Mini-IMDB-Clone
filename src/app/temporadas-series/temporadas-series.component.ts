import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../interfaces/serie';
import { seriesService } from '../services/series.service';

@Component({
  selector: 'app-temporadas-series',
  templateUrl: './temporadas-series.component.html',
  styleUrls: ['./temporadas-series.component.css']
})
export class TemporadasSeriesComponent implements OnInit {

  temporadas!: string[] | undefined

  constructor(private seriesService: seriesService,
              private activateRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.activateRoute.parent?.params.subscribe(param => {
      const descripcion = param['serie'].split('-')
      const id = descripcion[descripcion.length - 1]
      const serie = this.seriesService.getById(parseInt(id))
      this.temporadas = serie?.temporadas

      // if (response) {
      //   this.serie = response
      //   console.log(this.serie.temporadas)
      // }
    })
  }

}
