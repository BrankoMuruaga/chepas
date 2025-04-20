// Tipos para los datos de data.ts

export interface NavbarItem {
  name: string;
  href: string;
}

export interface Ingrediente {
  name: string;
  image: string;
  descripcion: string;
  position: string;
}

export interface Pago {
  name: string;
  image: string;
  descripcion: string;
}

export interface Envio {
  name: string;
  image: string;
  descripcion: string;
}

export interface Dia {
  name: string;
}

export interface Horario {
  name: string;
}

export interface Historia {
  image: string;
  alt: string;
}
