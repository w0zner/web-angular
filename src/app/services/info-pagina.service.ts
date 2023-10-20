import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any[] = []
  cargada = false;

  constructor(public http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get("assets/data/data-pagina.json").subscribe((resp: InfoPagina)=> {
      
      this.cargada = true;
      this.info = resp;

      //formas de obtener un atributo de un objeto json cuando no es del tipo de una clase
      //Forma 1
      //console.log(resp.twitter)

      //Forma 2
      //console.log(resp['twitter'])
    })
  }

  private cargarEquipo() {
    this.http.get("https://angular-html-ed830-default-rtdb.firebaseio.com/equipo.json")
      .subscribe((resp: any) => {
      this.equipo= resp;  
    } )
  }
}
