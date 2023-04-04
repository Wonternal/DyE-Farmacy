package com.dyefarmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dyefarmacy.entity.CarritoItem;
import com.dyefarmacy.entity.CarritoItemId;

@Repository
public interface CarritoItemRepositorty extends JpaRepository<CarritoItem, CarritoItemId>{

}
