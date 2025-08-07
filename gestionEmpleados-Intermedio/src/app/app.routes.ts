import { Routes } from '@angular/router';
import { EmpleadosPincipalComponent } from './Empleados/empleados-pincipal/empleados-pincipal.component';
import { CargoPrincipalComponent } from './Cargos/cargo-principal/cargo-principal.component';
import { DepartamentoPrincipalComponent } from './Departamentos/departamento-principal/departamento-principal.component';
import { ProyectoPrincipalComponent } from './Proyectos/proyecto-principal/proyecto-principal.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';


export const routes: Routes = [
    {
        path:"empleados",
        component :  EmpleadosPincipalComponent
    },
    {
        path:"cargos",
        component: CargoPrincipalComponent
    },
    {
        path:"departamentos",
        component: DepartamentoPrincipalComponent
    },
    {
        path:"proyectos",
        component: ProyectoPrincipalComponent
    }
];
