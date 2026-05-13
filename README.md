# Clon de Instagram con React y TypeScript

## Descripción del proyecto

Este proyecto consiste en el desarrollo de una aplicación web inspirada en la interfaz de Instagram utilizando React y TypeScript. La aplicación consume imágenes de gatos desde una API externa y las muestra en formato de publicaciones dentro de un feed similar al de una red social.

El objetivo principal del trabajo fue practicar el desarrollo de interfaces modernas utilizando componentes reutilizables, manejo de estados, consumo de APIs y organización correcta de un proyecto React.

La aplicación incluye:

- Feed de publicaciones.
- Historias de usuarios.
- Perfil de usuario.
- Visualización individual de publicaciones.
- Navegación entre feed y perfil.
- Diseño inspirado en Instagram.
- Consumo de API externa mediante Axios.

---

# API utilizada

Para las publicaciones utilizamos:

- The Cat API: https://thecatapi.com/

La API fue utilizada para obtener imágenes de gatos dinámicamente mediante peticiones HTTP realizadas con Axios.

Además, para las imágenes de perfil de usuarios simulados utilizamos: https://pravatar.cc/

Librería de íconos utilizada para recrear los íconos del sidebar, botones de interacción y elementos visuales inspirados en Instagram para ser lo más fiel posible al figma: https://lucide.dev/

---

# Tecnologías utilizadas
- React
- TypeScript
- Vite
- Axios
- CSS
- Lucide React
---

# Diseño utilizado como referencia

El diseño de la aplicación fue inspirado en un diseño de Instagram realizado en Figma. Referencia que usamos:
https://www.figma.com/community/file/1235135369163092252

Se intentó respetar de forma fiel:
- distribución visual
- estructura del feed
- sidebar lateral
- perfil de usuario
- publicaciones
- estilo 

---

# Organización del proyecto

La estructura del proyecto fue organizada mediante componentes para mantener una separación clara.

## Estructura principal

```txt
src/
│
├── components/
│   ├── Header/
│   ├── Navbar/
│   ├── Feed/
│   ├── Stories/
│   ├── Story/
│   ├── Post/
│   ├── PostModal/
│   └── Profile/
│
├── data/
├── services/
├── types/
│
├── App.tsx
└── index.css
```

---

# Componentes creados

## Header

Responsabilidad:
- Mostrar la barra superior principal de la aplicación.

---

## Navbar

Responsabilidad:
- Mostrar el menú lateral inspirado en Instagram.
- Permitir la navegación entre:
  - Feed
  - Profile

Características:
- Sidebar desplegable.
- Íconos realizados con Lucide React.
- Uso de `useState` para abrir y cerrar el menú.

---

## Feed

Responsabilidad:
- Mostrar la lista de publicaciones.
- Mostrar las historias de usuarios.

Características:
- Recibe publicaciones mediante props.
- Renderiza múltiples componentes `Post`.

---

## Stories

Responsabilidad:
- Mostrar la barra de historias horizontales.

---

## Story

Responsabilidad:
- Mostrar una historia individual con:
  - foto de perfil
  - nombre de usuario

---

## Post

Responsabilidad:
- Mostrar una publicación individual.

Cada publicación incluye:
- imagen
- usuario
- likes
- caption
- botones de interacción
- foto de perfil

Características:
- Uso de `useState` para manejar likes.
- Apertura del modal al hacer click sobre la publicación.

---

## PostModal

Responsabilidad:
- Mostrar una publicación ampliada de forma individual.

Información mostrada:
- imagen ampliada
- usuario
- likes
- descripción
- comentarios simulados

El modal se abre al seleccionar una publicación desde:
- feed
- perfil

---

## Profile

Responsabilidad:
- Mostrar el perfil del usuario.

Información mostrada:
- foto de perfil
- username
- biografía
- cantidad de publicaciones
- seguidores
- seguidos
- grilla de publicaciones

Características:
- Permite abrir publicaciones individuales desde el perfil.

---

# Componentización

La aplicación fue separada en componentes pequeños y reutilizables para:

- mejorar la organización
- facilitar el mantenimiento
- reutilizar lógica y estilos
- evitar código repetido
- mantener responsabilidades claras

Por ejemplo:
- `Post` representa una publicación reutilizable.
- `Story` representa una historia individual reutilizable.
- `PostModal` permite reutilizar la visualización ampliada de publicaciones desde distintas vistas.

---

# Comunicación entre componentes mediante props

La comunicación entre componentes se realizó mediante props.

Ejemplos:

- `Feed` recibe la lista de publicaciones.
- `Post` recibe la información de una publicación individual.
- `Navbar` recibe la función para cambiar la vista actual.
- `Profile` recibe publicaciones y la función para abrir el modal.
- `Stories` recibe nombres de usuarios e imágenes de perfil.

Esto permitió mantener una estructura ordenada y desacoplada.

---

# Hooks utilizados

## useState

Se utilizó para:
- almacenar publicaciones
- manejar la vista actual
- controlar el modal abierto
- manejar likes
- abrir y cerrar el sidebar

---

## useEffect

Se utilizó para:
- realizar la petición a la API al cargar la aplicación.

---

# Consumo de API

El consumo de API fue realizado utilizando Axios. Se creó un archivo específico dentro de `services/` para centralizar las peticiones HTTP.

La aplicación obtiene:
- imágenes de gatos
- IDs de publicaciones

Luego los datos son transformados para generar:
- usuarios simulados
- captions
- likes
- imágenes de perfil

---

# Visualización individual de publicaciones

La visualización individual se resolvió mediante un componente modal (`PostModal`).

Funcionamiento:
1. El usuario selecciona una publicación.
2. La publicación seleccionada se guarda en un estado.
3. El modal se renderiza mostrando información ampliada.

Información incluida:
- imagen ampliada
- usuario
- likes
- caption
- comentarios simulados

---

# Perfil de usuario

No se implementó login ni autenticación real. Se simuló un usuario ya logueado utilizando un archivo local dentro de `data/`.

Datos mostrados:
- username
- biografía
- foto de perfil
- seguidores
- seguidos
- cantidad de publicaciones

---

# Estados utilizados

## posts

Guarda todas las publicaciones obtenidas desde la API.

---

## selectedPost

Guarda la publicación actualmente seleccionada para mostrar en el modal.

---

## view

Controla si la aplicación muestra:
- feed
- profile

---

## liked

Controla el estado de likes de una publicación.

---

## open

Controla la apertura y cierre del menú lateral.

---

# Funcionalidades

- Feed de publicaciones.
- Sidebar lateral.
- Historias de usuarios.
- Perfil de usuario.
- Modal de publicaciones.
- Navegación entre vistas.
- Consumo de API externa.
- Manejo de estados.
- Componentización.
- Uso de props.
- Uso de Axios.
- Uso de TypeScript.
- CSS personalizado.
- Interacciones de usuario.
