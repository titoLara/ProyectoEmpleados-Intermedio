package com.matiasolis.Service;

import com.matiasolis.Model.ProyectoModel;
import com.matiasolis.Repository.IProyectoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ProyectoService {
    @Autowired
    IProyectoRepository proyectoRepository;

    //METODO GET
    public List<ProyectoModel> getProyecto(){
        try {
            return proyectoRepository.findAll();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se encontro la Lista de Proyectos. ERROR: "+e );
        }
    }

    //METDO GETBYID
    public ProyectoModel getById(Long id){
        return proyectoRepository.findById(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se encontro el proyecto con el ID: "+id));
    }

    //METODO UPDATE
    public ProyectoModel updateProyecto(ProyectoModel request, Long id){
        ProyectoModel proyecto = proyectoRepository.findById(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se encontro el proyecto con el ID: "+id));

        try {
            proyecto.setNombreProyecto(request.getNombreProyecto());
            proyecto.setFechaInicio(request.getFechaInicio());
            proyecto.setFechaFin(request.getFechaFin());

            return proyectoRepository.save(proyecto);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No se pudo actualizar el Departamento con el Id: "+id+" Correctamento. ERROR: "+e);
        }
    }

    //METODO POST
    public ProyectoModel saveProyecto(ProyectoModel proyectoModel){
        try {
            return proyectoRepository.save(proyectoModel);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se pudo crear el Departamento correctamente. ERROR: "+e);
        }
    }

    //METODO DELETE
    public Boolean deleteById(Long id){
        try {
            proyectoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No se pudo eliminar Correctamente el Proyecto con el ID: "+id+" correctamente. ERROR: "+e);
        }
    }
}
