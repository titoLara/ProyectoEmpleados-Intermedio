package com.matiasolis.Controller;

import com.matiasolis.Model.ProyectoModel;
import com.matiasolis.Service.ProyectoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proyecto")
public class ProyecyoController {

    @Autowired
    ProyectoService proyectoService;

    @GetMapping
    public List<ProyectoModel> getProyecto(){
        return proyectoService.getProyecto();
    }

    @GetMapping(path = "/{id}")
    public ProyectoModel getById(@PathVariable Long id){
        return proyectoService.getById(id);
    }

    @PutMapping(path = "/{id}")
    public ProyectoModel updateProyecto(@RequestBody ProyectoModel request, @PathVariable Long id ){
        return proyectoService.updateProyecto(request, id);
    }

    @PostMapping
    public ProyectoModel saveProyecto(@RequestBody ProyectoModel proyectoModel){
        return proyectoService.saveProyecto(proyectoModel);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id){
        Boolean ok = proyectoService.deleteById(id);
        if (ok){
            return "El proyecto con el ID: "+id+" se elimino correctamente";
        }else{
            return "El proyecto con el ID: "+id+" no se elimino correctamente";
        }
    }
}
