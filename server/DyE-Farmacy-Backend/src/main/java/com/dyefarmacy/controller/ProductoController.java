package com.dyefarmacy.controller;

import java.net.MalformedURLException;
import java.util.List;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;


import com.dyefarmacy.entity.Producto;
import com.dyefarmacy.repository.ProductoRepository;
import com.dyefarmacy.service.ProductoService;
import com.dyefarmacy.service.UploadFilesService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class ProductoController {
	
	@Autowired
	ProductoService productoService;
	
	@Autowired
	UploadFilesService uploadFilesService;
	
	@Autowired
	ProductoRepository productoRepository;
	
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
	@PostMapping("/producto/upload")
	public  ResponseEntity<?> uploadPhoto(@RequestParam("file") MultipartFile file, @RequestParam("id") Long id) {
		HashMap<String, Object> response = new HashMap<>();
		Producto producto = productoService.getProductoById(id);
		
		if (!file.isEmpty()) {
			String fileName = null;
			try {
				fileName = uploadFilesService.copy(file);
			} catch (IOException e) {
			    response.put("message", "Error al subir la imagen del producto");
			    if (e.getCause() != null) {
			        response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
			    } else {
			        response.put("error", e.getMessage());
			    }
			    return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
			}

			
			String lastPhotoName = producto.getFoto();
			uploadFilesService.delete(lastPhotoName);
			
			producto.setFoto(fileName);
			productoRepository.save(producto);
			
			response.put("Producto", producto);
			response.put("message", "Has subido correctamente la imagen ".concat(fileName));
		}
		
		return new ResponseEntity<HashMap<String, Object>>(response , HttpStatus.CREATED);
	}
	
	@GetMapping("/producto/uploads/img/{photoName:.+}")
	public ResponseEntity<Resource> viewFoodPhoto(@PathVariable String photoName) {
		Resource resource = null;
		try {
			resource = uploadFilesService.loadFoto(photoName);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		HttpHeaders header = new HttpHeaders();
		header.add(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=\"" + resource.getFilename() + "\"");
		return new ResponseEntity<Resource>(resource, header, HttpStatus.OK);
	}
}
