import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from '../../Servicios/Empleado/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-empleados',
  imports: [ReactiveFormsModule],
  templateUrl: './post-empleados.component.html',
  styleUrl: './post-empleados.component.scss'
})
export class PostEmpleadosComponent {

  empleadoForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private empleadoService: EmpleadoService){
    this.empleadoForm = this.formBuilder.group({
      nombreEmpleado : [''],
      apellidoEmpleado :[''],
      fechaCumpleaños : [''],
      dniEmpleado : ['']
    })
  }

  limpiar(){
    this.empleadoForm.patchValue({
      nombreEmpleado :"",
      apellidoEmpleado :"",
      fechaCumpleaños : "",
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
