package com.dyefarmacy.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "carrito")
public class Carrito implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_carrito;

	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_usuario")
	private Usuario usuario;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_carrito", referencedColumnName = "id_carrito")
	private Set<CarritoItem> carritoItems = new HashSet<CarritoItem>();
	
	

	public Carrito() {
	}

	public Carrito(Usuario usuario, Set<CarritoItem> carritoItems) {
		this.usuario = usuario;
		this.carritoItems = carritoItems;
	}

	public Carrito(Long id_carrito, Usuario usuario, Set<CarritoItem> carritoItems) {
		this.id_carrito = id_carrito;
		this.usuario = usuario;
		this.carritoItems = carritoItems;
	}
	
	public void addCarritoItemToCarrito(Long id_carrito, Long id_producto, Integer cantidad) {
		System.out.println("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC" +  id_producto + " - " +  id_carrito + " - " + cantidad);
		CarritoItem carritoItem = new CarritoItem(id_carrito, id_producto, cantidad);
		System.out.println(carritoItem);
		carritoItems.add(carritoItem);
	}

	public Long getId_carrito() {
		return id_carrito;
	}

	public void setId_carrito(Long id_carrito) {
		this.id_carrito = id_carrito;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Set<CarritoItem> getCarritoItems() {
		return carritoItems;
	}

	public void setCarritoItems(Set<CarritoItem> carritoItems) {
		this.carritoItems = carritoItems;
	}

	@Override
	public String toString() {
		return "Carrito [id_carrito=" + id_carrito + ", usuario=" + usuario + ", carritoItems=" + carritoItems + "]";
	}

	
}
