# Propuesta — Home unificado AFL AUTOS V4

Estado: `PROPUESTA / NO IMPLEMENTADO TODAVIA`

## Objetivo

Convertir `AFL_AUTOS_OPERACION` en la puerta de entrada única desde teléfono para coordinar todo el trabajo de AFL AUTOS sin mezclar las fuentes de verdad.

La página pública no debe convertirse en una base de datos sensible. Su función es orientar, generar prompts, mostrar pendientes locales y enviar cada tarea al repositorio/fuente correcta.

## Principio

`UN SOLO HOME / FUENTES SEPARADAS`

La auditoría histórica del 2026-09-11 refuerza una regla adicional:

`HOME = ROUTER / NO BASE DE DATOS`

- `AFL_AUTOS_OPERACION` — público: Home, navegación, prompts, agenda local y coordinación.
- `Vehiculos` — privado: verdad técnica/comercial de cada unidad, `PUENTE.md`, estados y enlaces.
- `AFL_AUTOS_CONTENT_SYSTEM` — privado: branding, moodboards, campañas, formatos, motores editoriales, casos y aprendizaje creativo.
- `AFL_AUTOS_PLATFORM` — privado: datasets sanitizados, exportaciones procesadas, métricas, metodología y análisis.
- Google Drive — privados/pesados: fotos, videos, exportaciones RAW, snapshots, evidencia y derivados.
- `AFL_AUTOS_COMERCIAL` — privado, propuesto y NO creado: respuestas rápidas, clasificación de comentarios/mensajes, objeciones, seguimiento, estados comerciales y aprendizaje conversacional sanitizado.

## Home propuesto

### 1. HOY / PENDIENTES

Mostrar únicamente tareas operativas locales sin datos sensibles:
- capturas pendientes;
- selección pendiente;
- aprobación pendiente;
- publicación pendiente;
- medición 24 h / 72 h / 7 d;
- auditorías incompletas;
- cargas/exportaciones pendientes;
- esperando a Miguel;
- esperando otro chat;
- contradicciones/bloqueos.

La agenda local ayuda a recordar; no sustituye una automatización real ni el registro durable en GitHub.

### 2. VEHICULOS

Accesos:
- + Nuevo vehículo;
- Continuar vehículo;
- Estrategia + plan de captura;
- Captura;
- Seleccionar material;
- Lavar/retocar fotos;
- Galería para prospecto;
- Producir redes;
- Publicación + medición;
- Vendido / entrega.

Flujo preferido:

`INGRESO → EXPEDIENTE → PLAN CAPTURA → CAPTURA → SELECCION → RETOQUE → PRODUCCION → APROBACION → PUBLICACION → MEDICION`

Si una unidad ya tiene trabajo existente, el Home debe continuar desde el estado real y no obligar a reiniciar el flujo.

### 3. CREAR CONTENIDO

Accesos sin necesidad de iniciar desde un vehículo nuevo cuando la fuente ya existe:
- flyer / portada desde expediente existente;
- Reel Facebook;
- TikTok;
- Historias;
- copy;
- carrusel/post;
- Mes Patrio/campaña vigente;
- vendido/entrega;
- contenido de inventario.

Cada productor debe consultar primero las fuentes creativas vigentes y el expediente técnico cuando corresponda.

### 4. RESPONDER / LEADS — FUTURO

Concepto respaldado por la auditoría histórica:

`INTENCION → RESPUESTA_DIRECTA → UNA_PREGUNTA_UTIL → SIGUIENTE_ACCION`

Intenciones iniciales:
- precio;
- ubicación;
- financiamiento;
- cambia / toma a cuenta;
- disponibilidad;
- motor;
- documentación;
- contacto;
- fotos/video;
- agendar visita;
- seguimiento.

La versión moderna no debe aceptar como verdad técnica campos manuales temporales. Debe consultar:

`PUENTE.md + reglas comerciales + estado vigente`

Cada lead debe tener `SIGUIENTE_ACCION` cuando exista un registro comercial formal.

No almacenar conversaciones privadas completas en el repo público.

### 5. RESPUESTAS RAPIDAS

Biblioteca privada futura/versionada:
- precio;
- cambia / toma a cuenta;
- financiamiento;
- ubicación;
- documentación;
- disponibilidad;
- envío de fotos/video;
- agendar visita;
- seguimiento después de visto;
- vendido/no disponible.

Las respuestas deben usar datos del `PUENTE.md` de la unidad y reglas comerciales vigentes.

### 6. GALERIA PARA PROSPECTOS

La auditoría histórica confirma:

`FOTOS_PARA_LEAD ≠ FOTOS_PARA_PUBLICACION`

El Home debe generar una instrucción para:
- leer fotos seleccionadas/retocadas;
- excluir VIN/odómetro/documentos/sensibles;
- crear o actualizar una carpeta clara para enviar;
- mantener aproximadamente 8–15 fotos útiles, no todas las tomas;
- devolver enlace verificable;
- registrar en `PUENTE.md` qué galería está vigente.

No hace falta crear una web pública por vehículo en V4.

### 7. PUBLICACIONES Y MEDICIONES

Accesos:
- registrar URLs;
- Facebook post;
- Facebook Reel;
- TikTok;
- Historias;
- 24 h;
- 72 h;
- 7 días;
- comparación contra histórico.

Mantener:

`VISUALIZACION ≠ INTERACCION ≠ CONVERSACION ≠ LEAD ≠ VISITA ≠ NEGOCIACION ≠ VENTA`

La visita programada es una señal comercial más avanzada que obtener WhatsApp, pero no demuestra causalidad de venta.

Un artículo/post histórico marcado vendido no equivale automáticamente al estado actual de una unidad ni prueba atribución de venta al contenido.

### 8. EXPORTACIONES / ACTUALIZAR DATOS

Módulo para nuevas exportaciones:
- TikTok;
- Facebook/Meta;
- otras fuentes futuras.

Flujo:

`RAW EN DRIVE → INVENTARIO → SANITIZACION → PLATFORM → CONTENT/COMERCIAL SI PRODUCE APRENDIZAJE`

Nunca reemplazar un dataset anterior sin registrar fecha/alcance/versión.

### 9. APRENDIZAJE

Accesos:
- Motor Editorial TikTok;
- Motor Visual flyers/portadas;
- casos positivos/negativos;
- comentarios/mensajes históricos sanitizados;
- experimentos;
- aprendizaje validado.

Separar siempre:

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

Una pieza aprobada/rechazada puede generar observación; no crea una regla universal por sí sola.

### 10. CONTINUIDAD / CHATS

- Continuar hilo / tarea;
- Nuevo chat principal;
- Cerrar / sincronizar chat;
- pegar `RETORNO_AL_COORDINADOR`;
- procesar retorno;
- generar siguiente prompt.

## Regla transversal de evidencia/publicación

Aprendizaje confirmado por la auditoría histórica:

`DATO_CONFIRMADO`
≠ `DATO_PUBLICABLE`
≠ `EVIDENCIA_VISUAL`
≠ `MOODBOARD`
≠ `PIEZA_APROBADA`

También:
- `NOMBRE_DE_ARCHIVO ≠ EVIDENCIA_TECNICA`;
- `PROMPT ≠ EVIDENCIA_TECNICA`;
- `LAYOUT ≠ EVIDENCIA_TECNICA`;
- `FLYER_HISTORICO ≠ EVIDENCIA_TECNICA`;
- `MOODBOARD ≠ EVIDENCIA_TECNICA`.

El Home debe propagar estas restricciones a los prompts productores.

## Regla de versionado / lineage

Para decidir migración, reemplazo o borrado no confiar únicamente en nombre/fecha.

Preferir cuando sea posible:
- hash;
- contenido/diff;
- origen;
- snapshot/backup relacionado;
- dependencias;
- evidencia de uso.

## Repo comercial propuesto

Nombre: `AFL_AUTOS_COMERCIAL`

Estado: `PROPUESTO / PENDIENTE_DE_AUDITORIA_CONVERSACIONAL`

Visibilidad propuesta: privada.

Responsabilidad futura: autoridad de atención y conversión, sin convertirse en almacén de conversaciones personales crudas.

Estructura conceptual sugerida:

```text
AFL_AUTOS_COMERCIAL/
├── README.md
├── START_HERE.md
├── LEAD_STATES.md
├── QUICK_REPLIES.md
├── FOLLOWUP_RULES.md
├── OBJECTIONS.md
├── COMMENT_ROUTING.md
├── channels/
├── cases/
└── learning/
```

Datos personales, mensajes completos y exportaciones RAW deben permanecer fuera de este repo. PLATFORM puede conservar datasets sanitizados; Drive conserva RAW/evidencia.

NO crear este repo hasta preservar/auditar respuestas históricas, mensajes, comentarios, objeciones y flujo lead → visita → venta.

## Qué NO debe hacer el Home

- guardar VIN;
- guardar kilometraje;
- guardar precios internos;
- guardar leads con nombre/teléfono;
- guardar documentos;
- copiar conversaciones privadas;
- actuar como fuente técnica;
- duplicar multimedia pesada;
- convertirse en editor de video;
- convertirse en CRM completo;
- reconstruir el monolito V10;
- usar localStorage como fuente durable.

## Fases recomendadas

### V4A — consolidación
- auditoría histórica materializada;
- conservar mejores ideas y anti-patrones;
- cerrar dependencias/lineage antes de borrar fuentes;
- mantener V4 como propuesta hasta decisión de Miguel.

### V4B — comercial, después de auditoría conversacional
- decidir si realmente se crea `AFL_AUTOS_COMERCIAL`;
- si se aprueba, migrar reglas, respuestas rápidas y aprendizaje conversacional sanitizado;
- después agregar módulos `Responder` y `Galería para prospectos` al Home.

### V4C — datos
- módulo de nuevas exportaciones;
- estado de datasets;
- mediciones pendientes;
- comparación histórica.

### V4D — operación diaria
- panel `HOY`;
- bandeja de retornos;
- generación del siguiente prompt;
- integración con recordatorios reales cuando Miguel lo solicite.

## Criterio de éxito

Miguel debe poder abrir el Home desde el teléfono y resolver:

`¿Qué quiero hacer ahora?`

sin tener que recordar qué repo, chat o prompt corresponde.

La herramienta debe dirigirlo a la fuente correcta sin exponer ni duplicar información privada.