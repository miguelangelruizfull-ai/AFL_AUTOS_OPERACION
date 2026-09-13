# Home V3.2.1 — compatibilidad móvil y Chrome escritorio

Fecha: 2026-09-13
Estado: `IMPLEMENTADO`

## Objetivo

Corregir interacción de botones en Chrome de escritorio y mejorar el uso del Home en teléfonos sin cambiar la arquitectura operativa V3.2.

## Cambios

- `index.html` queda como shell ligero y carga CSS/JS separados.
- CSS activo: `assets/home-v32.css`.
- JS activo: `assets/home-v32.js`.
- Todos los botones funcionales declaran `type="button"`.
- Apertura de enlaces usa un enlace temporal `target="_blank"` con `noopener noreferrer` en lugar de depender solamente de `window.open`.
- Copia al portapapeles usa `navigator.clipboard` cuando está disponible y fallback compatible cuando Chrome lo bloquea.
- Los listeners se registran con comprobación de existencia para evitar que un elemento faltante detenga el resto de la interfaz.
- `localStorage` usa manejo de errores; si el navegador lo bloquea, el Home sigue funcionando sin persistencia local.
- El índice público usa timeout y mensajes de error recuperables.
- La agenda automática y la agenda manual histórica `afl_autos_agenda_v1` se conservan.

## Responsive

- ancho máximo mayor para escritorio;
- controles con área táctil mínima aproximada de 46 px;
- inputs a 16 px para evitar zoom involuntario en móviles;
- acciones apiladas a ancho completo en pantallas pequeñas;
- grids de dos columnas en escritorio y una columna en móvil;
- textos largos y estados usan `overflow-wrap` para evitar scroll horizontal;
- soporte de safe areas mediante `env(safe-area-inset-*)`;
- foco visible para teclado y compatibilidad de accesibilidad básica.

## Reglas preservadas

`INDEX = NAVEGACION`

`PUENTE.md = VERDAD`

`afl_autos_guided_v32` y `afl_autos_agenda_v1` conservan sus claves para no perder estado local existente.

V3.2.1 es un patch de interfaz/compatibilidad. No convierte el Home en fuente de verdad y no cambia la arquitectura `UN SOLO HOME / FUENTES SEPARADAS`.
