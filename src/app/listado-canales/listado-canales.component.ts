import { Component, OnInit } from '@angular/core';
import { seriesService } from '../services/series.service';

@Component({
  selector: 'app-listado-canales',
  templateUrl: './listado-canales.component.html',
  styleUrls: ['./listado-canales.component.css']
})
export class ListadoCanalesComponent implements OnInit {

  listadoCanales!: any[]

  constructor(private seriesService: seriesService) {}

  ngOnInit(): void {
    const listadoCanales = this.seriesService.getCanales()
    this.listadoCanales = listadoCanales.map(canal => {
      return {
        canal: canal,
        nombreUrl: canal.split(' ').join('-')
      }
    })
  }
  
}

[
  {canal: 'Disney +', nombreUrl: 'disney+'},
  {canal: 'Netflix', nombreUrl: 'netflix'},
]
