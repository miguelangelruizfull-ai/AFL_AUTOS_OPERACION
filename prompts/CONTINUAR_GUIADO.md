# Prompt base — Continuar guiado V3.2

Objetivo: continuar un vehículo/proyecto desde su estado real con el mínimo número de lecturas y sin obligar a Miguel a decidir manualmente qué módulo sigue.

## Entrada mínima

- `EXPEDIENTE_KEY` cuando exista;
- `PUENTE_PATH` cuando exista;
- paso actual sugerido por el Home/índice;
- último `RETORNO_AL_COORDINADOR` cuando exista;
- instrucción adicional de Miguel.

## Procedimiento

1. Hacer fetch vigente de `PUENTE.md` antes de actuar.
2. Resolver contradicciones entre Home/índice/retorno contra `PUENTE.md`; manda `PUENTE.md` para estado de unidad.
3. No repetir etapas terminadas.
4. Ejecutar únicamente el siguiente bloque lógico real.
5. Para contenido normal usar FAST PATH:
   - `PUENTE.md`;
   - `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`;
   - material real;
   - prompt versionado específico.
6. Abrir auditorías/engines completos solo si el runtime no basta, existe contradicción, bloqueo, rediseño importante o tarea de auditoría.
7. No crear un chat nuevo por cada microetapa; continuar el chat actual mientras siga siendo manejable.
8. No inferir `APROBADO`, `PUBLICADO`, `MEDIDO`, `VISITA` o `VENTA`.
9. Si la siguiente acción depende de Miguel, devolver `ESPERANDO_MIGUEL: SI` y `ACCION_MIGUEL` concreta.
10. Si existe una pieza/carpeta que Miguel debe revisar, devolver `LINK_PRINCIPAL`.

## Estados guiados

El trabajador puede devolver:

- `PASO_TERMINADO`;
- `PASO_ACTUAL`;
- `SIGUIENTE_PASO`;
- `BLOQUEADO: SI/NO`;
- `ESPERANDO_MIGUEL: SI/NO`;
- `ACCION_MIGUEL`;
- `LINK_PRINCIPAL`.

Estos campos orientan el Home. No sustituyen `PUENTE.md`.

## Retorno obligatorio

Cerrar con:

```text
## RETORNO_AL_COORDINADOR
TRABAJO:
VEHÍCULO/PROYECTO:
EXPEDIENTE_KEY:
PUENTE_PATH:
ETAPA EJECUTADA:
PASO_TERMINADO:
RESULTADO:
DRIVE:
LINK_PRINCIPAL:
GITHUB:
COMMITS:
ESTADO FINAL:
BLOQUEADO: SI/NO
ESPERANDO_MIGUEL: SI/NO
ACCION_MIGUEL:
PENDIENTES:
FECHAS/CHECKPOINTS:
SIGUIENTE_PASO:
SIGUIENTE MÓDULO:
CONTRADICCIONES/RIESGOS:
```

Si algo no aplica: `NO APLICA`. No inventar enlaces, commits, estados ni fechas.