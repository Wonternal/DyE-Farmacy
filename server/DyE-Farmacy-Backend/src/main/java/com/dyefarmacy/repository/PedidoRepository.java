package com.dyefarmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dyefarmacy.entity.Pedido;

@Repository
public interface PedidoRepository  extends JpaRepository<Pedido, Long> {

}
