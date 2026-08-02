import type { Usuario } from "./Usuario";

//Estados de los lockers
export type EstadoLocker =
  | "disponible"
  | "ocupado"
  | "mantenimiento";

export interface Locker {
  numero: number | null;
  estado: EstadoLocker;
  usuario: Usuario | null;
}

export interface Area {
  id: number;
  nombre: string;
  filas: Locker[][];
}