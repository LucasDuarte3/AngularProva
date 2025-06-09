package br.senac.repositorio;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.senac.model.Livros;
@Repository
public interface LivrosRepositorio extends JpaRepository<Livros, Integer>{

}
