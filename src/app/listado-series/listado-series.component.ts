import { Component, OnInit } from '@angular/core';
import { Serie } from '../interfaces/serie';
import { seriesService } from '../services/series.service';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.component.html',
  styleUrls: ['./listado-series.component.css']
})
export class ListadoSeriesComponent implements OnInit {

  listadoSeries!: Serie[]

  constructor(private seriesService: seriesService) {}

  ngOnInit(): void {
    this.listadoSeries = this.seriesService.getAll()
  }

  

}
