package com.dyefarmacy.entity;

import java.io.Serializable;
import java.time.LocalDate;
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

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "pedido")
public class Pedido implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPedido;

	@Column(name = "idUsuario")
	private Long idUsuario;

	@Column
	private float precioTotal;

	@Column
	private String direccion;
	
	@Column
	LocalDate fechaHoy = LocalDate.now();
	
	@OneToMany(cascade = CascadeType.ALL)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "idPedido", referencedColumnName = "idPedido")
	private Set<PedidoItem> pedidoItems = new HashSet<PedidoItem>();

	public Pedido() {
	}

	public Pedido(Long idPedido, Long idUsuario, float precioTotal, String direccion, LocalDate fechaHoy) {
		this.idPedido = idPedido;
		this.idUsuario = idUsuario;
		this.precioTotal = precioTotal;
		this.direccion = direccion;
		this.fechaHoy = fechaHoy;
	}
	
	

	public Pedido(Long idUsuario, float precioTotal, String direccion) {
		this.idUsuario = idUsuario;
		this.precioTotal = precioTotal;
		this.direccion = direccion;
	}

	public Long getIdPedido() {
		return idPedido;
	}

	public void setIdPedido(Long idPedido) {
		this.idPedido = idPedido;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public float getPrecioTotal() {
		return precioTotal;
	}

	public void setPrecioTotal(float precioTotal) {
		this.precioTotal = precioTotal;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public LocalDate getFechaHoy() {
		return fechaHoy;
	}

	public void setFechaHoy(LocalDate fechaHoy) {
		this.fechaHoy = fechaHoy;
	}

	public Set<PedidoItem> getPedidoItems() {
		return pedidoItems;
	}

	public void setPedidoItems(Set<PedidoItem> pedidoItems) {
		this.pedidoItems = pedidoItems;
	}
	
	

}
