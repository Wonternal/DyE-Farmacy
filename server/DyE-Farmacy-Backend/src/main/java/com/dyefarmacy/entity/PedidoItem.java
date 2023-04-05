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
	@Column(name = "idPedido")
	private Long idPedido;

	@Id
	@Column(name = "idProducto")
	private Long idProducto;

	@Column(name = "cantidad")
	private Integer cantidad;

	public PedidoItem() {
	}

	public PedidoItem(Long idPedido, Long idProducto, Integer cantidad) {
		this.idPedido = idPedido;
		this.idProducto = idProducto;
		this.cantidad = cantidad;
	}

	public Long getIdPedido() {
		return idPedido;
	}

	public void setIdPedido(Long idPedido) {
		this.idPedido = idPedido;
	}

	public Long getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(Long idProducto) {
		this.idProducto = idProducto;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

}
