package com.dyefarmacy.entity;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idUsuario;

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
	
	@ManyToMany(cascade = {
			CascadeType.PERSIST, 
			CascadeType.MERGE
	}, mappedBy = "usuariosConProductoEnLaCesta")
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Set<Producto> cesta = new HashSet<Producto>();
		
	@ManyToMany(cascade = {
			CascadeType.PERSIST, 
			CascadeType.MERGE
	}, mappedBy = "usuariosConPedido")
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Set<Pedidos> pedidos = new HashSet<Pedidos>();
	
}
