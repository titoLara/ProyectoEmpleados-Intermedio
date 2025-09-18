import { Component } from '@angular/core';
import { DepartamentosService } from '../../Servicios/Departamentos/departamentos.service';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { Departamentos } from '../../Models/departamentoModel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-put-departamentos',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './put-departamentos.component.html',
  styleUrl: './put-departamentos.component.scss'
})
export class PutDepartamentosComponent {

  departamentos : Departamentos ={
    idDepartamento : 0,
    nombreDepartamento : "",
    ubicacion : ""
  }


  constructor (private departamentoService: DepartamentosService, public router : Router, private route: ActivatedRoute ){}

  ngOnInit() : void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.departamentoService.getDepartamentoById(id).subscribe({
        next : (data)=>{
          this.departamentos = data;
        },error : (err)=>{
          console.log(err)
        }
      })
    }
  }

  actualizarDepartamento(){
    this.departamentoService.putDepartamento(this.departamentos.idDepartamento, this.departamentos).subscribe({
      next :(data)=>{
        Swal.fire('EXITO','Se Actualizao Correctamente','success')
        this.router.navigate(["/departamentos/listarDepartamento"])
        console.log("Se Actualizo")
      },error : (err)=>{
        console.log(err)
      }

    })
  }
}
