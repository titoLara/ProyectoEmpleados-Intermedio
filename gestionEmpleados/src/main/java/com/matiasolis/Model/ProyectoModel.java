package com.matiasolis.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProyectoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProyecto;

    @Column(nullable = false)
    @NotBlank
    private String nombreProyecto;

    @Column(nullable = false)
    @FutureOrPresent(message = "No se Puede poner una fecha Pasada")
    private LocalDate fechaInicio;

    @Column(nullable = false)
    @Future(message = "La fecha debe ser Posterior a Hoy dia")
    private LocalDate fechaFin;

    @ManyToMany(mappedBy = "proyectoModels")
    @JsonIgnore
    private List<EmpleadosModel> empleadosModelList;

}
