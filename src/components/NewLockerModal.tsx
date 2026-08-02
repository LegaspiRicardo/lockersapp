import { useEffect } from "react";
import type { Locker } from "../types/Locker";

interface Props {
  locker: Locker;
  onClose: () => void;
}

export default function NewLockerModal({
  locker,
  onClose,
}: Props) {

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

  return (

    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-olive-300 rounded-2xl shadow-2xl w-full max-w-md p-6 animate-[fadeIn_.25s_ease]"
      >

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold text-olive-900">
            Asignar Locker
          </h2>

          <button
            onClick={onClose}
            className="text-3xl font-bold text-stone-700 hover:text-red-600 transition"
          >
            ×
          </button>

        </div>

        <div className="mt-6 text-center">

          <div className="w-24 h-24 rounded-full bg-stone-400/40 flex items-center justify-center mx-auto text-5xl">

            <img src="/candado-abierto.png" alt="" className="w-8/12"/>

          </div>

          <h3 className="mt-4 text-2xl font-semibold text-olive-900">
            Locker Disponible
          </h3>

          <p className="text-olive-700 mt-1">
             #{locker.numero ?? "Nuevo"}
          </p>

        </div>

        <div className="mt-8 space-y-5">

          <div>

            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Buscar socio
            </label>

            <input
              type="text"
              placeholder="Nombre, número de socio..."
              className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-teal-700"
            />

          </div>

          <div>

            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Socio seleccionado
            </label>

            <div className="rounded-xl bg-white p-4 border border-stone-300">

              <p className="font-semibold text-stone-800">
                Ningún socio seleccionado
              </p>

              <p className="text-sm text-stone-500 mt-1">
                Aquí aparecerá la información del socio.
              </p>

            </div>

          </div>

        </div>

        <div className="flex gap-3 mt-8">

          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-stone-400 text-stone-700 hover:bg-stone-200 transition"
          >
            Cancelar
          </button>

          <button
            className="flex-1 py-3 rounded-xl bg-teal-900 text-white opacity-60 cursor-not-allowed"
          >
            Asignar
          </button>

        </div>

      </div>

    </div>

  );

}