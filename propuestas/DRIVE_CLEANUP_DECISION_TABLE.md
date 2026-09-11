# AFL AUTOS — Drive cleanup decision table — flujos históricos

Estado: `BORRADO_AUTORIZADO_POR_MIGUEL / DEPURACION_EJECUTADA`

Fuente Drive: https://drive.google.com/drive/folders/1UrpzTd66QDpfxy4So5BEyQXWF1wKc7Rz

Fecha de ejecución: `2026-09-11`

## Resultado verificado

- Total antes: `39 archivos / 0 carpetas`.
- Separados de AFL sin borrar: `2`.
- Eliminados con autorización explícita: `9`.
- Total después en carpeta AFL: `28 archivos / 0 carpetas`.
- No se eliminó ningún archivo fuera de la autorización de Miguel.
- Las dos capturas fuera de alcance fueron movidas a `MIGUEL_ARCHIVO_PERSONAL` y verificadas allí.
- Las copias canónicas de los tres grupos duplicados permanecen en la carpeta AFL.
- RAW, lineage y referencias protegidas fueron verificados presentes tras la limpieza.

`BORRADO_AUTORIZADO_POR_MIGUEL / DEPURACION_EJECUTADA` aplica únicamente a las nueve filas marcadas como `ELIMINADO_VERIFICADO`.

## Tabla final

| Archivo | Tipo | Rol histórico | Clasificación final | Estado físico | Acción ejecutada / motivo |
|---|---|---|---|---|---|
| `Screenshot_20260821-135811_Chrome.png` | PNG | Fuera de AFL | `SEPARAR_DE_AFL` | `SEPARADO_VERIFICADO` | Movido sin borrar a `MIGUEL_ARCHIVO_PERSONAL` |
| `Screenshot_20260821-135807_Chrome.png` | PNG | Fuera de AFL | `SEPARAR_DE_AFL` | `SEPARADO_VERIFICADO` | Movido sin borrar a `MIGUEL_ARCHIVO_PERSONAL` |
| `REPORTE_TRABAJO_AFL_AUTOS_JUNIO_AGOSTO_2026_V10.md` | Markdown | Reporte histórico | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Conservado |
| `PREVIEW_LOTE_10.png` | PNG | Evidencia visual de flyers | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Copia canónica D01 conservada |
| `PREVIEW_LOTE_10 (1).png` | PNG | Duplicado exacto | `BORRADO_CANDIDATO_EXACTO` | `ELIMINADO_VERIFICADO` | Hash reconfirmado; borrado autorizado |
| `PRESENTACION_PONCHO_PLAN_SEMANAL.html` | HTML | Presentación semanal legacy | `BORRADO_CANDIDATO_SUPERADO` | `ELIMINADO_VERIFICADO` | Borrado autorizado; aprendizaje ya preservado |
| `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO.md` | Markdown | Moodboard histórico | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Copia canónica D02 conservada |
| `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO-1.md` | Markdown | Duplicado exacto | `BORRADO_CANDIDATO_EXACTO` | `ELIMINADO_VERIFICADO` | Hash reconfirmado; borrado autorizado |
| `MANUAL_USUARIO_AFL_AUTOS_V10.md` | Markdown | Manual V10 | `CONSERVAR_LINEAGE` | `PRESENTE_VERIFICADO` | Conservado |
| `indexv1.html` | HTML | Master System V4 legacy | `CONSERVAR_LINEAGE` | `PRESENTE_VERIFICADO` | Conservado |
| `index.html` | HTML | Master System V4 legacy | `CONSERVAR_LINEAGE` | `PRESENTE_VERIFICADO` | Conservado |
| `index_afl_autos_operacion_comercial_v10.html` | HTML | V10 canónico | `CONSERVAR_LINEAGE` | `PRESENTE_VERIFICADO` | Copia canónica D03 conservada |
| `index_afl_autos_operacion_comercial_v10 (3).html` | HTML | V10 evolucionado | `CONSERVAR_LINEAGE` | `PRESENTE_VERIFICADO` | Conservado |
| `index_afl_autos_operacion_comercial_v10 (2).html` | HTML | V10 anterior | `CONSERVAR_LINEAGE` | `PRESENTE_VERIFICADO` | Conservado |
| `index_afl_autos_operacion_comercial_v10 (1).html` | HTML | Duplicado exacto V10 | `BORRADO_CANDIDATO_EXACTO` | `ELIMINADO_VERIFICADO` | Hash reconfirmado; borrado autorizado |
| `BITACORA_DIARIA_AFL_AUTOS_02JUN_31AGO2026_V10.md` | Markdown | Bitácora histórica | `CONSERVAR_RAW` | `PRESENTE_VERIFICADO` | Conservado privado |
| `BACKUP_PRE_AFL0032_index_afl_autos_operacion_comercial_v10.html` | HTML | Snapshot previo AFL-0032 | `CONSERVAR_LINEAGE` | `PRESENTE_VERIFICADO` | Conservado |
| `AUDITORIA_META_EXPORT_30AGO2026_V10.md` | Markdown | Auditoría Meta | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Conservado |
| `AFL_AUTOS_V10_ACTUALIZADO_03SEP2026.zip` | ZIP | Snapshot autocontenido | `CONSERVAR_LINEAGE` | `PRESENTE_VERIFICADO` | Conservado |
| `AFL_AUTOS_RESPONDER_V1.html` | HTML | Prototipo comercial | `CONSERVAR_LINEAGE` | `PRESENTE_VERIFICADO` | Conservado |
| `AFL_AUTOS_DATOS_COMPLETOS_V10_31AGO2026.json` | JSON | RAW histórico | `CONSERVAR_RAW` | `PRESENTE_VERIFICADO` | Conservado privado |
| `AFL_AUTOS_DATOS_COMPLETOS_V10_31AGO2026 (1).json` | JSON | RAW histórico evolucionado | `CONSERVAR_RAW` | `PRESENTE_VERIFICADO` | Conservado privado |
| `AFL_AUTOS_DATOS_COMPLETOS_V10_03SEP2026.json` | JSON | RAW histórico | `CONSERVAR_RAW` | `PRESENTE_VERIFICADO` | Conservado privado |
| `AFL_AUTOS_CONTENT_SALES_ENGINE_V4.html` | HTML | Prototipo contenido+ventas | `CONSERVAR_LINEAGE` | `PRESENTE_VERIFICADO` | Conservado |
| `ACUERDOS_OPERACION_LOCAL_AFL_AUTOS_V10.md` | Markdown | Reglas históricas | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Conservado |
| `2026-09-05_195640_actualizacion-index-flyers-exportaciones_AJJNTR.md` | Markdown | Contexto RAW | `CONSERVAR_RAW` | `PRESENTE_VERIFICADO` | Conservado privado |
| `2026-09-05_183150_sistema-generador-flyers-lariat-drive_MYU8S5.md` | Markdown | Contexto RAW | `CONSERVAR_RAW` | `PRESENTE_VERIFICADO` | Conservado privado |
| `14_PREGUNTAS_FRECUENTES.md.png` | PNG | Referencia visual/manual | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Conservado |
| `11_MEMORIA EDITORIAL.png` | PNG | Referencia visual/manual | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Conservado |
| `10_PROSPECTOS_Y_CRM.png` | PNG | Referencia visual/manual | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Conservado |
| `09_PUBLICACION.png` | PNG | Referencia visual/manual | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Conservado |
| `08_PRODUCCION_CON_IA.png` | PNG | Referencia visual/manual | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Conservado |
| `07_CONTEXTO_MAESTRO.png` | PNG | Contexto Maestro legacy | `BORRADO_CANDIDATO_SUPERADO` | `ELIMINADO_VERIFICADO` | Borrado autorizado; concepto ya migrado |
| `06_PRODUCCION_MULTIMEDIA.md.png` | PNG | Referencia visual/manual | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Conservado |
| `05_CHECKLIST.md.png` | PNG | Referencia visual/manual | `CONSERVAR_REFERENCIA` | `PRESENTE_VERIFICADO` | Conservado |
| `02_INSTALACION.png` | PNG | Instalación legacy | `BORRADO_CANDIDATO_SUPERADO` | `ELIMINADO_VERIFICADO` | Borrado autorizado |
| `01_INTRODUCCION.png` | PNG | Introducción legacy | `BORRADO_CANDIDATO_SUPERADO` | `ELIMINADO_VERIFICADO` | Borrado autorizado |
| `00_PORTADA.png` | PNG | Portada legacy | `BORRADO_CANDIDATO_SUPERADO` | `ELIMINADO_VERIFICADO` | Borrado autorizado |
| `00_CONTROL_MAESTRO_AFL_AUTOS.pdf` | PDF | Control maestro legacy | `BORRADO_CANDIDATO_SUPERADO` | `ELIMINADO_VERIFICADO` | Borrado autorizado; aprendizaje preservado |

## Duplicados exactos ejecutados

### D01
- Conservado: `PREVIEW_LOTE_10.png`
- Eliminado: `PREVIEW_LOTE_10 (1).png`
- SHA-256 reconfirmado antes del borrado: `1b7611a7efd4e7c999eb5b673852c77d5cd1a834fd9db78f0bd6e54e25c08ee7`

### D02
- Conservado: `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO.md`
- Eliminado: `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO-1.md`
- SHA-256 reconfirmado antes del borrado: `ef4e3d973704ff755fd04d88345d1e5baa5194fa83d03ffa8390bfd594411424`

### D03
- Conservado: `index_afl_autos_operacion_comercial_v10.html`
- Eliminado: `index_afl_autos_operacion_comercial_v10 (1).html`
- SHA-256 reconfirmado antes del borrado: `c894c959c63d36ef2d8739430aa2c1c6a8e3c16ed3fe0e1252b82952b09b14c1`

## Separación de archivos fuera de alcance

Las dos capturas privadas fueron movidas, sin borrarse, a la carpeta personal existente:

`MIGUEL_ARCHIVO_PERSONAL`

No se reproduce ni describe su contenido.

## Regla posterior a la ejecución

La depuración autorizada queda cerrada. Cualquier limpieza adicional requiere una nueva revisión y una nueva autorización explícita de Miguel.