package com.dyefarmacy.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "usuario")
public class Usuario implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_usuario;

	@Column
	private String nombre;

	@Column
	private String apellido;

	@Column
	private String email;

	@Column
	private String password;

	@Column
	private Integer rol;

	@JsonIgnore
	@OneToOne(mappedBy = "usuario", cascade = CascadeType.ALL)
	private Carrito carrito;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_usuario", referencedColumnName = "id_usuario")
	private Set<Pedido> pedidos = new HashSet<Pedido>();

	public Usuario() {
	}

	public Usuario(String nombre, String apellido, String email, String password, Integer rol, Carrito carrito,
			Set<Pedido> pedidos) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.password = password;
		this.rol = rol;
		this.carrito = carrito;
		this.pedidos = pedidos;
	}

	public Usuario(Long id_usuario, String nombre, String apellido, String email, String password, Integer rol,
			Carrito carrito, Set<Pedido> pedidos) {
		this.id_usuario = id_usuario;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.password = password;
		this.rol = rol;
		this.carrito = carrito;
		this.pedidos = pedidos;
	}

	public Long getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Long id_usuario) {
		this.id_usuario = id_usuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getRol() {
		return rol;
	}

	public void setRol(Integer rol) {
		this.rol = rol;
	}

	public Carrito getCarrito() {
		return carrito;
	}

	public void setCarrito(Carrito carrito) {
		this.carrito = carrito;
	}

	public Set<Pedido> getPedidos() {
		return pedidos;
	}

	public void setPedidos(Set<Pedido> pedidos) {
		this.pedidos = pedidos;
	}

}
