# AFL AUTOS — Deletion readiness / flujos históricos

Estado: `LISTO_PARA_REVISION_DE_BORRADO / BORRADO_NO_AUTORIZADO`

Fuente: https://drive.google.com/drive/folders/1UrpzTd66QDpfxy4So5BEyQXWF1wKc7Rz

Fecha: `2026-09-11`

## Checklist

- [x] inventario físico reconciliado — `39 archivos / 0 carpetas`.
- [x] diferencia `36 vs 39` explicada — 36 entradas de auditoría sustantiva + 2 capturas fuera de alcance + 1 PDF no utilizado en el primer corte.
- [x] auditoría guardada — `AUDITORIA_FLUJOS_HISTORICOS.md`.
- [x] ideas rescatables guardadas — `IDEAS_RESCATABLES.md`.
- [x] errores/antipatrones guardados — `ERRORES_Y_ANTI_PATRONES.md`.
- [x] Home objetivo guardado — `HOME_OBJETIVO.md`.
- [x] decisiones migración guardadas — `MIGRATION_DECISIONS.md`.
- [x] snapshot manifest reconciliado — `SOURCE_SNAPSHOT_FLUJOS_2026-09-11.md`.
- [x] tabla de limpieza por entrada creada — `DRIVE_CLEANUP_DECISION_TABLE.md`.
- [x] duplicados exactos reconfirmados por SHA-256 — 3 grupos.
- [x] copia canónica elegida para cada grupo duplicado.
- [x] lineage V10/JSON/ZIP documentado.
- [x] `00_CONTROL_MAESTRO_AFL_AUTOS.pdf` revisado — `SUPERADO_POR_SISTEMA_ACTUAL`.
- [x] información privada fuera de alcance identificada — dos capturas; `SEPARAR_DE_AFL`.
- [x] información útil migrada — reglas/ideas materializadas en propuestas y Content System.
- [x] referencias internas de duplicados revisadas — no se encontraron referencias a las copias redundantes; el index V10 sin sufijo sí está referenciado históricamente.
- [x] RAW que debe conservarse identificado.
- [x] candidatos exactos y superados identificados.
- [ ] riesgo de enlaces Drive compartidos aceptado/verificado por Miguel — Drive marca los archivos como compartidos y la conexión no expone un historial exhaustivo de quién conserva URLs directas.
- [ ] autorización explícita de Miguel para borrar archivos concretos.

## Reconciliación 36 vs 39

Total directo actual: `39 archivos`.

Las tres entradas que explican el alcance inicial de 36 son:

- `Screenshot_20260821-135811_Chrome.png` — fuera de alcance / privacidad alta.
- `Screenshot_20260821-135807_Chrome.png` — fuera de alcance / privacidad alta.
- `00_CONTROL_MAESTRO_AFL_AUTOS.pdf` — estaba presente, pero fue expresamente excluido como fundamento del primer corte hasta revisión posterior.

No son altas nuevas y no son carpetas.

## PDF Control Maestro

Clasificación conceptual: `SUPERADO_POR_SISTEMA_ACTUAL`.

Acción de limpieza: `BORRADO_CANDIDATO_SUPERADO`.

Motivo: la estructura Drive-centric, el esquema de versionado y las reglas operativas útiles ya están preservadas en repositorios y documentación materializada. No se identificó una autoridad operativa única pendiente de migrar desde el PDF.

## Duplicados exactos

### D01
- Conservar: `PREVIEW_LOTE_10.png`.
- Candidato: `PREVIEW_LOTE_10 (1).png`.
- SHA-256: `1b7611a7efd4e7c999eb5b673852c77d5cd1a834fd9db78f0bd6e54e25c08ee7`.

### D02
- Conservar: `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO.md`.
- Candidato: `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO-1.md`.
- SHA-256: `ef4e3d973704ff755fd04d88345d1e5baa5194fa83d03ffa8390bfd594411424`.

### D03
- Conservar: `index_afl_autos_operacion_comercial_v10.html`.
- Candidato: `index_afl_autos_operacion_comercial_v10 (1).html`.
- SHA-256: `c894c959c63d36ef2d8739430aa2c1c6a8e3c16ed3fe0e1252b82952b09b14c1`.

Los contextos RAW del 5-Sep y el snapshot ZIP respaldan conservar el nombre V10 sin sufijo.

## RAW / lineage a conservar

### CONSERVAR_RAW
- `BITACORA_DIARIA_AFL_AUTOS_02JUN_31AGO2026_V10.md`.
- `AFL_AUTOS_DATOS_COMPLETOS_V10_31AGO2026.json`.
- `AFL_AUTOS_DATOS_COMPLETOS_V10_31AGO2026 (1).json`.
- `AFL_AUTOS_DATOS_COMPLETOS_V10_03SEP2026.json`.
- `2026-09-05_195640_actualizacion-index-flyers-exportaciones_AJJNTR.md`.
- `2026-09-05_183150_sistema-generador-flyers-lariat-drive_MYU8S5.md`.

### CONSERVAR_LINEAGE
- `MANUAL_USUARIO_AFL_AUTOS_V10.md`.
- `indexv1.html`.
- `index.html` de la carpeta histórica.
- `index_afl_autos_operacion_comercial_v10.html`.
- `index_afl_autos_operacion_comercial_v10 (2).html`.
- `index_afl_autos_operacion_comercial_v10 (3).html`.
- `BACKUP_PRE_AFL0032_index_afl_autos_operacion_comercial_v10.html`.
- `AFL_AUTOS_V10_ACTUALIZADO_03SEP2026.zip`.
- `AFL_AUTOS_RESPONDER_V1.html`.
- `AFL_AUTOS_CONTENT_SALES_ENGINE_V4.html`.

La tabla detallada conserva referencias adicionales que deben mantenerse como evidencia/referencia.

## Fuera de alcance

- `Screenshot_20260821-135807_Chrome.png`.
- `Screenshot_20260821-135811_Chrome.png`.

Clasificación: `SEPARAR_DE_AFL / PRIVACIDAD_ALTA`.

No describir, publicar, mover ni borrar sin autorización de Miguel.

## Candidatos de borrado técnico

### Exactos
- `PREVIEW_LOTE_10 (1).png`.
- `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO-1.md`.
- `index_afl_autos_operacion_comercial_v10 (1).html`.

### Superados
- `PRESENTACION_PONCHO_PLAN_SEMANAL.html`.
- `07_CONTEXTO_MAESTRO.png`.
- `02_INSTALACION.png`.
- `01_INTRODUCCION.png`.
- `00_PORTADA.png`.
- `00_CONTROL_MAESTRO_AFL_AUTOS.pdf`.

## Dependencia residual

Las dependencias internas conocidas ya están resueltas para los candidatos anteriores. Sin embargo, Drive reporta estas entradas como compartidas y no existe en la conexión disponible un historial exhaustivo que pruebe que un URL directo nunca fue compartido externamente.

Por esa razón el estado NO sube todavía a `LISTO_PARA_AUTORIZACION_DE_MIGUEL`.

Miguel debe decidir si acepta que los URLs individuales de los candidatos dejen de funcionar si autoriza su borrado.

## Autorización

Estado actual:

`AUTORIZACION_MIGUEL = PENDIENTE`

Este documento no concede autorización de borrado.
