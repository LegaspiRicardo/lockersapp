interface Props {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: Props) {
  return (
    <header className="bg-stone-800 fixed top-0 left-0 w-full z-30">

      <div className="px-2 py-1 flex items-center">

        <img
          src="/logo.png"
          alt="Logo"
          className="w-14 h-14"
        />

        <button
          onClick={onMenuClick}
          className="ml-auto"
        >
          <img
            src="/more.png"
            alt="Menú"
            className="w-10 h-10 mr-2"
          />
        </button>

      </div>

    </header>
  );
}