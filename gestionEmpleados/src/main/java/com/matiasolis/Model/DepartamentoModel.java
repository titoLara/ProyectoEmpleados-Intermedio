package com.matiasolis.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class DepartamentoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDepartamento;

    @Column(nullable = false)
    private String nombreDepartamento;

    @Column(nullable = false)
    private String ubicacion;

    //ONETOMANY EMPLEADOS
    @OneToMany(mappedBy = "departamentoModel")
    @JsonBackReference
    private List<EmpleadosModel> empleadosModelList;
}
