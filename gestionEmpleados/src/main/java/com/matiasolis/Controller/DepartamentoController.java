package com.matiasolis.Controller;

import com.matiasolis.Model.DepartamentoModel;
import com.matiasolis.Service.DepartamentoService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/departamento")
public class DepartamentoController {
    @Autowired
    DepartamentoService departamentoService;

    @GetMapping
    public List<DepartamentoModel> getDepartamento(){
        return departamentoService.getDepartamento();
    }

    @GetMapping(path = "/{id}")
    public DepartamentoModel getById(@PathVariable Long id){
        return departamentoService.getById(id);
    }

    @PutMapping(path = "/{id}")
    public DepartamentoModel updateDepartamento(@RequestBody DepartamentoModel request, @PathVariable Long id){
        return departamentoService.updateDepartamento(request, id);
    }

    @PostMapping
    public DepartamentoModel saveDepartamento(@RequestBody DepartamentoModel departamentoModel){
        return departamentoService.saveDepartamento(departamentoModel);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id){
        Boolean ok = departamentoService.deleteById(id);
        if (ok){
            return "El Departamento con el ID: "+id+" se elimino correctamente";
        }else {
            throw new IllegalArgumentException("No se pudo eliminar correctamente el Departamento con el ID: "+id);
        }
    }
}
