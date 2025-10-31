import { Component } from '@angular/core';
import { EmpleadoService } from '../../Servicios/Empleado/empleado.service';
import { Empleados } from '../../Models/empleadoModel';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Departamentos } from '../../Models/departamentoModel';
import { Cargos } from '../../Models/cargosModel';
import { Proyecto } from '../../Models/proyectoModel';
import Swal from 'sweetalert2';
import { DepartamentosService } from '../../Servicios/Departamentos/departamentos.service';
import { CargosService } from '../../Servicios/Cargos/cargos.service';
import { ProyectosService } from '../../Servicios/proyectos.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-put-empleados',
  imports: [FormsModule, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './put-empleados.component.html',
  styleUrl: './put-empleados.component.scss'
})
export class PutEmpleadosComponent {

  listarDepartamentos: Departamentos []=[];
  listarCargos: Cargos []=[];
  listarProyectos: Proyecto []=[]


  empleados : Empleados = {
    idEmpleado : 0,
    nombreEmpleado : "",
    apellidoEmpleado : "",
    direccionEmpleado : "",
    fechaCumpleanios : new Date(),
    dniEmpleado : 0,
    departamentoModel: {} as Departamentos ,
    cargoModel: {} as Cargos,
    proyectoModel: [] as Proyecto[]
  };


  constructor(
    private empleadoService: EmpleadoService, 
    public router: Router, 
    private route: ActivatedRoute,
    private departamentosService: DepartamentosService,
    private cargosService: CargosService,
    private proyectosService: ProyectosService,
  ){}


  ngOnInit() : void{

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){

      this.departamentosService.getDepartamento().subscribe(data => this.listarDepartamentos = data);
      this.cargosService.getCargo().subscribe(data => this.listarCargos = data);
      this.proyectosService.getProyecto().subscribe(data => this.listarProyectos = data);

      this.empleadoService.getEmpleadoById(id).subscribe({
        next :(data)=>{
          this.empleados = data;

          
        }, 
        error : (err)=>{
          console.log(err)
        }
      })
    }
  }

  putEmpleado(){
    this.empleadoService.putEmpledao(this.empleados.idEmpleado, this.empleados).subscribe({
      next: (data)=>{
        Swal.fire("EXITO", "Se actualizo Correctamente",'success'),
        this.router.navigate(["/empleados/listarEmpleados"])
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }
}
