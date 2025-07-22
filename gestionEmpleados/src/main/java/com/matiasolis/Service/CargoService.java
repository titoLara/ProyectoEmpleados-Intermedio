package com.matiasolis.Service;

import com.matiasolis.Model.CargoModel;
import com.matiasolis.Repository.ICargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class CargoService {

    @Autowired
    ICargoRepository cargoRepository;

    //METODO MOSTRAR LISTA DE CARGOS
    public List<CargoModel> getCargos(){
        try {
            return cargoRepository.findAll();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se enconto a los Empleados"+e);
        }
    }

    //METODO BUSQUEDA DE CARGO POR ID
    public CargoModel getById(Long id) {
        return cargoRepository.findById(id).orElseThrow(()-> new ResponseStatusException(HttpStatus.BAD_REQUEST, "No se encontro El Cargo con el ID: "+id));

    }

    //METODO POST
    public CargoModel saveCargo(CargoModel cargoModel){
        try {
            return cargoRepository.save(cargoModel);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No se pudo Guardar Correctamente al Empleado, ERROR: " +e );
        }
    }

    //METODO UPDATE
    public CargoModel updateCargo(CargoModel request, Long id){
        CargoModel cargo = cargoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se encontro al cargo con el ID: "+id ));
        try{
            cargo.setNombreCargo(request.getNombreCargo());
            cargo.setNivelJerarquico(request.getNivelJerarquico());

            return cargoRepository.save(cargo);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No se pudo eliminar el ID: "+id+" correctamente, ERROR: "+e);
        }

    }

    //METODO DELETE
    public Boolean deleteById(Long id){
        try{
            cargoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se pudo eliminar el Id:"+id+" Correctamente ");
        }
    }
}
