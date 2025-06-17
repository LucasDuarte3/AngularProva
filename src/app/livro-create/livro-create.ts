import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-livro-create',
  templateUrl: './livro-create.html',
  styleUrls: ['./livro-create.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class LivroCreateComponent {
  form = {
    nome: '',
    autorId: 0
  };
  autores: any[] = [];
  constructor(private authService: AuthService, private http: HttpClient) {}

  cadastrarLivro(): void {
    const usuario = this.authService.getUsuarioLogado();
    if (!usuario || !usuario.id) {
      alert('Usuário não logado!');
      return;
    }

    const livro = {
      nome: this.form.nome,
      autor: { id: this.form.autorId },
      usuario: { id: usuario.id }
    };

    this.http.post('http://localhost:8080/livros', livro).subscribe(() => {
      alert('Livro cadastrado com sucesso!');
    });
  }
}
