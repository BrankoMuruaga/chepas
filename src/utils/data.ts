import type {
  NavbarItem,
  Ingrediente,
  Pago,
  Envio,
  Dia,
  Horario,
  Historia,
} from "../types/types";

export const navbarItems: NavbarItem[] = [
  {
    name: "Ingredientes",
    href: "#ingredientes",
  },
  {
    name: "Entregas",
    href: "#entregas",
  },
  {
    name: "Pagos",
    href: "#pagos",
  },
  {
    name: "Contacto",
    href: "#contacto",
  },
  {
    name: "Comunidad",
    href: "#comunidad",
  },
];

export const ingredientes: Ingrediente[] = [
  {
    name: "Variedad de quesos",
    image: "/images/queso.webp",
    descripcion:
      "La fécula de mandioca es la base de la chipa, aportando su textura característica y sabor único.",
    position: "text-center -translate-y-10 md:translate-x-20 md:-translate-y-2",
  },
  {
    name: "Fecula de mandioca",
    image: "/images/fecula de mandioca.webp",
    descripcion:
      "Las especias aportan un toque especial que realza el sabor de cada bocado.",
    position:
      "text-center -translate-x-16 translate-y-10 md:translate-x-32 md:translate-y-8",
  },
  {
    name: "Huevo",
    image: "/images/huevo.webp",
    descripcion: "La leche aporta suavidad y un toque de cremosidad a la masa.",
    position: "text-center md:translate-x-40 md:translate-y-4",
  },
  {
    name: "Manteca",
    image: "/images/manteca.webp",
    descripcion:
      "La sal equilibra los sabores y resalta el gusto de los demás ingredientes.",
    position:
      "text-center -translate-x-16 translate-y-10 md:translate-x-24 md:translate-y-8",
  },
  {
    name: "Leche",
    image: "/images/leche.webp",
    descripcion:
      "El polvo para hornear es un ingrediente esencial para lograr que tus chipas queden esponjosas y con la textura perfecta.",
    position:
      "text-center translate-x-24 md:-translate-x-20 md:-translate-y-10",
  },
  {
    name: "Polvo para hornear",
    image: "/images/polvo para hornear.webp",
    descripcion:
      "Los quesos seleccionados le dan a la chipa su sabor inconfundible y delicioso.",
    position: "text-center translate-y-20 md:-translate-x-6 md:translate-y-2",
  },

  {
    name: "Sal",
    image: "/images/sal.webp",
    descripcion:
      "El huevo es clave para unir los ingredientes y dar estructura a la chipa.",
    position:
      "text-center translate-x-32 translate-y-16 md:-translate-x-8 md:-translate-y-12",
  },

  {
    name: "Especias",
    image: "/images/especias.webp",
    descripcion:
      "La manteca añade un sabor rico y ayuda a lograr una textura perfecta.",
    position:
      "text-center translate-x-12 translate-y-32 md:-translate-x-4 md:translate-y-4",
  },
];

export const pagos: Pago[] = [
  {
    name: "Efectivo",
    image: "/images/efectivo.webp",
    descripcion:
      "¡Podés pagar en mano, fácil y rápido, cuando recibís tu Chepa!",
  },
  {
    name: "Cuenta DNI",
    image: "/images/cuenta-dni.webp",
    descripcion: "Pagá con tu Cuenta DNI y obtené un 20% de reintegro",
  },
  {
    name: "Mercado Pago",
    image: "/images/mercadopago.webp",
    descripcion:
      "Pagá desde tu celu con Mercado Pago, cómodo y seguro para vos.",
  },
  {
    name: "Transferencia",
    image: "/images/transferencia.webp",
    descripcion: "Si preferís, podés transferirnos y listo, ¡sin vueltas!",
  },
];

export const envios: Envio[] = [
  {
    name: "Retiro",
    image: "/images/pin-ubicacion.webp",
    descripcion: "De lunes a sábado en Villa Club, Hurlingham (a coordinar)",
  },
  {
    name: "Envío",
    image: "/images/envio.webp",
    descripcion: "De lunes a sábado por la tarde (a coordinar)",
  },
];

export const dias: Dia[] = [
  {
    name: "Lunes",
  },
  {
    name: "Martes",
  },
  {
    name: "Miércoles",
  },
  {
    name: "Jueves",
  },
  {
    name: "Viernes",
  },
  {
    name: "Sábado",
  },
];

export const horarios: Horario[] = [
  { name: "13:00" },
  { name: "14:00" },
  { name: "15:00" },
  { name: "16:00" },
  { name: "17:00" },
  { name: "18:00" },
  { name: "19:00" },
  { name: "20:00" },
];

export const generarMensajeWhatsApp = (
  nombre: string,
  cantidadFinal: string,
  recepcion: string,
  dia?: string,
  horario?: string,
  detalle?: string
) => {
  const lineaDetalle = detalle ? `\n${detalle}` : "";
  return `¡Hola! Soy ${nombre || "[tu nombre]"} 👋🏼
Quisiera pedir ${cantidadFinal} paquete${
    cantidadFinal === "1" ? "" : "s"
  } de Chepas 🧀.

Opción de entrega: ${recepcion || "[retiro/envío]"}. 

${dia ? `Día: ${dia}` : ""}${
    horario ? ` - Horario: ${horario}` : ""
  }${lineaDetalle}
¡Gracias! 😊`;
};

export const historias: Historia[] = [
  {
    image: "/comunidad/historia_1.webp",
    alt: "Historia 1",
  },
  {
    image: "/comunidad/historia_2.webp",
    alt: "Historia 2",
  },
  {
    image: "/comunidad/historia_3.webp",
    alt: "Historia 3",
  },
  {
    image: "/comunidad/historia_4.webp",
    alt: "Historia 4",
  },
  {
    image: "/comunidad/historia_5.webp",
    alt: "Historia 5",
  },
  {
    image: "/comunidad/historia_6.webp",
    alt: "Historia 6",
  },
];
