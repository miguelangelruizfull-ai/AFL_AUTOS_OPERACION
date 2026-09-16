# AFL AUTOS — ESTRUCTURA ACTUAL

Última actualización: 2026-09-16
Estado: `ACTIVA / HOME_V3.6`

> Esta es una proyección operativa sanitizada. No sustituye las fuentes de verdad privadas ni el `PUENTE.md` de cada unidad.

## Jerarquía

`MIGUEL → ROOT → COORDINADOR AFL → MÓDULO → EJECUTOR`

## Arquitectura principal

- `Vehicle Hub V1.2` → ficha privada/editable del vehículo.
- `Production Studio V1.2` → decisión y producción por canal.
- `Home Operaciones V3.6` → navegación, retorno al coordinador, siguiente chat, accesos rápidos, consulta de archivos e ingesta temporal de material por clasificar.
- `Consulta Rápida Leads V1` → resolución captura/publicación → índice sanitizado → `EXPEDIENTE_KEY` → `PUENTE.md` → reglas comerciales → respuesta corta.
- `Content Engine V4` → respaldo/legacy; no es el flujo canónico diario.

## Fuentes de verdad

- vehículo / datos variables → `PUENTE.md` del expediente vigente;
- creatividad / producción → `AFL_AUTOS_CONTENT_SYSTEM`;
- comercial → `AFL_AUTOS_COMERCIAL`;
- estado / Homes privados / métricas sanitizadas → `AFL_AUTOS_PLATFORM`;
- coordinación / prompts / Home público → `AFL_AUTOS_OPERACION`;
- arquitectura global → `ROOT_ECOSISTEMA`;
- RAW / multimedia / referencias / entregables → Drive privado.

El índice `data/publicaciones-activas-v1.json` es una fuente de navegación/identidad y no sustituye `PUENTE.md`.

## Flujo maestro

```text
ENTRADA
→ IDENTIFICAR / LEER PUENTE
→ COORDINADOR AFL
→ MÓDULO
→ EJECUTOR
→ RETORNO_AL_COORDINADOR
→ ¿CAMBIO DE MÓDULO?
   ├─ NO → CONTINUAR EN MISMO CHAT
   └─ SI → GENERAR TÍTULO + PROMPT DE NUEVO CHAT
→ REVISIÓN MIGUEL
→ DRIVE
→ SYNC_PUENTE / ESTADO
→ PUBLICACIÓN CONFIRMADA
→ MEDICIÓN 7D
→ APRENDIZAJE
```

## Ingesta temporal de prueba

Home V3.6 expone temporalmente un acceso autorizado por Miguel al buzón de material por clasificar.

Flujo:

```text
MIGUEL SUBE LOTE
→ EJECUTOR LEE INSTRUCCIÓN PRIVADA VIGENTE
→ IDENTIFICA UNIDAD CON EVIDENCIA
→ SI ES SUFICIENTE: MUEVE EL LOTE A LA UNIDAD CANÓNICA DE PRODUCCIÓN
→ VERIFICA ORIGEN + DESTINO
→ VEHICLE HUB / SYNC_PUENTE
→ SOLICITUD DE PRODUCCIÓN PENDIENTE
→ PRODUCTION STUDIO
```

Reglas:

- mover, no borrar;
- no usar `copiar → borrar` si Drive permite movimiento directo;
- si la identidad no es suficiente, no mover nada;
- no inventar VIN/VIN6 ni identidad;
- el destino privado de producción no se expone desde el Home público;
- el retorno sanitizado no incluye enlaces privados, IDs de Drive, VIN completo ni PII.

## Producción social vigente

```text
TENDENCIA TIKTOK
→ TIKTOK ESPECÍFICO
→ PORTADA + COPY + HISTORIA/ESTADO
→ TENDENCIA REEL / META
→ REEL ESPECÍFICO
→ PORTADA + COPY + POST + HISTORIA
→ REVISIÓN MIGUEL
→ ENTREGA / PUBLICACIÓN
→ MEDICIÓN 7D
```

TikTok y Reel no se clonan automáticamente. Cada plataforma resuelve hook, ritmo, audio, duración, edición, CTA y posicionamiento.

## Gate de producción

Antes de producir resolver:

- objetivo principal;
- `MOSTRAR_PRECIO = SI/NO`;
- `CTA_TELEFONO = NINGUNO/1/2/AMBOS`;
- duración;
- posición CTA;
- política de material;
- pulso actual cuando aporte valor.

## Reglas visuales activas

- vehículo real protagonista;
- `NO ICONOS`;
- logo oficial;
- diseño contemporáneo y limpio;
- no alterar color, carrocería, rines, accesorios, interior ni proporciones;
- no borrar daños reales;
- no reconstruir con IA como final publicable;
- precio y atributos solo desde fuente vigente/autorizada;
- originales intactos, derivados separados.

## Vehicle Hub — ficha privada

La ficha puede mantener:

- miniatura HERO;
- año, marca, modelo, versión, color;
- motor, transmisión, tracción;
- disponibilidad;
- precio + estado del precio;
- gate de producción;
- copy/base comercial;
- atributos JSON;
- accesos privados a material y resultados.

Al editar datos variables: `GUARDAR JSON → GENERAR SYNC_PUENTE → COORDINADOR ACTUALIZA PUENTE`.

## Accesos temporales del Home

El Home puede exponer únicamente los accesos rápidos autorizados explícitamente por Miguel. Los permisos de Drive siguen controlando el acceso real. El destino canónico de producción permanece privado.

## Consulta rápida desde el Home

Home V3.6 conserva la consulta de fuentes vigentes mediante prompts que obligan a leer GitHub conectado en vez de responder desde memoria.

Para leads, el flujo canónico es:

```text
CAPTURA / PUBLICACIÓN ACTUAL
→ data/publicaciones-activas-v1.json
→ EXPEDIENTE_KEY
→ PUENTE.md VIGENTE
→ AFL_AUTOS_COMERCIAL
→ RESPUESTA_RÁPIDA
```

Reglas:

- `CONTEXTO_PREVIO ≠ IDENTIDAD_DE_UNIDAD`;
- `PUBLICACIÓN ≠ PRECIO ACTUAL CONFIRMADO`;
- el índice no almacena PII ni reemplaza datos variables del vehículo;
- si publicación y `PUENTE.md` contradicen un dato, detener la afirmación con `CONTRADICCION_DETECTADA`;
- una publicación confirmada/pausada/vendida/archivada debe actualizar el índice en el mismo cierre operativo;
- el prompt canónico está en `prompts/CONSULTA_RAPIDA_LEADS.md`;
- las reglas detalladas están en `docs/CONSULTA_RAPIDA_LEADS.md`.

## Regla de mantenimiento

Cuando cambie alguno de estos elementos, el Coordinador revisa este archivo en el mismo bloque de trabajo:

- versión del Home / Vehicle Hub / Production Studio;
- jerarquía;
- módulo nuevo o retirado;
- flujo maestro;
- fuente de verdad;
- acceso de carga rápida;
- catálogo de archivos consultables;
- índice sanitizado de publicaciones;
- regla transversal de producción.

Los estados particulares de cada vehículo continúan en su `PUENTE.md`; no se duplican aquí.
