# AFL_AUTOS_OPERACION

Centro de operación público y móvil de AFL AUTOS.

## Home activo

`index.html` usa **V3.2 Flujo Guiado**, construido sobre la UX probada de V3.1.

Criterio:

`V3.1 = BASE UX`

`V3.2 = FLUJO GUIADO ACTIVO`

`V4/V4.1 = LABORATORIO / NO CANONICO`

URL:

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

## Principio

`COMPLEJO POR DENTRO / SIMPLE POR FUERA`

`UN SOLO HOME / FUENTES SEPARADAS`

El Home ya no exige que Miguel elija manualmente el módulo normal. Selecciona un expediente, muestra el tablero de progreso y prepara la siguiente instrucción.

## Flujo principal V3.2

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

V3.2 entiende campos adicionales como:

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

Prompts actualizados:

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

## Publicación y medición

Después de una publicación confirmada:

`PUBLICADO_CONFIRMADO_POR_MIGUEL → MEDICION_24H → MEDICION_72H → MEDICION_7D`

Separar métricas de plataforma de:

`MENSAJE → WHATSAPP/LLAMADA → LEAD → VISITA → NEGOCIACION → VENTA`

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
- enlaces privados de Drive como parte del índice público.

Mantener:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

`DATO_CONFIRMADO ≠ DATO_PUBLICABLE ≠ EVIDENCIA_VISUAL ≠ MOODBOARD ≠ PIEZA_APROBADA`

## Guías

- `docs/COMO_EMPEZAR.md`
- `docs/ARQUITECTURA.md`
- `docs/COORDINACION_Y_RETORNOS.md`
- `docs/ESTADOS.md`
