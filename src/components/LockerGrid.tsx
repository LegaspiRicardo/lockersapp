import type{ Area, Locker } from "../types/Locker";
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
        <div className="overflow-x-auto">
            <div className="grid grid-flow-col auto-cols-[110px] gap-1 bg-olive-300  rounded-xl w-max max-h-[70vh] overflow-y-auto">

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
    </div>

  );

}