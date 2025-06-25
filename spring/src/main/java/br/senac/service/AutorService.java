package br.senac.service;

import br.senac.model.Autor;
import br.senac.repositorio.AutorRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AutorService {
    @Autowired
    private AutorRepositorio autorRepositorio;

    public List<Autor> getAllAutores() {
        return autorRepositorio.findAll();
    }

    public Autor getAutorById(int id) {
        Optional<Autor> autor = autorRepositorio.findById(id);
        return autor.orElse(null);
    }

    public void addAutor(Autor autor) {
        autorRepositorio.save(autor);
    }

    public void updateAutor(Autor autor, int id) {
        if (autorRepositorio.existsById(id)) {
            autor.setId(id);
            autorRepositorio.save(autor);
        }
    }

    public void deleteAutor(int id) {
        autorRepositorio.deleteById(id);
    }
}