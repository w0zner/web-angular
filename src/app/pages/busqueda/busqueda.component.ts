import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(public router: ActivatedRoute,
              public productoService: ProductosService) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.productoService.buscarProducto(params['palabra'])
    })
  }

}
