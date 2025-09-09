import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { CargosService } from '../../Servicios/Cargos/cargos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-cargos',
  imports: [ReactiveFormsModule],
  templateUrl: './post-cargos.component.html',
  styleUrl: './post-cargos.component.scss'
})
export class PostCargosComponent {
  cargoForm:FormGroup;

  constructor ( private formBuilder: FormBuilder, private cargoService: CargosService){
    this.cargoForm = this.formBuilder.group({
      nombreCargo:[''],
      nivelJerarquico:['']
    });
  }

  limpiar(){
    this.cargoForm.patchValue({
      nombreCargo:'',
      nivelJerarquico:''
    })
  }

  guardar(){

    this.cargoService.postCargo(this.cargoForm.value).subscribe({
      next : (data) =>{
        console.log(this.cargoForm.value)
        Swal.fire("EXITO","El Cargo ser guardo Correctamente",'success')
        this.limpiar();
      },
      error: (err) =>{
        Swal.fire("ERROR","Error al Guardar El Cargo",'error')
        console.log(""+err)
        this.limpiar();
      }
    })
  }


}
