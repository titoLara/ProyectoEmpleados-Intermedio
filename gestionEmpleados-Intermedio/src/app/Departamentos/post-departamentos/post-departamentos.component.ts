import { Component } from '@angular/core';
import { Departamentos } from '../../Models/departamentoModel';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DepartamentosService } from '../../Servicios/Departamentos/departamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-departamentos',
  imports: [ReactiveFormsModule],
  templateUrl: './post-departamentos.component.html',
  styleUrl: './post-departamentos.component.scss'
})
export class PostDepartamentosComponent {

  departamentoForm:FormGroup;


  constructor(private formBuilder: FormBuilder, private departamentoService : DepartamentosService){
    this.departamentoForm = this.formBuilder.group({
      nombreDepartamento : [''],
      ubicacion : ['']
    });
  }

  limpiar(){
    this.departamentoForm.patchValue({
      nombreDepartamento : "",
      ubicacion : ""
    })
  }

  guardar(){
    console.log(this.departamentoForm.value)
    this.departamentoService.postDepartamento(this.departamentoForm.value).subscribe({
      next:(data)=>{
        Swal.fire("EXITO","El departamento se creo Exitosamente",'success')
        console.log(this.departamentoForm.value)
        this.limpiar();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
