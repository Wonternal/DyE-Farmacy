package com.dyefarmacy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dyefarmacy.entity.Producto;
import com.dyefarmacy.entity.Usuario;
import com.dyefarmacy.repository.ProductoRepository;

@Service
public class ProductoService {

	
	@Autowired
	ProductoRepository productoRepository;
	
	public Producto addProdcuto (Producto producto) {
		return productoRepository.save(producto);
	}
	
	public Producto getProductoById (Long id_producto) {
		try {
			return productoRepository.findById(id_producto).get();
		} catch (Exception e) {
			throw e;
		}
	}
	
	public List<Producto> getAllProducto () {
		return productoRepository.findAll();
	}
	
	public int deleteProducto (Long id_producto) {
		try {
			productoRepository.deleteById(id_producto);
			return 1;
		} catch (Exception e) {
			return 0;
		}
	}
	
	public Producto modifyProducto (Producto producto, Long id_producto) {
		if(id_producto == null) {
			return null;
		}
		Optional<Producto> optionalProducto = productoRepository.findById(id_producto);
		if(optionalProducto.isPresent()) {
			Producto _producto = optionalProducto.get();
			_producto.setNombre(producto.getNombre());
			_producto.setDescripcion(producto.getDescripcion());
			_producto.setCantidad(producto.getCantidad());
			_producto.setPrecio(producto.getPrecio());
			_producto.setCategoria(producto.getCategoria());
			_producto.setFoto(producto.getFoto());
			return productoRepository.save(_producto);
		}
		return null;
	}
	
}
