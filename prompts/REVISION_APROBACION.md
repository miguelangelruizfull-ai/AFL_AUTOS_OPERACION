# Prompt base — Revisión / aprobación

Objetivo: revisar un paquete producido contra las fuentes vigentes, la dirección visual activa y los aprendizajes aplicables, sin convertir producción, subida o revisión en aprobación automática.

## Antes de actuar

1. Leer `PUENTE.md` vigente.
2. Identificar cada pieza a revisar: flyer, historia, portada, Facebook Reel, TikTok, copy u otra.
3. Verificar `AFL_AUTOS_CONTENT_SYSTEM/START_HERE.md`, `STATUS_RULES.md` y reglas de evidencia/publicación.
4. Revisar los archivos realmente producidos/subidos, no solo su descripción textual.
5. Comprobar datos publicables y evidencia visual.
6. Para piezas gráficas leer además `formats/ACTIVE_VISUAL_DIRECTION.md`, `library/flyer_audit/REFERENCE_STATUS.md` y `VISUAL_FEEDBACK_LOG.md`.

## Gate para flyers, historias, portadas y feed

Consultar obligatoriamente:

- `docs/BRAND_ASSETS.md`;
- `formats/ACTIVE_VISUAL_DIRECTION.md`;
- `formats/FLYERS_PORTADAS.md`;
- `formats/FLYER_ENGINE.md`;
- `formats/FLYER_FAMILIES.md`;
- `library/flyer_audit/COMMON_ERRORS.md`;
- `library/flyer_audit/REFERENCE_STATUS.md`;
- referencias `REFERENCIA_POSITIVA_APROBADA_POR_MIGUEL` cuando existan;
- `library/flyer_audit/POSITIVE_REFERENCES.md` como histórico no validado salvo promoción explícita;
- `library/flyer_audit/NEGATIVE_CASES.md` y `VISUAL_FEEDBACK_LOG.md`;
- campaña/moodboard vigente cuando aplique.

Comprobar explícitamente:

- cumplimiento de la dirección visual activa;
- HERO dominante;
- fondo suficientemente limpio/controlado;
- un solo tratamiento de marca/logo;
- `NO ICONOS` ni pictogramas decorativos/técnicos;
- jerarquía `VEHICULO → MARCA/MODELO/AÑO → DIFERENCIADOR → CTA → LOGO`;
- título compacto;
- 2–4 datos máximo y todos publicables;
- CTA único y subordinado;
- espacio negativo y lectura móvil sin zoom;
- apariencia contemporánea/editorial, no plantilla genérica;
- composición específica por formato, no simple recorte del mismo diseño;
- ausencia de errores/patrones rechazados ya documentados.

Si incumple de forma relevante, devolver corrección concreta o `REQUIERE_CORRECCION` / `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`; no aprobar por estar técnicamente correcto.

No aceptar la etiqueta `premium` como evidencia de calidad. Una variante `premium` debe demostrar una dirección visual realmente diferente y más sólida.

## Gate para Facebook Reel y TikTok

Consultar obligatoriamente:

- `networks/tiktok/EDITORIAL_ENGINE.md`;
- `networks/tiktok/FORMAT_FAMILIES.md`;
- `networks/tiktok/HOOKS_AND_CTA.md`;
- `networks/tiktok/VIDEO_AUDIT_INDEX.md`.

Comprobar explícitamente:

- familia editorial declarada;
- objetivo real de la pieza;
- hook comprensible en 0–3 s;
- secuencia coherente con la familia;
- duración razonable o justificada;
- una idea principal al inicio;
- CTA principal único;
- ausencia de saludo largo/ficha técnica/cierre largo/logos de otra unidad/datos históricos obsoletos;
- adaptación específica para TikTok o Facebook Reel, no clon automático cuando ambas versiones existen;
- comparación con al menos un caso histórico similar cuando exista;
- variable creativa identificada si se está probando algo.

La auditoría histórica orienta la edición; no permite reutilizar datos técnicos desde overlays históricos.

## Decisión de revisión

Registrar explícitamente una de estas decisiones cuando Miguel la haya dado:

- `APROBADO_POR_MIGUEL`
- `REQUIERE_CORRECCION`
- `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`

Estados operativos auxiliares que pueden existir antes de la decisión de Miguel:

- `LISTO_PARA_REVISION_MIGUEL`
- `BLOQUEADO_POR_FOTO`
- `BLOQUEADO_POR_MATERIAL`

Nunca inferir aprobación desde `PRODUCIDO`, `SUBIDO_A_DRIVE`, una nueva versión solicitada o la palabra `premium`.

## Si Miguel rechaza una pieza

1. Conservar la pieza; no borrarla ni sobrescribirla.
2. Registrar por qué fue rechazada.
3. Extraer posibles aprendizajes como `OBSERVACION` o `HIPOTESIS` cuando corresponda.
4. NO promover automáticamente el caso a regla universal ni `APRENDIZAJE_VALIDADO`.
5. Usar `prompts/REVISAR_DISENO_APRENDIZAJE.md` para persistir feedback en `AFL_AUTOS_CONTENT_SYSTEM`.
6. Clasificarla como `REFERENCIA_NEGATIVA_RECHAZADA_POR_MIGUEL` cuando corresponda.
7. Actualizar `formats/ACTIVE_VISUAL_DIRECTION.md` únicamente si Miguel dio una instrucción transversal explícita o el aprendizaje es realmente generalizable.

## Si Miguel aprueba una pieza

1. Registrar `APROBADO_POR_MIGUEL` para esa pieza exacta.
2. No inferir `PROGRAMADO` ni `PUBLICADO`.
3. Si Miguel también indica que debe servir como referencia futura, registrarla como `REFERENCIA_POSITIVA_APROBADA_POR_MIGUEL`.
4. La aprobación visual no convierte datos de la pieza en evidencia técnica reutilizable.

## Regla de aprendizaje

`CASO_PARTICULAR ≠ REGLA_GENERAL ≠ APRENDIZAJE_VALIDADO`

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

## Estados

Mantener estrictamente:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

No publicar automáticamente.
