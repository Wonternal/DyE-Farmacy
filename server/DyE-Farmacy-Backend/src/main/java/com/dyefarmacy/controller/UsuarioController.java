package com.dyefarmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;

import com.dyefarmacy.entity.Usuario;
import com.dyefarmacy.service.UsuarioService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	
	@PostMapping("/usuario")
	public ResponseEntity<?> addUsuario(@RequestBody Usuario usuario){
		try {
			return new ResponseEntity<>(usuarioService.addUsuario(usuario), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Error en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/usuario")
	public List<Usuario> getAllUsuarios(){
		return usuarioService.getAllUsuarios();
	}
	
	@PostMapping("/usuario/check")
	public ResponseEntity<?> checkIfUserIsRegistered(@RequestBody Usuario usuario){
		try {
			if (usuarioService.checkIfUserIsRegistered(usuario) == 1) {
				return new ResponseEntity<>("El usuario está registrado con ese email y contraseña", HttpStatus.OK);
			}
			return new ResponseEntity<>("El usuario no está registrado", HttpStatus.NOT_FOUND);
			
		} catch (Exception e) {
			return new ResponseEntity<>("Error en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/usuario/{id}")
	public ResponseEntity<?> getUsuarioById(@PathVariable Long id){
		try {
			return new ResponseEntity<>(usuarioService.getUsuarioById(id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Error en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/usuario/{id}/carrito")
	public ResponseEntity<?> getCarritoByUsuario(@PathVariable Long id){
		try {
			return new ResponseEntity<>(usuarioService.getCarritoByUsuario(id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Error en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/usuario/{id}")
	public ResponseEntity<?> deleteUsuario(@PathVariable Long id) {
		try {
			if(usuarioService.deleteUsuario(id) == 1) {
				return new ResponseEntity<>("Se borró el usuario con id : " + id + " exitosamente", HttpStatus.OK);
			}
			return new ResponseEntity<>("El usuario con id : " + id + " no esta regsitrado en la base de datos ", HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			return new ResponseEntity<>("Error en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/usuario/{id}")
	public ResponseEntity<?> modifyUsuario(@RequestBody Usuario usuario, @PathVariable Long id) {
		try {
			if (usuarioService.modifyUsuario(usuario, id) == (null)) {
				return new ResponseEntity<>("El usuario con id : " + id + " no esta regsitrado en la base de datos ", HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>("El usuario se modifico con éxito", HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>("Error en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
