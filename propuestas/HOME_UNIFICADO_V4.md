# Propuesta — Home unificado AFL AUTOS V4

Estado: `PROPUESTA / NO IMPLEMENTADO TODAVIA`

## Objetivo

Convertir `AFL_AUTOS_OPERACION` en la puerta de entrada única desde teléfono para coordinar todo el trabajo de AFL AUTOS sin mezclar las fuentes de verdad.

La página pública no debe convertirse en una base de datos sensible. Su función es orientar, generar prompts, mostrar pendientes locales y enviar cada tarea al repositorio/fuente correcta.

## Principio

`UN SOLO HOME / FUENTES SEPARADAS`

- `AFL_AUTOS_OPERACION` — público: Home, navegación, prompts, agenda local y coordinación.
- `Vehiculos` — privado: verdad técnica/comercial de cada unidad, `PUENTE.md`, estados y enlaces.
- `AFL_AUTOS_CONTENT_SYSTEM` — privado: branding, moodboards, campañas, formatos, motores editoriales, casos y aprendizaje creativo.
- `AFL_AUTOS_PLATFORM` — privado: datasets sanitizados, exportaciones procesadas, métricas, metodología y análisis.
- Google Drive — privados/pesados: fotos, videos, exportaciones RAW, evidencia y derivados.
- `AFL_AUTOS_COMERCIAL` — privado, propuesto: respuestas rápidas, clasificación de comentarios/mensajes, objeciones, seguimiento, estados comerciales y aprendizaje conversacional sanitizado.

## Home propuesto

### 1. HOY / PENDIENTES

Mostrar únicamente tareas operativas locales sin datos sensibles:
- capturas pendientes;
- selección pendiente;
- aprobación pendiente;
- publicación pendiente;
- medición 24 h / 72 h / 7 d;
- auditorías incompletas;
- cargas/exportaciones pendientes.

La agenda local ayuda a recordar; no sustituye una automatización real ni el registro durable en GitHub.

### 2. VEHICULOS

Accesos:
- + Nuevo vehículo;
- Continuar vehículo;
- Estrategia + plan de captura;
- Seleccionar material;
- Lavar fotos;
- Galería para prospecto;
- Producir redes;
- Publicación + medición;
- Vendido / entrega.

Flujo preferido:

`INGRESO → EXPEDIENTE → PLAN CAPTURA → CAPTURA → SELECCION → RETOQUE → PRODUCCION → APROBACION → PUBLICACION → MEDICION`

### 3. CREAR CONTENIDO

Accesos sin necesidad de iniciar desde un vehículo nuevo cuando la fuente ya existe:
- flyer / portada desde expediente existente;
- Reel Facebook;
- TikTok;
- Historias;
- copy;
- Mes Patrio/campaña vigente;
- vendido/entrega;
- contenido de inventario.

Cada productor debe consultar primero las fuentes creativas vigentes y el expediente técnico cuando corresponda.

### 4. RESPONDER / LEADS

Módulo futuro recomendado:
- responder comentario Facebook;
- responder comentario TikTok;
- responder Messenger/WhatsApp;
- pedir número;
- enviar fotos/video/ubicación;
- seguimiento;
- calificar intención;
- registrar visita;
- registrar venta.

No almacenar conversaciones privadas completas en el repo público.

### 5. RESPUESTAS RAPIDAS

Biblioteca privada versionada:
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

Las respuestas deben poder usar datos del `PUENTE.md` de la unidad y reglas comerciales vigentes.

### 6. GALERIA PARA PROSPECTOS

El Home debe generar una instrucción para:
- leer fotos seleccionadas/retocadas;
- excluir VIN/odómetro/documentos;
- crear o actualizar una carpeta clara para enviar;
- mantener 8–15 fotos útiles, no todas las tomas;
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

`VISUALIZACION ≠ INTERACCION ≠ CONVERSACION ≠ LEAD ≠ VISITA ≠ VENTA`

### 8. EXPORTACIONES / ACTUALIZAR DATOS

Módulo para nuevas exportaciones:
- TikTok;
- Facebook/Meta;
- otras fuentes futuras.

Flujo:

`RAW EN DRIVE → INVENTARIO → SANITIZACION → PLATFORM → CONTENT/COMERCIAL SI PRODUCE APRENDIZAJE`

Nunca reemplazar un dataset anterior sin registrar fecha/alcance.

### 9. APRENDIZAJE

Accesos:
- Motor Editorial TikTok;
- Motor Visual flyers/portadas;
- casos positivos/negativos;
- comentarios/mensajes históricos;
- experimentos;
- aprendizaje validado.

Separar siempre:

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

### 10. CONTINUIDAD / CHATS

- Continuar hilo / tarea;
- Nuevo chat principal;
- Cerrar / sincronizar chat;
- pegar `RETORNO_AL_COORDINADOR`;
- generar siguiente prompt.

## Repo comercial propuesto

Nombre: `AFL_AUTOS_COMERCIAL`

Visibilidad: privada.

Responsabilidad: autoridad de atención y conversión, sin convertirse en almacén de conversaciones personales crudas.

Estructura sugerida:

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
│   ├── facebook.md
│   ├── tiktok.md
│   ├── messenger.md
│   └── whatsapp.md
├── cases/
│   ├── lead_to_visit/
│   └── visit_to_sale/
└── learning/
    └── CONVERSATION_PATTERNS.md
```

Datos personales, mensajes completos y exportaciones RAW deben permanecer fuera de este repo. PLATFORM puede conservar datasets sanitizados; Drive conserva RAW/evidencia.

## Qué NO debe hacer el Home

- guardar VIN;
- guardar kilometraje;
- guardar precios internos;
- guardar leads con nombre/teléfono;
- guardar documentos;
- copiar conversaciones privadas;
- actuar como fuente técnica;
- duplicar multimedia pesada;
- convertirse en editor de video o CRM completo en la primera versión.

## Fases recomendadas

### V4A — consolidación
- auditar flujos históricos;
- conservar las mejores ideas como propuestas;
- definir Home final;
- no borrar archivos fuente hasta tener auditoría/checkpoint.

### V4B — comercial
- crear `AFL_AUTOS_COMERCIAL` privado;
- migrar reglas, respuestas rápidas y aprendizaje conversacional sanitizado;
- agregar módulos `Responder` y `Galería para prospectos` al Home.

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

Miguel debe poder abrir el Home desde el teléfono y resolver la pregunta:

`¿Qué quiero hacer ahora?`

sin tener que recordar qué repo, chat o prompt corresponde.

La herramienta debe dirigirlo a la fuente correcta sin exponer ni duplicar información privada.
