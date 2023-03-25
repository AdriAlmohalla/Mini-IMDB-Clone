import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-listado',
  templateUrl: './detalle-listado.component.html',
  styleUrls: ['./detalle-listado.component.css']
})
export class DetalleListadoComponent implements OnInit {

  @Input() id!: number
  @Input() texto: string = ''
  @Input() imagen: string = ''
  @Input() url: string = ''

  contenidoAlt: string = ''
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.url === '/serie' ? this.contenidoAlt = 'Imagen de la serie ' : this.contenidoAlt = 'Imagen del personaje: '
    this.contenidoAlt += this.texto
  }

  goToSerie() {
    const detalleUrl = this.texto?.split(' ').join('-') + '-' + this.id?.toString()
    this.router.navigate([this.url, detalleUrl])
  }

}
