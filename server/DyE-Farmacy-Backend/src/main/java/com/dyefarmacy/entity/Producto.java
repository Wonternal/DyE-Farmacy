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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name="producto")
public class Producto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idProducto;

	@Column
	private String nombre;
	
	@Column
	private String descripcion;
	
	@Column
	private Float precio;
	
	@ManyToMany(cascade = {
			CascadeType.PERSIST, 
			CascadeType.MERGE
	})	
	@JoinTable(
			name = "cesta",
			joinColumns = @JoinColumn(
					name = "id_product"
					),
			inverseJoinColumns = @JoinColumn(
					name = "id_usuario"
					)
			)
	private Set<Usuario> usuariosConProductoEnLaCesta = new HashSet<Usuario>();
	
	@ManyToMany(cascade = {
			CascadeType.PERSIST, 
			CascadeType.MERGE
	})	
	@JoinTable(
			name = "productos_pedido",
			joinColumns = @JoinColumn(
					name = "id_product"
					),
			inverseJoinColumns = @JoinColumn(
					name = "id_pedido"
					)
			)
	private Set<Pedidos> pedidosConProducto = new HashSet<Pedidos>();
	
	
	
	

}
