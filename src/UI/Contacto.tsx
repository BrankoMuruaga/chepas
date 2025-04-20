import { dias, generarMensajeWhatsApp, horarios } from "../utils/data";
import Section from "../components/Section";
import SectionDashed from "../components/SectionDashed";
import { useState } from "react";
import ButtonIcon from "../components/ButtonIcon";
import { URL_WHATSAPP } from "../utils/contanst";
import NombreInput from "../components/NombreInput";
import CantidadSelector from "../components/CantidadSelector";
import RecepcionSelector from "../components/RecepcionSelector";
import DiaHorarioSelector from "../components/DiaHorarioSelector";
import DetalleTextarea from "../components/DetalleTextarea";

function Contacto({ id }: { id: string }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("1");
  const [otroValor, setOtroValor] = useState("");
  const [recepcion, setRecepcion] = useState("");
  const [dia, setDia] = useState(dias[0]?.name || "");
  const [horario, setHorario] = useState(horarios[0]?.name || "");
  const [detalle, setDetalle] = useState("");

  const cantidadFinal = cantidad === "otro" && otroValor ? otroValor : cantidad;

  const mensaje = generarMensajeWhatsApp(
    nombre,
    cantidadFinal,
    recepcion,
    dia,
    horario,
    detalle
  );

  const url = URL_WHATSAPP + encodeURIComponent(mensaje);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado"); // Puedes eliminar esta línea si no la necesitas

    // El navegador valida los campos required automáticamente antes de llamar a esta función
    window.open(url, "_blank");
  };

  return (
    <>
      <img
        src="/images/linea-contacto.svg"
        className="bottom-1/6 pointer-events-none absolute -z-10 w-screen -translate-y-24"
      />
      <Section
        id={id}
        title="¿Listo para pedir tus Chepas?"
        subtitle="Escribinos por WhatsApp y coordinamos tu pedido en segundos"
      >
        <SectionDashed withBackground className="md:w-1/2 px-14 py-7">
          <form
            className="flex flex-col gap-6 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <NombreInput nombre={nombre} setNombre={setNombre} />
            <CantidadSelector
              cantidad={cantidad}
              setCantidad={setCantidad}
              otroValor={otroValor}
              setOtroValor={setOtroValor}
            />
            <RecepcionSelector
              recepcion={recepcion}
              setRecepcion={setRecepcion}
            />
            <DiaHorarioSelector
              dia={dia}
              setDia={setDia}
              horario={horario}
              setHorario={setHorario}
            />
            <DetalleTextarea detalle={detalle} setDetalle={setDetalle} />
            <ButtonIcon icon="/images/whatsapp.png" typeSubmit>
              ¡Enviar pedido!
            </ButtonIcon>
          </form>
        </SectionDashed>
      </Section>
    </>
  );
}

export default Contacto;
