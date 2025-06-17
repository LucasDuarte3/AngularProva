import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-livro-list',
  templateUrl: './livro-list.html',
  styleUrls: ['./livro-list.css'],
  imports: [CommonModule, RouterModule]
})
export class LivroListComponent {
  livros: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/livros').subscribe(data => this.livros = data);
  }

  deletarLivro(id: number) {
    if (confirm('Deseja excluir este livro?')) {
      this.http.delete(`http://localhost:8080/livros/${id}`).subscribe(() => {
        this.livros = this.livros.filter(l => l.id !== id);
      });
    }
  }

  editarLivro(id: number) {
    this.router.navigate(['/livros/editar', id]);
  }
}
