import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-cargos',
  imports: [ReactiveFormsModule],
  templateUrl: './post-cargos.component.html',
  styleUrl: './post-cargos.component.scss'
})
export class PostCargosComponent {
  cargoForm:FormGroup;

  constructor ( private formBuilder: FormBuilder){
    this.cargoForm = this.formBuilder.group({
      nombreCargo:[''],
      nivelJerarquico:['']
    });
  }

  guardar(){
    console.log(this.cargoForm.value)
  }
}
