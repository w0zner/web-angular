import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDetalle } from 'src/app/interfaces/producto-detalle.intergace';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  producto: ProductoDetalle | undefined;
  id: string | undefined;

  constructor(public route: ActivatedRoute,
    public productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      this.productosService.obtenerDetalleProducto(parametros['id'])
        .subscribe((resp: ProductoDetalle) => {
          this.id = parametros['id'];
          this.producto = resp;
      });
    })
  }
  
}
