function RecepcionSelector({ recepcion, setRecepcion }: { recepcion: string; setRecepcion: (v: string) => void }) {
  return (
    <fieldset className="flex flex-col w-full justify-center items-center border-0 p-0 m-0">
      <legend className="text-title text-center mb-3">
        ¿Cómo querés recibirlas? <span className="text-burning-orange-500">*</span>
      </legend>
      <div className="flex gap-8">
        <label className="flex gap-3 items-center cursor-pointer text-title text-nutmeg-wood-900 text-lg" htmlFor="recepcion-retiro">
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
        <label className="flex gap-3 items-center cursor-pointer text-title text-nutmeg-wood-900 text-lg" htmlFor="recepcion-envio">
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
  );
}

export default RecepcionSelector;