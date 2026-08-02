
<div align="center">

# 🔐 Lockers Club Atlas

Sistema de administración de lockers desarrollado con **React**, **TypeScript** y **Tailwind CSS**.

Visualiza la disponibilidad de lockers por área, consulta la información de los socios asignados y administra espacios disponibles desde una interfaz moderna y responsiva.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

</div>

---

## 📖 Descripción

Este proyecto simula un sistema para la administración de lockers dentro de un club deportivo.

Actualmente permite visualizar distintas áreas de lockers y consultar información simulada de los socios asignados mediante una interfaz intuitiva.

El proyecto está construido pensando en una futura integración con un backend, por lo que la estructura está separada por componentes y tipada con TypeScript.

---

# ✨ Características

- ✅ Visualización por áreas
- ✅ Lockers disponibles
- ✅ Lockers ocupados
- ✅ Lockers en mantenimiento
- ✅ Modal con información del socio
- ✅ Modal para asignación de lockers
- ✅ Componentes reutilizables
- ✅ Arquitectura escalable
- ✅ Diseño responsivo

---

---

# 🛠️ Tecnologías

- React
- TypeScript
- Tailwind CSS
- Vite

---



---

# 🚀 Instalación

Clona el repositorio.

```bash
git clone https://github.com/TU_USUARIO/lockers-club-atlas.git
```

Instala las dependencias.

```bash
npm install
```

Ejecuta el proyecto.

```bash
npm run dev
```

---

# 📌 Estado actual

Actualmente el proyecto funciona completamente con datos simulados.

Los siguientes pasos contemplan la integración con un backend para administrar la información en tiempo real.

---

# 🗺️ Roadmap

## ✔ Implementado

- [x] Vista de lockers
- [x] Cambio de áreas
- [x] Datos simulados
- [x] Modal de información
- [x] Modal de asignación (visual)
- [x] Componentización

## 🚧 En desarrollo

- [ ] Búsqueda de socios
- [ ] Asignar locker
- [ ] Liberar locker
- [ ] Edición de asignaciones
- [ ] Persistencia mediante API REST
- [ ] Autenticación
- [ ] Dashboard administrativo

---

# 💡 Arquitectura

El proyecto sigue una arquitectura basada en componentes reutilizables.

```text
App
│
├── LockerGrid
│     │
│     ├── LockerColumn
│     │      │
│     │      └── Locker
│     │
│     ├── LockerModal
│     │
│     └── NewLockerModal
│
├── data
│
└── types
```

Esta estructura facilita la integración futura con cualquier backend (Node.js, Laravel, .NET, etc.) sin modificar la interfaz.

---

# 📄 Licencia

Proyecto desarrollado con fines demostrativos y educativos.

---

<div align="center">

Desarrollado con ❤️ usando React + TypeScript + Tailwind CSS

</div>