# AFL_AUTOS_OPERACION

Centro de operación público y móvil de AFL AUTOS.

## Estado actual del Home

`index.html` volvió a la versión **V3.1 funcional** por decisión de Miguel el 2026-09-11.

Commit histórico restaurado: `1f74f29acd00a8c5e841792ce28d52f6911b14f1`.

Criterio vigente:

`V3.1 = HOME ACTIVO / UX PROBADA`

`V4.1 = CANDIDATO / LABORATORIO / NO CANONICO`

La restauración afecta la interfaz principal, no elimina las mejoras posteriores del repositorio.

## Principio

`UN SOLO HOME / FUENTES SEPARADAS`

El Home coordina y genera instrucciones. No es CRM, expediente técnico ni fuente de verdad.

## URL

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

Archivo canónico: [`index.html`](./index.html).

## Qué conserva V3.1

- centro de coordinación ligero;
- entrada directa por módulos;
- formulario corto;
- Continuar vehículo;
- Procesar retorno;
- Continuar hilo / tarea;
- agenda local;
- recomendaciones de siguiente etapa;
- flujo móvil probado.

## Mejoras posteriores que SE CONSERVAN en el repositorio

Aunque el Home volvió a V3.1, siguen vigentes los módulos y prompts actualizados:

- `prompts/PLAN_CAPTURA.md` — captura orientada por motores históricos;
- `prompts/SELECCIONAR_MATERIAL.md` — HERO, hooks, familias y bloqueos de calidad;
- `prompts/PRODUCIR_REDES.md` — gates obligatorios para flyers y Reel/TikTok;
- `prompts/REVISION_APROBACION.md` — revisión contra auditorías/motores;
- `prompts/PUBLICACION_MEDICION.md` — medición ligada a variables creativas;
- `prompts/COMERCIAL_ROUTER.md` y `AFL_AUTOS_COMERCIAL` — lógica comercial separada;
- `data/expedientes-public-index.json` — índice público sanitizado disponible para futuras integraciones;
- `home_v4_1.html`, `assets/home-v4-1.*` y `config/home-v4-1-actions.js` — prototipo V4.1 conservado, no canónico.

No borrar estas mejoras por el rollback visual.

## Fuentes de autoridad

- `AFL_AUTOS_OPERACION` — Home, coordinación, prompts y continuidad.
- `Vehiculos` — verdad técnica/comercial por unidad mediante `PUENTE.md`.
- `AFL_AUTOS_CONTENT_SYSTEM` — creatividad, branding, auditorías y motores editoriales.
- `AFL_AUTOS_COMERCIAL` — respuestas, calificación, visita, seguimiento, negociación y cierre.
- `AFL_AUTOS_PLATFORM` — análisis, datasets sanitizados y métricas.
- Google Drive — RAW, multimedia y evidencia pesada.

Para cualquier unidad:

`INDEX = NAVEGACION`

`PUENTE.md = VERDAD`

## Flujo operativo

`INGRESO → PLAN CAPTURA → CAPTURA → SELECCIÓN → RETOQUE → PRODUCCIÓN → APROBACIÓN → PUBLICACIÓN → MEDICIÓN`

Mantener estrictamente:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

## Auditorías históricas activas

### Flyers / historias / portadas

La producción debe consultar el Motor Visual y la auditoría de 100 piezas. Si la foto no soporta una pieza adecuada:

`BLOQUEADO_POR_FOTO / REQUIERE_MEJOR_HERO`

### TikTok / Facebook Reel

La producción debe consultar Motor Editorial, familias, hooks/CTA y `VIDEO_AUDIT_INDEX.md`. Si el material no soporta una pieza adecuada:

`BLOQUEADO_POR_MATERIAL / REQUIERE_MEJOR_SELECCION_O_CAPTURA`

Los históricos orientan creatividad; nunca sustituyen al `PUENTE.md` para datos de la unidad.

## Comercial

Flujo base:

`PREGUNTA → RESPUESTA_DIRECTA → UNA_PREGUNTA_UTIL → SIGUIENTE_ACCION`

Estados:

`INTERACCION ≠ CONVERSACION ≠ LEAD_CALIFICADO ≠ VISITA ≠ NEGOCIACION ≠ VENTA`

El Home público no debe almacenar leads, conversaciones o PII.

## Seguridad

No guardar en este repositorio público:

- VIN;
- millas/kilómetros u odómetro;
- precios internos;
- documentos;
- datos personales;
- conversaciones privadas;
- credenciales.

Para contenido público aplicar:

`DATO_CONFIRMADO ≠ DATO_PUBLICABLE ≠ EVIDENCIA_VISUAL ≠ MOODBOARD ≠ PIEZA_APROBADA`

## Guías

- [`docs/COMO_EMPEZAR.md`](./docs/COMO_EMPEZAR.md)
- [`docs/ARQUITECTURA.md`](./docs/ARQUITECTURA.md)
- [`docs/COORDINACION_Y_RETORNOS.md`](./docs/COORDINACION_Y_RETORNOS.md)
- [`docs/ESTADOS.md`](./docs/ESTADOS.md)
- [`propuestas/DECISION_HOME_UX_V4_1.md`](./propuestas/DECISION_HOME_UX_V4_1.md)
