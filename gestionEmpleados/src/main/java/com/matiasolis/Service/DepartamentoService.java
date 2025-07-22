package com.matiasolis.Service;

import com.matiasolis.Model.CargoModel;
import com.matiasolis.Model.DepartamentoModel;
import com.matiasolis.Repository.IDepartamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class DepartamentoService {

    @Autowired
    IDepartamentoRepository departamentoRepository;

    //METODO GET
    public List<DepartamentoModel> getDepartamento(){
        try{
            return departamentoRepository.findAll();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se encontro la lista de Departamentos. ERROR: "+e);
        }
    }

    //METODO GETBYID
    public DepartamentoModel getById(Long id){
        return departamentoRepository.findById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se encontro el Departamento con el ID: "+id));

    }

    //METODO POST
    public DepartamentoModel saveDepartamento(DepartamentoModel departamentoModel){
        try{
            return departamentoRepository.save(departamentoModel);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se pudo Guardar Correctamente el Departamento. ERROR: "+e);
        }
    }

    //METODO UPDATE
    public DepartamentoModel updateDepartamento(DepartamentoModel request, Long id){
        DepartamentoModel departamento = departamentoRepository.findById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se encontro al empleado con el ID: "+id));
        try {
            departamento.setNombreDepartamento(request.getNombreDepartamento());
            departamento.setUbicacion(request.getUbicacion());

            return departamentoRepository.save(departamento);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se pudo actualizar el Departamento con el ID: "+id+" correctamente. ERROR: "+e);
        }
    }

    //METODO DELETE
    public Boolean deleteById(Long id){
        try{
            departamentoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se pudp eiminar correctamente el ID: "+id+". ERROR: "+id);
        }

    }
}

