import { Component } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../services/usuario.service';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.html',
  styleUrls: ['./usuario-create.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class UsuarioCreateComponent {
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit(): void {
    this.usuarioService.createUsuario(this.usuario).subscribe(() => {
      this.router.navigate(['/usuario']);
    });
  }
}
