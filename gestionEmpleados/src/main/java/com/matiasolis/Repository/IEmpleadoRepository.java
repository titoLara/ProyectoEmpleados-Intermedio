package com.matiasolis.Repository;

import com.matiasolis.Model.empleadosModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmpleadoRepository extends JpaRepository<empleadosModel, Long> {
}
