package com.dyefarmacy.entity;

import java.io.Serializable;



public class CarritoItemId implements Serializable {

	private Long id_carrito;

	private Long id_producto;
	
	public CarritoItemId() {
	}
	
	public CarritoItemId(Long id_carrito, Long id_producto) {
		this.id_carrito = id_carrito;
		this.id_producto = id_producto;
	}

	public Long getId_carrito() {
		return id_carrito;
	}

	public void setId_carrito(Long id_carrito) {
		this.id_carrito = id_carrito;
	}

	public Long getId_producto() {
		return id_producto;
	}

	public void setId_producto(Long id_producto) {
		this.id_producto = id_producto;
	}
	
}
