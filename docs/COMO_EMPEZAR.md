# AFL AUTOS OPERACIÓN — Cómo empezar

Este repositorio es la puerta de entrada operativa de AFL AUTOS. No sustituye los expedientes privados ni Drive.

## Home V4.1

El Home activo está en `index.html` y abre con una pregunta simple:

`¿Qué quieres hacer ahora?`

Primero puedes seleccionar un expediente existente y después una categoría/acción. El Home genera la instrucción; el chat trabajador consulta las fuentes privadas autorizadas.

## Seleccionar expediente

El Home carga un índice público sanitizado de expedientes.

Al seleccionar una unidad muestra:

- nombre;
- estado resumido;
- siguiente acción indexada;
- directorios lógicos de Drive.

Regla:

`INDEX = NAVEGACION`

`PUENTE.md = VERDAD`

Antes de actuar sobre una unidad, el chat debe leer completo el `PUENTE.md` vigente y verificar Drive si corresponde.

Para una unidad nueva usa **Vehículo → + Nuevo vehículo**.

## Flujo normal para un vehículo nuevo

1. Crear/subir la carpeta raíz de la nueva unidad en Drive.
2. Abrir el Home.
3. Elegir **Vehículo → + Nuevo vehículo**.
4. Generar el prompt y abrir un chat trabajador.
5. Ese chat identifica la unidad y crea/actualiza `PUENTE.md`.
6. Elegir **Vehículo → Plan de captura**.
7. El plan consulta los motores históricos de flyers y video para decidir qué tomas hacen falta.
8. Miguel captura fotos/videos y los sube a las carpetas de originales.
9. Elegir **Vehículo → Seleccionar material**.
10. La selección identifica HERO, hooks y familias viables antes de editar.
11. Elegir **Vehículo → Lavar / retocar** para las fotos seleccionadas.
12. Ir a **Crear contenido** y elegir la ruta correcta.
13. Usar **Revisión / aprobación** antes de considerar una pieza aprobada.
14. Miguel publica cuando corresponda.
15. Usar **Publicar / Medir** para URL y checkpoints 24 h / 72 h / 7 días.

Flujo:

`INGRESO → PLAN CAPTURA → CAPTURA → SELECCIÓN → RETOQUE → PRODUCCIÓN → APROBACIÓN → PUBLICACIÓN → MEDICIÓN`

## Crear contenido

V4.1 separa tres rutas:

### Reel / TikTok

Usar cuando el objetivo principal sea video.

El prompt obliga a consultar:

- Motor Editorial TikTok;
- familias editoriales;
- hooks y CTA;
- índice de videos históricos auditados;
- guía de captura cuando falten tomas.

Debe definir `FAMILIA_EDITORIAL`, `HOOK_0_3S`, secuencia, duración, CTA y comparación histórica.

TikTok y Facebook Reel se adaptan por red; no deben ser clones automáticos.

### Flyer / historia / portada

Usar para piezas gráficas.

El prompt obliga a consultar:

- estándar de flyers/portadas;
- Motor Visual;
- familias visuales;
- errores históricos;
- referencias positivas;
- branding/campaña vigente.

Si la foto no soporta una pieza adecuada:

`BLOQUEADO_POR_FOTO / REQUIERE_MEJOR_HERO`

### Paquete completo de redes

Usar solo cuando realmente se desea producir varios tipos de pieza. El flujo aplica el gate visual y el audiovisual de forma independiente.

## Revisión / aprobación

La revisión ya no comprueba únicamente seguridad/datos. También compara cada pieza contra el motor histórico correspondiente.

Estados posibles incluyen:

- `LISTO_PARA_REVISION_MIGUEL`
- `REQUIERE_CORRECCION`
- `BLOQUEADO_POR_FOTO`
- `BLOQUEADO_POR_MATERIAL`
- `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`
- `APROBADO_POR_MIGUEL` solo con confirmación expresa.

Mantener:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

## Continuidad y retornos

En **Continuar / Hoy** están:

- Continuar vehículo;
- Procesar retorno;
- Continuar tarea;
- Agenda local.

Para un retorno/checkpoint, pégalo solo en el campo que aparece para esa acción. El preflight es contextual: solo muestra faltantes/riesgos cuando hacen falta.

El chat nuevo debe verificar GitHub/Drive antes de continuar y no rehacer trabajo cerrado.

## Comercial

En **Responder / Lead** están las rutas hacia `AFL_AUTOS_COMERCIAL`:

- responder;
- calificar;
- mover a WhatsApp/llamada;
- enviar fotos/video;
- proponer visita;
- seguimiento;
- negociación;
- cierre;
- retorno comercial.

El Home no guarda CRM ni conversaciones.

Flujo base:

`PREGUNTA → RESPUESTA_DIRECTA → UNA_PREGUNTA_UTIL → SIGUIENTE_ACCION`

Cuando una respuesta depende de una unidad, manda su `PUENTE.md` vigente.

## Publicación y medición

En **Publicar / Medir** puedes:

- registrar publicación;
- medir 24 h;
- medir 72 h;
- medir 7 días.

La medición debe conservar la variable creativa que se usó:

- video: familia, hook, duración, audio/voz y CTA;
- gráfica: familia visual, HERO, datos visibles y CTA.

Separar siempre métricas de plataforma de mensajes, leads, visitas, negociaciones y ventas.

Un solo resultado no crea una regla:

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

## Fuentes de autoridad

- datos técnicos/comerciales de una unidad → `Vehiculos/PUENTE.md`;
- creatividad/auditorías/motores → `AFL_AUTOS_CONTENT_SYSTEM`;
- conversación/comercial → `AFL_AUTOS_COMERCIAL`;
- análisis/datasets → `AFL_AUTOS_PLATFORM`;
- originales/multimedia/RAW → Google Drive;
- Home/coordinación/prompts → `AFL_AUTOS_OPERACION`.

Antes de modificar un archivo existente, hacer fetch de la versión vigente.

## Agenda local

V4.1 conserva la clave `afl_autos_agenda_v2` en `localStorage`.

La agenda es auxiliar y puede registrar tareas no sensibles. No equivale a automatización real y no sustituye fuentes privadas.

## Si el chat principal se llena

Usar **Más → Nuevo chat principal**. El coordinador reconstruye el estado leyendo las fuentes vigentes, no copiando meses de conversación.

## Reglas críticas

No publicar/guardar en este repo público:

- VIN;
- kilometraje/odómetro;
- precios internos;
- documentos;
- datos personales;
- leads/conversaciones privadas;
- credenciales.

Para contenido público aplicar:

`DATO_CONFIRMADO ≠ DATO_PUBLICABLE ≠ EVIDENCIA_VISUAL ≠ MOODBOARD ≠ PIEZA_APROBADA`

El Home coordina y genera instrucciones; no sustituye las fuentes privadas.