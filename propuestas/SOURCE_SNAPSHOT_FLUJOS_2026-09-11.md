# AFL AUTOS — Source snapshot / flujos históricos — 2026-09-11

Estado: `MANIFIESTO_PRESERVADO / FUENTE_ORIGINAL_INTACTA`

Fuente Drive: https://drive.google.com/drive/folders/1UrpzTd66QDpfxy4So5BEyQXWF1wKc7Rz

Fecha de materialización: `2026-09-11`

## Control de conteo

- Alcance declarado por la auditoría previa: `36 archivos auditados`.
- Inventario directo observado durante el primer corte de la carpeta: `39 entradas`.
- Estado: `DISCREPANCIA_DE_CONTEO_PENDIENTE_RECONCILIACION`.

No se altera el conteo para hacerlo coincidir artificialmente. Esta discrepancia bloquea cualquier afirmación de `36/36` listo para borrado hasta revisión manual.

## Clasificaciones permitidas

- `CONSERVAR_RAW`
- `CONSERVAR_LINEAGE`
- `MIGRADO_APRENDIZAJE`
- `SUPERADO_POR_SISTEMA_ACTUAL`
- `DUPLICADO_EXACTO_CANDIDATO_BORRADO`
- `FUERA_DE_ALCANCE_PRIVADO`
- `REQUIERE_REVISION_MANUAL`

## Manifiesto de entradas observadas

| # | Filename | Familia/tipo | Clasificación | Nota / lineage |
|---:|---|---|---|---|
| 1 | `Screenshot_20260821-135811_Chrome.png` | captura fuera de AFL | `FUERA_DE_ALCANCE_PRIVADO` | Privacidad alta. No reproducir, migrar ni incluir en ZIP histórico AFL. |
| 2 | `Screenshot_20260821-135807_Chrome.png` | captura fuera de AFL | `FUERA_DE_ALCANCE_PRIVADO` | Privacidad alta. No reproducir, migrar ni incluir en ZIP histórico AFL. |
| 3 | `REPORTE_TRABAJO_AFL_AUTOS_JUNIO_AGOSTO_2026_V10.md` | documentación | `CONSERVAR_RAW` | Evidencia histórica; sanitizar antes de reutilización pública. |
| 4 | `PREVIEW_LOTE_10.png` | visual / flyers | `MIGRADO_APRENDIZAJE` | Fuente visual de auditoría. Grupo duplicado D01. |
| 5 | `PREVIEW_LOTE_10 (1).png` | visual / flyers | `DUPLICADO_EXACTO_CANDIDATO_BORRADO` | Duplicado exacto D01; no borrar todavía. |
| 6 | `PRESENTACION_PONCHO_PLAN_SEMANAL.html` | documentación/presentación | `SUPERADO_POR_SISTEMA_ACTUAL` | Conserva evidencia de enfoque semanal y métricas; no usar como sistema vigente. |
| 7 | `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO.md` | moodboard | `MIGRADO_APRENDIZAJE` | Dirección artística; grupo duplicado D02. |
| 8 | `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO-1.md` | moodboard | `DUPLICADO_EXACTO_CANDIDATO_BORRADO` | Duplicado exacto D02; no borrar todavía. |
| 9 | `MANUAL_USUARIO_AFL_AUTOS_V10.md` | documentación | `CONSERVAR_LINEAGE` | Describe funcionamiento del monolito V10 y reglas históricas. |
| 10 | `indexv1.html` | código / Master System V4 | `SUPERADO_POR_SISTEMA_ACTUAL` | Antecesor del Home; conservar hasta cierre de lineage. |
| 11 | `index.html` | código / Master System V4 | `SUPERADO_POR_SISTEMA_ACTUAL` | Variante del Home antiguo; no confundir con `AFL_AUTOS_OPERACION/index.html` vigente. |
| 12 | `index_afl_autos_operacion_comercial_v10.html` | código V10 | `CONSERVAR_LINEAGE` | Copia canónica de grupo D03. |
| 13 | `index_afl_autos_operacion_comercial_v10 (3).html` | código V10 evolucionado | `CONSERVAR_LINEAGE` | Evolución posterior con cambios de flyers/lotes; no es duplicado confirmado. |
| 14 | `index_afl_autos_operacion_comercial_v10 (2).html` | código V10 anterior | `CONSERVAR_LINEAGE` | Versión anterior; no es duplicado confirmado. |
| 15 | `index_afl_autos_operacion_comercial_v10 (1).html` | código V10 | `DUPLICADO_EXACTO_CANDIDATO_BORRADO` | Duplicado exacto D03; no borrar todavía. |
| 16 | `BITACORA_DIARIA_AFL_AUTOS_02JUN_31AGO2026_V10.md` | documentación/PII | `CONSERVAR_RAW` | Privado. Contiene evidencia histórica y datos identificables; no publicar. |
| 17 | `BACKUP_PRE_AFL0032_index_afl_autos_operacion_comercial_v10.html` | backup código | `CONSERVAR_LINEAGE` | Snapshot previo a corrección de AFL-0032. Dependencia de lineage. |
| 18 | `AUDITORIA_META_EXPORT_30AGO2026_V10.md` | análisis | `MIGRADO_APRENDIZAJE` | Metodología y reglas aptas para Platform tras sanitización. |
| 19 | `AFL_AUTOS_V10_ACTUALIZADO_03SEP2026.zip` | snapshot ZIP | `CONSERVAR_LINEAGE` | Snapshot autocontenido; no sobrescribir con archivos sueltos. |
| 20 | `AFL_AUTOS_RESPONDER_V1.html` | código / comercial | `MIGRADO_APRENDIZAJE` | Intención → respuesta → pregunta útil → siguiente acción. Futuro Comercial, no crear aún. |
| 21 | `AFL_AUTOS_DATOS_COMPLETOS_V10_31AGO2026.json` | RAW JSON | `CONSERVAR_RAW` | Base histórica sensible; no publicar ni importar masivamente. |
| 22 | `AFL_AUTOS_DATOS_COMPLETOS_V10_31AGO2026 (1).json` | RAW JSON evolucionado | `CONSERVAR_RAW` | No asumir duplicado; tamaño/contenido distinto. |
| 23 | `AFL_AUTOS_DATOS_COMPLETOS_V10_03SEP2026.json` | RAW JSON | `CONSERVAR_RAW` | Incluye evolución posterior; nombre/fecha no bastan para lineage. |
| 24 | `AFL_AUTOS_CONTENT_SALES_ENGINE_V4.html` | código / prototipo | `MIGRADO_APRENDIZAJE` | Flujo contenido+ventas rescatado conceptualmente; no migrar monolito. |
| 25 | `ACUERDOS_OPERACION_LOCAL_AFL_AUTOS_V10.md` | documentación | `MIGRADO_APRENDIZAJE` | Reglas operativas históricas; varias ya viven en sistema actual. |
| 26 | `2026-09-05_195640_actualizacion-index-flyers-exportaciones_AJJNTR.md` | RAW contexto chat | `CONSERVAR_RAW` | Evidencia de V11/V12 y regla de evidencia/publicación. |
| 27 | `2026-09-05_183150_sistema-generador-flyers-lariat-drive_MYU8S5.md` | RAW contexto chat | `CONSERVAR_RAW` | Evidencia de generador por lotes, reglas y estructura histórica. |
| 28 | `14_PREGUNTAS_FRECUENTES.md.png` | visual/manual | `MIGRADO_APRENDIZAJE` | Antecedente de reglas y respuestas; no fuente técnica. |
| 29 | `11_MEMORIA EDITORIAL.png` | visual/manual | `MIGRADO_APRENDIZAJE` | Antecedente de aprendizaje editorial; sistema actual usa estados más estrictos. |
| 30 | `10_PROSPECTOS_Y_CRM.png` | visual/manual | `MIGRADO_APRENDIZAJE` | Antecedente comercial; no migrar PII ni CRM al Home. |
| 31 | `09_PUBLICACION.png` | visual/manual | `MIGRADO_APRENDIZAJE` | Reglas de revisión/publicación; no fuente técnica. |
| 32 | `08_PRODUCCION_CON_IA.png` | visual/manual | `MIGRADO_APRENDIZAJE` | Buenas prácticas de producción; no convertir ejemplos en evidencia. |
| 33 | `07_CONTEXTO_MAESTRO.png` | visual/manual | `SUPERADO_POR_SISTEMA_ACTUAL` | Concepto reemplazado por `PUENTE.md` + fuentes separadas. |
| 34 | `06_PRODUCCION_MULTIMEDIA.md.png` | visual/manual | `MIGRADO_APRENDIZAJE` | Reglas de producción multimedia rescatables. |
| 35 | `05_CHECKLIST.md.png` | visual/manual | `MIGRADO_APRENDIZAJE` | Checklist histórico; hoy se adapta por vehículo/PLAN_CAPTURA. |
| 36 | `02_INSTALACION.png` | visual/manual | `SUPERADO_POR_SISTEMA_ACTUAL` | Instalación/flujo legacy; no restaurar. |
| 37 | `01_INTRODUCCION.png` | visual/manual | `SUPERADO_POR_SISTEMA_ACTUAL` | Introducción al sistema legacy. |
| 38 | `00_PORTADA.png` | visual/manual | `SUPERADO_POR_SISTEMA_ACTUAL` | Portada histórica sin autoridad actual. |
| 39 | `00_CONTROL_MAESTRO_AFL_AUTOS.pdf` | PDF | `REQUIERE_REVISION_MANUAL` | No utilizado para fundamentar conclusiones del primer corte. Revisar antes de cualquier decisión de borrado. |

## Duplicados exactos confirmados

### D01 — Preview lote 10

- `PREVIEW_LOTE_10.png`
- `PREVIEW_LOTE_10 (1).png`
- SHA-256: `1b7611a7efd4e7c999eb5b673852c77d5cd1a834fd9db78f0bd6e54e25c08ee7`

### D02 — Moodboard Mes Patrio

- `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO.md`
- `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO-1.md`
- SHA-256: `ef4e3d973704ff755fd04d88345d1e5baa5194fa83d03ffa8390bfd594411424`

### D03 — index V10

- `index_afl_autos_operacion_comercial_v10.html`
- `index_afl_autos_operacion_comercial_v10 (1).html`
- SHA-256: `c894c959c63d36ef2d8739430aa2c1c6a8e3c16ed3fe0e1252b82952b09b14c1`

No asumir otros duplicados solo por nombre o tamaño.

## Lineage importante

- `index_afl_autos_operacion_comercial_v10 (2).html` → etapa anterior.
- `BACKUP_PRE_AFL0032_index_afl_autos_operacion_comercial_v10.html` → snapshot previo a corrección AFL-0032.
- `index_afl_autos_operacion_comercial_v10.html` / `(1)` → mismo contenido confirmado.
- `index_afl_autos_operacion_comercial_v10 (3).html` → evolución posterior con cambios en generación de flyers/lotes.
- `AFL_AUTOS_V10_ACTUALIZADO_03SEP2026.zip` → snapshot histórico que no debe asumirse idéntico a los archivos sueltos de nombre/fecha similar.
- JSON 31AGO y 03SEP → generaciones diferentes; no fusionar automáticamente.

## Privacidad

Las dos capturas `Screenshot_20260821-...` se registran únicamente como:

`FUERA_DE_ALCANCE / PRIVACIDAD_ALTA`

No se reproduce su contenido.

La bitácora y JSON históricos también deben considerarse privados por contener o poder contener PII y datos técnicos/comerciales sensibles.

## RAW

RAW/privado a conservar por ahora:
- JSON V10;
- bitácora;
- contextos RAW del 5-Sep;
- ZIP snapshot;
- cualquier evidencia histórica que permita reconciliar lineage o datos antes de migración.

## Regla de borrado

Este manifiesto NO autoriza borrado.

Los duplicados exactos son solamente candidatos. Antes de eliminarlos se debe:
1. reconciliar el conteo declarado vs inventario observado;
2. verificar dependencias/referencias;
3. elegir copia canónica;
4. confirmar que el hash duplicado sigue vigente;
5. obtener autorización explícita de Miguel.