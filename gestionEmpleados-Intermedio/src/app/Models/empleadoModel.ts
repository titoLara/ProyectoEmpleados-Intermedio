import { Departamentos } from "./departamentoModel";
import { Cargos } from "./cargosModel";
import { Proyecto } from "./proyectoModel";

export interface Empleados{
    idEmpleado : number,
    nombreEmpleado : String,
    apellidoEmpleado : String,
    direccionEmpleado : String,
    fechaCumpleanios : Date,
    dniEmpleado : number;
    
    departamentoModel: Departamentos;
    cargoModel: Cargos;
    proyectoModel: Proyecto[]
    
}