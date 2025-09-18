import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamentos } from '../../Models/departamentoModel';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  readonly API_URL = "http://localhost:8082/departamento"

  constructor(public http:HttpClient) { }

  getDepartamento(){
    return this.http.get<Departamentos[]>(this.API_URL)
  }

  getDepartamentoById(idDepartamento : number){
    return this.http.get<Departamentos>(`${this.API_URL}/${idDepartamento}`)
  }

  postDepartamento(departamento: Departamentos){
    return this.http.post<Departamentos>(this.API_URL, departamento)
  }

  putDepartamento(idDepartamento : number, departamento : Departamentos ){
    return this.http.put<Departamentos>(`${this.API_URL}/${idDepartamento}`, departamento)
  }

  deleteDepartamento(idDepartamento : number){
    return this.http.delete<Departamentos>(`${this.API_URL}/${idDepartamento}`)
  }
}
