package com.matiasolis.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
public class empleadosModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEmpleado;

    @Column(nullable = false)
    private String nombreEmpleado;

    @Column(nullable = false)
    private String apellidoEmpleado;

    @Column(nullable = false)
    private LocalDate fechaCumpleaños;

    @Column(nullable = false)
    private String dniEmpleado;

    @OneToOne
    @JoinColumn(name = "direccion_id")
    private direccionEmpleadoModel direccionEmpleadoModel;

    //MANYTOONE DEPARTAMENTO
    @ManyToOne
    @JoinColumn(name = "departamento_id")
    private departamentoEmpleado departamentoEmpleado;

    //MANYTOMANY PROYECTO
    @ManyToMany
    @JoinTable(
            name = "empleados_proyectos",
            joinColumns = @JoinColumn(name = "empleado_id" ),
            inverseJoinColumns = @JoinColumn(name = "proyecto_id")
    )
    private List<proyectoModel> proyectoModels;

    //MANYTOONE CARGO
    @ManyToOne
    @JoinColumn(name = "cargo_id")
    private cargoModel cargoModel;
}
