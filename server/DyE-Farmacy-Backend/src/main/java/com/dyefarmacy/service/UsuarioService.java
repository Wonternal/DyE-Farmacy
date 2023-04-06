package com.dyefarmacy.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dyefarmacy.entity.Carrito;
import com.dyefarmacy.entity.CarritoItem;
import com.dyefarmacy.entity.Usuario;
import com.dyefarmacy.repository.CarritoRepository;
import com.dyefarmacy.repository.UsuarioRepository;


@Service
public class UsuarioService {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired 
	CarritoRepository carritoRepository;
	
	public Usuario addUsuario (Usuario usuario) {
		Usuario _usuario = usuarioRepository.save(usuario);
		_usuario.setCarrito(new Carrito(_usuario, new HashSet<CarritoItem>()));
		return usuarioRepository.save(_usuario);
	}
	
	public Usuario getUsuarioById (Long id_usuario) {
		try {
			return usuarioRepository.findById(id_usuario).get();
		} catch (Exception e) {
			throw e;
		}
	}
	
	public List<Usuario> getAllUsuarios () {
		return usuarioRepository.findAll();
	}
	
	public int deleteUsuario (Long id_usuario) {
		try {
			usuarioRepository.deleteById(id_usuario);
			return 1;
		} catch (Exception e) {
			return 0;
		}
	}
	
	public Usuario modifyUsuario (Usuario usuario, Long id_usuario) {
		if(id_usuario == null) {
			return null;
		}
		Optional<Usuario> optionalUsuario = usuarioRepository.findById(id_usuario);
		if(optionalUsuario.isPresent()) {
			Usuario _usuario = optionalUsuario.get();
			_usuario.setNombre(usuario.getNombre());
			_usuario.setApellido(usuario.getApellido());
			_usuario.setEmail(usuario.getEmail());
			_usuario.setPassword(usuario.getPassword());
			_usuario.setRol(usuario.getRol());
			return usuarioRepository.save(_usuario);
		}
		return null;
	}
	
	public Carrito getCarritoByUsuario (Long id_usuario) {
		return usuarioRepository.findById(id_usuario).get().getCarrito();
	}

}
