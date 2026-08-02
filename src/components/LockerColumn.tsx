import type { Locker as LockerType } from "../types/Locker";
import Locker from "./Locker";

interface Props {
  titulo: string;
  lockers: LockerType[];
  onLockerClick: (locker: LockerType) => void;
}

export default function LockerColumn({
  titulo,
  lockers,
  onLockerClick,
}: Props) {

  return (
    <div>

      <h3 className="my-2 font-bold text-sm uppercase">
        {titulo}
      </h3>

      <div className="bg-olive-500/20 p-1 rounded-xl">

        {lockers.map((locker, index) => (

          <Locker
            key={index}
            locker={locker}
            onClick={onLockerClick}
          />

        ))}

      </div>

    </div>
  );
}