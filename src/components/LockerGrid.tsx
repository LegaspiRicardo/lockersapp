import type { Area, Locker } from "../types/Locker";
import LockerColumn from "./LockerColumn";

interface Props {
  area: Area;
  onLockerClick: (locker: Locker) => void;
}

export default function LockerGrid({
  area,
  onLockerClick,
}: Props) {

  return (

    <div className="bg-olive-400 rounded-xl shadow-2xl p-1 text-center">

      <div className="grid grid-cols-7 gap-1 bg-olive-300 mt-4 rounded-xl">

        {area.filas.map((fila, index) => (

          <LockerColumn
            key={index}
            titulo={`Fila ${index + 1}`}
            lockers={fila}
            onLockerClick={onLockerClick}
          />

        ))}

      </div>

    </div>

  );

}