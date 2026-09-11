# AFL AUTOS — Home objetivo

Estado: `PROPUESTA / NO IMPLEMENTADO`

Fecha: `2026-09-11`

## Principio

`UN SOLO HOME / FUENTES SEPARADAS`

El Home no almacena toda la operación. El Home DIRIGE.

Debe resolver la pregunta:

`¿Qué quiero hacer ahora?`

sin obligar a recordar qué repo, chat o archivo corresponde.

## Responsabilidades

- `AFL_AUTOS_OPERACION`: Home, navegación, prompts, coordinación, agenda auxiliar, continuidad.
- `Vehiculos`: verdad técnica/comercial por unidad, `PUENTE.md`, estados y enlaces.
- `AFL_AUTOS_CONTENT_SYSTEM`: creatividad, branding, motores, campañas, casos y aprendizaje editorial.
- `AFL_AUTOS_PLATFORM`: datasets sanitizados, análisis, métricas y metodología.
- Drive: RAW, originales, multimedia, snapshots y evidencia pesada.
- `AFL_AUTOS_COMERCIAL`: solo propuesta futura; no crear hasta concluir auditoría conversacional.

## 1. HOY

Debe agrupar de forma operativa, sin datos sensibles:
- tareas activas;
- aprobaciones pendientes;
- mediciones 24 h / 72 h / 7 d;
- capturas pendientes;
- auditorías;
- cargas/exportaciones;
- esperando a Miguel;
- esperando otro chat;
- bloqueos/contradicciones.

La agenda local es auxiliar. Los estados críticos deben persistir en fuentes durables.

## 2. VEHÍCULOS

Accesos:
- + Nuevo vehículo;
- Continuar vehículo;
- Estrategia + plan de captura;
- Captura;
- Selección;
- Retoque;
- Galería para prospectos;
- Producción;
- Publicación;
- Medición;
- Vendido / entrega.

Flujo recomendado:

`INGRESO → EXPEDIENTE → PLAN_CAPTURA → CAPTURA → SELECCION → RETOQUE → PRODUCCION → APROBACION → PUBLICACION → MEDICION`

No imponer este flujo cuando una unidad ya tiene trabajo existente; continuar desde el estado real.

## 3. CREAR

Debe permitir crear contenido desde un expediente ya existente, sin obligar a iniciar por `Nuevo vehículo`.

Accesos:
- flyer;
- portada Reel;
- portada TikTok;
- historia;
- Reel Facebook;
- TikTok;
- copy;
- carrusel/post;
- campaña vigente;
- vendido/entrega;
- contenido de inventario.

Todo productor debe consultar:

`PUENTE vigente + reglas del Content System + evidencia real`

## 4. RESPONDER — FUTURO

No implementar como CRM público.

Concepto:

`INTENCION → RESPUESTA_DIRECTA → UNA_PREGUNTA_UTIL → SIGUIENTE_ACCION`

Intenciones iniciales:
- precio;
- ubicación;
- financiamiento;
- cambia/toma a cuenta;
- disponibilidad;
- motor;
- documentación;
- contacto;
- fotos/video;
- agendar visita;
- seguimiento.

La versión moderna NO puede aceptar campos manuales temporales como verdad técnica. Debe consultar:

`PUENTE.md + reglas comerciales + estado vigente`

No almacenar conversaciones privadas completas en el Home.

## 5. GALERÍA PARA PROSPECTOS

Regla confirmada por auditoría:

`FOTOS_PARA_LEAD ≠ FOTOS_PARA_PUBLICACION`

Función futura:
1. leer fotos seleccionadas/retocadas;
2. excluir VIN, odómetro, documentos y material sensible;
3. elegir aproximadamente 8–15 fotos útiles;
4. crear o reutilizar carpeta clara;
5. devolver enlace verificable;
6. registrar en `PUENTE.md` cuál galería está vigente.

No crear todavía una web pública por vehículo.

## 6. PUBLICACIONES / MEDICIONES

Accesos:
- registrar URL pública;
- Facebook post;
- Facebook Reel;
- TikTok;
- historias;
- medición 24 h;
- medición 72 h;
- medición 7 días;
- comparación histórica.

Mantener:

`VISUALIZACION ≠ INTERACCION ≠ CONVERSACION ≠ LEAD ≠ VISITA ≠ NEGOCIACION ≠ VENTA`

La visita programada es una señal comercial más avanzada que obtener WhatsApp, pero no prueba causalidad de venta.

## 7. EXPORTACIONES

Fuentes:
- Meta/Facebook;
- TikTok;
- futuras plataformas.

Flujo:

`RAW_EN_DRIVE → INVENTARIO → SANITIZACION → PLATFORM → CONTENT/COMERCIAL SI APORTA APRENDIZAJE`

Nunca reemplazar un dataset anterior sin registrar versión, fecha y alcance.

## 8. APRENDIZAJE

Accesos:
- Motor Visual;
- Motor Editorial TikTok;
- casos positivos/negativos;
- experimentos;
- patrones;
- aprendizaje validado.

Estados:

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

Una pieza aprobada/rechazada puede generar observación. No crea automáticamente regla universal.

## 9. CONTINUIDAD

Accesos:
- pegar `RETORNO_AL_COORDINADOR`;
- procesar retorno;
- continuar hilo/tarea;
- continuar vehículo;
- nuevo chat principal;
- cerrar/sincronizar chat.

La conversación es contexto auxiliar. La continuidad durable vive en GitHub/Drive/PUENTE/checkpoints/resultados.

## Regla transversal de evidencia/publicación

El Home y sus prompts deben respetar:

`DATO_CONFIRMADO`
≠ `DATO_PUBLICABLE`
≠ `EVIDENCIA_VISUAL`
≠ `MOODBOARD`
≠ `PIEZA_APROBADA`

Además:
- `NOMBRE_DE_ARCHIVO ≠ EVIDENCIA_TECNICA`;
- `PROMPT ≠ EVIDENCIA_TECNICA`;
- `LAYOUT ≠ EVIDENCIA_TECNICA`;
- `FLYER_HISTORICO ≠ EVIDENCIA_TECNICA`;
- `MOODBOARD ≠ EVIDENCIA_TECNICA`.

## Versionado

Para lineage, migración o borrado no confiar solo en filename/fecha. Preferir:
- hash;
- contenido/diff;
- origen;
- dependencia;
- snapshot/backup relacionado;
- evidencia de uso.

## Vendidos históricos

- Artículo vendido en Meta histórico ≠ unidad actual vendida.
- Post de unidad vendida ≠ venta atribuida al contenido.

## Qué NO debe hacer el Home

- guardar VIN;
- guardar odómetros;
- guardar precios internos;
- guardar documentos;
- guardar leads identificables;
- guardar conversaciones privadas completas;
- actuar como fuente técnica;
- duplicar multimedia pesada;
- ser editor de video;
- ser CRM completo;
- reconstruir V10.

## Criterio de éxito

Desde teléfono, Miguel debe poder seleccionar la tarea y recibir la instrucción correcta, mientras cada fuente mantiene su responsabilidad y privacidad.