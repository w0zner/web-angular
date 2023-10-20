import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.intergace';
import { ProductoDetalle } from '../interfaces/producto-detalle.intergace';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  URL_BASE_PRODUCTOS = "https://angular-html-ed830-default-rtdb.firebaseio.com";
  cargando= true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  //detalles: ProductoDetalle;

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {

     return new Promise<void>((resolve, reject) => {
        this.http.get<Producto[]>(this.URL_BASE_PRODUCTOS + "/productos_idx.json")
        .subscribe((resp: Producto[]) => {
          this.cargando= false;
          this.productos = resp;
          resolve();
        })
     })

  }

  public obtenerDetalleProducto(id: string) {
    return this.http.get<ProductoDetalle>(this.URL_BASE_PRODUCTOS + "/productos/" + id + ".json")
  }

  public buscarProducto(palabra: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(palabra)
      })
    } 
    else {
      this.filtrarProductos(palabra)
    } 
  }

  private filtrarProductos(palabra: string) {
    this. productosFiltrados = this.productos.filter(producto => {
      const categoriaFiltrada = producto.categoria?.toLowerCase().includes(palabra.toLowerCase());
      const nombreFiltrado = producto.titulo?.toLowerCase().includes(palabra.toLowerCase());

      return nombreFiltrado || categoriaFiltrada
    })
  }
}
