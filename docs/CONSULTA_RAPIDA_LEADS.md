# AFL AUTOS — CONSULTA RÁPIDA PARA LEADS

Fecha: 2026-09-16
Estado: `VIGENTE`

## Objetivo

Responder consultas de leads usando evidencia actual y fuentes durables, sin depender de la memoria del chat y sin recorrer manualmente todas las publicaciones en cada consulta.

## Jerarquía de resolución

1. Contexto actual enviado por Miguel: captura, publicación, mensaje del lead o reply específico del anuncio.
2. `data/publicaciones-activas-v1.json` para resolver publicación → unidad.
3. `Vehiculos/vehiculos/{EXPEDIENTE_KEY}/PUENTE.md` para datos vigentes de la unidad.
4. `AFL_AUTOS_COMERCIAL/rules/REGLAS_COMERCIALES.md` y demás reglas comerciales vigentes.
5. `ROOT_ECOSISTEMA/docs/AFL_AUTOS_SISTEMA_ACTUAL.md` para arquitectura transversal.

Regla central:

`PUBLICACIÓN ≠ PRECIO ACTUAL CONFIRMADO`

La publicación ayuda a identificar la unidad y recuperar información pública, pero precio, disponibilidad y estado actual se validan contra la fuente vigente del vehículo.

## Identidad de la unidad

`CONTEXTO_PREVIO ≠ IDENTIDAD_DE_UNIDAD`

Para cada nueva captura/publicación:

1. identificar primero la publicación/unidad actual;
2. no reutilizar modelo, año o versión de la interacción anterior;
3. buscar coincidencia en `publicaciones-activas-v1.json`;
4. resolver `EXPEDIENTE_KEY`;
5. leer el `PUENTE.md` exacto;
6. si no existe coincidencia inequívoca, usar lenguaje neutral y marcar `IDENTIDAD_NO_VERIFICADA`.

Nunca inventar `EXPEDIENTE_KEY`.

## Precio

Estados permitidos:

- `CONFIRMADO`: el monto está vigente y confirmado en la fuente de verdad de la unidad y es publicable.
- `REFERENCIA`: cifra expresamente aportada/autorizada como referencia, nunca convertirla en precio definitivo.
- `PENDIENTE_CONFIRMACION`: existe una cifra o antecedente que requiere confirmación, o no existe monto vigente confirmado.
- `NO_MOSTRAR`: no comunicar monto.

Si publicación e información vigente se contradicen:

`CONTRADICCION_DETECTADA`

No afirmar el dato en conflicto hasta resolverlo.

### Ejemplo de política

Jeep Rubicon JL 2018 — ejemplo aportado por Miguel:

- monto de referencia: `$565,000 MXN`;
- estado: `REFERENCIA / PENDIENTE_CONFIRMACION`;
- formulación permitida: `El Jeep Wrangler JL 2018 tiene un precio de referencia de $565,000 MXN, sujeto a confirmación.`

Este ejemplo define cómo redactar un precio de referencia. No crea por sí mismo un `EXPEDIENTE_KEY`, no confirma disponibilidad y no sustituye `PUENTE.md`.

## Disponibilidad

La disponibilidad se toma de la fuente vigente de la unidad. Una publicación activa no demuestra por sí sola que la unidad siga disponible.

Si no está confirmada: `DISPONIBILIDAD_PENDIENTE_CONFIRMACION`.

## CTA por canal

### Lead ya en WhatsApp

No decir `escríbenos por WhatsApp`.

Continuar dentro del mismo chat. Ejemplo de cierre:

`Si gustas, te confirmo disponibilidad y te doy más información de esta unidad. ¿Te interesa?`

### Facebook / Instagram / Messenger

Puede utilizarse el WhatsApp comercial `2491151388` cuando facilite una verificación o siguiente acción concreta, conforme a las reglas vigentes de `AFL_AUTOS_COMERCIAL`.

No mover de canal por reflejo si la respuesta puede resolverse correctamente donde ya está el lead.

## Intención del lead

- `BAJA`: reacción o saludo sin pregunta concreta.
- `MEDIA`: características, equipamiento o disponibilidad general.
- `ALTA`: precio, comparación, financiamiento, llamada, visita, ubicación o disponibilidad concreta.

Para intención `ALTA`, proponer una sola siguiente acción comercial útil. No saturar ni interrogar.

## Salida obligatoria

```text
UNIDAD IDENTIFICADA:
PRECIO:
ESTADO_PRECIO:
DISPONIBILIDAD:
INTENCION_LEAD:
RESPUESTA_RAPIDA:
SIGUIENTE_ACCION:
```

Cuando aplique agregar antes:

```text
CONTRADICCION_DETECTADA:
```

## Persistencia de datos nuevos aportados por Miguel

Si Miguel proporciona un dato nuevo durante la consulta:

1. usarlo en la respuesta actual si es inequívoco;
2. marcar `PENDIENTE_DE_PERSISTIR`;
3. actualizar la fuente durable correspondiente;
4. si es dato variable de una unidad, persistirlo en su autoridad canónica, no en el índice como sustituto;
5. el índice de publicaciones solo se actualiza para identidad, estado de publicación, copy público, CTA público y referencias hacia la unidad.

## Privacidad

El índice y los retornos de Consulta Rápida no guardan:

- PII de leads;
- conversaciones privadas;
- teléfonos de prospectos;
- VIN completo;
- IDs privados de Drive;
- rutas privadas;
- credenciales.

## Mantenimiento del índice

Cuando una publicación se confirma, pausa, vende o archiva, el mismo cierre operativo debe actualizar `data/publicaciones-activas-v1.json`.

No recorrer todas las redes en cada consulta. La consulta usa primero el índice y solo escala a fuentes/publicación específica cuando no hay coincidencia o existe contradicción.

El índice es de navegación/identidad. `PUENTE.md` continúa siendo autoridad para la unidad y sus datos variables.
