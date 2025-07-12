package com.matiasolis.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class direccionEmpleadoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDireccion;

    @Column(nullable = false)
    private String calleEmpleado;

    @Column(nullable = false)
    private String ciudadEmpleado;

    @Column(unique = false)
    private String paisEmpleado;

    @OneToOne(mappedBy = "direccionEmpleadoModel")
    private empleadosModel empleadosModel;

}
