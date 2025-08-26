import { Component } from '@angular/core';
import { Proyecto } from '../../Models/proyectoModel';
import { ProyectosService } from '../../Servicios/proyectos.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-put-proyectos',
  imports: [FormsModule, RouterLink],
  templateUrl: './put-proyectos.component.html',
  styleUrl: './put-proyectos.component.scss'
})
export class PutProyectosComponent {

  proyecto : Proyecto = {
    idProyecto : 0,
    nombreProyecto : '',
    fechaInicio : new Date,
    fechaFin : new Date
  }

  constructor(public proyectoService : ProyectosService, private route : ActivatedRoute, private router : Router ){}

  ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.proyectoService.getProyectoById(id).subscribe({
        next : (data) =>{
          this.proyecto = data;
        },
        
        error : (e) => {
          console.log(e)
        }
      })
    }
  }

  actualizarProyecto(){
    this.proyectoService.putProyecto(this.proyecto.idProyecto, this.proyecto).subscribe({
      next:()=>{
        Swal.fire("Exitoso", "El Proyecto se Actualizo", 'success');
        this.router.navigate(['/proyectos/listarProyecto']);  
        console.log("proyecto Actualizado")
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }


}
