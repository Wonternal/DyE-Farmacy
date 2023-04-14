package com.dyefarmacy.runner;

import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.dyefarmacy.entity.Carrito;
import com.dyefarmacy.entity.CarritoItem;
import com.dyefarmacy.entity.Pedido;
import com.dyefarmacy.entity.PedidoItem;
import com.dyefarmacy.entity.Producto;
import com.dyefarmacy.entity.Usuario;
import com.dyefarmacy.repository.CarritoItemRepository;
import com.dyefarmacy.repository.ProductoRepository;
import com.dyefarmacy.repository.UsuarioRepository;

@Component
@Order(value=1)
public class InitDatabase implements CommandLineRunner{
	
	@Autowired
	CarritoItemRepository carritoItemRepository;
	
	@Autowired
	ProductoRepository productoRepository;
	
	@Autowired
	UsuarioRepository usuarioRepository;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("*******************************************");
		
		// CREACIÓN DE LOS USUARIOS
		Usuario usuario1 = new Usuario("Darío", "Chinea Delgado", "dariocd0808@gmail.com", "1234", 1, new Carrito(), new HashSet<Pedido>());
		usuario1.setCarrito(new Carrito(usuario1, new HashSet<CarritoItem>()));
		
		Usuario usuario2 = new Usuario("Eduardo", "Camacho Díaz", "fgada200@gmail.com", "1234", 0, new Carrito(), new HashSet<Pedido>());
		usuario2.setCarrito(new Carrito(usuario2, new HashSet<CarritoItem>()));
		
		// CREACIÓN DE LOS PRODUCTOS
		Producto ibuprofeno = new Producto("Ibuporfeno", "antiinflamatorio no esteroideo, utilizado frecuentemente como antipirético, analgésico y antiinflamatorio. Se utiliza para el alivio sintomático de la fiebre, dolor de cabeza,...", 2f, 200,new HashSet<CarritoItem>(), new HashSet<PedidoItem>());
		Producto lsd = new Producto("LSD", "Droga alucinógena derivada del ácido lisérgico.", 50.8f, 200, new HashSet<CarritoItem>(), new HashSet<PedidoItem>());
		Producto tirita = new Producto("Tirita", "Tira pequeña de esparadrapo o de otro material con una gasa en el centro que se pega sobre una herida pequeña para protegerla", 0.25f, 200, new HashSet<CarritoItem>(), new HashSet<PedidoItem>());
		Producto venda = new Producto("Venda", "Tira, generalmente de gasa o de tela, que sirve para cubrir una herida, para impedir el movimiento de una parte del cuerpo, para tapar los ojos de una persona", 0.5f, 200, new HashSet<CarritoItem>(), new HashSet<PedidoItem>());
		Producto barritaEnergetica = new Producto("Barrita energética", "Las barritas energéticas son una buena fuente de carbohidratos y proteínas, que nos aportan energía constante", 1.99f, 200, new HashSet<CarritoItem>(), new HashSet<PedidoItem>());
		
		// AÑADIR PRODUCTOS A LA CESTA
		CarritoItem carritoItem1 = new CarritoItem(2l, 1l, 10);
		CarritoItem carritoItem2 = new CarritoItem(2l, 2l, 1);
		CarritoItem carritoItem3 = new CarritoItem(2l, 3l, 50);
		CarritoItem carritoItem4 = new CarritoItem(2l, 5l, 3);
		
		// GUARDAR TODO
		usuarioRepository.save(usuario1);
		usuarioRepository.save(usuario2);
		
		productoRepository.save(ibuprofeno);
		productoRepository.save(lsd);
		productoRepository.save(tirita);
		productoRepository.save(venda);
		productoRepository.save(barritaEnergetica);
		
		carritoItemRepository.save(carritoItem1);
		carritoItemRepository.save(carritoItem2);
		carritoItemRepository.save(carritoItem3);
		carritoItemRepository.save(carritoItem4);
		
	}

}