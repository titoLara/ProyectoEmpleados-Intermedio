package com.matiasolis.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
public class EmpleadosModel {

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

    //ONE TO ONE
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "direccion_id")
    private DireccionModel direccionModel;

    //MANYTOONE DEPARTAMENTO
    @ManyToOne
    @JoinColumn(name = "departamento_id")
    @JsonManagedReference
    private DepartamentoModel departamentoModel;

    //MANYTOMANY PROYECTO
    @ManyToMany
    @JoinTable(
            name = "empleados_proyectos",
            joinColumns = @JoinColumn(name = "empleado_id" ),
            inverseJoinColumns = @JoinColumn(name = "proyecto_id")
    )
    @JsonManagedReference
    private List<ProyectoModel> proyectoModels;

    //MANYTOONE CARGO
    @ManyToOne
    @JoinColumn(name = "cargo_empleado")
    @JsonManagedReference
    private CargoModel cargoModel;
}
