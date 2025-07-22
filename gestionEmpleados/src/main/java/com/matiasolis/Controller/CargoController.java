package com.matiasolis.Controller;

import com.matiasolis.Model.CargoModel;
import com.matiasolis.Service.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/cargo")
public class CargoController {

    @Autowired
    CargoService cargoService;

    @GetMapping
    public List<CargoModel> getCargo(){
        return cargoService.getCargos();
    }

    @GetMapping(path = "/{id}")
    public CargoModel getById(@PathVariable Long id){
        return cargoService.getById(id);
    }

    @PutMapping(path = "/{id}")
    public CargoModel updateCargo(@RequestBody CargoModel cargoModel, @PathVariable Long id){
        return cargoService.updateCargo(cargoModel, id);
    }

    @PostMapping
    public CargoModel saveCargo(@RequestBody CargoModel cargoModel){
        return cargoService.saveCargo(cargoModel);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id){
        Boolean ok = cargoService.deleteById(id);
        if (ok){
            return "El Cargo con el ID: "+id+", se elimino correctamente";
        }else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No se pudo eliminar el cargo con el ID: "+id+" correctamente");
        }

    }

}
