import Arrow from "../icons/Arrow";
import { dias, horarios } from "../utils/data";

interface DiaHorarioSelectorProps {
  dia: string;
  setDia: (v: string) => void;
  horario: string;
  setHorario: (v: string) => void;
}

function DiaHorarioSelector({ dia, setDia, horario, setHorario }: DiaHorarioSelectorProps) {
  return (
    <fieldset className="flex flex-col  w-full justify-center items-center border-0 p-0 m-0">
      <legend className="text-title text-center mb-3">
        ¿Qué día y horario te viene mejor? <span className="text-burning-orange-500">*</span>
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
  );
}

export default DiaHorarioSelector;