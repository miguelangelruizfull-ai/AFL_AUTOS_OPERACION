# Prompt base — Continuar hilo / tarea en un chat nuevo

Usar cuando un chat llegó a su límite, se quedó bloqueado o conviene continuar la misma tarea en una conversación nueva.

## Datos a pegar

- `VEHÍCULO / PROYECTO:`
- `DRIVE:` cuando aplique
- `RESPUESTA O CHECKPOINT DEL CHAT ANTERIOR:`
- `OBJETIVO INMEDIATO:`

## Instrucción

No reinicies el trabajo ni confíes ciegamente en el texto pegado.

1. Identifica la unidad/proyecto y localiza sus fuentes canónicas.
2. Lee la versión vigente de `PUENTE.md`, `PLAN_CAPTURA.md`, archivos de coordinación, índices o checkpoints relacionados.
3. Verifica el estado REAL en GitHub y Drive antes de escribir.
4. Usa la respuesta/checkpoint anterior como pista de continuidad, no como fuente superior a los repositorios vigentes.
5. Determina qué quedó realmente terminado, qué fue solo propuesto y qué sigue pendiente.
6. No recrees carpetas, derivados, commits ni análisis ya existentes.
7. Continúa únicamente desde el primer punto pendiente.
8. Si existe trabajo concurrente, vuelve a leer/fetch antes de actualizar.
9. Al terminar deja el nuevo checkpoint persistido en la fuente correspondiente.

## Retorno obligatorio

La respuesta final debe cerrar con un bloque `RETORNO_AL_COORDINADOR` que pueda copiarse y pegarse sin editar, incluyendo:

- trabajo/vehículo;
- qué se hizo;
- archivos y enlaces creados/usados;
- commits;
- estado final exacto;
- pendientes;
- próximas fechas/checkpoints si existen;
- siguiente módulo recomendado;
- contradicciones o riesgos.

No uses `APROBADO`, `PUBLICADO`, `MEDIDO` o `VENTA ATRIBUIDA` sin evidencia correspondiente.