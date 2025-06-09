package br.senac.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import br.senac.model.Usuario;
;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByNomeAndSenha(String nome, String senha);
}
