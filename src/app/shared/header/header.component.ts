import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public texto: string = "";

  constructor(public _servicio: InfoPaginaService,
              public router: Router) {

  }

  buscarProducto() {

    if (this.texto.length < 1) {
      return;
    }
    this.router.navigate(['/search', this.texto])

    this.texto = "";
  }

}
