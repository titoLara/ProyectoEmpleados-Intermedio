package com.matiasolis.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class departamentoEmpleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDepartamento;

    @Column(nullable = false)
    private String nombreDepartamento;

    @Column(nullable = false)
    private String ubicacion;

    //ONETOMANY EMPLEADOS
    @OneToMany(mappedBy = "departamentoEmpleado")
    private List<empleadosModel > empleadosModelList;
}
