package br.senac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.senac.model.Usuario;
import br.senac.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    // Endpoint de Login
    @PostMapping("/login")
    public boolean login(@RequestBody Usuario usuario) {
        return usuarioService.autenticar(usuario.getNome(), usuario.getSenha());
    }

    // Endpoint para criar novos usuários (opcional)
    @PostMapping("/criar")
    public Usuario criar(@RequestBody Usuario usuario) {
        return usuarioService.salvar(usuario);
    }
    
    @PostMapping
    public Usuario criarUsuario(@RequestBody Usuario usuario) {
        return usuarioService.salvar(usuario);
    }
    
    @GetMapping
    public List<Usuario> listarTodos() {
        return usuarioService.listarTodos();
    }
    
 // Atualizar usuário
    @PutMapping("/{id}")
    public Usuario atualizarUsuario(@PathVariable Long id, @RequestBody Usuario usuario) {
        return usuarioService.atualizar(id, usuario);
    }

    // Deletar usuário
    @DeleteMapping("/{id}")
    public void deletarUsuario(@PathVariable Long id) {
        usuarioService.deletar(id);
    }

}
