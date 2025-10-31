import { Component } from '@angular/core';
import { EmpleadoService } from '../../Servicios/Empleado/empleado.service';
import { Empleados } from '../../Models/empleadoModel';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


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

  deleteEmpleado(idEmpleado:number){
    this.empleadoService.deleteEmpleado(idEmpleado).subscribe({
      next : (data) =>{
        this.getEmpleados();
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }

  confirmDelete(idEmpleado:number){
    Swal.fire({
      title: 'CONFIRMACION',
      text: '¿Deseas Borrar este Empleado?',
      icon: 'question',
      showCancelButton:true,
      confirmButtonText: 'SI',
      cancelButtonText: 'CANCELAR',
    }).then((result)=>{
      if(result.isConfirmed){
        this.deleteEmpleado(idEmpleado);
      }
    })
  }
}
