# AFL AUTOS OPERACIÓN — Cómo empezar

Este repositorio es la puerta de entrada operativa de AFL AUTOS. No sustituye los expedientes privados ni Drive.

## Flujo normal para un vehículo nuevo

1. Crear/subir una carpeta nueva en la raíz operativa de vehículos nuevos de Drive.
2. Abrir la herramienta web `index.html` publicada con GitHub Pages.
3. Elegir **+ Nuevo vehículo**.
4. Pegar el enlace de Drive.
5. Generar el prompt y abrir un chat nuevo.
6. Ese chat identifica la unidad y crea/actualiza `PUENTE.md`, pero no selecciona ni retoca todavía.
7. Cuando el vehículo esté identificado, usar **Estrategia + plan de captura**.
8. Ese chat define la estrategia comercial visual, crea carpetas de originales y entrega checklist de fotos/videos con tiempos/movimientos.
9. Miguel captura y sube el material.
10. Abrir **Seleccionar material** para auditar la sesión y crear copias de mejores fotos/videos.
11. Abrir **Lavar / retocar fotos** sobre la selección.
12. Abrir **Producir redes**.
13. Miguel revisa/aprueba y publica.
14. Abrir **Publicación + medición** para URLs y checkpoints 24 h / 72 h / 7 días.

## Flujo V3 por etapas

`NUEVO VEHÍCULO → EXPEDIENTE → PLAN DE CAPTURA → MIGUEL GRABA/SUBE → SELECCIÓN → RETOQUE → PRODUCCIÓN → APROBACIÓN → PUBLICACIÓN → MEDICIÓN → CIERRE`

No todas las unidades requieren repetir todas las etapas. Si ya existe trabajo, verificarlo antes de saltar un módulo.

## Si un chat se llena o una tarea queda a medias

Usar **Continuar hilo / tarea**.

1. Copiar el bloque `RETORNO_AL_COORDINADOR` o el último checkpoint del chat anterior.
2. Pegarlo en el campo **Respuesta / checkpoint del chat anterior**.
3. Elegir **Continuar hilo / tarea**.
4. Generar el prompt.
5. Abrir un chat nuevo y pegarlo.

El chat nuevo debe verificar GitHub/Drive antes de continuar y no rehacer trabajo cerrado.

Ver [`COORDINACION_Y_RETORNOS.md`](./COORDINACION_Y_RETORNOS.md).

## Retorno de chats trabajadores

Todo prompt generado por la V3 pide al trabajador terminar con un bloque `RETORNO_AL_COORDINADOR`.

Miguel puede copiar ese bloque al coordinador en lugar de copiar respuestas completas.

## Agenda y recordatorios

La herramienta incluye una **Agenda operativa local** para tareas con fecha/etapa. La información queda en el navegador mediante `localStorage`.

El botón **COPIAR PROMPT DE RECORDATORIOS** prepara las tareas pendientes para pegarlas en ChatGPT y solicitar recordatorios reales.

La agenda local no equivale a una automatización y puede perderse al cambiar/borrar datos del navegador. Las fechas críticas también deben quedar registradas en fuentes privadas.

Ver [`AGENDA_OPERATIVA.md`](./AGENDA_OPERATIVA.md).

## Estructura Drive

Para vehículos nuevos consultar [`ESTRUCTURA_DRIVE_V2.md`](./ESTRUCTURA_DRIVE_V2.md).

Los vehículos históricos no se reorganizan automáticamente. Se reutilizan carpetas equivalentes para evitar duplicados.

## Si el chat principal se llena

Elegir **Nuevo chat principal**. El nuevo coordinador reconstruye el estado leyendo las fuentes vigentes, no copiando meses de conversación.

## Regla crítica

No pegar en este repositorio público VIN, kilometraje, precios internos, documentos, leads, conversaciones privadas ni enlaces que no deban quedar expuestos públicamente.