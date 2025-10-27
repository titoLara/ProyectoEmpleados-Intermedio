import { Component } from '@angular/core';
import { EmpleadoService } from '../../Servicios/Empleado/empleado.service';
import { Empleados } from '../../Models/empleadoModel';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-get-empleados',
  imports: [RouterLink],
  templateUrl: './get-empleados.component.html',
  styleUrl: './get-empleados.component.scss'
})
export class GetEmpleadosComponent {
  empleado:Empleados  [] = []

  constructor(public empleadoService:EmpleadoService){}

  ngOnInit():void{
    this.getEmpleados()
  }

  getEmpleados(){
    this.empleadoService.getEmpleado().subscribe({
      next : (data) =>{
        this.empleado = data
        this.getEmpleados()
      },
      error :(err)=>{
        console.log(err)
      }
    })
  }
}
