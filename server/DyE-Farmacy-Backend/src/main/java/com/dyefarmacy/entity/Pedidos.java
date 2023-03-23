package com.dyefarmacy.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Pedidos {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_pedido;
	
	@ManyToMany(cascade = {
			CascadeType.PERSIST, 
			CascadeType.MERGE
	})	
	@JoinTable(
			name = "usuario_pedidos",
			joinColumns = @JoinColumn(
					name = "id_pedido"
					),
			inverseJoinColumns = @JoinColumn(
					name = "id_usuario"
					)
			)
	private Set<Usuario> usuariosConPedido = new HashSet<Usuario>();
	
	@ManyToMany(cascade = {
			CascadeType.PERSIST, 
			CascadeType.MERGE
	}, mappedBy = "pedidosConProducto")
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Set<Producto> productosPedido = new HashSet<Producto>();
	

	
}
