import { Routes } from '@angular/router';
import { EmpleadosPincipalComponent } from './Empleados/empleados-pincipal/empleados-pincipal.component';
import { CargoPrincipalComponent } from './Cargos/cargo-principal/cargo-principal.component';
import { DepartamentoPrincipalComponent } from './Departamentos/departamento-principal/departamento-principal.component';
import { ProyectoPrincipalComponent } from './Proyectos/proyecto-principal/proyecto-principal.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { GetEmpleadosComponent } from './Empleados/get-empleados/get-empleados.component';
import { PostEmpleadosComponent } from './Empleados/post-empleados/post-empleados.component';
import { PutEmpleadosComponent } from './Empleados/put-empleados/put-empleados.component';
import { PostDepartamentosComponent } from './Departamentos/post-departamentos/post-departamentos.component';
import { GetDepartamentosComponent } from './Departamentos/get-departamentos/get-departamentos.component';
import { PutDepartamentosComponent } from './Departamentos/put-departamentos/put-departamentos.component';
import { PostProyectosComponent } from './Proyectos/post-proyectos/post-proyectos.component';
import { GetProyectosComponent } from './Proyectos/get-proyectos/get-proyectos.component';
import { PutProyectosComponent } from './Proyectos/put-proyectos/put-proyectos.component';
import { PutCargosComponent } from './Cargos/put-cargos/put-cargos.component';
import { GetCargosComponent } from './Cargos/get-cargos/get-cargos.component';
import { PostCargosComponent } from './Cargos/post-cargos/post-cargos.component';


export const routes: Routes = [
    {
        path: "",
        component : InicioComponent
    },
    {
        path:"empleados",
        component :  EmpleadosPincipalComponent,
        children:[
            {
                path: "crearEmpleado",
                component: PostEmpleadosComponent
            },
            {
                path : "listarEmpleado",
                component : GetEmpleadosComponent
            },
            {
                path : "actualizarEmpleado",
                component : PutEmpleadosComponent
            }
        ]
    },
    {
        path:"cargos",
        component: CargoPrincipalComponent,
        children:[
            {
                path:"crearCargo",
                component: PostCargosComponent
            },
            {
                path:"listarCargo",
                component:GetCargosComponent
            },
            {
                path:"actualizarCargo",
                component: PutCargosComponent
            }
        ]
    },
    {
        path:"departamentos",
        component: DepartamentoPrincipalComponent,
        children:[
            {
                path: "crearDepartamento",
                component : PostDepartamentosComponent
            },
            {
                path: "listarDepartamento",
                component: GetDepartamentosComponent
            },
            {
                path: "actualizarDepartamento",
                component: PutDepartamentosComponent
            }
        ]
    },
    {
        path:"proyectos",
        component: ProyectoPrincipalComponent,
        children:[
            {
                path: "crearProyecto",
                component: PostProyectosComponent
            },
            {
                path: "listarProyecto",
                component: GetProyectosComponent
            },
            {
                path: "actualizarProyecto",
                component: PutProyectosComponent
            }
        ]
    }
];
