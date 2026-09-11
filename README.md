# AFL_AUTOS_OPERACION

Centro de operación público y móvil de AFL AUTOS.

## Estado actual del Home

`index.html` usa **V3.1 funcional** como base UX probada.

Criterio vigente:

`V3.1 = HOME ACTIVO / UX PROBADA`

`V4.1 = CANDIDATO / LABORATORIO / NO CANONICO`

V3.1 evolucionó de forma pequeña para incorporar revisión visual y aprendizaje sin convertirse en base de datos creativa.

## Principio

`UN SOLO HOME / FUENTES SEPARADAS`

El Home coordina y genera instrucciones. No es CRM, expediente técnico ni fuente durable de aprendizaje creativo.

La autoridad durable del aprendizaje visual es:

`AFL_AUTOS_CONTENT_SYSTEM`

## URL

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

Archivo canónico: [`index.html`](./index.html).

## Qué conserva V3.1

- centro de coordinación ligero;
- entrada directa por módulos;
- formulario corto;
- Nuevo vehículo;
- Plan de captura;
- Seleccionar material;
- Lavar / retocar;
- Producir redes;
- Continuar vehículo;
- Procesar retorno;
- Continuar hilo / tarea;
- Publicación + medición;
- Vendido / entrega;
- Cerrar / sincronizar;
- Nuevo chat principal;
- agenda local `afl_autos_agenda_v1`;
- recomendaciones de siguiente etapa;
- flujo móvil probado.

## Nuevo ciclo de aprendizaje visual

V3.1 añade un módulo pequeño:

**Revisar diseño / Registrar aprendizaje**

Permite generar un prompt con:

- vehículo/proyecto;
- Drive;
- pieza/versión;
- decisión de Miguel: aprobar / corregir / rechazar;
- qué no gustó;
- qué sí conservar;
- referencia visual opcional;
- comentario de Miguel.

El Home solo construye el prompt. No guarda ese feedback como fuente de verdad en `localStorage`.

Flujo:

`PRODUCIR → REVISAR → APROBAR/CORREGIR/RECHAZAR → REGISTRAR_APRENDIZAJE → SIGUIENTE_PRODUCCION`

Regla:

`CASO_PARTICULAR ≠ REGLA_GENERAL ≠ APRENDIZAJE_VALIDADO`

## Dirección visual activa

La producción gráfica debe consultar en `AFL_AUTOS_CONTENT_SYSTEM`:

- `formats/ACTIVE_VISUAL_DIRECTION.md`;
- `formats/FLYERS_PORTADAS.md`;
- `formats/FLYER_ENGINE.md`;
- `formats/FLYER_FAMILIES.md`;
- `library/flyer_audit/REFERENCE_STATUS.md`;
- `COMMON_ERRORS.md`;
- referencias aprobadas por Miguel cuando existan;
- `NEGATIVE_CASES.md` y `VISUAL_FEEDBACK_LOG.md`.

Regla creativa:

`REFERENCIA_POSITIVA_APROBADA_POR_MIGUEL > REFERENCIA_HISTORICA_NO_VALIDADA`

Ninguna referencia visual es fuente técnica del vehículo.

## Producción

`prompts/PRODUCIR_REDES.md` exige dirección visual activa y aprendizaje vigente antes de producir flyers, feed, historias o portadas.

Entre otras reglas:

- vehículo protagonista;
- `NO ICONOS`;
- máximo 2–4 datos confirmados/publicables;
- jerarquía moderna/editorial;
- composiciones específicas por formato;
- evitar apariencia de plantilla genérica;
- no producir una variante llamada `premium` sin una dirección realmente distinta y más sólida;
- no publicar automáticamente.

## Revisión y aprendizaje

- `prompts/REVISION_APROBACION.md` — revisión de pieza real y decisión explícita de Miguel.
- `prompts/REVISAR_DISENO_APRENDIZAJE.md` — persiste feedback en Content System.

Decisiones:

- `APROBADO_POR_MIGUEL`
- `REQUIERE_CORRECCION`
- `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`

Una pieza producida/subida no queda aprobada por inferencia.

## Fuentes de autoridad

- `AFL_AUTOS_OPERACION` — Home, coordinación, prompts y continuidad.
- `Vehiculos` — verdad técnica/comercial por unidad mediante `PUENTE.md`.
- `AFL_AUTOS_CONTENT_SYSTEM` — creatividad, dirección visual, referencias, auditorías y aprendizaje.
- `AFL_AUTOS_COMERCIAL` — respuestas, calificación, visita, seguimiento, negociación y cierre.
- `AFL_AUTOS_PLATFORM` — análisis, datasets sanitizados y métricas.
- Google Drive — RAW, multimedia y evidencia pesada.

Para cualquier unidad:

`INDEX = NAVEGACION`

`PUENTE.md = VERDAD`

## Flujo operativo

`INGRESO → PLAN_CAPTURA → CAPTURA → SELECCION → RETOQUE → PRODUCCION → REVISION/APRENDIZAJE → APROBACION → PUBLICACION → MEDICION`

Mantener estrictamente:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

## Auditorías históricas activas

### Flyers / historias / portadas

La auditoría de 100 piezas sigue activa como evidencia visual histórica. Las referencias históricas no se consideran aprobadas por Miguel salvo registro explícito.

Si la foto no soporta una pieza adecuada:

`BLOQUEADO_POR_FOTO / REQUIERE_MEJOR_HERO`

### TikTok / Facebook Reel

La producción debe consultar Motor Editorial, familias, hooks/CTA y `VIDEO_AUDIT_INDEX.md`.

Si el material no soporta una pieza adecuada:

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

## Prototipos conservados

`home_v4_1.html`, `assets/home-v4-1.*` y `config/home-v4-1-actions.js` permanecen como laboratorio no canónico. No sustituyen `index.html`.

## Guías

- [`docs/COMO_EMPEZAR.md`](./docs/COMO_EMPEZAR.md)
- [`docs/ARQUITECTURA.md`](./docs/ARQUITECTURA.md)
- [`docs/COORDINACION_Y_RETORNOS.md`](./docs/COORDINACION_Y_RETORNOS.md)
- [`docs/ESTADOS.md`](./docs/ESTADOS.md)
- [`propuestas/DECISION_HOME_UX_V4_1.md`](./propuestas/DECISION_HOME_UX_V4_1.md)
