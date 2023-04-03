package com.dyefarmacy.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "pedido")
public class Pedido implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_pedido;

	@Column(name = "id_usuario")
	private Long id_usuario;

	@Column
	private float precio_total;

	@Column
	private String direccion;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_pedido", referencedColumnName = "id_pedido")
	private Set<PedidoItem> pedidoItems = new HashSet<PedidoItem>();

	public Pedido() {
	}

	public Pedido(Long id_pedido, Long id_usuario, float precio_total, String direccion) {
		this.id_pedido = id_pedido;
		this.id_usuario = id_usuario;
		this.precio_total = precio_total;
		this.direccion = direccion;
	}

	public Long getId_pedido() {
		return id_pedido;
	}

	public void setId_pedido(Long id_pedido) {
		this.id_pedido = id_pedido;
	}

	public Long getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Long id_usuario) {
		this.id_usuario = id_usuario;
	}

	public float getPrecio_total() {
		return precio_total;
	}

	public void setPrecio_total(float precio_total) {
		this.precio_total = precio_total;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

}
