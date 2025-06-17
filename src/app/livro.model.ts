export interface Livro {
  id?: number; // opcional para criação
  nome: string;
  autor: {
    id: number;
    nome?: string; // pode vir preenchido na listagem
  };
  usuario?: {
    id: number;
    nome?: string;
  };
}
