package com.dyefarmacy.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dyefarmacy.entity.Carrito;
import com.dyefarmacy.service.CarritoService;

@RestController
@RequestMapping("/api/v1")
public class CarritoController {
	
	@Autowired
	CarritoService carritoService;

	@GetMapping("/carrito/{id}")
	public Carrito getCarritoByUserId(@PathVariable Long id){
		return carritoService.getCarritoByUserId(id);
	}
	
	@PostMapping("/carrito/{id_carrito}/{id_producto}/{cantidad}")
	public Integer addCarritoItemToCarrito(@PathVariable Long id_carrito, @PathVariable Long id_producto, @PathVariable Integer cantidad){
		return carritoService.addCarritoItemToCarrito(id_carrito, id_producto, cantidad);
	}
	
	@DeleteMapping("/carrito/{id_carrito}/{id_producto}")
	public Integer deleteCarritoItemFromCarrito(@PathVariable Long id_carrito, @PathVariable Long id_producto) {
		return carritoService.deleteCarritoItemFromCarrito(id_carrito, id_producto);
	}
	
	@DeleteMapping("/carrito/{id_carrito}")
	public Integer deleteAllItemsByCarritoId(@PathVariable Long id_carrito) {
		return carritoService.deleteAllItemsByCarritoId(id_carrito);
	}

}
