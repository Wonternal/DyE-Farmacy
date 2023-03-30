package com.dyefarmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dyefarmacy.entity.CarritoItem;
@Repository
public interface CarritoItemRepository extends JpaRepository<CarritoItem, Long> {

}
