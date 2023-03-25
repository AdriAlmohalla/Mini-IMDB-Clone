import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../interfaces/serie';
import { seriesService } from '../services/series.service';

@Component({
  selector: 'app-detalle-canales',
  templateUrl: './detalle-canales.component.html',
  styleUrls: ['./detalle-canales.component.css']
})
export class DetalleCanalesComponent implements OnInit {

  listaDeSeries!: Serie[]

  constructor(private activateRoute: ActivatedRoute,
              private seriesService: seriesService) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.listaDeSeries = this.seriesService.getSeriesByCanal(params['canal'].split('-').join(' '))
    })
  }

}

// sacar el nombre del canal
// routerActive
// con ese nombre llamamos al servicio para obtener las series de ese canal
// pintarlas en el html
