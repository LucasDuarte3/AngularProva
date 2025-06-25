package br.senac.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.senac.model.Livros;
import br.senac.repositorio.LivrosRepositorio;

@Service
public class LivrosService {
	
	@Autowired
	LivrosRepositorio livrosRepositorio;
	
	
	public List<Livros>getAllLivros(){
		List<Livros> livros = new ArrayList<Livros>();
		livrosRepositorio.findAll().forEach(livros1 -> livros.add(livros1));
		return livros;
	}
	
	public Livros getLivrosById(int id) {
		return livrosRepositorio.findById(id).get();
	}
	
	public void addLivros(Livros livros){
		livrosRepositorio.save(livros);
	}
	
	public void updateLivros(Livros livros, int id) {
		livrosRepositorio.save(livros);
	}
	public void deleteLivros(int id) {
		livrosRepositorio.deleteById(id);
	}

}

