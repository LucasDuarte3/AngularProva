import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  nome = '';
  senha = '';
  erro = false;

  constructor(private authService: AuthService, private router: Router) {}

  fazerLogin() {
    this.authService.login(this.nome, this.senha).subscribe(sucesso => {
      if (sucesso) {
        this.erro = false;
        this.router.navigate(['/livros']); // redireciona para listagem de livros
      } else {
        this.erro = true;
      }
    });
  }
}
