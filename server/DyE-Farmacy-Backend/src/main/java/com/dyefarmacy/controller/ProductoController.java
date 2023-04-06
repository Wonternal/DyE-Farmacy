package com.dyefarmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dyefarmacy.entity.Producto;
import com.dyefarmacy.service.ProductoService;

@RestController
@RequestMapping("/api/v1")
public class ProductoController {
	
	@Autowired
	ProductoService productoService;
	
	@PostMapping("/producto")
	public Producto addProducto(@RequestBody Producto producto){
		return productoService.addProdcuto(producto);
	}
	
	@GetMapping("/producto")
	public List<Producto> getAllProducto(){
		return productoService.getAllProducto();
	}
	
	@GetMapping("/producto/{id}")
	public ResponseEntity<?> getProductoById(@PathVariable Long id){
		try {
			return new ResponseEntity<>(productoService.getProductoById(id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Error en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/producto/{id}")
	public ResponseEntity<?> deleteProducto(@PathVariable Long id) {
		try {
			if(productoService.deleteProducto(id) == 1) {
				return new ResponseEntity<>("Se borró el usuario con id : " + id + " exitosamente", HttpStatus.OK);
			}
			return new ResponseEntity<>("El usuario con id : " + id + " no esta regsitrado en la base de datos ", HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			return new ResponseEntity<>("Error en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/producto/{id}")
	public ResponseEntity<?> modifyProducto(@RequestBody Producto producto, @PathVariable Long id) {
		try {
			if (productoService.modifyProducto(producto, id) == (null)) {
				return new ResponseEntity<>("El usuario con id : " + id + " no esta regsitrado en la base de datos ", HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>("El usuario se modifico con éxito", HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>("Error en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
