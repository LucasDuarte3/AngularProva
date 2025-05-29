import { Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list';
import { UsuarioCreateComponent } from './usuario-create/usuario-create';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update';

export const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },
  { path: 'usuario', component: UsuarioListComponent },
  { path: 'create-usuario', component: UsuarioCreateComponent },
  { path: 'update-usuario/:id', component: UsuarioUpdateComponent }
];
