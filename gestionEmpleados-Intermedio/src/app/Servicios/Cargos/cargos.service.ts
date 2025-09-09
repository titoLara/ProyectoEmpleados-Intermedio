import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cargos } from '../../Models/cargosModel';


@Injectable({
  providedIn: 'root'
})
export class CargosService {

  readonly API_URL="http://localhost:8082/cargo";

  constructor(private http: HttpClient) { }

  getCargo(){
    return this.http.get<Cargos[]>(this.API_URL)
  }

  postCargo(cargo : Cargos){
    return this.http.post<Cargos>(this.API_URL, cargo);
  }

  getById(idCargo:number){
    return this.http.get<Cargos>(`${this.API_URL}/${idCargo}`)
  }

  putCargo(idCargo:number , cargo : Cargos){
    return this.http.put<Cargos>(`${this.API_URL}/${idCargo}`,cargo)
  }

  deleteCargo(idCargo : number){
    return this.http.delete<Cargos>(`${this.API_URL}/${idCargo}`)
  }
}
