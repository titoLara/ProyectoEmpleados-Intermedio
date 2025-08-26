import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ProyectosService } from '../../Servicios/proyectos.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-post-proyectos',
  imports: [ReactiveFormsModule],
  templateUrl: './post-proyectos.component.html',
  styleUrl: './post-proyectos.component.scss'
})
export class PostProyectosComponent {
  proyectoForm : FormGroup;

  constructor(private formBuilder:FormBuilder, private proyectoService : ProyectosService){
    this.proyectoForm = this.formBuilder.group({
      nombreProyecto:[''],
      fechaInicio:[''],
      fechaFin:['']
    });
  }

  limpiar(){
    this.proyectoForm.patchValue({
      nombreProyecto:'',
      fechaInicio:'',
      fechaFin:''
    });
  }

  guardar(){
    console.log(this.proyectoForm.value)
    
    this.proyectoService.postProyecto(this.proyectoForm.value).subscribe({
      next : (data) =>{
        console.log(data);
        Swal.fire("Exitoso", "El registro se Completo", 'success')
        this.limpiar();
      },
      error : (e)=>{
        Swal.fire("Error","Error al crear El Proyecto",'error');
        this.limpiar();
        console.log(e);
      }
    })

    

  }


}
