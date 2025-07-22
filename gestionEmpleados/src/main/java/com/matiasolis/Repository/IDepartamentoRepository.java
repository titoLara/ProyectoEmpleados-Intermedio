package com.matiasolis.Repository;

import com.matiasolis.Model.DepartamentoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDepartamentoRepository extends JpaRepository<DepartamentoModel, Long> {
}
