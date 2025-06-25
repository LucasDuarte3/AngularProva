import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioLogadoKey = 'usuarioLogado';

  constructor(private http: HttpClient) {}

  login(nome: string, senha: string): Observable<boolean> {
    return this.http.post<any>('http://localhost:8081/usuarios/login', {
      nome: nome,
      senha,
    }).pipe(
      map(usuario => {
        if (usuario && usuario.id) {
          this.setUsuarioLogado(usuario);
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  setUsuarioLogado(usuario: any): void {
    localStorage.setItem(this.usuarioLogadoKey, JSON.stringify(usuario));
  }

  getUsuarioLogado(): any {
    const data = localStorage.getItem(this.usuarioLogadoKey);
    return data ? JSON.parse(data) : null;
  }

  logout(): void {
    localStorage.removeItem(this.usuarioLogadoKey);
  }

  isLogado(): boolean {
    return !!this.getUsuarioLogado();
  }
}
