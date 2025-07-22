package com.matiasolis.Service;

import com.matiasolis.Model.EmpleadosModel;
import com.matiasolis.Model.ProyectoModel;
import com.matiasolis.Repository.IEmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class EmpleadosService {

    @Autowired
    IEmpleadoRepository empleadoRepository;

    //METODO GET
    public List<EmpleadosModel> getEmpleados(){
        try {
            return empleadoRepository.findAll();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se encontro las liste de Empleados" + e);
        }
    }

    //METODO GETBYID
    public EmpleadosModel getById(Long id){
        return empleadoRepository.findById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.BAD_REQUEST, "No se encontro al Empleado con el id: "+id));
    }

    //METODO POST
    public EmpleadosModel postEmpleado(EmpleadosModel empleadosModel){
        try {
            return empleadoRepository.save(empleadosModel);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"El empleado no se pudo guardar correctamente" + e);
        }
    }

    //METODO UPDATE
    public EmpleadosModel updateEmpleado(EmpleadosModel request, Long id){
        EmpleadosModel empleados = empleadoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se encontro al Empleado con el id : "+id));

        try {
            empleados.setNombreEmpleado(request.getNombreEmpleado());
            empleados.setApellidoEmpleado(request.getApellidoEmpleado());
            empleados.setFechaCumpleaños(request.getFechaCumpleaños());
            empleados.setDniEmpleado(request.getDniEmpleado());
            empleados.setDireccionModel(request.getDireccionModel());

            if (request.getCargoModel()==null || request.getCargoModel().getIdCargo()==null ){
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Tiene que poner un Id de Cargo Valido");
            }
            empleados.setCargoModel(request.getCargoModel());

            if (request.getDepartamentoModel()==null || request.getDepartamentoModel().getIdDepartamento()==null){
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Tiene que poner un Id de Departamento Valido");
            }
            empleados.setDepartamentoModel(request.getDepartamentoModel());

            if (request.getProyectoModels()==null){
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Debe asignar al menos un Proyecto");
            }else {
                for (ProyectoModel proyecto : request.getProyectoModels()){
                    if (proyecto.getIdProyecto()==null){
                        throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Debe asignar un ID valido ");
                    }
                }
                empleados.setProyectoModels(request.getProyectoModels());
            }

            return empleadoRepository.save(empleados);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se pudo actualizar el empleado con el id : "+id+ "error en : " + e);
        }
    }

    //METODO ELIMINAR
    public Boolean deleteEmpleado(Long id){
        try {
            empleadoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"no se pudo eliminar al empleado con el id : "+id+". Error : "+e);
        }
    }
}
