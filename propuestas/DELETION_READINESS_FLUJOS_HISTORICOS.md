# AFL AUTOS — Deletion readiness / flujos históricos

Estado: `LISTO_PARA_REVISION_DE_BORRADO / BORRADO_NO_AUTORIZADO`

Fuente: https://drive.google.com/drive/folders/1UrpzTd66QDpfxy4So5BEyQXWF1wKc7Rz

Fecha: `2026-09-11`

## Checklist

- [ ] `36/36 inventariados` — BLOQUEADO: el alcance declarado dice 36, pero el inventario directo observado durante el primer corte contiene 39 entradas. Reconciliar antes de borrar.
- [x] auditoría guardada — `AUDITORIA_FLUJOS_HISTORICOS.md`
- [x] ideas rescatables guardadas — `IDEAS_RESCATABLES.md`
- [x] errores/antipatrones guardados — `ERRORES_Y_ANTI_PATRONES.md`
- [x] Home objetivo guardado — `HOME_OBJETIVO.md`
- [x] decisiones migración guardadas — `MIGRATION_DECISIONS.md`
- [x] snapshot manifest guardado — `SOURCE_SNAPSHOT_FLUJOS_2026-09-11.md`
- [x] duplicados documentados por contenido — 3 grupos confirmados por SHA-256
- [x] lineage documentado — familia V10, backups, AFL-0032, ZIP y JSON
- [x] información privada identificada — dos capturas fuera de alcance + RAW/bitácora sensibles
- [x] información útil migrada — reglas/ideas materializadas en propuestas y Content System
- [ ] dependencias verificadas — pendiente revisión final de referencias antes de borrar copias/legacy
- [x] RAW que debe conservarse identificado
- [x] candidatos a borrado identificados — solo duplicados exactos confirmados y archivos superados, sujetos a dependencia
- [ ] autorización de Miguel pendiente

## Duplicados exactos candidatos

### D01
- `PREVIEW_LOTE_10.png`
- `PREVIEW_LOTE_10 (1).png`

### D02
- `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO.md`
- `MOODBOARD_AFL_AUTOS_SEPTIEMBRE_MES_PATRIO-1.md`

### D03
- `index_afl_autos_operacion_comercial_v10.html`
- `index_afl_autos_operacion_comercial_v10 (1).html`

El manifiesto conserva los hashes. No borrar todavía.

## RAW a conservar antes de cualquier limpieza

- JSON históricos V10;
- bitácora histórica;
- ZIP snapshot 03SEP;
- contextos RAW del 5-Sep;
- backups necesarios para lineage;
- audit Meta y documentación que no esté preservada en otra fuente durable;
- `00_CONTROL_MAESTRO_AFL_AUTOS.pdf` hasta revisión manual;
- cualquier archivo que siga siendo dependencia de un HTML/ZIP o de una auditoría vigente.

## Fuera de alcance

Dos capturas ajenas a AFL AUTOS quedan clasificadas:

`FUERA_DE_ALCANCE / PRIVACIDAD_ALTA`

Acción futura recomendada: separar de la carpeta AFL antes de crear archivos históricos compartibles. No mover/borrar sin autorización.

## Dependencias pendientes

Antes de borrar candidatos:
1. buscar referencias por filename/ID en HTML, Markdown, ZIP y repos;
2. confirmar cuál copia queda como canónica;
3. confirmar que no existe una URL compartida que dependa específicamente del duplicado;
4. revisar `00_CONTROL_MAESTRO_AFL_AUTOS.pdf` si se pretende borrar o archivar la carpeta completa;
5. reconciliar `36 declarados` vs `39 observados`.

## Criterio para autorización

Miguel debe revisar:
- discrepancia de conteo;
- lista de RAW a conservar;
- lineage V10/JSON/ZIP;
- archivos fuera de alcance;
- duplicados exactos;
- dependencias restantes.

Solo después puede cambiarse el estado a:

`BORRADO_AUTORIZADO_POR_MIGUEL`

Este documento no concede esa autorización.