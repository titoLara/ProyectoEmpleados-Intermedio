import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../../Models/empleadoModel';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  readonly API_URL = "http://localhost:8082/empleados"

  constructor(private http:HttpClient) { }

  getEmpleado(){
    return this.http.get<Empleados[]>(this.API_URL)
  }

  postEmpleado(empleados : Empleados){
    return this.http.post<Empleados>(this.API_URL, empleados)
  }
}
