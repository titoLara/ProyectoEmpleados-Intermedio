import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from '../../Servicios/Empleado/empleado.service';
import Swal from 'sweetalert2';

import { Departamentos } from '../../Models/departamentoModel';
import { Cargos } from '../../Models/cargosModel';
import { Proyecto } from '../../Models/proyectoModel';
import { DepartamentosService } from '../../Servicios/Departamentos/departamentos.service';
import { CargosService } from '../../Servicios/Cargos/cargos.service';
import { ProyectosService } from '../../Servicios/proyectos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-empleados',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './post-empleados.component.html',
  styleUrl: './post-empleados.component.scss'
})
export class PostEmpleadosComponent implements OnInit {

  empleadoForm:FormGroup;
  listarDepartamentos: Departamentos []=[];
  listarCargos: Cargos []=[];
  listarProyectos: Proyecto []=[]

  constructor(
    private formBuilder:FormBuilder, 
    private empleadoService: EmpleadoService,
    private departamentoService: DepartamentosService,
    private cargosService: CargosService,
    private proyectosService: ProyectosService
  ){
    this.empleadoForm = this.formBuilder.group({
      nombreEmpleado : [''],
      apellidoEmpleado :[''],
      direccionEmpleado : [''],
      fechaCumpleanios : [''],
      dniEmpleado : [''],
      departamentoModel: [null],
      cargoModel: [null],
      proyectoModels: [[]]
    })
  }
  
  ngOnInit(): void{
    this.departamentoService.getDepartamento().subscribe(data=> this.listarDepartamentos = data);
    this.cargosService.getCargo().subscribe(data => this.listarCargos = data);
    this.proyectosService.getProyecto().subscribe(data => this.listarProyectos = data)
  }

  limpiar(){
    this.empleadoForm.patchValue({
      nombreEmpleado :"",
      apellidoEmpleado :"",
      fechaCumpleanios : "",
      dniEmpleado: ""
    })
  }

  crear(){
    this.empleadoService.postEmpleado(this.empleadoForm.value).subscribe({
      next : (data) =>{
        Swal.fire("Exito","El Empleado se ha creado correctamente", 'success')
        console.log(this.empleadoForm.value)
        this.limpiar();
      },error : (err) =>{
        console.log(err)
      }
    })

  }
}
