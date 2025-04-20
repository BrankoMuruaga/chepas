function DetalleTextarea({ detalle, setDetalle }: { detalle: string; setDetalle: (v: string) => void }) {
  return (
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
  );
}

export default DetalleTextarea;