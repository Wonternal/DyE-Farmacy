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
	private Long idUsuario;

	@Column
	private String nombre;

	@Column
	private String apellidos;

	@Column(unique=true)
	private String email;

	@Column
	private String password;

	@Column
	private Integer rol;
	
	@Column(unique=true, nullable = true)
	private String telefono;

	@Column(nullable = true)
	private String direccion;

	@Column(nullable = true)
	private Integer codigoPostal;
	
	@Column(nullable = true)
	private String ciudad;

	@Column(nullable = true)
	private String pais;

	@JsonIgnore
	@OneToOne(mappedBy = "usuario", cascade = CascadeType.ALL)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Carrito carrito;

	@OneToMany(cascade = CascadeType.ALL)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "idUsuario", referencedColumnName = "idUsuario")
	private Set<Pedido> pedidos = new HashSet<Pedido>();

	public Usuario() {
	}

	public Usuario(String nombre, String apellidos, String email, String password, Integer rol, Carrito carrito,
			Set<Pedido> pedidos) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.email = email;
		this.password = password;
		this.rol = rol;
		this.carrito = carrito;
		this.pedidos = pedidos;
	}
	
	

	public Usuario(String nombre, String apellidos, String email, String password, Integer rol, String telefono,
			String direccion, Integer codigoPostal, String ciudad, String pais, Carrito carrito, Set<Pedido> pedidos) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.email = email;
		this.password = password;
		this.rol = rol;
		this.telefono = telefono;
		this.direccion = direccion;
		this.codigoPostal = codigoPostal;
		this.ciudad = ciudad;
		this.pais = pais;
		this.carrito = carrito;
		this.pedidos = pedidos;
	}

	public Usuario(Long idUsuario, String nombre, String apellidos, String email, String password, Integer rol,
			Carrito carrito, Set<Pedido> pedidos) {
		this.idUsuario = idUsuario;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.email = email;
		this.password = password;
		this.rol = rol;
		this.carrito = carrito;
		this.pedidos = pedidos;
	}

	public Usuario(Long idUsuario, String nombre, String apellidos, String email, String password, Integer rol,
			String telefono, String direccion, Integer codigoPostal, String ciudad, String pais, Carrito carrito,
			Set<Pedido> pedidos) {
		this.idUsuario = idUsuario;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.email = email;
		this.password = password;
		this.rol = rol;
		this.telefono = telefono;
		this.direccion = direccion;
		this.codigoPostal = codigoPostal;
		this.ciudad = ciudad;
		this.pais = pais;
		this.carrito = carrito;
		this.pedidos = pedidos;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
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

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public Integer getCodigoPostal() {
		return codigoPostal;
	}

	public void setCodigoPostal(Integer codigoPostal) {
		this.codigoPostal = codigoPostal;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}
	
}
