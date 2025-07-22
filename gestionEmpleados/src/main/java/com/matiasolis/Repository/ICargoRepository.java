package com.matiasolis.Repository;

import com.matiasolis.Model.CargoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICargoRepository extends JpaRepository<CargoModel, Long> {
}
