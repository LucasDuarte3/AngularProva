import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../usuario.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.html',
  styleUrls: ['./usuario-update.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class UsuarioUpdateComponent implements OnInit {
  id!: number;
  usuario: Usuario = new Usuario();

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getUsuarioById(this.id).subscribe(data => {
      this.usuario = data;
    });
  }

  onSubmit(): void {
    this.usuarioService.updateUsuario(this.id, this.usuario).subscribe(() => {
      this.router.navigate(['/usuario']);
    });
  }
}
