package com.dyefarmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dyefarmacy.entity.PedidoItem;
import com.dyefarmacy.entity.PedidoItemId;

public interface PedidoItemRepository extends JpaRepository<PedidoItem, PedidoItemId> {

}
