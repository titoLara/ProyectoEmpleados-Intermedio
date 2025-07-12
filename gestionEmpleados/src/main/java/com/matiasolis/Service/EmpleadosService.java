package com.matiasolis.Service;

import com.matiasolis.Repository.IEmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpleadosService {

    @Autowired
    IEmpleadoRepository empleadoRepository;

}
