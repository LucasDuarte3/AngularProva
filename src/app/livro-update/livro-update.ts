import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.html',
  styleUrls: ['./livro-update.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class LivroUpdateComponent {
  livroId!: number;
  livro: any = {
    nome: '',
    autor: { id: '' }
  };
  autores: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.livroId = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get<any[]>(`http://localhost:8080/autores`).subscribe(data => this.autores = data);

    this.http.get<any>(`http://localhost:8080/livros/${this.livroId}`).subscribe(data => {
      this.livro = data;
    });
  }

  atualizarLivro() {
    const payload = {
      id: this.livroId,
      nome: this.livro.nome,
      autor: { id: this.livro.autor.id }
    };

    this.http.put(`http://localhost:8080/livros/${this.livroId}`, payload).subscribe(() => {
      alert('Livro atualizado!');
      this.router.navigate(['/livros']);
    });
  }
}
