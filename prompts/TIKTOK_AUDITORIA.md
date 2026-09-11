# Prompt base — Auditoría histórica TikTok / Motor Editorial

Este chat NO produce TikToks nuevos.

Objetivo: revisar sistemáticamente la carpeta histórica de videos TikTok, relacionar videos con el export sanitizado y casos existentes, y mantener un Motor Editorial vivo para futuros productores.

## Fuentes

- Drive: carpeta histórica de videos que Miguel indique.
- `AFL_AUTOS_PLATFORM/data/learning/tiktok_sanitized_2026-09-07.json` y análisis TikTok existentes.
- `AFL_AUTOS_CONTENT_SYSTEM/networks/tiktok/` para índice, progreso, familias, hooks, CTA, guía de captura y Motor Editorial.
- Leer también `AFL_AUTOS_CONTENT_SYSTEM/networks/tiktok/AUDIT_SCOPE_STATUS.md` si existe.

## Regla crítica de alcance

NO asumir que la carpeta contiene toda la biblioteca histórica solo porque todos los archivos visibles fueron auditados.

Distinguir siempre:

- `SNAPSHOT_ACTUAL_COMPLETO`: todos los videos actualmente visibles ya fueron revisados.
- `BIBLIOTECA_HISTORICA_COMPLETA`: Miguel confirmó que ya terminó de subir todo el material histórico previsto.

Solo se puede declarar `AUDITORIA_HISTORICA_TOTAL_COMPLETA` cuando ambas condiciones se cumplan.

Si Miguel añade videos posteriormente, continuar la auditoría de forma incremental.

## Método incremental

Trabajar por lotes de 8–12 videos. Después de cada lote guardar checkpoint para poder continuar sin reiniciar.

Antes de cada nueva fase:

1. volver a listar TODO el nivel de la carpeta Drive;
2. comparar contra `VIDEO_AUDIT_INDEX.md` y `AUDIT_PROGRESS.md`;
3. detectar cuáles archivos son NUEVOS;
4. no volver a procesar videos ya auditados salvo que aparezca una contradicción o nueva evidencia de mapeo;
5. continuar numeración de lotes, sin reemplazar lotes anteriores;
6. añadir al índice, no reconstruirlo desde cero.

Por video analizar: archivo, duración, resolución, primeros 0–3 s, hook, estructura visual, narrativa, texto, audio/voz, CTA y familia editorial.

Mapear métricas solo con evidencia suficiente. Estados sugeridos: `MAPPED_HIGH / MAPPED_MEDIUM / MAPPED_LOW / NOT_MAPPED`.

No inferir vehículo únicamente por fecha. Likes ≠ vistas ≠ leads ≠ ventas.

## Salidas esperadas

En `AFL_AUTOS_CONTENT_SYSTEM/networks/tiktok/` mantener:
- `EDITORIAL_ENGINE.md`
- `FORMAT_FAMILIES.md`
- `HOOKS_AND_CTA.md`
- `CAPTURE_GUIDE.md`
- `VIDEO_AUDIT_INDEX.md`
- `AUDIT_PROGRESS.md`
- `AUDIT_SCOPE_STATUS.md`

En `AFL_AUTOS_PLATFORM` mantener dataset analítico sanitizado.

Mientras la biblioteca histórica siga incompleta, guardar checkpoints con nombre de lote, por ejemplo:

`data/learning/tiktok_video_audit_2026-09_batch01.json`

No presentar un JSON parcial como dataset final de toda la biblioteca.

Cuando Miguel confirme que terminó de subir todo el material, consolidar todos los lotes en un dataset final, revisar familias/patrones y cerrar el alcance total.

Nivelar conclusiones como `OBSERVACION / HIPOTESIS / TEST_EN_CURSO / PATRON_REPETIDO / APRENDIZAJE_VALIDADO`.

No elevar un caso aislado a regla universal.