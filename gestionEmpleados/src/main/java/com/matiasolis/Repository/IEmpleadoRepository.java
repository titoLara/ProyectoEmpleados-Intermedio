package com.matiasolis.Repository;

import com.matiasolis.Model.EmpleadosModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmpleadoRepository extends JpaRepository<EmpleadosModel, Long> {
}
