import { dias, generarMensajeWhatsApp, horarios } from "../utils/data";
import Section from "../components/Section";
import SectionDashed from "../components/SectionDashed";
import Arrow from "../icons/Arrow";
import { useState } from "react";
import ButtonIcon from "../components/ButtonIcon";
import { URL_WHATSAPP } from "../utils/contanst";

function Contacto({ id }: { id: string }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("1");
  const [otroValor, setOtroValor] = useState("");
  const [recepcion, setRecepcion] = useState("");
  const [dia, setDia] = useState(dias[0]?.name || "");
  const [horario, setHorario] = useState(horarios[0]?.name || "");
  const [detalle, setDetalle] = useState("");

  const handleCantidadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCantidad(e.target.value);
    if (e.target.value !== "otro") {
      setOtroValor("");
    }
  };

  // Determina la cantidad final
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
    <Section
      id={id}
      title="¿Listo para pedir tus Chepas?"
      subtitle="Escribinos por WhatsApp y coordinamos tu pedido en segundos"
    >
      <SectionDashed withBackground className="w-1/2 px-14 py-7">
        <form
          className="flex flex-col gap-6 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-3 w-full justify-center items-center">
            <label htmlFor="nombre" className="text-title text-center">
              ¿Cómo te llamás?{" "}
              <span className="text-burning-orange-500">*</span>
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              className="p-3 outline-none bg-burning-orange-300 text-nutmeg-wood-900 rounded-2xl"
              required
              autoComplete="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <fieldset className="flex flex-col justify-center items-center border-0 p-0 m-0">
            <legend className="text-title text-center mb-3">
              ¿Cuántos paquetes querés?{" "}
              <span className="text-burning-orange-500">*</span>
            </legend>
            <div className="relative">
              <label htmlFor="cantidad" className="sr-only">
                Seleccioná la cantidad de paquetes
              </label>
              <select
                id="cantidad"
                name="cantidad"
                className="cursor-pointer outline-none appearance-none p-3 pr-8 bg-burning-orange-300 text-nutmeg-wood-900 rounded-2xl w-full"
                value={cantidad}
                onChange={handleCantidadChange}
                required
              >
                <option value="1">1 Paquete (24 Chepas)</option>
                <option value="2">2 Paquetes (48 Chepas)</option>
                <option value="3">3 Paquetes (72 Chepas)</option>
                <option value="otro">Otro</option>
              </select>
              <span className="pointer-events-none absolute right-1 top-1/2 transform -translate-y-1/2 translate-x-3 text-nutmeg-wood-900">
                <Arrow />
              </span>
            </div>
            {cantidad === "otro" && (
              <div className="flex flex-col gap-3 w-full mt-3">
                <label
                  htmlFor="cantidad-otro"
                  className="text-title text-center"
                >
                  Ingresá la cantidad que necesites{" "}
                  <span className="text-burning-orange-500">*</span>
                </label>
                <input
                  id="cantidad-otro"
                  name="cantidad-otro"
                  type="number"
                  min={1}
                  value={otroValor}
                  onChange={(e) => setOtroValor(e.target.value)}
                  className="p-3 outline-none bg-burning-orange-300 text-nutmeg-wood-900 rounded-2xl"
                  placeholder="Ingresá la cantidad"
                  required
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              </div>
            )}
          </fieldset>
          <fieldset className="flex flex-col w-full justify-center items-center border-0 p-0 m-0">
            <legend className="text-title text-center mb-3">
              ¿Cómo querés recibirlas?{" "}
              <span className="text-burning-orange-500">*</span>
            </legend>
            <div className="flex gap-8">
              <label
                className="flex gap-3 items-center cursor-pointer text-title text-nutmeg-wood-900 text-lg"
                htmlFor="recepcion-retiro"
              >
                Retiro
                <input
                  type="radio"
                  id="recepcion-retiro"
                  name="recepcion"
                  value="retiro"
                  className="w-6 h-6 accent-nutmeg-wood-900"
                  required
                  checked={recepcion === "retiro"}
                  onChange={(e) => setRecepcion(e.target.value)}
                />
              </label>
              <label
                className="flex gap-3 items-center cursor-pointer text-title text-nutmeg-wood-900 text-lg"
                htmlFor="recepcion-envio"
              >
                Envío
                <input
                  type="radio"
                  id="recepcion-envio"
                  name="recepcion"
                  value="envio"
                  className="w-6 h-6 accent-nutmeg-wood-900"
                  required
                  checked={recepcion === "envio"}
                  onChange={(e) => setRecepcion(e.target.value)}
                />
              </label>
            </div>
          </fieldset>
          <fieldset className="flex flex-col  w-full justify-center items-center border-0 p-0 m-0">
            <legend className="text-title text-center mb-3">
              ¿Qué día y horario te viene mejor?{" "}
              <span className="text-burning-orange-500">*</span>
            </legend>
            <div className="flex gap-4 ">
              <div className="relative">
                <label htmlFor="dias" className="sr-only">
                  Seleccioná el día
                </label>
                <select
                  id="dias"
                  className="cursor-pointer outline-none appearance-none p-3 pr-10 bg-burning-orange-300 text-nutmeg-wood-900 rounded-2xl w-full"
                  name="dias"
                  required
                  value={dia}
                  onChange={(e) => setDia(e.target.value)}
                >
                  {dias.map((diaObj, index) => (
                    <option
                      className="cursor-pointer outline-none appearance-none p-3 px-6 bg-burning-orange-300 text-nutmeg-wood-900 rounded-2xl w-full"
                      key={index}
                      value={diaObj.name}
                    >
                      {diaObj.name}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute -translate-x-12 top-1/2 transform -translate-y-1/2 text-nutmeg-wood-900">
                  <Arrow />
                </span>
              </div>
              <div className="relative">
                <label htmlFor="horarios" className="sr-only">
                  Seleccioná el horario
                </label>
                <select
                  id="horarios"
                  className="cursor-pointer outline-none appearance-none p-3 pr-10 bg-burning-orange-300 text-nutmeg-wood-900 rounded-2xl w-full"
                  name="horarios"
                  required
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                >
                  {horarios.map((horarioObj, index) => (
                    <option
                      className="cursor-pointer outline-none appearance-none p-3 px-6 bg-burning-orange-300 text-nutmeg-wood-900 rounded-2xl w-full"
                      key={index}
                      value={horarioObj.name}
                    >
                      {horarioObj.name}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute  -translate-x-12 top-1/2 transform -translate-y-1/2 text-nutmeg-wood-900">
                  <Arrow />
                </span>
              </div>
            </div>
          </fieldset>
          <div className="flex flex-col gap-3 w-full justify-center items-center">
            <label htmlFor="detalle" className="text-title text-center">
              ¿Querés agregar algún detalle para tu pedido?
            </label>
            <textarea
              id="detalle"
              name="detalle"
              className="p-3 outline-none bg-burning-orange-300 text-nutmeg-wood-900 rounded-2xl w-full"
              placeholder="Contanos lo que necesites"
              rows={4}
              cols={50}
              style={{ resize: "none" }}
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
            />
          </div>
          <ButtonIcon icon="/images/whatsapp.png" typeSubmit>
            ¡Enviar pedido!
          </ButtonIcon>
        </form>
      </SectionDashed>
    </Section>
  );
}

export default Contacto;
