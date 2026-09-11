# Estados operativos

## Flujo de materia prima / preproducción

Para vehículos nuevos V2:

`INGRESO → IDENTIFICACIÓN → PLAN_CAPTURA → CAPTURA → SELECCIÓN → RETOQUE → PRODUCCIÓN`

Estados útiles:

- `EXPEDIENTE_CREADO_O_ACTUALIZADO`: existe `PUENTE.md` vigente.
- `PLAN_CAPTURA_PENDIENTE`: la unidad ya está identificada, falta diseñar la sesión.
- `PLAN_CAPTURA_LISTO`: existe estrategia/checklist específico.
- `CARPETAS_ORIGINALES_LISTAS`: Drive tiene carpetas para fotos/videos fuente o equivalentes documentados.
- `CAPTURA_PENDIENTE`: Miguel todavía debe tomar/subir material.
- `MATERIAL_AUDITADO`: se revisó todo lo nuevo.
- `SELECCION_CREADA`: mejores fotos/videos copiados a selección o equivalentes.
- `PENDIENTE_RETOQUE`: selección lista para limpieza/retoque.

Nunca tratar como equivalentes:

`ORIGINALES ≠ SELECCIÓN ≠ RETOQUE ≠ PIEZA_FINAL`

## Producción de contenido

`IDEA → CANDIDATO → PRODUCIDO → APROBADO → PROGRAMADO → PUBLICADO → MEDIDO`

Nunca tratar estos estados como equivalentes.

- `PRODUCIDO`: el archivo existe.
- `SUBIDO_A_DRIVE`: fue verificado en Drive.
- `APROBADO_POR_MIGUEL`: Miguel lo aprobó explícitamente.
- `PROGRAMADO`: existe programación real.
- `PUBLICADO_CONFIRMADO_POR_MIGUEL`: Miguel confirmó publicación o existe evidencia pública suficiente.
- `MEDICION_PENDIENTE`: publicado, faltan checkpoints.
- `MEDIDO`: checkpoint ejecutado y registrado.

## Comercial

`INTERACCION ≠ CONVERSACION ≠ LEAD_CALIFICADO ≠ VISITA ≠ VENTA`

Nunca atribuir una venta a una publicación sin evidencia de relación.

## Aprendizaje

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

Un solo video exitoso no convierte una hipótesis en aprendizaje validado.

## Checkpoints de medición

Cuando aplique:
- 24 horas;
- 72 horas;
- 7 días.

Registrar por plataforma y por pieza.