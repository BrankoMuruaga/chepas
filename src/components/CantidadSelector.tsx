import Arrow from "../icons/Arrow";

interface CantidadSelectorProps {
  cantidad: string;
  setCantidad: (v: string) => void;
  otroValor: string;
  setOtroValor: (v: string) => void;
}

function CantidadSelector({ cantidad, setCantidad, otroValor, setOtroValor }: CantidadSelectorProps) {
  const handleCantidadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCantidad(e.target.value);
    if (e.target.value !== "otro") {
      setOtroValor("");
    }
  };
  return (
    <fieldset className="flex flex-col justify-center items-center border-0 p-0 m-0">
      <legend className="text-title text-center mb-3">
        ¿Cuántos paquetes querés? <span className="text-burning-orange-500">*</span>
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
          <label htmlFor="cantidad-otro" className="text-title text-center">
            Ingresá la cantidad que necesites <span className="text-burning-orange-500">*</span>
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
  );
}

export default CantidadSelector;