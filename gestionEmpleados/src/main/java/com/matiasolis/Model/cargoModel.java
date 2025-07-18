package com.matiasolis.Model;

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
public class cargoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCargo;

    @Column(nullable = false)
    private String nombreCargo;

    @Column(nullable = false)
    private String nivelJerarquico;

    @OneToMany(mappedBy = "cargoModel")
    private List<empleadosModel> empleadosModelList;

}
