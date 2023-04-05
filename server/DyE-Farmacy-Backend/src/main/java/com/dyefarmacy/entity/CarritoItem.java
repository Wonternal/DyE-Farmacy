package com.dyefarmacy.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "carrito_item")
@IdClass(CarritoItemId.class)
public class CarritoItem implements Serializable {

	@Id
	@Column(name = "idCarrito")
	private Long idCarrito;

	@Id
	@Column(name = "idProducto")
	private Long idProducto;

	@Column(name = "cantidad")
	private Integer cantidad;

	public CarritoItem() {
	}

	public CarritoItem(Long idCarrito, Long idProducto, Integer cantidad) {
		this.idCarrito = idCarrito;
		this.idProducto = idProducto;
		this.cantidad = cantidad;
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

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

}
