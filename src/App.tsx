import { useState } from "react";
import { areas } from "./data/lockersData";

function App() {
  const [areaSeleccionada, setAreaSeleccionada] = useState<number>(2);

  const areaActual = areas.find(
    (area) => area.id === areaSeleccionada
  );

  // Validación para TypeScript
  if (!areaActual) {
    return (
      <div className="min-h-screen bg-stone-800 flex items-center justify-center text-white">
        Área no encontrada.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-800 items-center justify-center">

      <div>
        <div className="px-2 py-1 flex">
          <img src="/logo.png" alt="" className="w-14 h-14" />

          <button className="ml-auto">
            <img src="/more.png" alt="" className="w-10 h-10 mr-2" />
          </button>
        </div>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-4xl font-semibold text-olive-300 mb-2">
          Lockers Club Atlas
        </h1>

        <p className="text-sm text-gray-400">
          Revisa la disponibilidad desde un solo lugar
        </p>
      </div>

      {/* ÁREAS */}

      <div className="w-11/12 mx-auto py-2 mb-8 text-olive-400 font-bold">
        <div className="flex gap-2">
          {areas.map((area) => (
            <h4
              key={area.id}
              onClick={() => setAreaSeleccionada(area.id)}
              className={`cursor-pointer transition-all ${
                area.id === areaSeleccionada
                  ? "bg-yellow-700 py-2 px-3 rounded-xl text-olive-200"
                  : "p-2"
              }`}
            >
              {area.nombre}
            </h4>
          ))}
        </div>
      </div>

      {/* LOCKERS */}
      <div className="bg-olive-400 rounded-xl shadow-2xl p-1 text-center">
        <div className="grid grid-cols-7 gap-1 bg-olive-300 mt-4 rounded-xl">
          {areaActual.filas.map((fila, indiceFila) => (
            <div key={indiceFila}>
              <h3 className="my-2 font-bold text-sm uppercase">
                Fila {indiceFila + 1}
              </h3>
              <div className="bg-olive-500/20 p-1 rounded-xl">
                {fila.map((locker, indiceLocker) => (
                  <p
                    key={indiceLocker}
                    className={
                      locker === "-"
                        ? "bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl"
                        : "bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl"
                    }
                  >
                    {locker}
                  </p>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default App;