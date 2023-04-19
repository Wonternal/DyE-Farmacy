package com.dyefarmacy.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "producto")
public class Producto implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idProducto;

	@Column
	private String nombre;

	@Column(length = 1000)
	private String descripcion;

	@Column
	private Float precio;

	@Column
	private Integer cantidad;

	@OneToMany(cascade = CascadeType.ALL)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
	private Set<CarritoItem> carritoItems = new HashSet<CarritoItem>();

	@OneToMany(cascade = CascadeType.ALL)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
	private Set<PedidoItem> pedidoItems = new HashSet<PedidoItem>();

	public Producto() {
	}

	public Producto(String nombre, String descripcion, Float precio, Integer cantidad, Set<CarritoItem> carritoItems,
			Set<PedidoItem> pedidoItems) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.precio = precio;
		this.cantidad = cantidad;
		this.carritoItems = carritoItems;
		this.pedidoItems = pedidoItems;
	}

	public Producto(Long idProducto, String nombre, String descripcion, Float precio, Integer cantidad,
			Set<CarritoItem> carritoItems, Set<PedidoItem> pedidoItems) {
		this.idProducto = idProducto;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.precio = precio;
		this.cantidad = cantidad;
		this.carritoItems = carritoItems;
		this.pedidoItems = pedidoItems;
	}

	public Long getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(Long idProducto) {
		this.idProducto = idProducto;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Float getPrecio() {
		return precio;
	}

	public void setPrecio(Float precio) {
		this.precio = precio;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

	public Set<CarritoItem> getCarritoItems() {
		return carritoItems;
	}

	public void setCarritoItems(Set<CarritoItem> carritoItems) {
		this.carritoItems = carritoItems;
	}

	public Set<PedidoItem> getPedidoItems() {
		return pedidoItems;
	}

	public void setPedidoItems(Set<PedidoItem> pedidoItems) {
		this.pedidoItems = pedidoItems;
	}

}
