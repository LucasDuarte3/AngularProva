import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../usuario.model';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.html',
  styleUrls: ['./usuario-list.css'],
  imports: [CommonModule, RouterModule]
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  updateUsuario(id: number): void {
    this.router.navigate(['update-usuario', id]);
  }

  deleteUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      this.getUsuarios();
    });
  }
}
