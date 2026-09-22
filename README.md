# AFL_AUTOS_OPERACION

Centro de operación público y móvil de AFL AUTOS.

## Home activo

`index.html` abre **V3.7**, Home público vigente con coordinación, ingesta guiada y acceso al asistente comercial sanitizado.

Criterio:

`V3.1 = BASE UX`

`V3.2 = FLUJO GUIADO BASE`

`V3.3 = BASE DE PRIVACIDAD PUBLICA`

`V3.7 = HOME PUBLICO ACTIVO / COMERCIAL + NUEVO VEHICULO JSON`\n\n`V4/V4.1 = LABORATORIO / NO CANONICO`

URL:

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

## Principio

`COMPLEJO POR DENTRO / SIMPLE POR FUERA`

`UN SOLO HOME / FUENTES SEPARADAS`

El Home público no expone fuentes privadas. La producción privada puede usar herramientas separadas en `AFL_AUTOS_PLATFORM`, pero las reglas de coordinación permanecen aquí y las autoridades de datos no cambian.

## APV V1 — interfaz operativa unificada

Arquitectura aprobada: `docs/APV_V1_ARQUITECTURA.md`.

APV se define como la interfaz operativa que unifica búsqueda de vehículos, alta de inventario, carpetas y material, respuestas, leads, seguimiento, producción, resultados y acceso a Demo UX/Content Lab, sin sustituir las fuentes dueñas.

Regla:

`APV = ORQUESTADOR`

`UNA INTERFAZ / VARIAS AUTORIDADES / UN MISMO VEHICLE_ID`

Identidad común:

`VEHICLE_ID = CODIGO_VEHICULO = CODIGO_WHATSAPP = AFL-<VIN6>`

Durante implementación, el Home vigente no se reemplaza hasta validar APV.

## Flujo principal

```text
SELECCIONAR VEHICULO
→ TABLERO
→ AHORA
→ CONTINUAR
→ CHAT TRABAJADOR
→ RETORNO_AL_COORDINADOR
→ PEGAR RETORNO
→ TABLERO ACTUALIZADO
→ SIGUIENTE ACCION
```

## Producción diaria / ¿qué hacemos hoy?

Cuando Miguel no llegue con un formato decidido, usar:

`prompts/RECOMENDAR_PRODUCCION_HOY.md`

La recomendación debe cruzar cuando exista evidencia suficiente:

`INVENTARIO + MATERIAL + RECENCIA/FRECUENCIA + RESULTADOS + OBJETIVO COMERCIAL + PULSO ACTUAL`

La salida propone 1–3 acciones concretas. Si Miguel aprueba una, entonces pasa a producción normal mediante `prompts/PRODUCIR_REDES.md`.

La interfaz privada de selección/órdenes vive en `AFL_AUTOS_PLATFORM/apps/production-studio/`; este repositorio público no expone sus JSON privados, VIN completos ni enlaces de Drive.

## Semáforo

- verde — terminado/verificado para navegación;
- amarillo — acción actual;
- azul — esperando a Miguel;
- rojo — bloqueo, rechazo o contradicción;
- gris — todavía no corresponde.

Regla permanente:

`TABLERO = NAVEGACION`

`PUENTE.md = VERDAD`

## Índice público

El Home carga `data/expedientes-public-index.json` para mostrar expedientes y siguiente acción sin exponer los enlaces privados de Drive.

El índice no sustituye al `PUENTE.md`. El chat trabajador siempre debe hacer fetch del PUENTE vigente antes de escribir.

## Retorno estructurado

El flujo entiende campos como:

- `EXPEDIENTE_KEY`;
- `PUENTE_PATH`;
- `PASO_TERMINADO`;
- `BLOQUEADO`;
- `ESPERANDO_MIGUEL`;
- `ACCION_MIGUEL`;
- `LINK_PRINCIPAL`;
- `SIGUIENTE_PASO`.

El Home puede conservar el último retorno y enlaces de acceso como estado local de navegación. No convierte esos datos locales en verdad durable.

Prompt base:

`prompts/CONTINUAR_GUIADO.md`

## FAST PATH creativo

Producción normal:

`PUENTE.md + AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md + MATERIAL REAL`

Las auditorías, motores completos, logs y casos se consultan bajo demanda cuando hay contradicción, bloqueo, auditoría, rediseño importante o una regla ausente en el runtime.

Prompts activos:

- `prompts/RECOMENDAR_PRODUCCION_HOY.md`;
- `prompts/PRODUCIR_REDES.md`;
- `prompts/REVISION_APROBACION.md`;
- `prompts/REVISAR_DISENO_APRENDIZAJE.md`;
- `prompts/PUBLICACION_MEDICION.md`.

## Revisión de Miguel

Cuando corresponde, Home muestra la decisión:

- `APROBADO_POR_MIGUEL`;
- `REQUIERE_CORRECCION`;
- `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`.

El feedback durable sigue viviendo en `AFL_AUTOS_CONTENT_SYSTEM`.

Para órdenes de producción privadas usar además:

`RECOMENDADO → APROBADO_MIGUEL → EN_PRODUCCION → COMPLETADO`

Ese estado no sustituye el estado de cada pieza ni el PUENTE del vehículo.

## Referencias creativas externas

Existe una bandeja privada en Drive para que Miguel suba flyers, capturas y videos de competencia/inspiración.

El Home público NO contiene su URL. Puede guardarse como atajo local del navegador.

Prompt:

`prompts/ANALIZAR_REFERENCIA_CREATIVA.md`

Autoridad creativa:

`AFL_AUTOS_CONTENT_SYSTEM/library/external_references/README.md`

Se extraen patrones de composición, jerarquía, hook, ritmo, edición, efectos y CTA. No se clonan branding, fotografías, textos completos, campañas o layouts distintivos de terceros.

## Video moderno

Content System conserva una biblioteca activa:

`networks/tiktok/EDITING_EFFECTS_LIBRARY.md`

Incluye cortes, speed ramps, motion text, transiciones y recursos de audio como opciones de prueba, no como plantilla universal.

## Publicación, Meta y medición

Después de una publicación confirmada, el checkpoint normal queda simplificado a:

`PUBLICADO_CONFIRMADO_POR_MIGUEL → MEDICION_7D → CIERRE_DE_APRENDIZAJE`

`MEDICION_24H` y `MEDICION_72H` quedan retiradas del flujo normal a partir de `2026-09-13`. Los registros históricos se conservan, pero no generan nuevos checkpoints operativos.

La fuente preferida para medición son exportables privados de Meta/Messenger/WhatsApp y métricas de plataforma depositados en Drive. El flujo debe validar origen, sanitizar resultados y actualizar las fuentes correspondientes sin exigir copiar/pegar métricas manualmente.

El Home público no consume ZIP/JSON RAW. La distribución es:

- métricas/datasets sanitizados → `AFL_AUTOS_PLATFORM`;
- aprendizaje comercial → `AFL_AUTOS_COMERCIAL`;
- aprendizaje creativo reusable → `AFL_AUTOS_CONTENT_SYSTEM`;
- hechos de unidad → `Vehiculos/PUENTE.md` cuando correspondan;
- estado/navegación → `AFL_AUTOS_OPERACION`;
- RAW/originales → Drive privado.

Separar métricas de plataforma de:

`MENSAJE → WHATSAPP/LLAMADA → LEAD → VISITA → NEGOCIACION → VENTA`

Ver:

- `docs/INGESTA_SEMANAL_META.md`;
- `docs/CONTRATO_META_JSON_HOME.md`.

## Agenda

La agenda local conserva exactamente la clave:

`afl_autos_agenda_v1`

No fue migrada ni sustituida. Sigue siendo auxiliar y no una fuente de verdad.

## Modo avanzado

Los módulos históricos siguen disponibles bajo **Más opciones / modo avanzado** para:

- nuevo vehículo;
- plan de captura;
- selección;
- retoque;
- producción;
- revisión;
- retorno manual;
- hilo interrumpido;
- publicación/medición;
- vendido/entrega;
- referencias externas;
- ingesta Meta/datos;
- nuevo coordinador.

El objetivo es que el flujo normal no dependa de elegirlos manualmente.

## Fuentes de autoridad

- unidad/datos técnicos → `Vehiculos/PUENTE.md`;
- creatividad/aprendizaje → `AFL_AUTOS_CONTENT_SYSTEM`;
- comercial → `AFL_AUTOS_COMERCIAL`;
- análisis/métricas → `AFL_AUTOS_PLATFORM`;
- RAW/multimedia → Drive;
- coordinación/prompts → `AFL_AUTOS_OPERACION`.

## Seguridad

No guardar en este repositorio público:

- VIN completo;
- millas/kilómetros;
- precios internos;
- documentos;
- PII;
- conversaciones privadas;
- credenciales;
- enlaces privados de Drive como parte del índice público;
- IP o EXIF sensible extraído de exportaciones.

Mantener:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

`DATO_CONFIRMADO ≠ DATO_PUBLICABLE ≠ EVIDENCIA_VISUAL ≠ MOODBOARD ≠ PIEZA_APROBADA`

## Guías

- `docs/COMO_EMPEZAR.md`
- `docs/ARQUITECTURA.md`
- `docs/COORDINACION_Y_RETORNOS.md`
- `docs/ESTADOS.md`
- `docs/INGESTA_SEMANAL_META.md`
- `docs/CONTRATO_META_JSON_HOME.md`
