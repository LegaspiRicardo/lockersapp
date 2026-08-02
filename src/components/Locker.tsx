import type { Locker as LockerType } from "../types/Locker";

interface Props {
  locker: LockerType;
  onClick: (locker: LockerType) => void;
}

export default function Locker({ locker, onClick }: Props) {

  let clases =
    "p-4 my-2 text-xl rounded-xl transition-all duration-200";

    switch (locker.estado) {
    case "ocupado":
        clases +=
        " bg-teal-900/90 text-olive-200 cursor-pointer hover:scale-105";
        break;

    case "mantenimiento":
        clases +=
        " bg-yellow-700 text-olive-200";
        break;

    default:
        clases +=
        " bg-stone-500/50 text-olive-200 cursor-pointer hover:scale-105";
    }

  return (
    <p
      className={clases}
        onClick={() => onClick(locker)}
    >
      {locker.estado === "ocupado"
        ? locker.numero
        : locker.estado === "mantenimiento"
        ? "M"
        : "-"}
    </p>
  );
}