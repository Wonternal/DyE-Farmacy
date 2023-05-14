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
		Producto ibuprofeno = new Producto("Ibuprofeno", "El ibuprofeno es un antiinflamatorio no esteroideo (AINE), utilizado frecuentemente como antipirético, analgésico y antiinflamatorio. Se utiliza para el alivio sintomático de la fiebre, dolor de cabeza (cefalea), dolor dental (odontalgia), dolor muscular o mialgia, molestias de la menstruación (dismenorrea), dolor neurológico de carácter leve o moderado y dolor postquirúrgico. También se usa para tratar cuadros inflamatorios, como los que se presentan en artritis, artritis reumatoide (AR), hinchazón muscular, dolor de garganta y artritis gotosa. Es usado en ocasiones para tratar el acné debido a sus propiedades antiinflamatorias y ha sido expendido en Japón en forma tópica para acné de adultos.", 2f, 200, "Medicamento", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "ibuprofeno.png");
		Producto aspirina = new Producto("Aspirina C", "Comprimidos para el alivio sintomático de los dolores leves o moderados, como dolores de cabeza, dentales, menstruales, musculares... o estados febriles. Contiene 20 comprimidos.", 9.87f, 200, "Medicamento", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "aspirina.png");
		Producto tirita = new Producto("Tirita", "Una tira adhesiva sanitaria, apósito adhesivo, venda adhesiva, curita o tirita, es una cinta adhesiva de corta extensión con un apósito esterilizado en el centro, utilizada para el tratamiento de heridas pequeñas. Se la conoce popularmente como curita o tirita, según el país, por las marcas vulgarizadas con las que antiguamente se identificaba al producto.", 0.25f, 200,"Salud", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "tirita.png");
		Producto venda = new Producto("Venda", "Un vendaje consiste en envolver una parte del cuerpo que está lesionada por diversos motivos con paños de lino o de lana (dependiendo de tu habilidad de primeros auxilios) unidas entre sí y colocadas en un orden racional.", 0.5f, 200, "Salud", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "venda.png");
		Producto barritaEnergeticaProzisChocolate = new Producto("Barrita energética Prozis Chocolate", "Una barrita energética es un suplemento dietético consumido por los atletas y aquellas personas sometidas a un intenso esfuerzo físico que necesiten mantener energías mediante la ingestión de alimentos. Posee principalmente carbohidratos complejos. Algunas barras suelen contener un porcentaje de proteína (generalmente proteína de soja) así como una selección de vitaminas. Suelen tener sabores que recuerdan a las galletas o los muffins, también pueden tener sabor a chocolate o a frutos secos.", 1.99f, 200, "Comida", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "barritaProzis.png");
		Producto colirioVispring = new Producto("Colirio Vispring", "Colirio para el alivio sintomático de la congestión conjuntival leve en adultos y niños mayores de 6 años. Contiene 10 monodosis.", 8.20f, 200, "Medicamento", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "colirio.png");
		Producto rhinovinDuoNebulizadorNasal = new Producto("Rhinovin Duo Nebulizador Nasal", "Nebulizador nasal que alivia de forma local y temporal la congestión." + "Contiene 10 ml.", 7.35f, 200, "Medicamento", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "rhinovin.png");
		Producto orliloss = new Producto("Orliloss 60 Mg", "Cápsulas para perder peso en adultos con un índice de masa corporal IMC de 28 o superior. Contiene 120 cápsulas", 56.20f, 200, "Medicamento", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "orliloss.png");
		Producto soñodor  = new Producto("Soñodor 50", "Comprimidos para el tratamiento sintomático del insomnio ocasional, cuando existe dificultad para conciliar el sueño.\r\n"
				+ "\r\n"
				+ "Contiene 16 comprimidos.", 9.34f, 200, "Medicamento", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "sonador.png");
		Producto tusclinJarabe = new Producto("Tusclin Jarabe", "Jarabe a base de plantas para el tratamiento de la tos productiva en adultos y niños a partir de 2 años.\r\n"
				+ "\r\n"
				+ "Contiene 100 ml.", 7.38f, 200, "Medicamento", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "boiron.png");
		Producto boiron = new Producto("BOIRON Avenoc Pomada 30 Gr", "Medicamento homeopático para el tratamiento de las hemorroides que se manifiestan por crisis dolorosas, prurito y pequeños sangrados.\r\n"
				+ "\r\n"
				+ "Contiene 30 gr.", 9.99f, 200, "Medicamento", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "orliloss.png");
		Producto durexPack = new Producto("Durex Pack Placer Intenso 2X12 Unidades", "Durex Pack Placer Intenso - Durex Preservativos Mutual Climax + Durex Preservativos Intense - 24 Condones", 13.99f, 200, "Sexo", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "durexPack.png");
		Producto durexDamePlacer = new Producto("Durex + Lubricante", "Es un pack de la marca Durex que incluye: Durex Dame Placer 12 unidades + Durex Play Lubricante Fresa.", 4.24f, 200, "Sexo", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "durex.png");
		Producto satisfyer = new Producto("Satisfyer Vibrator Vibe Master", "Satisfyer son juguetes con estilo, 100% diseño y tecnología alemana para un placer total! La combinación de un potente motor, con la suavidad de la silicona y el efecto liquid silicone que ha desarrollado satisfyer convierte a los productos Vibes en lujo al alcance de todos. Potentes vibraciones distribuidas por todo el cuerpo del vibrador y diseñado para incrementar.", 35.95f, 200, "Sexo", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "satisfayer.png");
		Producto bisolvonAntitusivo = new Producto("Bisolvon Antitusivo", "Jarabe para el tratamiento sintomático de la tos que no vaya acompañada de expectoración. A partir dos 2 años. Contiene 200 ml", 9.50f, 200, "Medicamento", new HashSet<CarritoItem>(), new HashSet<PedidoItem>(), "bisolvon.png");
		// AÑADIR PRODUCTOS A LA CESTA
		CarritoItem carritoItem1 = new CarritoItem(2l, 1l, 10);
		CarritoItem carritoItem2 = new CarritoItem(2l, 2l, 1);
		CarritoItem carritoItem3 = new CarritoItem(2l, 3l, 50);
		CarritoItem carritoItem4 = new CarritoItem(2l, 5l, 3);
		
		// GUARDAR TODO
		usuarioRepository.save(usuario1);
		usuarioRepository.save(usuario2);
		
		productoRepository.save(ibuprofeno);
		productoRepository.save(aspirina);
		productoRepository.save(tirita);
		productoRepository.save(venda);
		productoRepository.save(barritaEnergeticaProzisChocolate);
		productoRepository.save(colirioVispring);
		productoRepository.save(rhinovinDuoNebulizadorNasal);
		productoRepository.save(bisolvonAntitusivo);
		productoRepository.save(orliloss);
		productoRepository.save(soñodor);
		productoRepository.save(tusclinJarabe);
		productoRepository.save(boiron);
		productoRepository.save(durexPack);
		productoRepository.save(durexDamePlacer);
		productoRepository.save(satisfyer);
		
		carritoItemRepository.save(carritoItem1);
		carritoItemRepository.save(carritoItem2);
		carritoItemRepository.save(carritoItem3);
		carritoItemRepository.save(carritoItem4);
		
	}

}