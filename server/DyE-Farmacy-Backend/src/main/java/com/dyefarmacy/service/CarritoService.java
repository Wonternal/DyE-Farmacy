package com.dyefarmacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dyefarmacy.entity.Carrito;
import com.dyefarmacy.entity.CarritoItem;
import com.dyefarmacy.repository.CarritoItemRepositorty;
import com.dyefarmacy.repository.CarritoRepository;
import com.dyefarmacy.repository.ProductoRepository;
import com.dyefarmacy.repository.UsuarioRepository;

@Service
public class CarritoService {

	@Autowired
	CarritoRepository carritoRepository;
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired
	ProductoRepository productoRepository;
	
	@Autowired
	CarritoItemRepositorty carritoItemRepositorty;
	
	public Carrito getCarritoByUserId (Long id) {
		return usuarioRepository.findById(id).get().getCarrito();
	}
	
	public Integer addCarritoItemToCarrito (Long id_carrito, Long id_producto, Integer cantidad) {
		try {
			CarritoItem carritoItem = new CarritoItem(id_carrito, id_producto, cantidad);
			carritoItemRepositorty.save(carritoItem);
			return 1;
		} catch (Exception e) {
			return 0;
		}
		
	}
}
