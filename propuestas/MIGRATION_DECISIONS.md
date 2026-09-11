# AFL AUTOS — Migration decisions / flujos históricos

Estado: `DECISIONES_DOCUMENTADAS`

Fecha: `2026-09-11`

| Fuente histórica | Valor | Destino moderno | Acción |
|---|---|---|---|
| HTML V10 | Prototipo operativo completo; evidencia de funciones y problemas | `LEGACY` | `NO MIGRAR CODIGO`; conservar lineage hasta autorización |
| JSON V10 | Datos históricos y respaldo operativo | Drive RAW / análisis sanitizado en Platform cuando aplique | `CONSERVAR_RAW`; no importar masivamente a PUENTE |
| ZIP snapshot | Estado autocontenido/versionado de una etapa | Archivo histórico / lineage | `CONSERVAR_LINEAGE` |
| Reporte histórico | Evidencia de trabajo, metodología y resultados | Referencia operativa; sanitizar si se reutiliza | `CONSERVAR_RAW` / extractos sanitizados |
| Bitácora | Evidencia temporal con PII | Drive privado / eventual dataset sanitizado | `CONSERVAR_RAW`; no publicar |
| Meta audit | Corte histórico y metodología de reconciliación | `AFL_AUTOS_PLATFORM` | `MIGRAR_APRENDIZAJE`; RAW permanece Drive |
| Responder V1 | Intenciones, respuesta directa y siguiente acción | Futuro `AFL_AUTOS_COMERCIAL` si se aprueba | `MIGRADO_APRENDIZAJE`; no crear repo aún |
| Content & Sales Engine V4 | Flujo vehículo→contenido→respuesta→lead→cierre | Ideas distribuidas entre Operación / Vehiculos / Content / futuro Comercial | `MIGRADO_APRENDIZAJE`; no migrar monolito |
| Master System V4 | Antecedente del Home y de motores editoriales | Operación + Content System | `SUPERADO_POR_SISTEMA_ACTUAL`; conservar referencia |
| Contextos 5-Sep | Decisiones, errores y evolución V11/V12 | Content System / Operación | `MIGRADO_APRENDIZAJE` |
| Previews flyers | Evidencia visual y casos de composición | Motor Visual / auditoría flyers | `MIGRADO_APRENDIZAJE` / conservar mientras se audita |
| Moodboard | Dirección artística | Content System si no está ya migrado | `MIGRADO_APRENDIZAJE`; duplicado exacto candidato |
| Capturas fuera de AFL | Ningún valor para AFL; privacidad alta | Fuera de AFL | `FUERA_DE_ALCANCE_PRIVADO`; separar antes de limpieza |
| Duplicados exactos | Ningún valor adicional cuando dependencia sea nula | N/A | `DUPLICADO_EXACTO_CANDIDATO_BORRADO` tras autorización |
| 00_CONTROL_MAESTRO_AFL_AUTOS.pdf | No usado para fundamentar primer corte | Revisión manual si se requiere antes de borrar | `REQUIERE_REVISION_MANUAL` |

## Reglas de migración

### Vehiculos

No importar JSON histórico de forma masiva.

Solo reconciliar datos históricos con una unidad cuando exista una necesidad concreta y evidencia suficiente. `PUENTE.md` vigente manda.

### Content System

Migrar reglas, no datos técnicos históricos.

Prioridad de migración:
- separación `DATO_CONFIRMADO / DATO_PUBLICABLE / EVIDENCIA_VISUAL / MOODBOARD / PIEZA_APROBADA`;
- filename/prompt/layout/flyer histórico no son evidencia técnica;
- aprobado/rechazado puede alimentar observación creativa;
- lotes requieren validación por pieza;
- moodboard dirige estilo, no especificaciones.

### Platform

Flujo esperado:

`RAW → SANITIZACION → PLATFORM`

No se crea en esta ejecución `data/learning/legacy_operational_flow_audit_2026-09.json`.

Estado: `DATASET_NO_NECESARIO`.

Motivo: el conjunto es un inventario estático de migración/lineage y ya queda preservado de forma estructurada en `SOURCE_SNAPSHOT_FLUJOS_2026-09-11.md` y en esta tabla de decisiones. Crear un JSON analítico duplicaría la misma información sin una pregunta analítica adicional ni necesidad de agregación. Si en el futuro se comparan múltiples auditorías legacy, entonces sí conviene promover el manifiesto a dataset sanitizado en Platform.

### Operación / Home

Migrar conceptos de coordinación y navegación, no la base histórica.

### Comercial

Estado:

`PROPUESTO / PENDIENTE_DE_AUDITORIA_CONVERSACIONAL`

No crear `AFL_AUTOS_COMERCIAL` todavía.

## Reglas de borrado

Ningún archivo cambia a `BORRADO_AUTORIZADO` por esta tabla.

Antes de borrar:
1. reconciliar el conteo 36 declarado vs 39 entradas observadas;
2. verificar dependencias;
3. preservar RAW/lineage requerido;
4. confirmar duplicados por contenido/hash;
5. separar archivos fuera de alcance;
6. recibir autorización explícita de Miguel.