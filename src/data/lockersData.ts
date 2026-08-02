import type { Area, Locker } from "../types/Locker";
import type { Usuario } from "../types/Usuario";

const usuarios: Usuario[] = [
  {
    id: 1,
    nombre: "Ricardo Legas",
    socio: "A10001",
    telefono: "3312345678",
    correo: "ricardo@clubatlas.mx",
    vencimiento: "31/12/2026",
  },
  {
    id: 2,
    nombre: "Carlos Ramírez",
    socio: "A10002",
    telefono: "3321112233",
    correo: "carlos@clubatlas.mx",
    vencimiento: "15/11/2026",
  },
  {
    id: 3,
    nombre: "Ana López",
    socio: "A10003",
    telefono: "3332223344",
    correo: "ana@clubatlas.mx",
    vencimiento: "02/09/2026",
  },
  {
    id: 4,
    nombre: "Jorge Pérez",
    socio: "A10004",
    telefono: "3343334455",
    correo: "jorge@clubatlas.mx",
    vencimiento: "14/03/2027",
  },
  {
    id: 5,
    nombre: "Fernanda Ruiz",
    socio: "A10005",
    telefono: "3354445566",
    correo: "fernanda@clubatlas.mx",
    vencimiento: "20/08/2026",
  },
  {
    id: 6,
    nombre: "Luis García",
    socio: "A10006",
    telefono: "3365556677",
    correo: "luis@clubatlas.mx",
    vencimiento: "11/10/2026",
  },
  {
    id: 7,
    nombre: "Mariana Torres",
    socio: "A10007",
    telefono: "3376667788",
    correo: "mariana@clubatlas.mx",
    vencimiento: "28/05/2027",
  },
  {
    id: 8,
    nombre: "Daniel Flores",
    socio: "A10008",
    telefono: "3387778899",
    correo: "daniel@clubatlas.mx",
    vencimiento: "01/12/2026",
  },
  {
    id: 9,
    nombre: "Sofía Hernández",
    socio: "A10009",
    telefono: "3398889900",
    correo: "sofia@clubatlas.mx",
    vencimiento: "17/07/2026",
  },
  {
    id: 10,
    nombre: "Miguel Sánchez",
    socio: "A10010",
    telefono: "3319990001",
    correo: "miguel@clubatlas.mx",
    vencimiento: "25/01/2027",
  },
];


function obtenerUsuario(numero: number): Usuario {
  return usuarios[(numero - 1) % usuarios.length];
}

function crearLocker(valor: string): Locker {
  // Disponible
  if (valor === "-") {
    return {
      numero: null,
      estado: "disponible",
      usuario: null,
    };
  }

  // Mantenimiento
  if (valor === "M") {
    return {
      numero: null,
      estado: "mantenimiento",
      usuario: null,
    };
  }

  // Ocupado
  return {
    numero: Number(valor),
    estado: "ocupado",
    usuario: obtenerUsuario(Number(valor)),
  };
}

function fila(valores: string[]): Locker[] {
  return valores.map(crearLocker);
}

export const areas: Area[] = [
  {
    id: 1,
    nombre: "Damas",
    filas: [
      fila(["1","-","M","-","5","6","-","8","9"]),
      fila(["-","-","3","4","-","-","-","8","9"]),
      fila(["1","-","-","-","5","6","-","-","-"]),
      fila(["1","2","3","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]),
      fila(["-","-","-","-","-","-","-","-","-"]),
      fila(["1","-","-","M","-","6","7","8","9"]),
      fila(["-","-","-","4","5","-","-","-","-"]),
      fila(["1","2","3","-","-","-","-","-","-"]),
      fila(["-","-","-","-","-","-","-","-","-"]),
      fila(["1","-","-","M","-","6","7","8","9"]),
      fila(["-","-","-","4","5","-","-","-","-"]),
    ],
  },

  {
    id: 2,
    nombre: "Caballeros",
    filas: [
      fila(["-","2","-","4","-","6","-","8","-"]),
      fila(["1","-","3","-","5","-","7","-","9"]),
      fila(["-","-","-","-","-","M","-","-","-"]),
      fila(["1","2","3","4","-","-","-","8","9"]),
      fila(["-","-","-","-","5","6","-","-","-"]),
      fila(["1","2","-","-","-","6","7","-","9"]),
      fila(["-","-","3","4","-","-","-","8","-"]),
    ],
  },


];