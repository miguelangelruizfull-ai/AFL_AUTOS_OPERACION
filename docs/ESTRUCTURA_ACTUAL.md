# AFL AUTOS — ESTRUCTURA ACTUAL

Última actualización: 2026-09-16
Estado: `ACTIVA / HOME_V3.5`

> Este archivo es una proyección operativa para consulta rápida. No sustituye las fuentes de verdad de cada repositorio. Debe actualizarse en el mismo cambio cuando se modifique la arquitectura, el flujo maestro o el catálogo de módulos.

## Jerarquía

`MIGUEL → ROOT → COORDINADOR AFL → MÓDULO → EJECUTOR`

## Arquitectura principal

- `Vehicle Hub V1.2` → ficha privada/editable del vehículo.
- `Production Studio V1.2` → decisión y producción por canal.
- `Home Operaciones V3.5` → navegación, retorno al coordinador, siguiente chat, accesos rápidos y consulta de archivos.
- `Content Engine V4` → respaldo/legacy; no es el flujo canónico diario.

## Fuentes de verdad

- vehículo / datos variables → `Vehiculos/vehiculos/<EXPEDIENTE_KEY>/PUENTE.md`
- creatividad / producción → `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`
- comercial → `AFL_AUTOS_COMERCIAL`
- estado / Homes privados / métricas sanitizadas → `AFL_AUTOS_PLATFORM`
- coordinación / prompts / Home público → `AFL_AUTOS_OPERACION`
- arquitectura global → `ROOT_ECOSISTEMA`
- RAW / multimedia / referencias / entregables → Drive privado

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
- carpeta principal Drive;
- fotos para enviar;
- todas las fotos;
- videos;
- producción;
- resultados.

Al editar datos variables: `GUARDAR JSON → GENERAR SYNC_PUENTE → COORDINADOR ACTUALIZA PUENTE`.

No poner tokens GitHub en el navegador.

## Accesos de carga temporal autorizados por Miguel

Estos enlaces se exponen temporalmente en el Home público para agilizar operación mientras se define dominio/portal definitivo. Los permisos de Drive siguen controlando el acceso real.

- Nuevo material AFL → https://drive.google.com/drive/folders/1dib-Q7iFTyJesmr5xGApTqGLB_jho22Y
- Referencias — imágenes → https://drive.google.com/drive/folders/1sx8jZ74FhLfxOLd2hVevdkol944D2qEI
- Referencias — videos → https://drive.google.com/drive/folders/18Wb8QpX4DxCLTHJKljdkoaYspJN-aqX7
- Referencias — edición/tendencia → https://drive.google.com/drive/folders/1yrok4XmvkdKcKwWRWkzKzRxnq7xF-CwR
- Resultados visuales aprobados → https://drive.google.com/drive/folders/1YqboL47gaw8Gp6GirHGVJ24n2_ITrdqw
- Aprendizaje medido → https://drive.google.com/drive/folders/1H4XJni6GcMoL4mug18BGhtCl6REIybhl
- Logos AFL → https://drive.google.com/drive/folders/1wYAsHihHXbg5eV6mpw-1IsRKPfhTBNad

## Archivos que normalmente puedes pedirme desde chat

- `ROOT_ECOSISTEMA/docs/AFL_AUTOS_SISTEMA_ACTUAL.md`
- `ROOT_ECOSISTEMA/adapters/AFL_AUTOS.md`
- `ROOT_ECOSISTEMA/control/CURRENT_FOCUS.md`
- `AFL_AUTOS_PLATFORM/control/PROJECT_STATE.json`
- `AFL_AUTOS_PLATFORM/schemas/vehicle_private_master.schema.json`
- `AFL_AUTOS_PLATFORM/schemas/production_request.schema.json`
- `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`
- `AFL_AUTOS_OPERACION/prompts/COORDINADOR_PRINCIPAL.md`
- `AFL_AUTOS_OPERACION/prompts/RECOMENDAR_PRODUCCION_HOY.md`
- `AFL_AUTOS_OPERACION/docs/ESTRUCTURA_ACTUAL.md`
- `Vehiculos/vehiculos/<EXPEDIENTE_KEY>/PUENTE.md`

## Consulta rápida desde el Home

El Home V3.5 permite seleccionar una fuente y genera un prompt como:

```text
AFL AUTOS — CONSULTA_RAPIDA_FUENTE

FUENTE: AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md

Usa GitHub conectado y abre la versión vigente exacta de esta fuente. No respondas desde memoria. Muéstrame un resumen operativo y, si te lo pido, el contenido completo. Señala fecha/estado y contradicciones con otras fuentes vigentes.
```

Para `PUENTE.md`, el Home usa el vehículo seleccionado y genera la ruta lógica del expediente.

## Regla de mantenimiento

Cuando cambie alguno de estos elementos, el Coordinador debe actualizar este archivo en el mismo bloque de trabajo:

- versión del Home / Vehicle Hub / Production Studio;
- jerarquía;
- módulo nuevo o retirado;
- flujo maestro;
- fuente de verdad;
- carpeta de carga rápida;
- catálogo de archivos consultables;
- regla transversal de producción.

Los estados particulares de cada vehículo continúan en su `PUENTE.md`; no se duplican aquí.
