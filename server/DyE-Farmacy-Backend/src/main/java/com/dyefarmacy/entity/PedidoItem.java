package com.dyefarmacy.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pedido_item")
public class PedidoItem implements Serializable {

	@Id
	@Column(name = "id_pedido")
	private Long id_pedido;

	@Column(name = "id_producto")
	private Long id_producto;

	@Column(name = "cantidad")
	private Integer cantidad;

	public PedidoItem() {
	}

	public PedidoItem(Long id_pedido, Long id_producto, Integer cantidad) {
		this.id_pedido = id_pedido;
		this.id_producto = id_producto;
		this.cantidad = cantidad;
	}

	public Long getId_pedido() {
		return id_pedido;
	}

	public void setId_pedido(Long id_pedido) {
		this.id_pedido = id_pedido;
	}

	public Long getId_producto() {
		return id_producto;
	}

	public void setId_producto(Long id_producto) {
		this.id_producto = id_producto;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

}
