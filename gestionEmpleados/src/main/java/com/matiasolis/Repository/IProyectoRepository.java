package com.matiasolis.Repository;

import com.matiasolis.Model.ProyectoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProyectoRepository extends JpaRepository<ProyectoModel, Long> {
}
