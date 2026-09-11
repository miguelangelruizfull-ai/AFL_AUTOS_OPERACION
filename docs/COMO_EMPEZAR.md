# AFL AUTOS OPERACIÓN — Cómo empezar

Este repositorio es la puerta de entrada operativa de AFL AUTOS. No sustituye `Vehiculos`, `AFL_AUTOS_CONTENT_SYSTEM`, `AFL_AUTOS_COMERCIAL`, `AFL_AUTOS_PLATFORM` ni Drive.

## Home activo

El Home canónico es **V3.1**:

`index.html`

URL:

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

V3.1 es la base UX probada. V4/V4.1 se conservan como aprendizaje/prototipo y no sustituyen al Home activo.

## Uso rápido

1. Elige el módulo en Home V3.1.
2. Completa únicamente los campos necesarios.
3. Genera el prompt.
4. En el chat trabajador, antes de escribir, verificar GitHub/Drive vigentes.
5. Para una unidad existente, leer completo su `PUENTE.md`.
6. Al terminar, devolver `RETORNO_AL_COORDINADOR`.

## Flujo normal

`NUEVO VEHICULO → PLAN_CAPTURA → CAPTURA → SELECCION → RETOQUE → PRODUCCION → REVISION/APRENDIZAJE → APROBACION → PUBLICACION → MEDICION`

No saltar etapas solo porque exista un archivo en Drive.

## Producción visual

Al usar **Producir redes**, el prompt del Home obliga a consultar:

- `AFL_AUTOS_CONTENT_SYSTEM/START_HERE.md`;
- `STATUS_RULES.md`;
- `formats/ACTIVE_VISUAL_DIRECTION.md`;
- formatos/motores aplicables;
- `library/flyer_audit/REFERENCE_STATUS.md`;
- referencias aprobadas por Miguel cuando existan;
- errores/casos negativos relevantes.

Reglas activas para piezas gráficas:

- vehículo protagonista;
- `NO ICONOS`;
- 2–4 datos confirmados/publicables máximo;
- jerarquía contemporánea/editorial;
- composiciones distintas según formato;
- evitar apariencia de plantilla genérica;
- una variante `premium` debe demostrar una dirección realmente diferente;
- referencias visuales nunca son fuente técnica.

## Revisar diseño / Registrar aprendizaje

Después de producir una pieza, Miguel puede usar este módulo nuevo de V3.1.

Campos:

- vehículo/proyecto;
- Drive;
- pieza o versión;
- decisión: aprobar / corregir / rechazar;
- qué no gustó;
- qué sí conservar;
- referencia visual opcional;
- comentario de Miguel.

El Home no guarda ese feedback en `localStorage`. Solo genera un prompt para persistirlo en `AFL_AUTOS_CONTENT_SYSTEM`.

Decisiones válidas:

- `APROBADO_POR_MIGUEL`
- `REQUIERE_CORRECCION`
- `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`

Flujo:

`PRODUCIR → REVISAR → APROBAR/CORREGIR/RECHAZAR → REGISTRAR_APRENDIZAJE → SIGUIENTE_PRODUCCION`

Regla de aprendizaje:

`CASO_PARTICULAR ≠ REGLA_GENERAL ≠ APRENDIZAJE_VALIDADO`

## Fuente durable del aprendizaje visual

Vive en `AFL_AUTOS_CONTENT_SYSTEM`, especialmente:

- `formats/ACTIVE_VISUAL_DIRECTION.md` — dirección creativa actualmente activa, no historial infinito;
- `library/flyer_audit/REFERENCE_STATUS.md` — referencias aprobadas/rechazadas/históricas;
- `library/flyer_audit/VISUAL_FEEDBACK_LOG.md` — feedback durable;
- `cases/` — casos particulares;
- `NEGATIVE_CASES.md` — patrones/casos que conviene evitar.

Una pieza histórica visualmente útil no equivale a aprobación de Miguel.

## Plan de captura

`prompts/PLAN_CAPTURA.md` consulta aprendizaje visual/editorial para definir HERO, familias, hooks y tomas necesarias.

## Selección

`prompts/SELECCIONAR_MATERIAL.md` evalúa si el material realmente soporta flyer, historia, Reel o TikTok y puede registrar bloqueos antes de producir.

## Revisión / aprobación

`prompts/REVISION_APROBACION.md` revisa la pieza real contra la dirección visual y motores correspondientes.

No inferir:

`PRODUCIDO → APROBADO`

ni:

`APROBADO → PUBLICADO`

## Medición

`prompts/PUBLICACION_MEDICION.md` conserva familia, HERO, hook, duración, CTA y variable creativa para aprender de resultados sin convertir un caso en regla universal.

## Continuidad

Usa:

- **Continuar vehículo** para retomar desde `PUENTE.md`;
- **Procesar RETORNO** cuando otro chat terminó;
- **Continuar hilo / tarea** cuando un chat se llenó o una auditoría quedó a medias;
- agenda local para pendientes auxiliares.

La agenda mantiene la clave V3.1 `afl_autos_agenda_v1`. No se usa para guardar feedback visual como fuente de verdad.

## Índices

El repositorio conserva `data/expedientes-public-index.json` y `Vehiculos` conserva su índice privado.

Actualmente son infraestructura disponible para navegación/automatización futura; Home V3.1 no depende de ellos.

Regla permanente:

`INDEX = NAVEGACION`

`PUENTE.md = VERDAD`

## Comercial

`AFL_AUTOS_COMERCIAL` sigue activo como módulo privado aunque V3.1 no muestre todas sus rutas como botones.

Flujo:

`PREGUNTA → RESPUESTA_DIRECTA → UNA_PREGUNTA_UTIL → SIGUIENTE_ACCION`

No guardar conversaciones, teléfonos o leads identificables en este repositorio público.

## Fuentes de autoridad

- unidad/datos técnicos → `Vehiculos/PUENTE.md`;
- creatividad/dirección visual/aprendizaje → `AFL_AUTOS_CONTENT_SYSTEM`;
- conversación/comercial → `AFL_AUTOS_COMERCIAL`;
- análisis/métricas → `AFL_AUTOS_PLATFORM`;
- originales/RAW → Drive;
- coordinación/prompts → `AFL_AUTOS_OPERACION`.

## Reglas críticas

Antes de modificar un archivo existente, hacer fetch de su versión vigente.

No publicar ni guardar aquí:

- VIN completo;
- millas/kilómetros;
- precios internos;
- documentos;
- PII;
- conversaciones privadas;
- credenciales.

Mantener:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

Y para contenido:

`DATO_CONFIRMADO ≠ DATO_PUBLICABLE ≠ EVIDENCIA_VISUAL ≠ MOODBOARD ≠ PIEZA_APROBADA`
