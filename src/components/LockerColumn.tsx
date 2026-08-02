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

<h3 className="sticky top-0 z-20 bg-olive-300 py-2 font-bold text-sm uppercase rounded">
  {titulo}
</h3>

      <div className="bg-olive-500/20 p-1 rounded-2xl">

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