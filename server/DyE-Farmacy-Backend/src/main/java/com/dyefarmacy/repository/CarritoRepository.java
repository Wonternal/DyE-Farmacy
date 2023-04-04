package com.dyefarmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dyefarmacy.entity.Carrito;

@Repository
public interface CarritoRepository extends JpaRepository<Carrito, Long> {

}
