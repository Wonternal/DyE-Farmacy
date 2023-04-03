package com.dyefarmacy.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "carrito_item")
public class CarritoItem implements Serializable {

	@Id
	@Column(name = "id_carrito")
	private Long id_carrito;

	@Id
	@Column(name = "id_producto")
	private Long id_producto;

	@Column(name = "cantidad")
	private Integer cantidad;

	public CarritoItem() {
	}

	public CarritoItem(Long id_carrito, Long id_producto, Integer cantidad) {
		this.id_carrito = id_carrito;
		this.id_producto = id_producto;
		this.cantidad = cantidad;
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

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

	@Override
	public String toString() {
		return "CarritoItem [id_carrito=" + id_carrito + ", id_producto=" + id_producto + ", cantidad=" + cantidad
				+ "]";
	}
	
	

}
