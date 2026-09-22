# AFL AUTOS — ESTRUCTURA ACTUAL

Última actualización: 2026-09-21
Estado: `ACTIVA / HOME_OPERACIONES_V4_BETA_CANONICA`

> Esta es una proyección operativa sanitizada. No sustituye las fuentes de verdad privadas ni el `PUENTE.md` de cada unidad.

## Jerarquía

`MIGUEL → ROOT → COORDINADOR AFL → MÓDULO → EJECUTOR`

## Arquitectura principal

- `Vehicle Hub V1.2` → ficha privada/editable del vehículo.
- `Production Studio V1.2` → decisión y producción por canal.
- `Home Operaciones V4` → interfaz unificada responsive para Operaciones, Respuestas, Seguimiento, Ficha/JSON, Producción, Drive, GitHub/Sistema, ROOT Console y modo avanzado. V3.7 queda preservado como rollback durante validación.
- `Consulta Rápida Leads V1` → resolución captura/publicación → índice sanitizado → `EXPEDIENTE_KEY` → `PUENTE.md` → reglas comerciales → respuesta corta.\n- `Asistente de Respuestas V1.3` → respuesta pública/privada, seguimiento, aprendizaje Meta sanitizado y alta de nuevo vehículo mediante JSON exportable; no persiste PII en el repositorio público.
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

## Interfaz humana del Coordinador AFL

El Coordinador AFL sigue el mismo principio de simplicidad del ROOT: Miguel no necesita memorizar módulos, rutas ni nombres de archivos para decidir qué sigue.

Cuando el chat inicia sin una tarea concreta, después de leer fuentes vigentes muestra hasta cuatro opciones contextuales, por ejemplo:

1. `COORDINADOR / CONTINUAR AQUÍ`;
2. `PRODUCTOR / EJECUTOR`;
3. `CONSULTA RÁPIDA / COMERCIAL`;
4. `AUDITOR / ROOT / OTRA ÁREA`.

Siempre indica:

- `RECOMENDADO AHORA: <opción + motivo>`;
- `NUEVO_CHAT_RECOMENDADO: SI/NO`.

Cuando Miguel ya dio una tarea concreta, no se interrumpe la ejecución para pedir una opción. Se ejecuta el trabajo autorizado y al finalizar se muestra `SIGUIENTE MOVIMIENTO` con hasta cuatro opciones reales.

Si se recomienda nuevo chat, el Coordinador entrega `TITULO_CHAT`, `ROL/MODULO`, `MOTIVO` y `PROMPT_INICIAL` listo para copiar. Si no, indica `CONTINUAR_EN_ESTE_CHAT`.

No se abre un chat nuevo por rutina: debe existir cambio de módulo, especialización, aislamiento de contexto o una razón operativa clara.

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
→ SIGUIENTE MOVIMIENTO 1–4 + RECOMENDACIÓN
```

## Ingesta temporal de prueba

Home V3.7 expone temporalmente un acceso autorizado por Miguel al buzón de material por clasificar.

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

Home V3.7 conserva la consulta de fuentes vigentes mediante prompts que obligan a leer GitHub conectado en vez de responder desde memoria.

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
- interfaz humana / menú de siguiente movimiento;
- módulo nuevo o retirado;
- flujo maestro;
- fuente de verdad;
- acceso de carga rápida;
- catálogo de archivos consultables;
- índice sanitizado de publicaciones;
- regla transversal de producción.

Los estados particulares de cada vehículo continúan en su `PUENTE.md`; no se duplican aquí.


## Home Operaciones V4 — unificación 2026-09-21

- Entrada canónica pública: `index.html → home-operaciones-v4.html`.
- Unifica navegación operativa sin fusionar las fuentes de verdad.
- La ficha permite validar/exportar JSON y generar `SYNC_PUENTE`; editar en navegador no modifica el PUENTE automáticamente.
- Seguimiento conserva `afl_autos_agenda_v1` como caché/agenda auxiliar local.
- Producción permite retorno manual y enrutamiento por módulos; aprobación de Miguel nunca se infiere.
- Drive representa las tres cuentas y su estructura, pero no codifica nuevos enlaces/IDs privados en V4. Los accesos reales requieren capa privada/autenticada o configuración local autorizada.
- ROOT Console se integra como puerta de retorno/enrutamiento, sin convertir este repo en fuente global.
- Los HTML anteriores no se eliminan; permanecen como LEGACY/ROLLBACK hasta validación funcional explícita.
- `UN SOLO HOME / FUENTES SEPARADAS` continúa siendo la regla.
