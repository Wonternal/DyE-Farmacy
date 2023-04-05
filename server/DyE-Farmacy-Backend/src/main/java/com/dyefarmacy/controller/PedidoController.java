package com.dyefarmacy.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dyefarmacy.entity.Pedido;
import com.dyefarmacy.service.PedidoService;

@RestController
@RequestMapping("/api/v1")
public class PedidoController {
	
	@Autowired
	PedidoService pedidoService;
	
	@GetMapping("/pedido")
	public List<Pedido> getAllPedidos() {
		return pedidoService.getAllPedidos();
	}
	
	@GetMapping("/pedido/{id}")
	public Set<Pedido> getAllPedidosByUserId(@PathVariable Long id) {
		return pedidoService.getAllPedidosByUserId(id);
	}
	
	@PostMapping("/pedido")
	public Integer addPedido(@RequestBody Pedido pedido) {
		return pedidoService.addPedido(pedido);
	}

}
