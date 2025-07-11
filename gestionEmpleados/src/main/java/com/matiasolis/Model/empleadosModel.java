package com.matiasolis.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class empleadosModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEmpleado;

    @Column(nullable = false)
    private String nombreEMmpleado;

    @Column(nullable = false)
    private String apellidoEmpleado;

    @Column(nullable = false)
    private String direccionEmpleado;

    @Column(nullable = false)
    private String cargoEmpleado;

    @Column(nullable = false)
    private String departamentoEmpleado;

    @Column(nullable = false)
    private String proyectoEmpleado;

    @Column(nullable = false)
    private String dniEmpleado;
}
