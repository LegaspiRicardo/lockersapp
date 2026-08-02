interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SideMenu({ open, onClose }: Props) {
  return (
    <>
      {/* Fondo oscuro */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Menú lateral */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-stone-800 shadow-2xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between p-5 border-b border-stone-700">
          <div className="flex">
            <img src="/logo.png" className="w-12 h-12" alt="" />
                <div className="ml-2">
                    <h2 className="text-xl font-bold text-olive-300">
                    Club Atlas
                    </h2>

                    <p className="text-sm text-stone-400">
                    Administración
                    </p>
                </div>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-stone-300 hover:text-red-500 transition"
          >
            ×
          </button>
        </div>

        {/* Opciones */}
        <nav className="py-4">

          <button className="w-full flex items-center gap-3 px-6 py-4 text-left text-olive-300 hover:bg-stone-700 transition">
            <img src="/home.png" alt="" className="w-4 h-4" />
            <span>Inicio</span>
          </button>

          <button className="w-full flex items-center gap-3 px-6 py-4 text-left text-olive-300 hover:bg-stone-700 transition">
            <img src="/candado.png" alt="" className="w-4 h-4" />
            <span>Lockers</span>
          </button>

          <button className="w-full flex items-center gap-3 px-6 py-4 text-left text-olive-300 hover:bg-stone-700 transition">
            <img src="/group.png" alt="" className="w-4 h-4" />
            <span>Socios</span>
          </button>

          <button className="w-full flex items-center gap-3 px-6 py-4 text-left text-olive-300 hover:bg-stone-700 transition">
            <img src="/file.png" alt="" className="w-4 h-4" />
            <span>Reportes</span>
          </button>

          <button className="w-full flex items-center gap-3 px-6 py-4 text-left text-olive-300 hover:bg-stone-700 transition">
            <img src="/setting.png" alt="" className="w-4 h-4" />
            <span>Configuración</span>
          </button>

        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-5 border-t border-stone-700">
          <p className="text-center text-xs text-stone-500">
            Lockers Club Atlas
          </p>

          <p className="text-center text-xs text-stone-600">
            v1.0.0
          </p>
        </div>
      </aside>
    </>
  );
}