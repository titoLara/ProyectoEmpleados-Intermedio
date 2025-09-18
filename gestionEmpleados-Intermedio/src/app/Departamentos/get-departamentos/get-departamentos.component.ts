import { Component } from '@angular/core';
import { DepartamentosService } from '../../Servicios/Departamentos/departamentos.service';
import { Departamentos } from '../../Models/departamentoModel';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-departamentos',
  imports: [RouterLink],
  templateUrl: './get-departamentos.component.html',
  styleUrl: './get-departamentos.component.scss'
})
export class GetDepartamentosComponent {

  departamentos : Departamentos []=[];

  constructor(private departamentoService: DepartamentosService){}
  ngOnInit():void{
    this.getDepartamentos();
  }

  getDepartamentos(){
    this.departamentoService.getDepartamento().subscribe({
      next:(data)=>{
        this.departamentos = data;
        this.getDepartamentos();
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }

  deleteDepartamento(idDepartamento : number){
    this.departamentoService.deleteDepartamento(idDepartamento).subscribe({
      next : (data)=>{
        this.getDepartamentos();
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }

  confirmDelete(idDepartamento:number){
    Swal.fire({
      title : 'CONFIRMACION',
      text : '¿Deseas borrar este Departamento?',
      icon: 'question',
      showCancelButton : true,
      confirmButtonText:'SI',
      cancelButtonText: 'CANCELAR'
    }).then((result)=>{
      if(result.isConfirmed){
        this.deleteDepartamento(idDepartamento);
      }
    })
  }
}
