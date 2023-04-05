package com.dyefarmacy.entity;

import java.io.Serializable;



public class CarritoItemId implements Serializable {

	private Long idCarrito;

	private Long idProducto;
	
	public CarritoItemId() {
	}
	
	public CarritoItemId(Long idCarrito, Long idProducto) {
		this.idCarrito = idCarrito;
		this.idProducto = idProducto;
	}

	public Long getIdCarrito() {
		return idCarrito;
	}

	public void setIdCarrito(Long idCarrito) {
		this.idCarrito = idCarrito;
	}

	public Long getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(Long idProducto) {
		this.idProducto = idProducto;
	}
	
}
