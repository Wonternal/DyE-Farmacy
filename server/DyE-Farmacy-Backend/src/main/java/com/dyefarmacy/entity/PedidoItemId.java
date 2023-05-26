package com.dyefarmacy.entity;

import java.io.Serializable;

public class PedidoItemId implements Serializable {

	private Long idPedido;

	private Long idProducto;

	public PedidoItemId() {

	}

	public PedidoItemId(Long idPedido, Long idProducto) {
		this.idPedido = idPedido;
		this.idProducto = idProducto;
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
	
	
}
