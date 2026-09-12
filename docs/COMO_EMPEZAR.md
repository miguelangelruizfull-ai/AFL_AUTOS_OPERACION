# AFL AUTOS OPERACIÓN — Cómo empezar

Este repositorio es la puerta de entrada operativa de AFL AUTOS. No sustituye `Vehiculos`, `AFL_AUTOS_CONTENT_SYSTEM`, `AFL_AUTOS_COMERCIAL`, `AFL_AUTOS_PLATFORM` ni Drive.

## Home activo

El Home canónico es **V3.2 Flujo Guiado**, construido sobre la UX simple de V3.1:

`index.html`

URL:

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

V4/V4.1 siguen como laboratorio y no sustituyen al Home activo.

## Uso normal

1. Selecciona el vehículo/proyecto.
2. Lee la tarjeta **AHORA**.
3. Pulsa **CONTINUAR — COPIAR PROMPT**.
4. Trabaja en ChatGPT.
5. Cuando termine, copia `RETORNO_AL_COORDINADOR`.
6. Pégalo en **Terminó el chat anterior**.
7. Pulsa **PROCESAR RETORNO**.
8. El tablero cambia y muestra la siguiente acción.

Objetivo:

`SELECCIONAR → CONTINUAR → TRABAJAR → PEGAR RETORNO → CONTINUAR`

No debería ser necesario decidir manualmente qué módulo sigue durante el flujo normal.

## Semáforo

- verde — etapa anterior completada para navegación;
- amarillo — haz esto ahora;
- azul — esperando una decisión de Miguel;
- rojo — bloqueo, rechazo o contradicción;
- gris — todavía no corresponde.

Estas luces son una representación operativa.

`TABLERO = NAVEGACION`

`PUENTE.md = VERDAD`

## Vehículos existentes

El selector usa `data/expedientes-public-index.json`.

El índice contiene únicamente navegación sanitizada. No contiene enlaces privados de Drive.

Al pulsar **VER PUENTE**, se abre el archivo canónico de la unidad. El chat trabajador debe leer/fetch el PUENTE vigente antes de modificar nada.

## Atajos locales

Puedes guardar en el navegador un enlace a material/Drive para la unidad.

También el `LINK_PRINCIPAL` devuelto por un chat puede quedar como acceso rápido local.

Esos enlaces locales:

- facilitan navegación;
- no se suben automáticamente al repositorio público;
- no sustituyen el PUENTE.

## Retorno estructurado

V3.2 entiende el formato histórico y campos nuevos:

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

El Home usa estos campos para navegación; no los convierte en verdad durable por sí mismo.

## Flujo operativo

`INGRESO → PLAN_CAPTURA → CAPTURA → SELECCION → RETOQUE → PRODUCCION → REVISION/APRENDIZAJE → APROBACION → PUBLICACION → MEDICION → CIERRE`

## FAST PATH de contenido

Producción/revisión cotidiana:

1. `PUENTE.md`;
2. `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`;
3. pieza/material real;
4. prompt específico.

Abrir auditorías, motores completos y logs solo si:

- hay contradicción;
- el runtime no cubre el caso;
- existe bloqueo;
- se está rediseñando;
- se analiza una referencia externa;
- se hace auditoría;
- se prepara un test formal.

Esto evita releer 10–15 archivos para una tarea normal.

## Producción visual

Reglas rápidas:

- fotografía preparada antes de pieza final;
- `ORIGINAL → SELECCION → RETOQUE → LAVADO_VISUAL_SI_APLICA → PIEZA_FINAL`;
- vehículo protagonista;
- `NO ICONOS`;
- 2–4 datos confirmados/publicables máximo;
- jerarquía contemporánea/editorial;
- composición específica por formato;
- evitar plantilla genérica;
- no usar `premium` como sustituto de una dirección real;
- no modificar físicamente la unidad.

## Video / Reel / TikTok

El runtime resume familias y hooks activos.

Para edición moderna existe:

`AFL_AUTOS_CONTENT_SYSTEM/networks/tiktok/EDITING_EFFECTS_LIBRARY.md`

Incluye recursos de prueba como:

- cuts a beat;
- speed ramps moderados;
- punch-in;
- match cuts;
- transiciones por movimiento;
- motion text;
- subtítulos;
- sonido real/SFX;
- audio con ducking.

Regla:

`HOOK / VEHICULO / CLARIDAD > EFECTO`

## Revisar diseño

Cuando el tablero queda azul o la etapa es revisión, el Home muestra:

- pieza/versión;
- aprobar/corregir/rechazar;
- qué no gustó;
- qué conservar;
- referencia opcional;
- comentario.

La persistencia durable sigue en `AFL_AUTOS_CONTENT_SYSTEM`.

## Referencias de competencia / inspiración

Existe una bandeja privada en Drive para subir:

- flyers;
- capturas;
- videos.

El Home público no expone la URL. Puede guardarse como atajo local.

Después usar:

`prompts/ANALIZAR_REFERENCIA_CREATIVA.md`

Se extraen patrones de composición, jerarquía, hooks, ritmo, edición y CTA. No se clonan piezas o identidad de terceros.

## Publicación y medición

Usar `prompts/PUBLICACION_MEDICION.md` después de una publicación confirmada.

Checkpoints:

- 24 h;
- 72 h;
- 7 d.

Separar métricas de plataforma de mensajes, WhatsApp, llamadas, leads, visitas y ventas.

## Modo avanzado

Los módulos manuales siguen disponibles bajo **Más opciones / modo avanzado** para excepciones, nuevo vehículo, auditorías o diagnóstico.

No deben ser la ruta normal.

## Agenda

La agenda conserva la clave histórica:

`afl_autos_agenda_v1`

Sigue siendo local y auxiliar.

## Fuentes de autoridad

- unidad/datos técnicos → `Vehiculos/PUENTE.md`;
- creatividad/dirección/aprendizaje → `AFL_AUTOS_CONTENT_SYSTEM`;
- conversación/comercial → `AFL_AUTOS_COMERCIAL`;
- análisis/métricas → `AFL_AUTOS_PLATFORM`;
- originales/RAW → Drive;
- coordinación/prompts → `AFL_AUTOS_OPERACION`.

## Reglas críticas

Antes de modificar un archivo existente, hacer fetch vigente.

No publicar/guardar en este repositorio público:

- VIN completo;
- millas/kilómetros;
- precios internos;
- documentos;
- PII;
- conversaciones privadas;
- credenciales;
- enlaces privados de Drive dentro del índice público.

Mantener:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

`DATO_CONFIRMADO ≠ DATO_PUBLICABLE ≠ EVIDENCIA_VISUAL ≠ MOODBOARD ≠ PIEZA_APROBADA`
