import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-proyectos',
  imports: [ReactiveFormsModule],
  templateUrl: './post-proyectos.component.html',
  styleUrl: './post-proyectos.component.scss'
})
export class PostProyectosComponent {
  proyectoForm : FormGroup;

  constructor(private formBuilder:FormBuilder){
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


}
