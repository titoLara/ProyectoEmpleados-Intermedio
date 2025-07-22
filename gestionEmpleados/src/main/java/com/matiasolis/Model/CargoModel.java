package com.matiasolis.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CargoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCargo;

    @Column(nullable = false)
    private String nombreCargo;

    @Column(nullable = false)
    private String nivelJerarquico;

    @OneToMany(mappedBy = "cargoModel")
    @JsonBackReference
    private List<EmpleadosModel> empleadosModelList;

}
