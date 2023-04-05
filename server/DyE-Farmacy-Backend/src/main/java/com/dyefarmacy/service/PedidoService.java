package com.dyefarmacy.service;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dyefarmacy.entity.Carrito;
import com.dyefarmacy.entity.CarritoItem;
import com.dyefarmacy.entity.Pedido;
import com.dyefarmacy.entity.PedidoItem;
import com.dyefarmacy.repository.CarritoItemRepository;
import com.dyefarmacy.repository.CarritoRepository;
import com.dyefarmacy.repository.PedidoItemRepository;
import com.dyefarmacy.repository.PedidoRepository;
import com.dyefarmacy.repository.ProductoRepository;
import com.dyefarmacy.repository.UsuarioRepository;

@Service
public class PedidoService {

	@Autowired
	CarritoRepository carritoRepository;
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired
	ProductoRepository productoRepository;
	
	@Autowired
	CarritoItemRepository carritoItemRepository;
	
	@Autowired
	PedidoItemRepository pedidoItemRepository;
	
	@Autowired
	PedidoRepository pedidoRepository;
	
	@Autowired
	CarritoService carritoService;
	
	public Set<Pedido> getAllPedidosByUserId(Long id) {
		return usuarioRepository.findById(id).get().getPedidos();
	}
	
	public List<Pedido> getAllPedidos() {
		return pedidoRepository.findAll();
	}
	
	public Integer addPedido(Pedido pedido) {
		try {
			Pedido _pedido = pedidoRepository.save(pedido);
			
			Carrito carrito = carritoService.getCarritoByUserId(pedido.getIdUsuario());
			CarritoItem [] carritoItems = carrito.getCarritoItems().toArray(new CarritoItem[carrito.getCarritoItems().size()]);
			for (CarritoItem carritoItem : carritoItems) {
				pedidoItemRepository.save(new PedidoItem(_pedido.getIdPedido(), carritoItem.getIdProducto(), carritoItem.getCantidad()));
			}
			return 1;
		} catch (Exception e) {
			System.out.println(e);
			return 0;
		}
	}
}
