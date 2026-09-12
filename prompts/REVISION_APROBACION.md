# Prompt base — Revisión / aprobación

Objetivo: revisar una pieza real contra reglas activas con una ruta rápida, sin convertir producción/subida en aprobación automática.

## FAST PATH

1. Leer `Vehiculos/.../PUENTE.md` vigente.
2. Identificar la pieza exacta y abrirla en Drive.
3. Leer `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`.
4. Comprobar fidelidad, datos publicables, jerarquía y formato.
5. Si el runtime resuelve el caso, NO releer toda la auditoría histórica.
6. Abrir fuentes profundas solo por contradicción, bloqueo, rediseño importante o auditoría solicitada.

## Gate gráfico rápido

- fotografía preparada antes de pieza final;
- HERO dominante;
- fondo limpio/controlado;
- logo oficial único;
- `NO ICONOS`;
- jerarquía `VEHICULO → MARCA/MODELO/AÑO → DIFERENCIADOR → CTA → LOGO`;
- 2–4 datos máximo y todos publicables;
- CTA único y subordinado;
- espacio negativo;
- lectura móvil;
- apariencia contemporánea/editorial;
- composición específica por formato;
- no plantilla genérica;
- `premium` no es evidencia de calidad.

Si incumple de forma relevante, no aprobar por estar técnicamente correcto.

## Gate audiovisual rápido

- familia editorial;
- objetivo;
- hook comprensible en 0–3 s;
- una idea principal al inicio;
- secuencia coherente;
- duración razonable;
- CTA principal único;
- adaptación por red;
- sin ficha técnica inicial ni cierre largo;
- edición moderna funcional, no decorativa;
- no copiar overlays históricos como datos vigentes.

Consultar `networks/tiktok/EDITING_EFFECTS_LIBRARY.md` cuando el problema sea ritmo, montaje, transiciones o modernidad.

## Ruta profunda

Cuando haga falta consultar:

### Gráfico
- `formats/ACTIVE_VISUAL_DIRECTION.md`;
- `formats/FLYERS_PORTADAS.md`;
- `formats/FLYER_ENGINE.md`;
- `formats/FLYER_FAMILIES.md`;
- `library/flyer_audit/COMMON_ERRORS.md`;
- `library/flyer_audit/REFERENCE_STATUS.md`;
- `POSITIVE_REFERENCES.md`;
- `NEGATIVE_CASES.md`;
- `VISUAL_FEEDBACK_LOG.md`.

### Video
- `networks/tiktok/EDITORIAL_ENGINE.md`;
- `FORMAT_FAMILIES.md`;
- `HOOKS_AND_CTA.md`;
- `EDITING_EFFECTS_LIBRARY.md`;
- `VIDEO_AUDIT_INDEX.md`.

## Decisiones válidas

Cuando Miguel decida, registrar exactamente:

- `APROBADO_POR_MIGUEL`
- `REQUIERE_CORRECCION`
- `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`

Antes de esa decisión pueden existir:

- `LISTO_PARA_REVISION_MIGUEL`
- `BLOQUEADO_POR_FOTO`
- `BLOQUEADO_POR_MATERIAL`

Nunca inferir aprobación desde `PRODUCIDO`, `SUBIDO_A_DRIVE`, una nueva versión o `premium`.

## Si Miguel aprueba

1. Registrar aprobación de la pieza exacta.
2. No inferir programación/publicación.
3. Promover a referencia positiva futura solo si Miguel lo indica expresamente.
4. Devolver `LINK_PRINCIPAL` y siguiente paso.

## Si Miguel corrige/rechaza

1. Conservar la pieza.
2. Registrar motivo.
3. No publicar.
4. Usar `prompts/REVISAR_DISENO_APRENDIZAJE.md`.
5. Crear nueva versión sin sobrescribir.
6. Devolver corrección concreta y `SIGUIENTE_PASO`.

## Aprendizaje

`CASO_PARTICULAR ≠ REGLA_GENERAL ≠ APRENDIZAJE_VALIDADO`

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

## Estados

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

No publicar automáticamente.

Al finalizar devolver retorno estructurado con `LINK_PRINCIPAL`, `BLOQUEADO`, `ESPERANDO_MIGUEL`, `ACCION_MIGUEL` y `SIGUIENTE_PASO`.