# AFL AUTOS — Drive cleanup decision table — flujos históricos

Estado: `PREPARACION_DE_LIMPIEZA / BORRADO_NO_AUTORIZADO`

Fuente Drive: https://drive.google.com/drive/folders/1UrpzTd66QDpfxy4So5BEyQXWF1wKc7Rz

Fecha: `2026-09-11`

Total actual verificado directamente en Drive: `39 archivos / 0 carpetas`.

## Reglas

- Esta tabla NO autoriza borrado.
- `BORRADO_CANDIDATO_*` significa únicamente que el archivo puede proponerse a Miguel para eliminación después de revisar el riesgo de enlaces compartidos.
- Drive reporta los archivos como compartidos; la conexión disponible no permite demostrar si algún enlace directo fue enviado fuera de las fuentes auditadas.
- Para RAW/lineage, preservar capacidad de reconstruir decisiones históricas.
- Las dos capturas privadas se clasifican sin describir su contenido.

| Archivo | Tipo | Rol histórico | Dependencias | Privacidad | Aprendizaje migrado | Clasificación | Acción propuesta | Motivo |
|---|---|---|---|---|---|---|---|---|
| `Screenshot_20260821-135811_Chrome.png` | PNG | Fuera de AFL | Ninguna dependencia AFL conocida | Alta / fuera de alcance | No aplica | `SEPARAR_DE_AFL` | Separar de esta carpeta cuando Miguel autorice | No pertenece al archivo histórico AFL; no describir ni publicar |
| `Screenshot_20260821-135807_Chrome.png` | PNG | Fuera de AFL | Ninguna dependencia AFL conocida | Alta / fuera de alcance | No aplica | `SEPARAR_DE_AFL` | Separar de esta carpeta cuando Miguel autorice | No pertenece al archivo histórico AFL; no describir ni publicar |
| `REPORTE_TRABAJO_AFL_AUTOS_JUNIO_AGOSTO_2026_V10.md` | Markdown | Reporte histórico | Referencia de hitos/métricas V10 | Interna; sanitizar antes de publicar | Parcial | `CONSERVAR_REFERENCIA` | Conservar | Resume periodo histórico y límites de evidencia |
| `PREVIEW_LOTE_10.png` | PNG | Evidencia visual de lote de flyers | Ninguna referencia operativa exacta encontrada; copia canónica D01 | Baja | Sí | `CONSERVAR_REFERENCIA` | Conservar como copia canónica | Preserva evidencia visual del lote auditado |
| `PREVIEW_LOTE_10 (1).png` | PNG | Duplicado visual | D01; sin referencia operativa exacta encontrada | Baja | Sí | `BORRADO_CANDIDATO_EXACTO` | Candidato a eliminar si Miguel autoriza | SHA-256 idéntico a `PREVIEW_LOTE_10.png` |
| `PRESENTACION_PONCHO_PLAN_SEMANAL.html` | HTML | Presentación semanal legacy | Sin dependencia interna exacta encontrada | Baja | Sí | `BORRADO_CANDIDATO_SUPERADO` | Candidato a eliminar si Miguel autoriza | Contenido resumido en reporte/auditoría y sistema actual; no es fuente vigente |
| `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO.md` | Markdown | Moodboard histórico | D02; el Content System tiene copia/camino canónico propio | Baja | Sí | `CONSERVAR_REFERENCIA` | Conservar como copia canónica Drive | Fuente histórica de dirección artística; no evidencia técnica |
| `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO-1.md` | Markdown | Duplicado moodboard | D02; sin referencia operativa específica encontrada | Baja | Sí | `BORRADO_CANDIDATO_EXACTO` | Candidato a eliminar si Miguel autoriza | SHA-256 idéntico al moodboard sin sufijo |
| `MANUAL_USUARIO_AFL_AUTOS_V10.md` | Markdown | Manual del monolito V10 | Explica operación/backup de V10 | Interna | Sí, parcialmente | `CONSERVAR_LINEAGE` | Conservar | Ayuda a reconstruir cómo operaba V10 |
| `indexv1.html` | HTML | Master System V4 legacy | Variante distinta de `index.html`; no duplicado exacto | Baja | Sí | `CONSERVAR_LINEAGE` | Conservar | Evidencia de evolución del Home/generador previo |
| `index.html` | HTML | Master System V4 legacy | Variante distinta de `indexv1.html`; no es el Home público vigente | Baja | Sí | `CONSERVAR_LINEAGE` | Conservar | Preserva otra etapa del Home antiguo |
| `index_afl_autos_operacion_comercial_v10.html` | HTML | V10 canónico | Referenciado explícitamente por los dos contextos RAW 05-Sep; nombre incluido en ZIP 03SEP | Interna | Sí | `CONSERVAR_LINEAGE` | Conservar como copia canónica D03 | Es el nombre histórico referenciado; no sustituir por `(1)` |
| `index_afl_autos_operacion_comercial_v10 (3).html` | HTML | V10 evolucionado | Diferente; cambios posteriores de flyers/lotes | Interna | Sí | `CONSERVAR_LINEAGE` | Conservar | Preserva evolución posterior no equivalente |
| `index_afl_autos_operacion_comercial_v10 (2).html` | HTML | V10 anterior | Diferente; etapa anterior | Interna | Sí | `CONSERVAR_LINEAGE` | Conservar | Necesario para lineage temporal |
| `index_afl_autos_operacion_comercial_v10 (1).html` | HTML | Duplicado V10 | D03; ninguna referencia exacta al nombre con `(1)` encontrada | Interna | Sí | `BORRADO_CANDIDATO_EXACTO` | Candidato a eliminar si Miguel autoriza | SHA-256 idéntico al V10 sin sufijo; conservar el nombre referenciado |
| `BITACORA_DIARIA_AFL_AUTOS_02JUN_31AGO2026_V10.md` | Markdown | Bitácora histórica | Fuente de evidencia cronológica | Alta / PII | Parcial | `CONSERVAR_RAW` | Conservar privado | Evidencia primaria; no publicar sin sanitizar |
| `BACKUP_PRE_AFL0032_index_afl_autos_operacion_comercial_v10.html` | HTML | Snapshot previo a corrección | Dependencia de lineage AFL-0032 | Interna | Sí | `CONSERVAR_LINEAGE` | Conservar | Permite reconstruir el cambio específico AFL-0032 |
| `AUDITORIA_META_EXPORT_30AGO2026_V10.md` | Markdown | Auditoría histórica Meta | Referencia para metodología/datos procesados | Interna | Sí | `CONSERVAR_REFERENCIA` | Conservar | Original histórico útil aunque exista aprendizaje sanitizado en Platform |
| `AFL_AUTOS_V10_ACTUALIZADO_03SEP2026.zip` | ZIP | Snapshot autocontenido | Contiene JSON 03SEP, cambios e index V10 de ese corte | Interna / sensible | Parcial | `CONSERVAR_LINEAGE` | Conservar | Snapshot estable para reconstrucción; no equivale a archivos sueltos posteriores |
| `AFL_AUTOS_RESPONDER_V1.html` | HTML | Prototipo comercial | Futuro audit conversacional / Comercial propuesto | Interna | Sí, conceptual | `CONSERVAR_LINEAGE` | Conservar | Prototipo útil hasta cerrar auditoría conversacional |
| `AFL_AUTOS_DATOS_COMPLETOS_V10_31AGO2026.json` | JSON | RAW histórico | Generación V10 31AGO | Alta / datos sensibles | Parcial | `CONSERVAR_RAW` | Conservar privado | Fuente primaria; no importar masivamente |
| `AFL_AUTOS_DATOS_COMPLETOS_V10_31AGO2026 (1).json` | JSON | RAW histórico evolucionado | Contenido/tamaño distinto del anterior | Alta / datos sensibles | Parcial | `CONSERVAR_RAW` | Conservar privado | No es duplicado; preserva otra generación |
| `AFL_AUTOS_DATOS_COMPLETOS_V10_03SEP2026.json` | JSON | RAW histórico | Generación posterior; diverge del JSON dentro del ZIP | Alta / datos sensibles | Parcial | `CONSERVAR_RAW` | Conservar privado | Fuente primaria y evidencia de evolución |
| `AFL_AUTOS_CONTENT_SALES_ENGINE_V4.html` | HTML | Prototipo contenido+ventas | Antecedente de módulos futuros; Comercial aún no creado | Interna | Sí, conceptual | `CONSERVAR_LINEAGE` | Conservar | Útil para auditoría conversacional/arquitectónica posterior |
| `ACUERDOS_OPERACION_LOCAL_AFL_AUTOS_V10.md` | Markdown | Reglas históricas | Varias reglas ya migradas; conserva contexto | Interna | Sí | `CONSERVAR_REFERENCIA` | Conservar | Referencia de decisiones históricas sin ser autoridad actual |
| `2026-09-05_195640_actualizacion-index-flyers-exportaciones_AJJNTR.md` | Markdown | Contexto RAW | Evidencia de V11/V12 y reglas de evidencia | Alta / RAW de chat | Sí, parcialmente | `CONSERVAR_RAW` | Conservar privado | Fuente primaria para evolución del generador |
| `2026-09-05_183150_sistema-generador-flyers-lariat-drive_MYU8S5.md` | Markdown | Contexto RAW | Referencia explícita al index V10 sin sufijo; origen de decisiones de flyers | Alta / RAW de chat | Sí, parcialmente | `CONSERVAR_RAW` | Conservar privado | Fuente primaria y dependencia de lineage |
| `14_PREGUNTAS_FRECUENTES.md.png` | PNG | Manual visual / respuestas | Sin dependencia operativa exacta encontrada | Baja | Sí | `CONSERVAR_REFERENCIA` | Conservar | Evidencia visual del sistema/comercial histórico |
| `11_MEMORIA EDITORIAL.png` | PNG | Manual visual / aprendizaje | Sin dependencia operativa exacta encontrada | Baja | Sí | `CONSERVAR_REFERENCIA` | Conservar | Evidencia de la noción de memoria editorial histórica |
| `10_PROSPECTOS_Y_CRM.png` | PNG | Manual visual / CRM | Sin dependencia operativa exacta encontrada | Media | Sí | `CONSERVAR_REFERENCIA` | Conservar | Evidencia visual del enfoque CRM legacy; no usar como CRM actual |
| `09_PUBLICACION.png` | PNG | Manual visual / publicación | Sin dependencia operativa exacta encontrada | Baja | Sí | `CONSERVAR_REFERENCIA` | Conservar | Evidencia de reglas históricas de publicación |
| `08_PRODUCCION_CON_IA.png` | PNG | Manual visual / producción | Sin dependencia operativa exacta encontrada | Baja | Sí | `CONSERVAR_REFERENCIA` | Conservar | Evidencia visual de reglas de producción legacy |
| `07_CONTEXTO_MAESTRO.png` | PNG | Manual visual / Contexto Maestro | Sin dependencia operativa exacta encontrada | Baja | Sí | `BORRADO_CANDIDATO_SUPERADO` | Candidato a eliminar si Miguel autoriza | Concepto reemplazado por `PUENTE.md` + fuentes separadas; aprendizaje ya documentado |
| `06_PRODUCCION_MULTIMEDIA.md.png` | PNG | Manual visual / captura | Sin dependencia operativa exacta encontrada | Baja | Sí | `CONSERVAR_REFERENCIA` | Conservar | Preserva buenas prácticas multimedia históricas |
| `05_CHECKLIST.md.png` | PNG | Manual visual / checklist | Sin dependencia operativa exacta encontrada | Baja | Sí | `CONSERVAR_REFERENCIA` | Conservar | Preserva checklist histórico que alimentó planes de captura |
| `02_INSTALACION.png` | PNG | Manual visual / instalación legacy | Sin dependencia operativa exacta encontrada | Baja | Sí | `BORRADO_CANDIDATO_SUPERADO` | Candidato a eliminar si Miguel autoriza | Instalación/arquitectura vieja ya reemplazada y documentada |
| `01_INTRODUCCION.png` | PNG | Manual visual / introducción legacy | Sin dependencia operativa exacta encontrada | Baja | Sí | `BORRADO_CANDIDATO_SUPERADO` | Candidato a eliminar si Miguel autoriza | Introducción genérica del sistema antiguo; sin autoridad actual |
| `00_PORTADA.png` | PNG | Portada manual legacy | Sin dependencia operativa exacta encontrada | Baja | Sí | `BORRADO_CANDIDATO_SUPERADO` | Candidato a eliminar si Miguel autoriza | Portada histórica sin contenido operativo único |
| `00_CONTROL_MAESTRO_AFL_AUTOS.pdf` | PDF | Control maestro Drive-centric legacy | Revisado 2026-09-11; sin dependencia operativa exacta encontrada | Interna | Sí, en arquitectura/reglas actuales | `BORRADO_CANDIDATO_SUPERADO` | Candidato a eliminar si Miguel autoriza | Estructura/versión Drive-centric ya superada; reglas útiles preservadas en repos/propuestas |

## Duplicados exactos

### D01
Conservar: `PREVIEW_LOTE_10.png`  
Candidato: `PREVIEW_LOTE_10 (1).png`  
SHA-256: `1b7611a7efd4e7c999eb5b673852c77d5cd1a834fd9db78f0bd6e54e25c08ee7`

### D02
Conservar: `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO.md`  
Candidato: `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO-1.md`  
SHA-256: `ef4e3d973704ff755fd04d88345d1e5baa5194fa83d03ffa8390bfd594411424`

### D03
Conservar: `index_afl_autos_operacion_comercial_v10.html`  
Candidato: `index_afl_autos_operacion_comercial_v10 (1).html`  
SHA-256: `c894c959c63d36ef2d8739430aa2c1c6a8e3c16ed3fe0e1252b82952b09b14c1`

Los hashes fueron reconfirmados localmente sobre los bytes descargados durante la auditoría.

## Riesgo de enlaces compartidos

Drive informa `shared: true` para las entradas listadas. La auditoría pudo verificar dependencias internas por contenido, nombres y lineage, pero no puede demostrar que un URL específico no haya sido compartido externamente en el pasado. Antes de borrar un candidato, Miguel debe aceptar que su URL individual dejará de funcionar aunque se conserve una copia idéntica bajo otro ID.
