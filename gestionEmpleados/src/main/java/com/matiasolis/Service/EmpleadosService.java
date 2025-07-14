package com.matiasolis.Service;

import com.matiasolis.Model.empleadosModel;
import com.matiasolis.Repository.IEmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadosService {

    @Autowired
    IEmpleadoRepository empleadoRepository;

    //METODO GET
    public List<empleadosModel> getEmpleados(){
        try {
            return (List<empleadosModel>) empleadoRepository.findAll();
        } catch (Exception e) {
            throw new IllegalArgumentException("No se encontro las liste de Empleados" + e);
        }
    }

    //METODO GEBYID
    public Optional<empleadosModel> getById(Long id){
        Optional<empleadosModel> empleado = empleadoRepository.findById(id);
        if (empleado.isPresent()){
            return empleado;
        }else {
            throw new IllegalArgumentException("No se encontro al empleado con el id: "+id);
        }
    }

    //METODO POST
    public empleadosModel postEmpleado( empleadosModel empleadosModel){
        try {
            return empleadoRepository.save(empleadosModel);
        } catch (Exception e) {
            throw new IllegalArgumentException("El empleado no se pudo guardar correctamente" + e);
        }
    }

    //METODO UPDATE
    public empleadosModel updateEmpleado(empleadosModel request, Long id){
        empleadosModel empleados = empleadoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("No se encontro al Empleado con el id : "+id));

        try {
            //empleados.set
            return null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
