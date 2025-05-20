
# 💸 FinanceFlow

Una aplicación de dashboard financiero moderna y responsiva, desarrollada con **React**, **Tailwind CSS** y gráficos interactivos. FinanceFlow te permite visualizar tus gastos mensuales, categorizarlos y consultar tus transacciones recientes de forma clara y atractiva.

<!-- ![FinanceFlow Demo](./public/demo.png) -->

---

## 🚀 Tecnologías

- ⚛️ [Next.js](https://nextjs.org/) — Framework de React para SSR y SSG.
- 🧩 [React](https://reactjs.org/) — Librería principal de UI.
- 💨 [Tailwind CSS](https://tailwindcss.com/) — Utilidades para estilos rápidos y personalizables.
- 🎨 [shadcn/ui](https://ui.shadcn.com/) — Colección de componentes accesibles y personalizables.
- 📊 [Chart.js](https://www.chartjs.org/) — Librería para gráficos y visualización de datos.
- 🧠 [React Icons](https://react-icons.github.io/react-icons/) — Colección de iconos SVG integrables en React.

---

## 📁 Estructura del proyecto

```

src/
│
├── components/
│   ├── ui/                   # Elementos reutilizables como botones, tarjetas, etc.
│   ├── chart.tsx             # Gráfico de gastos mensuales
│   ├── chart-pie-donuts.tsx  # Gráfico de categorías de gastos
│   └── summary-cards.tsx     # Panel principal con estadísticas
│
├── App.tsx                   # Enrutador o vista principal
└── main.tsx                  # Punto de entrada

````

---

## ⚙️ Instalación y uso local

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/financeflow.git
cd financeflow
````

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## ☁️ Despliegue en Vercel

1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Importa este repositorio desde GitHub
3. Vercel detectará automáticamente el entorno Vite y lo desplegará
4. ¡Listo! Obtendrás una URL pública como: `https://financeflow.vercel.app`

---

## ✨ Funcionalidades principales

* 🧾 Visualización de gastos mensuales con gráficos
* 🧮 Indicadores de presupuesto total y porcentaje gastado
* 🧱 Agrupación por categorías de gasto con colores personalizados
* 🗂️ Lista de transacciones recientes con íconos por categoría
* 🌙 Tema adaptable mediante variables de color (modo claro/oscuro/custom)

---

## 📷 Capturas

> (Incluye imágenes aquí si lo deseas. Puedes usar `public/demo.png` o añadir un gif)

---

## 📌 Por hacer / próximas funcionalidades

* [ ] Filtro por rango de fechas
* [ ] Soporte para ingresos
* [ ] Exportar a CSV/Excel
* [ ] Guardado en base de datos (Firebase / Supabase / PostgreSQL)

---

## 📄 Licencia

MIT © \[Tu Nombre o Usuario]

---


