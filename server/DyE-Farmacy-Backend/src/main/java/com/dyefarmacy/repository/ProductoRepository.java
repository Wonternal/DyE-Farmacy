package com.dyefarmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dyefarmacy.entity.Producto;

@Repository
public interface ProductoRepository  extends JpaRepository<Producto, Long> {

}
