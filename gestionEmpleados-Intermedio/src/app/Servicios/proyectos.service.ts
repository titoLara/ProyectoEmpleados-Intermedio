import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Proyecto } from '../Models/proyectoModel';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  readonly API_URL = "http://localhost:8082/proyecto"

  constructor(private htpp : HttpClient) { }

  getProyecto(){
    return this.htpp.get<Proyecto[]>(this.API_URL)
  }

  postProyecto(proyecto : Proyecto){
    return this.htpp.post<Proyecto>(this.API_URL, proyecto);
  }

  getProyectoById(idProyecto : number){
    return this.htpp.get<Proyecto>(`${this.API_URL}/${idProyecto}`)
  }

  putProyecto(idProyecto : number, proyecto : Proyecto){
    return this.htpp.put<Proyecto>(`${this.API_URL}/${idProyecto}`, proyecto)
  }

  deleteProyecto(idProyecto : number){
    return this.htpp.delete<any>(`${this.API_URL}/${idProyecto}`);
  }
}
