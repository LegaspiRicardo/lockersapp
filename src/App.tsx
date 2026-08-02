import { useState } from "react";
import { areas } from "./data/lockersData";
import type { Locker } from "./types/Locker";
import LockerGrid from "./components/LockerGrid";
import LockerModal from "./components/LockerModal";
import NewLockerModal from "./components/NewLockerModal";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";


function App() {
  const [areaSeleccionada, setAreaSeleccionada] = useState<number>(2);

  const [lockerSeleccionado, setLockerSeleccionado] =
  useState<Locker | null>(null);

  const areaActual = areas.find(
    (area) => area.id === areaSeleccionada
  );

  const [menuOpen, setMenuOpen] = useState(false);

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

      <Header
          onMenuClick={() => setMenuOpen(true)}
      />

      <div className="px-6 pt-18">
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
<SideMenu
    open={menuOpen}
    onClose={() => setMenuOpen(false)}
/>
      {/* LOCKERS */}
        <LockerGrid
            area={areaActual}
            onLockerClick={setLockerSeleccionado}
        />

      {lockerSeleccionado?.estado === "ocupado" && (
        <LockerModal
          locker={lockerSeleccionado}
          onClose={() => setLockerSeleccionado(null)}
        />
      )}

      {lockerSeleccionado?.estado === "disponible" && (
        <NewLockerModal
          locker={lockerSeleccionado}
          onClose={() => setLockerSeleccionado(null)}
        />
      )}


    </div>
  );
}

export default App;