package com.matiasolis.Controller;

import com.matiasolis.Model.EmpleadosModel;
import com.matiasolis.Service.EmpleadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/empleados")
public class EmpleadoController {

    @Autowired
    EmpleadosService empleadosService;

    @GetMapping
    public List<EmpleadosModel> getEmpleados(){
        return this.empleadosService.getEmpleados();
    }

    @GetMapping(path = "/{id}")
    public EmpleadosModel getById(@PathVariable Long id){
        return this.empleadosService.getById(id);
    }

    @PostMapping
    public EmpleadosModel saveEmpleado(@RequestBody EmpleadosModel empleadosModel){
        return this.empleadosService.postEmpleado(empleadosModel);
    }

    @PutMapping(path = "/{id}")
    public EmpleadosModel updateEmpleado(@RequestBody EmpleadosModel request, @PathVariable Long id){
        return this.empleadosService.updateEmpleado(request, id);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteMapping(@PathVariable Long id){
        Boolean ok = empleadosService.deleteEmpleado(id);
        if (ok){
            return "El empleado con el id : "+id+" Se elimino correctamente";
        }else {
            throw new IllegalArgumentException("No se pudo eliminar al empleado con el ID"+id+" correctamente");
        }
    }


}
