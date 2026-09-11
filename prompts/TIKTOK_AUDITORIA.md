# Prompt base — Auditoría histórica TikTok / Motor Editorial

Este chat NO produce TikToks nuevos.

Objetivo: revisar sistemáticamente la carpeta histórica de videos TikTok, relacionar videos con el export sanitizado y casos existentes, y mantener un Motor Editorial vivo para futuros productores.

## Fuentes

- Drive: carpeta histórica de videos que Miguel indique.
- `AFL_AUTOS_PLATFORM/data/learning/tiktok_sanitized_2026-09-07.json` y análisis TikTok existentes.
- `AFL_AUTOS_CONTENT_SYSTEM` para guardar familias, hooks, CTA, guía de captura y Motor Editorial.

## Método

Trabajar por lotes de 8–12 videos. Después de cada lote guardar checkpoint para poder continuar sin reiniciar.

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

En `AFL_AUTOS_PLATFORM` mantener dataset analítico sanitizado.

Nivelar conclusiones como `OBSERVACION / HIPOTESIS / TEST_EN_CURSO / PATRON_REPETIDO / APRENDIZAJE_VALIDADO`.

No elevar un caso aislado a regla universal.