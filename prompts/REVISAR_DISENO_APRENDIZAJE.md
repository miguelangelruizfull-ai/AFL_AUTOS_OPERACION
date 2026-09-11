# Prompt base — Revisar diseño / registrar aprendizaje

Objetivo: convertir feedback visual explícito de Miguel en trazabilidad y aprendizaje durable sin convertir el Home en base creativa ni elevar un caso aislado a regla universal.

## Antes de actuar

1. Identificar vehículo/proyecto, pieza/versión y decisión de Miguel.
2. Si corresponde a una unidad real, leer completo su `Vehiculos/.../PUENTE.md` vigente.
3. Revisar el archivo/pieza real en Drive; no basarse únicamente en una descripción textual.
4. Leer en `AFL_AUTOS_CONTENT_SYSTEM`:
   - `START_HERE.md`;
   - `STATUS_RULES.md`;
   - `formats/ACTIVE_VISUAL_DIRECTION.md`;
   - `formats/FLYERS_PORTADAS.md`;
   - `formats/FLYER_ENGINE.md`;
   - `formats/FLYER_FAMILIES.md`;
   - `library/flyer_audit/REFERENCE_STATUS.md`;
   - `library/flyer_audit/VISUAL_FEEDBACK_LOG.md`;
   - `library/flyer_audit/POSITIVE_REFERENCES.md`;
   - `library/flyer_audit/NEGATIVE_CASES.md`.
5. Hacer fetch vigente antes de modificar archivos porque existen chats concurrentes.

## Decisiones válidas

Registrar exactamente la decisión indicada por Miguel:

- `APROBADO_POR_MIGUEL`
- `REQUIERE_CORRECCION`
- `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`

No inferir aprobación desde producción, subida, existencia de archivo o solicitud de una nueva versión.

## Qué registrar

Conservar de forma sanitizada:

- fecha;
- vehículo/proyecto;
- pieza/versión exacta;
- decisión;
- qué no gustó;
- qué sí conservar;
- referencia visual opcional;
- comentario de Miguel;
- nivel de aprendizaje;
- alcance: caso particular / hipótesis / patrón / dirección transversal.

No guardar PII ni datos técnicos innecesarios.

## Persistencia

### Caso / feedback

Actualizar `library/flyer_audit/VISUAL_FEEDBACK_LOG.md` y, cuando el caso lo justifique, crear/actualizar un caso específico en `AFL_AUTOS_CONTENT_SYSTEM/cases/`.

### Referencias

Actualizar `library/flyer_audit/REFERENCE_STATUS.md` cuando una pieza deba clasificarse como:

- `REFERENCIA_POSITIVA_APROBADA_POR_MIGUEL`
- `REFERENCIA_NEGATIVA_RECHAZADA_POR_MIGUEL`
- `REFERENCIA_HISTORICA_NO_VALIDADA`

Una aprobación visual no convierte la pieza en fuente técnica.

### Casos negativos

Si Miguel rechaza una pieza, conservarla y registrar el patrón en `NEGATIVE_CASES.md` cuando aporte valor preventivo. No borrarla ni sobrescribirla.

### Dirección visual activa

Actualizar `formats/ACTIVE_VISUAL_DIRECTION.md` SOLO si:

- Miguel da una instrucción transversal explícita; o
- el aprendizaje es realmente generalizable y está suficientemente respaldado.

No usar un solo rechazo/aprobación como justificación automática para cambiar la dirección global.

## Estados de aprendizaje

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

`CASO_PARTICULAR ≠ REGLA_GENERAL ≠ APRENDIZAJE_VALIDADO`

## Estado de contenido

Mantener estrictamente:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

Si la decisión es rechazo, registrar:

`RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`

No publicar automáticamente.

## Entrega

Devolver:

- decisión registrada;
- archivos de aprendizaje actualizados/creados;
- si `ACTIVE_VISUAL_DIRECTION.md` cambió o NO cambió y por qué;
- clasificación de referencia;
- nivel de aprendizaje;
- commits;
- siguiente paso creativo.
