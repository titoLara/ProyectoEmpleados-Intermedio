import { Component } from '@angular/core';
import { CargosService } from '../../Servicios/Cargos/cargos.service';
import { Cargos } from '../../Models/cargosModel';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-put-cargos',
  imports: [FormsModule, RouterLink],
  templateUrl: './put-cargos.component.html',
  styleUrl: './put-cargos.component.scss'
})
export class PutCargosComponent {

  cargo : Cargos = {
    idCargo : 0,
    nombreCargo : '',
    nivelJerarquico :''
  }

  constructor(private cargoService: CargosService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.cargoService.getById(id).subscribe({
        next:(data) =>{
          this.cargo = data;
        },
        error : (err) =>{
          console.log(err)
        }
      })
    }
  }

  actualizarCargo( ){
    this.cargoService.putCargo(this.cargo.idCargo, this.cargo).subscribe({
      next : (data)=>{
        Swal.fire('EXITO','El Cargo se Actualizo Correctamente','success'),
        this.router.navigate(["/cargos/listarCargo"])
        console.log("Se Actualizo")
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }
}
