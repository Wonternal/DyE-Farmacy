package com.dyefarmacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dyefarmacy.entity.Carrito;
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
	
	public Carrito getCarritoByUserId (Long id) {
		return usuarioRepository.findById(id).get().getCarrito();
	}
	
	public Integer addCarritoItemToCarrito (Long id_carrito, Long id_producto, Integer cantidad) {
		System.out.println("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB" +  id_producto + " - " +  id_carrito + " - " + cantidad);
		try {
			Carrito carrito = carritoRepository.findById(id_carrito).get();
			carrito.addCarritoItemToCarrito(id_carrito, id_producto, cantidad);
			System.out.println(carrito);
			try {
				carritoRepository.save(carrito);
			} catch (Exception e) {
				System.out.println(e);
			}
			return 1;
		} catch (Exception e) {
			System.out.println(e);
			return 0;
		}
		
	}
}
