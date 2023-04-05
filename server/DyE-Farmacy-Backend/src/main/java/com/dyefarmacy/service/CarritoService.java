package com.dyefarmacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dyefarmacy.entity.Carrito;
import com.dyefarmacy.entity.CarritoItem;
import com.dyefarmacy.entity.CarritoItemId;
import com.dyefarmacy.repository.CarritoItemRepository;
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
	CarritoItemRepository carritoItemRepository;
	
	public Carrito getCarritoByUserId (Long id) {
		return usuarioRepository.findById(id).get().getCarrito();
	}
	
	public Integer addCarritoItemToCarrito (Long id_carrito, Long id_producto, Integer cantidad) {
		try {
			CarritoItem carritoItem = new CarritoItem(id_carrito, id_producto, cantidad);
			carritoItemRepository.save(carritoItem);
			return 1;
		} catch (Exception e) {
			return 0;
		}
		
	}
	
	public Integer deleteCarritoItemFromCarrito(Long id_carrito, Long id_producto) {
		CarritoItemId key = new CarritoItemId(id_carrito, id_producto);
		
		try {
			carritoItemRepository.deleteById(key);
			return 1;
		} catch (Exception e) {	
			return 0;
		}
	}
}
