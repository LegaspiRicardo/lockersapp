import { useEffect } from "react";
import type { Locker } from "../types/Locker";

interface Props {
  locker: Locker;
  onClose: () => void;
}

export default function LockerModal({ locker, onClose }: Props) {

  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [onClose]);

  if (!locker.usuario) return null;

  const iniciales = locker.usuario.nombre
    .split(" ")
    .map(nombre => nombre[0])
    .join("")
    .substring(0, 2);

  return (

    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >

      <div
        className="bg-olive-300 rounded-2xl shadow-2xl w-full max-w-md p-6 animate-[fadeIn_.25s_ease]"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold text-olive-900">
            Locker #{locker.numero}
          </h2>

          <button
            onClick={onClose}
            className="text-3xl font-bold text-stone-700 hover:text-red-600 transition"
          >
            ×
          </button>

        </div>

        <div className="flex flex-col items-center mt-6">

          <div className="w-24 h-24 rounded-full bg-teal-900 text-olive-200 flex items-center justify-center text-3xl font-bold">

            {iniciales}

          </div>

          <h3 className="mt-4 text-2xl font-semibold text-olive-900">
            {locker.usuario.nombre}
          </h3>

          <p className="text-olive-700">
            Locker asignado
          </p>

        </div>

        <div className="mt-8 space-y-4">

          <div>
            <p className="text-xs uppercase text-stone-600">
              Número de socio
            </p>

            <p className="font-semibold text-lg">
              {locker.usuario.socio}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-stone-600">
              Correo
            </p>

            <p className="font-semibold">
              {locker.usuario.correo}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-stone-600">
              Teléfono
            </p>

            <p className="font-semibold">
              {locker.usuario.telefono}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-stone-600">
              Vigencia
            </p>

            <p className="font-semibold">
              {locker.usuario.vencimiento}
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full bg-teal-900 text-white rounded-xl py-3 hover:opacity-90 transition"
        >
          Cerrar
        </button>

      </div>

    </div>

  );

}