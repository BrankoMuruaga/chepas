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
    name: "Fecula de mandioca",
    image: "/images/fecula de mandioca.png",
    descripcion:
      "La fécula de mandioca es la base de la chipa, aportando su textura característica y sabor único.",
    position: "text-center -translate-y-10 md:translate-x-20 md:-translate-y-2",
  },
  {
    name: "Especias",
    image: "/images/especias.png",
    descripcion:
      "Las especias aportan un toque especial que realza el sabor de cada bocado.",
    position:
      "text-center -translate-x-16 translate-y-10 md:translate-x-32 md:translate-y-8",
  },
  {
    name: "Leche",
    image: "/images/leche.png",
    descripcion: "La leche aporta suavidad y un toque de cremosidad a la masa.",
    position: "text-center md:translate-x-40 md:translate-y-4",
  },
  {
    name: "Sal",
    image: "/images/sal.png",
    descripcion:
      "La sal equilibra los sabores y resalta el gusto de los demás ingredientes.",
    position:
      "text-center -translate-x-16 translate-y-10 md:translate-x-24 md:translate-y-8",
  },
  {
    name: "Polvo para hornear",
    image: "/images/polvo para hornear.png",
    descripcion:
      "El polvo para hornear es un ingrediente esencial para lograr que tus chipas queden esponjosas y con la textura perfecta.",
    position:
      "text-center translate-x-24 md:-translate-x-20 md:-translate-y-10",
  },
  {
    name: "Variedad de quesos",
    image: "/images/queso.png",
    descripcion:
      "Los quesos seleccionados le dan a la chipa su sabor inconfundible y delicioso.",
    position: "text-center translate-y-20 md:-translate-x-6 md:translate-y-2",
  },

  {
    name: "Huevo",
    image: "/images/huevo.png",
    descripcion:
      "El huevo es clave para unir los ingredientes y dar estructura a la chipa.",
    position:
      "text-center translate-x-32 translate-y-16 md:-translate-x-8 md:-translate-y-12",
  },

  {
    name: "Manteca",
    image: "/images/manteca.png",
    descripcion:
      "La manteca añade un sabor rico y ayuda a lograr una textura perfecta.",
    position:
      "text-center translate-x-12 translate-y-32 md:-translate-x-4 md:translate-y-4",
  },
];

export const pagos: Pago[] = [
  {
    name: "Efectivo",
    image: "/images/efectivo.png",
    descripcion:
      "¡Podés pagar en mano, fácil y rápido, cuando recibís tu Chepa!",
  },
  {
    name: "Mercado Pago",
    image: "/images/mercadopago.png",
    descripcion:
      "Pagá desde tu celu con Mercado Pago, cómodo y seguro para vos.",
  },
  {
    name: "Transferencia",
    image: "/images/transferencia.png",
    descripcion: "Si preferís, podés transferirnos y listo, ¡sin vueltas!",
  },
];

export const envios: Envio[] = [
  {
    name: "Retiro",
    image: "/images/pin-ubicacion.png",
    descripcion: "De lunes a sábado en Villa Club, Hurlingham (a coordinar)",
  },
  {
    name: "Envío",
    image: "/images/envio.png",
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
    image: "/comunidad/historia_1.png",
    alt: "Historia 1",
  },
  {
    image: "/comunidad/historia_2.png",
    alt: "Historia 2",
  },
  {
    image: "/comunidad/historia_3.png",
    alt: "Historia 3",
  },
  {
    image: "/comunidad/historia_4.png",
    alt: "Historia 4",
  },
  {
    image: "/comunidad/historia_5.png",
    alt: "Historia 5",
  },
  {
    image: "/comunidad/historia_6.png",
    alt: "Historia 6",
  },
];
