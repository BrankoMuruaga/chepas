import Arrow from "../icons/Arrow";

function NombreInput({ nombre, setNombre }: { nombre: string; setNombre: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-3 w-full justify-center items-center">
      <label htmlFor="nombre" className="text-title text-center">
        ¿Cómo te llamás? <span className="text-burning-orange-500">*</span>
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
  );
}

export default NombreInput;