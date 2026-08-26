# Arcade - Tarjetas para juegos de estudiantes

Proyecto simple para mostrar capturas/preview de juegos en fichas con un botón que redirige a la versión online.

Cómo usar

- Requisitos

	- Node.js 16 o superior
	- npm (v8+) o yarn

- Instalación local

```bash
git clone <tu-repo>.git
cd Arcade
npm install
```

- Desarrollo (servidor de desarrollo)

```bash
npm run dev
# abre http://localhost:5173
```

- Producción (build local y preview)

```bash
npm run build
npm run preview
# preview sirve la carpeta `dist` en http://localhost:5173 por defecto
```

Estructura del proyecto

- `index.html` — plantilla HTML usada por Vite.
- `package.json` — scripts y dependencias.
- `vite.config.js` — configuración de Vite.
- `src/` — código fuente React:
	- `src/main.jsx` — punto de entrada.
	- `src/App.jsx` — componente principal.
	- `src/styles.css` — estilos.

Cómo editar la lista de juegos

- Abre `src/App.jsx` y edita el arreglo `initialGames` para añadir, quitar o cambiar juegos. Cada objeto debe tener `id`, `title`, `description`, `image`, `url`.

Despliegue en Vercel

- Opción rápida (conectar repo):
	1. Crea un repositorio en GitHub/GitLab/Bitbucket y sube este proyecto.
	2. En Vercel, conecta el repositorio y crea un nuevo proyecto.
	3. Vercel detecta Vite automáticamente. Si necesitas configurarlo manualmente:
		 - Build Command: `npm run build`
		 - Output Directory: `dist`
	4. Variables de entorno: no son necesarias para la versión estática, pero agrégalas en Vercel si usas APIs.

- Archivo `vercel.json` incluido para servir la SPA correctamente.

Buenas prácticas para despliegue

- Usa `git` y ramas (`main` o `production`) para control de versiones.
- Habilita el despliegue automático en la rama que uses para producción.
- Revisa los logs de build en Vercel si el despliegue falla; suelen indicar dependencias faltantes o errores de compilación.

Personalizar y extender

- Añadir un formulario de administración: crea un nuevo componente React que permita añadir juegos y guarda en un backend o en `localStorage`.
- Migrar a TypeScript: renombra archivos a `.tsx` y añade `tsconfig.json`.
- Agregar imágenes locales: sitúa archivos dentro de `public/` y referencia con `/nombre.png`.


