import { Component } from '@angular/core';
import { Cargos } from '../../Models/cargosModel';
import { CargosService } from '../../Servicios/Cargos/cargos.service';
import Swal from 'sweetalert2';
import { SwalDirective } from '@sweetalert2/ngx-sweetalert2';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-cargos',
  imports: [SwalDirective, RouterLink],
  templateUrl: './get-cargos.component.html',
  styleUrl: './get-cargos.component.scss'
})
export class GetCargosComponent {
  cargos : Cargos []=[];

  constructor(public cargoService:CargosService ){}

  ngOnInit():void{
    this.getCargos()
  }

  getCargos(){
    this.cargoService.getCargo().subscribe({
      next : (data)=>{
        this.cargos = data;
        this.getCargos();
      },
      error : (err)=>{
        console.log("ERROR " + err)
      }

    })
  }

  deleteCargo(idCargo: number){
    this.cargoService.deleteCargo(idCargo).subscribe({
      next : (data)=>{
        this.getCargos();
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }

  confirmDelete(idCargo:number){
    Swal.fire({
      title : 'Confirmacion',
      text: 'Deseas Borrar este Cargo?',
      icon: 'question',
      showCancelButton : true,
      confirmButtonText : 'Si',
      cancelButtonText : 'Cancelar',
    }).then((result)=>{
      if(result.isConfirmed){
        this.deleteCargo(idCargo);
        
        Swal.fire("EXITO","se ha borrado Correctamente",'success');
      }
    })
  }
}
