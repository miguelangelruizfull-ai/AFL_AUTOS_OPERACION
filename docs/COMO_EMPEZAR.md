# AFL AUTOS OPERACIÓN — Cómo empezar

Este repositorio es la puerta de entrada operativa de AFL AUTOS. No sustituye los expedientes privados ni Drive.

## Flujo normal para un vehículo nuevo

1. Crear/subir una carpeta nueva en la raíz operativa de vehículos nuevos de Drive.
2. Abrir la herramienta web `index.html` publicada con GitHub Pages.
3. Elegir **+ Nuevo vehículo**.
4. Pegar el enlace de Drive.
5. Usar **REVISAR PREVIO** para detectar campos básicos faltantes.
6. Generar el prompt y abrir un chat nuevo.
7. Ese chat identifica la unidad y crea/actualiza `PUENTE.md`, pero no selecciona ni retoca todavía.
8. Cuando el vehículo esté identificado, usar **Estrategia + plan de captura**.
9. Ese chat define la estrategia comercial visual, crea/reutiliza carpetas de originales y entrega checklist de fotos/videos con tiempos/movimientos.
10. Miguel captura y sube el material.
11. Abrir **Seleccionar material** para auditar la sesión y crear copias de mejores fotos/videos.
12. Abrir **Lavar / retocar fotos** sobre la selección formal.
13. Abrir **Producir redes**.
14. Abrir **Revisión / aprobación** para comprobar el paquete producido. `PRODUCIDO` o `SUBIDO_A_DRIVE` no significa `APROBADO`.
15. Miguel aprueba/publica cuando corresponda.
16. Abrir **Publicación + medición** para registrar URL/hora base y checkpoints 24 h / 72 h / 7 días.

## Flujo V4 por etapas

`NUEVO VEHÍCULO → EXPEDIENTE → PLAN DE CAPTURA → MIGUEL GRABA/SUBE → SELECCIÓN → RETOQUE → PRODUCCIÓN → APROBACIÓN → PUBLICACIÓN → MEDICIÓN → CIERRE`

No todas las unidades requieren repetir todas las etapas. Si ya existe trabajo, verificarlo antes de saltar un módulo.

## Fuentes de autoridad

El Home V4 muestra el reparto de autoridad para evitar mezclar dominios:

- datos técnicos/comerciales de una unidad → `Vehiculos/PUENTE.md`;
- creatividad, branding, formatos y campañas → `AFL_AUTOS_CONTENT_SYSTEM`;
- análisis/datasets/metodología → `AFL_AUTOS_PLATFORM` cuando corresponda;
- originales, multimedia y evidencia pesada → Google Drive;
- flujo y coordinación → `AFL_AUTOS_OPERACION`.

Antes de modificar un archivo existente, el chat debe volver a leer/fetch la versión vigente.

## Preflight V4

El botón **REVISAR PREVIO** revisa localmente condiciones básicas del formulario.

Puede advertir cuando:

- falta vehículo/proyecto;
- no se pegó Drive;
- un módulo de continuidad necesita un retorno/checkpoint y no existe;
- hay que recordar la verificación de fuentes antes de escribir.

El preflight no consulta repositorios privados ni valida información técnica.

## Si un chat trabajador termina

Todo chat debe devolver un bloque `RETORNO_AL_COORDINADOR`.

En Home V4:

1. pegar el bloque en **RETORNO / respuesta / checkpoint anterior**;
2. tocar **ANALIZAR RETORNO**;
3. revisar los campos detectados y la ruta local sugerida;
4. elegir **Procesar RETORNO** para generar el prompt del coordinador;
5. el chat coordinador verifica las fuentes vigentes antes de aceptar cualquier cambio de estado.

El lector local no modifica GitHub/Drive ni declara estados.

## Si un chat se llena o una tarea queda a medias

Usar **Continuar hilo / tarea**.

1. Copiar el bloque `RETORNO_AL_COORDINADOR` o el último checkpoint del chat anterior.
2. Pegarlo en el campo correspondiente.
3. Elegir **Continuar hilo / tarea**.
4. Ejecutar **REVISAR PREVIO**.
5. Generar el prompt.
6. Abrir un chat nuevo y pegarlo.

El Home V4 bloquea la generación de estos módulos cuando falta el retorno/checkpoint necesario.

El chat nuevo debe verificar GitHub/Drive antes de continuar y no rehacer trabajo cerrado.

Ver [`COORDINACION_Y_RETORNOS.md`](./COORDINACION_Y_RETORNOS.md).

## Revisión / aprobación

V4 incorpora una etapa visible para paquetes producidos.

Usarla cuando ya existen piezas, pero todavía debe comprobarse:

- unidad correcta;
- datos provenientes del expediente vigente;
- datos además publicables;
- ausencia de VIN/odómetro/precio no autorizado;
- logo/foto real correctos;
- ausencia de alteraciones físicas;
- correcciones solicitadas por Miguel;
- aprobación explícita de Miguel.

Nunca inferir:

`PRODUCIDO → APROBADO`

ni:

`APROBADO → PUBLICADO`.

## Agenda y recordatorios

La herramienta incluye una **Agenda operativa local** para tareas con fecha/etapa. La información queda en el navegador mediante `localStorage`.

V4 utiliza la clave `afl_autos_agenda_v2`. Si existe una agenda V3.1 guardada bajo `afl_autos_agenda_v1`, el Home intenta copiarla localmente a V2 la primera vez; no elimina la anterior.

La agenda puede registrar, entre otros:

- captura;
- selección;
- retoque;
- producción;
- aprobación;
- corrección en plataforma;
- publicación;
- mediciones 24 h / 72 h / 7 d;
- auditoría;
- esperando a Miguel;
- esperando otro chat.

El botón **COPIAR PROMPT DE RECORDATORIOS** prepara las tareas pendientes para pegarlas en ChatGPT y solicitar recordatorios reales.

La agenda local no equivale a una automatización y puede perderse al cambiar/borrar datos del navegador. Las fechas críticas también deben quedar registradas en fuentes privadas.

Ver [`AGENDA_OPERATIVA.md`](./AGENDA_OPERATIVA.md).

## Estructura Drive

Para vehículos nuevos consultar [`ESTRUCTURA_DRIVE_V2.md`](./ESTRUCTURA_DRIVE_V2.md).

Los vehículos históricos no se reorganizan automáticamente. Se reutilizan carpetas equivalentes para evitar duplicados.

## Si el chat principal se llena

Elegir **Nuevo chat principal**. El nuevo coordinador reconstruye el estado leyendo las fuentes vigentes, no copiando meses de conversación.

## Reglas críticas

No pegar en este repositorio público VIN, kilometraje/odómetro, precios internos, documentos, leads, conversaciones privadas ni enlaces que no deban quedar expuestos públicamente.

Además:

`DATO_CONFIRMADO ≠ DATO_PUBLICABLE ≠ EVIDENCIA_VISUAL ≠ MOODBOARD ≠ PIEZA_APROBADA`

El Home coordina y genera instrucciones; no sustituye las fuentes privadas.
