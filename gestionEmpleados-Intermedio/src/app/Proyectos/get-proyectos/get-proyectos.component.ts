import { Component } from '@angular/core';
import { Proyecto } from '../../Models/proyectoModel';
import { ProyectosService } from '../../Servicios/proyectos.service';
import Swal from 'sweetalert2';
import { SwalDirective, SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { Router, RouterLink, } from '@angular/router';

@Component({
  selector: 'app-get-proyectos',
  imports: [SwalDirective, RouterLink, ],
  templateUrl: './get-proyectos.component.html',
  styleUrl: './get-proyectos.component.scss'
})
export class GetProyectosComponent {
  proyectos : Proyecto [] = [];

  constructor(public proyectoService : ProyectosService){}

  ngOnInit(): void {
    this.getProyectos()
  }

  getProyectos(){
    this.proyectoService.getEmpleado().subscribe({
      next : (data) =>{
        this.proyectos = data;
        this.getProyectos();
      },
      error : (e) =>{
        console.log("Error al obtener los datos"+ e)
      }
    })
  }

  deleteProyecto(idProyecto : number){
    this.proyectoService.deleteProyecto(idProyecto).subscribe({
      next : (data)=>{
        
        console.log(data),
        this.getProyectos();
      },
      error : (e) =>{
        console.log(e)
      }
    })
  }
  
  confirmDelete(idProyecto : number){
    Swal.fire({
      title: 'Confirmacion',
      text : '¿Desear Borrar el Proyecto?',
      icon : 'question',
      showCancelButton : true ,
      confirmButtonText : 'Si' ,
      cancelButtonText : 'Cancelar',
    }).then((result)=>{
      if(result.isConfirmed){
        this.deleteProyecto(idProyecto);

        Swal.fire("EXITO","se ha borrado Correctamente",'success');
      }
    })
  }
}
