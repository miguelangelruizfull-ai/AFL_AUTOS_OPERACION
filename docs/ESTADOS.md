# Estados operativos

## Regla de V3.2

El Home muestra un semáforo para navegación, pero no crea estados canónicos por sí solo.

`TABLERO = NAVEGACION`

`PUENTE.md = VERDAD`

Colores:

- `VERDE` — etapa anterior terminada para navegación;
- `AMARILLO` — siguiente acción operativa;
- `AZUL` — esperando decisión de Miguel;
- `ROJO` — bloqueo, rechazo o contradicción;
- `GRIS` — todavía no corresponde.

Los colores NO equivalen a aprobación/publicación/medición.

## Flujo de materia prima / preproducción

`INGRESO → IDENTIFICACION → PLAN_CAPTURA → CAPTURA → SELECCION → RETOQUE → PRODUCCION`

Estados útiles:

- `EXPEDIENTE_CREADO_O_ACTUALIZADO`;
- `PLAN_CAPTURA_PENDIENTE`;
- `PLAN_CAPTURA_LISTO`;
- `CARPETAS_ORIGINALES_LISTAS`;
- `CAPTURA_PENDIENTE`;
- `MATERIAL_AUDITADO`;
- `SELECCION_CREADA`;
- `PENDIENTE_RETOQUE`;
- `BLOQUEADO_POR_FOTO`;
- `BLOQUEADO_POR_MATERIAL`.

Nunca tratar como equivalentes:

`ORIGINALES ≠ SELECCION ≠ RETOQUE ≠ LAVADO_VISUAL ≠ PIEZA_FINAL`

## Producción de contenido

`IDEA → CANDIDATO → PRODUCIDO → APROBADO → PROGRAMADO → PUBLICADO → MEDIDO`

- `PRODUCIDO`: archivo creado;
- `SUBIDO_A_DRIVE`: subida verificada;
- `LISTO_PARA_REVISION_MIGUEL`: disponible para decisión;
- `APROBADO_POR_MIGUEL`: aprobación explícita de pieza exacta;
- `REQUIERE_CORRECCION`: necesita nueva versión;
- `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`: rechazo explícito;
- `PROGRAMADO`: programación real creada;
- `PUBLICADO_CONFIRMADO_POR_MIGUEL`: publicación confirmada/evidencia pública suficiente;
- `MEDICION_PENDIENTE`: publicado, falta medición;
- `MEDIDO`: checkpoint ejecutado y registrado.

Mantener:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

## Estados guiados del retorno

Campos auxiliares para Home V3.2:

- `PASO_TERMINADO`;
- `SIGUIENTE_PASO`;
- `BLOQUEADO: SI/NO`;
- `ESPERANDO_MIGUEL: SI/NO`;
- `ACCION_MIGUEL`;
- `LINK_PRINCIPAL`.

Son navegación/handoff. El trabajador debe persistir el estado real en la fuente canónica.

## Bloqueo

Un bloqueo significa que no es correcto avanzar.

Ejemplos:

- falta material fuente;
- falta HERO usable;
- artefacto aprobado no localizado;
- contradicción entre fuentes;
- evidencia insuficiente;
- PUENTE requiere reconciliación.

## Esperando a Miguel

Usar cuando el siguiente paso es una decisión humana:

- aprobar/corregir/rechazar;
- confirmar publicación;
- resolver contradicción;
- autorizar precio/publicabilidad;
- elegir una alternativa realmente comercial.

## Publicación / medición

Flujo:

`PUBLICADO_CONFIRMADO_POR_MIGUEL → MEDICION_24H → MEDICION_72H → MEDICION_7D → CIERRE_DE_APRENDIZAJE`

No todos los checkpoints convierten una hipótesis en patrón.

## Comercial

`INTERACCION ≠ CONVERSACION ≠ LEAD_CALIFICADO ≠ VISITA ≠ NEGOCIACION ≠ VENTA`

Para visita distinguir:

- `VISITA_PROPUESTA`;
- `VISITA_AGENDADA`;
- `VISITA_REALIZADA`.

Cada lead activo debe conservar una `SIGUIENTE_ACCION`.

No atribuir venta a publicación sin evidencia real.

## Aprendizaje

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

Un flyer aprobado, un rechazo o un video de alto rendimiento no se convierten automáticamente en regla universal.

## Referencias externas

Estados:

- `REFERENCIA_EXTERNA_PENDIENTE_ANALISIS`;
- `REFERENCIA_EXTERNA_UTIL`;
- `REFERENCIA_EXTERNA_DESCARTADA`;
- `PATRON_EXTERNO_APROBADO_PARA_TEST`;
- `PATRON_ADAPTADO_AFL_VALIDADO`.

`REFERENCIA_EXTERNA ≠ EVIDENCIA_TECNICA`.
