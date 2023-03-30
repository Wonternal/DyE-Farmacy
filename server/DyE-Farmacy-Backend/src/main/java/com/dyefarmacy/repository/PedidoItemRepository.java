package com.dyefarmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dyefarmacy.entity.PedidoItem;

@Repository
public interface PedidoItemRepository  extends JpaRepository<PedidoItem, Long> {

}
