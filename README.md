# AFL_AUTOS_OPERACION

Centro de operación público y móvil de AFL AUTOS.

## Propósito

Este repositorio funciona como **Home, lanzador y coordinador de trabajo**. No sustituye los repositorios privados ni Google Drive.

Principio:

`UN SOLO HOME / FUENTES SEPARADAS`

El Home debe ser simple por fuera y mantener la complejidad en los módulos/fuentes correspondientes.

## Herramienta web

Archivo principal: [`index.html`](./index.html)

URL con GitHub Pages:

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

La web es responsive, no requiere servidor y genera prompts localmente en el navegador.

## Home V4.1 — activo

V4.1 reemplaza visualmente al Home V4 anterior conservando sus protecciones útiles.

Criterio de producto:

`FACILIDAD_V3 + PROTECCIONES_V4 + COMERCIAL_MODULAR + ESCALABILIDAD`

La primera pantalla responde:

`¿QUÉ QUIERO HACER AHORA?`

### Novedades principales

- selector/buscador de expedientes existentes;
- índice público sanitizado para navegación;
- `Vehiculos/PUENTE.md` continúa siendo la fuente de verdad por unidad;
- navegación progresiva `CATEGORIA → ACCION → CAMPOS → PROMPT`;
- Comercial integrado como rutas, no como CRM dentro del Home;
- preflight contextual;
- agenda local V2 reutilizada;
- rutas separadas para **Reel/TikTok**, **Flyer/Historia/Portada** y **Paquete completo**;
- prompts de captura, selección, producción, revisión y medición conectados a las auditorías históricas;
- fuentes/arquitectura detrás de un panel avanzado en vez de ocupar la primera pantalla.

`home_v4_1.html` queda como alias compatible; la URL canónica es la raíz del sitio.

## Índice de expedientes

El Home carga:

`data/expedientes-public-index.json`

Ese archivo contiene únicamente información sanitizada de navegación:

- `EXPEDIENTE_KEY`;
- nombre legible;
- estado resumido;
- siguiente acción;
- ruta de `PUENTE.md`;
- SHA indexado;
- nombres lógicos de directorios Drive.

No publica URLs/IDs privados de Drive ni verdad técnica sensible.

Regla:

`INDEX = NAVEGACION`

`PUENTE.md = VERDAD`

Si el índice y el expediente difieren, manda el `PUENTE.md` vigente y después se resincroniza el índice.

## Arquitectura

- `AFL_AUTOS_OPERACION` — público: Home, routing, prompts, coordinación, continuidad y agenda auxiliar.
- `Vehiculos` — privado: verdad técnica/comercial por unidad mediante `PUENTE.md`.
- `AFL_AUTOS_CONTENT_SYSTEM` — privado: creatividad, branding, formatos, campañas, auditorías y motores editoriales.
- `AFL_AUTOS_COMERCIAL` — privado: respuestas, calificación, visita, seguimiento, negociación, cierre y aprendizaje sanitizado.
- `AFL_AUTOS_PLATFORM` — privado: análisis, datasets sanitizados, métricas y metodología.
- Google Drive — RAW, multimedia y evidencia pesada.

El Home NO debe convertirse en CRM, base técnica, repositorio de conversaciones o copia de los módulos privados.

## Flujo operativo

`INGRESO → PLAN CAPTURA → CAPTURA → SELECCIÓN → RETOQUE → PRODUCCIÓN → APROBACIÓN → PUBLICACIÓN → MEDICIÓN`

Los estados no son equivalentes:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

Y la materia prima también queda separada:

`ORIGINALES ≠ SELECCIÓN ≠ RETOQUE ≠ PIEZA FINAL`

## Auditorías históricas como motor de producción

### Flyers / historias / portadas

La auditoría histórica de 100 piezas se utiliza mediante:

- `AFL_AUTOS_CONTENT_SYSTEM/formats/FLYER_ENGINE.md`
- `formats/FLYER_FAMILIES.md`
- `library/flyer_audit/COMMON_ERRORS.md`
- `library/flyer_audit/POSITIVE_REFERENCES.md`

Antes de producir/aprobar una pieza gráfica se exige un gate visual: HERO, fondo, branding, jerarquía, datos, CTA, lectura móvil y comparación con errores/referencias históricas.

Si el material no da para una pieza adecuada:

`BLOQUEADO_POR_FOTO / REQUIERE_MEJOR_HERO`

### TikTok / Facebook Reel

La auditoría audiovisual se utiliza mediante:

- `networks/tiktok/EDITORIAL_ENGINE.md`
- `networks/tiktok/FORMAT_FAMILIES.md`
- `networks/tiktok/HOOKS_AND_CTA.md`
- `networks/tiktok/VIDEO_AUDIT_INDEX.md`
- `networks/tiktok/CAPTURE_GUIDE.md`

Antes de producir/aprobar un Reel/TikTok se exige registrar:

- familia editorial;
- objetivo;
- hook 0–3 s;
- secuencia;
- duración;
- CTA;
- comparación histórica;
- variable creativa cuando exista.

Si el material no permite la familia/hook elegidos:

`BLOQUEADO_POR_MATERIAL / REQUIERE_MEJOR_SELECCION_O_CAPTURA`

TikTok y Facebook Reel deben ser adaptaciones por red, no clones automáticos.

La auditoría histórica es evidencia editorial; nunca sustituye al `PUENTE.md` para datos técnicos.

## Producción desde el Home

En `Crear contenido` existen tres rutas principales:

- **Reel / TikTok** — activa el gate audiovisual.
- **Flyer / historia / portada** — activa el gate visual.
- **Paquete completo de redes** — aplica ambos gates por separado.

Esto evita que una sola acción genérica ignore el aprendizaje histórico correspondiente.

## Captura y selección

El aprendizaje histórico también se usa antes de editar:

- `Plan de captura` elige familias visuales/editoriales y diseña tomas para sostenerlas.
- `Seleccionar material` identifica HERO, hooks, familias viables y bloqueos antes de pasar a retoque/producción.

No se fuerza una pieza final para compensar material insuficiente.

## Comercial

`Responder / Lead` enruta hacia `AFL_AUTOS_COMERCIAL`.

Flujo base:

`PREGUNTA → RESPUESTA_DIRECTA → UNA_PREGUNTA_UTIL → SIGUIENTE_ACCION`

Estados:

`INTERACCION ≠ CONVERSACION ≠ LEAD_CALIFICADO ≠ VISITA ≠ NEGOCIACION ≠ VENTA`

El Home no almacena leads ni conversaciones. Cuando una respuesta depende de una unidad, el chat trabajador consulta el `PUENTE.md` vigente.

## Publicación y medición

Las mediciones 24 h / 72 h / 7 días se relacionan con las variables creativas que realmente se usaron:

- video: familia, hook, duración, voz/audio, CTA;
- pieza gráfica: familia visual, HERO, cantidad de datos y CTA.

Las métricas de plataforma se separan de mensajes, leads, visitas, negociaciones y ventas.

Un solo caso no crea una regla:

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

## Agenda local

V4.1 conserva `afl_autos_agenda_v2` en `localStorage`.

Es una ayuda local, no fuente de verdad ni automatización real. Puede guardar pendientes operativos no sensibles, pero no debe contener PII, VIN, documentos, precios internos o conversaciones.

## Retorno al coordinador

Los prompts generados mantienen un bloque `RETORNO_AL_COORDINADOR` para que un chat trabajador devuelva estado, commits, Drive, pendientes, siguiente módulo y riesgos sin copiar toda la conversación.

## Seguridad

No guardar en este repo público:

- VIN;
- kilometraje/odómetro;
- precios internos;
- documentos;
- datos personales;
- teléfonos/nombres de prospectos;
- conversaciones completas;
- credenciales;
- evidencia privada innecesaria.

Para producción pública aplicar siempre:

`DATO_CONFIRMADO ≠ DATO_PUBLICABLE ≠ EVIDENCIA_VISUAL ≠ MOODBOARD ≠ PIEZA_APROBADA`

## Guías

- [`docs/COMO_EMPEZAR.md`](./docs/COMO_EMPEZAR.md)
- [`docs/ARQUITECTURA.md`](./docs/ARQUITECTURA.md)
- [`docs/COORDINACION_Y_RETORNOS.md`](./docs/COORDINACION_Y_RETORNOS.md)
- [`docs/ESTADOS.md`](./docs/ESTADOS.md)
- [`docs/AGENDA_OPERATIVA.md`](./docs/AGENDA_OPERATIVA.md)
- [`docs/ESTRUCTURA_DRIVE_V2.md`](./docs/ESTRUCTURA_DRIVE_V2.md)

## Prompts versionados

La carpeta [`prompts/`](./prompts/) contiene las instrucciones operativas que carga el Home. Antes de modificar un prompt existente se debe hacer fetch de la versión vigente por la concurrencia entre chats.
