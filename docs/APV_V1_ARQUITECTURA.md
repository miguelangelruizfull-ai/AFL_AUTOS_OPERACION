# APV V1 — ARQUITECTURA OPERATIVA UNIFICADA

Fecha: 2026-09-22
Estado: `ARQUITECTURA_APROBADA / UI_BETA_V1_IMPLEMENTADA / INTEGRACIONES_AUTENTICADAS_PENDIENTES`

## Objetivo

APV será la interfaz operativa unificada de AFL AUTOS para trabajar desde una sola superficie sin duplicar fuentes de verdad.

Principio:

`UNA INTERFAZ / VARIAS AUTORIDADES / UN MISMO VEHICLE_ID`

APV no sustituye repositorios dueños. Orquesta navegación, consulta, captura y acciones controladas.

## Identidad canónica

La clave operativa común será:

`VEHICLE_ID = CODIGO_VEHICULO = CODIGO_WHATSAPP = AFL-<VIN6>`

El VIN completo puede mostrarse y editarse únicamente en la capa privada autorizada. No debe persistirse en superficies públicas.

## Módulos APV V1

- Inicio
- Buscador global
- Nuevo vehículo
- Inventario
- Ficha de vehículo
- Material / Drive
- Respuestas
- Leads
- Seguimientos
- Agenda
- Producción
- Resultados
- Demo UX
- Content Lab
- Drive / GitHub
- ROOT

## Buscador global

Debe resolver por:

- VEHICLE_ID;
- VIN completo en capa privada;
- VIN6;
- marca;
- modelo;
- año;
- versión;
- alias;
- código WhatsApp.

La salida debe unificar navegación hacia:

- ficha vigente;
- expediente / PUENTE;
- carpetas y material;
- paquete WhatsApp;
- respuestas rápidas;
- leads relacionados;
- siguiente acción;
- producción y resultados.

## Nuevo vehículo

Flujo base:

`VIN → AFL-<VIN6> → CARPETA DRIVE → JSON PRIVADO → CAPTURA DE DATOS → SUBIR FOTOS/VIDEOS → CORROBORACION VISUAL → CONFIRMACION MIGUEL → FICHAS COMERCIALES → PRODUCCION`

La unidad permanece en estado provisional hasta validación.

## Material y Drive

APV debe permitir localizar y abrir las carpetas del vehículo y cargar material nuevo o existente desde dispositivo hacia el almacenamiento privado autorizado.

Estructura canónica en Drive por vehículo:

```text
AFL-<VIN6>__AÑO_MARCA_MODELO/
├── 00_INBOX
├── 01_ORIGINALES_FOTOS
├── 02_ORIGINALES_VIDEO
├── 03_DOCUMENTOS_PRIVADOS
├── 04_INSPECCION_FISICA
├── 05_SELECCION
├── 06_RETOQUE
├── 07_PRODUCCION
├── 08_APROBADOS_MIGUEL
├── 09_ENTREGA_CLIENTE
├── 10_RESULTADOS
└── 99_HISTORICO
```

Autoridad: `Vehiculos/docs/PROTOCOLO_VEHICULO_V2.md`.

APV puede mostrar etiquetas UX más simples, pero no debe inventar una segunda estructura física ni crear carpetas paralelas. Las carpetas legacy se reutilizan mediante equivalencias verificadas y no se renombran automáticamente.

Los originales no se sobrescriben.

## Respuestas y comercial

Desde la ficha de unidad APV debe permitir:

- contestar comentario;
- contestar inbox;
- preparar respuesta Messenger/TikTok/WhatsApp;
- consultar precio, disponibilidad, ubicación y atributos vigentes;
- enviar paquete de fotos WhatsApp aprobado;
- generar CTA;
- crear o vincular lead;
- registrar siguiente acción.

La lógica comercial pertenece a `AFL_AUTOS_COMERCIAL`.

## Leads y seguimiento

Cada lead activo debe tener:

- lead_id;
- vehicle_id;
- canal/origen;
- etapa;
- último contacto;
- interés/pregunta;
- siguiente acción;
- fecha de seguimiento;
- notas resumidas;
- resultado.

Acciones disponibles:

- llamar;
- WhatsApp;
- enviar fotos;
- enviar ubicación;
- proponer/agendar visita;
- registrar negociación;
- programar seguimiento.

APV puede recomendar la siguiente acción, pero no debe inventar datos de vehículo ni estado comercial.

## Producción

Desde una unidad confirmada APV debe poder enviar el contexto correcto a producción:

- recomendar qué producir;
- flyer;
- Reel;
- TikTok;
- historia;
- paquete;
- WhatsApp.

Autoridad creativa: `AFL_AUTOS_CONTENT_SYSTEM`.

## Demo UX

APV incluirá acceso directo a `AFL_AUTOS_HOME_UX_DEMO1`.

Regla:

`DEMO_UX = LABORATORIO`

`APV = OPERACION_REAL`

Las ideas validadas en Demo UX pueden incorporarse a APV después de revisión. Demo UX no se convierte en fuente de verdad.

## Mapa de autoridades

| Dominio APV | Fuente dueña |
|---|---|
| identidad, datos vigentes, expediente | `Vehiculos` |
| RAW, fotos, videos, documentos, entregables | Drive privado |
| comercial, respuestas, leads, seguimiento | `AFL_AUTOS_COMERCIAL` |
| creatividad y producción | `AFL_AUTOS_CONTENT_SYSTEM` |
| herramientas privadas, schemas, métricas | `AFL_AUTOS_PLATFORM` |
| histórico sanitizado | `AFL_AUTOS_DATA_HISTORY` |
| experimentos creativos | `AFL_AUTOS_CONTENT_LAB` |
| interfaz, navegación, prompts | `AFL_AUTOS_OPERACION` |
| demo UX | `AFL_AUTOS_HOME_UX_DEMO1` |
| gobierno transversal | `ROOT_ECOSISTEMA` |

## Regla de integración

`APV = ORQUESTADOR`

`APV != FUENTE_DE_VERDAD`

La interfaz consulta o importa las fuentes autorizadas y devuelve cambios al repositorio o almacenamiento dueño.

No crear un JSON público maestro con PII, VIN completo, conversaciones, teléfonos, documentos o enlaces privados.

## Privacidad

APV podrá tener una capa privada autenticada con VIN completo, enlaces Drive, datos de inventario y seguimiento real.

La superficie pública de `AFL_AUTOS_OPERACION` conserva sanitización. Si durante construcción se reutiliza una UI pública, los datos reales deben mantenerse fuera del repositorio y cargarse desde fuente privada/autorizada.

`UI_PUBLICA != DATOS_PUBLICOS`

## Estado de implementación

Aprobado por Miguel el 2026-09-22.

Pendiente:

1. contrato JSON privado APV;
2. diseño UI responsive móvil/escritorio — IMPLEMENTADO EN BETA;
3. buscador global — IMPLEMENTADO SOBRE JSON IMPORTADO;
4. integración de Nuevo Vehículo — BORRADOR/JSON LOCAL IMPLEMENTADO;
5. resolución de carpetas Drive — UI/PROMPT IMPLEMENTADOS, CONECTOR AUTENTICADO PENDIENTE;
6. ficha unificada — BETA IMPLEMENTADA;
7. respuestas/leads/seguimiento — BETA LOCAL IMPLEMENTADA;
8. acceso Demo UX y Content Lab — IMPLEMENTADO;
9. integración de producción — PREPARACION DE PROMPT IMPLEMENTADA, EJECUCION CONECTADA PENDIENTE;
10. pruebas antes de sustituir cualquier Home vigente.

Hasta completar pruebas:

`HOME_VIGENTE NO SE REEMPLAZA`

`APV_V1 = CONSTRUCCION CONTROLADA`


## Implementación UI beta — 2026-09-22

Entrada:

`apv/index.html`

Incluye:

- navegación responsive móvil/escritorio;
- buscador global sobre JSON privados importados;
- alta de nuevo vehículo con `AFL-<VIN6>`;
- generación y descarga de JSON borrador;
- previsualización local de fotos/videos;
- inventario local;
- ficha unificada;
- estructura de material/Drive;
- respuestas y leads locales;
- seguimiento local;
- preparación de prompts de producción y medición;
- acceso a Demo UX, Content Lab, Home Operaciones V4 y ROOT;
- conexiones privadas configurables solo en el navegador.

No implementa todavía escritura directa autenticada en Drive/GitHub/Meta. Esas acciones permanecen pendientes y no se simulan.


## Cierre de actualización de vehículo

APV debe mostrar al final de cada actualización de unidad:

- opciones numeradas de siguiente movimiento;
- `RECOMENDADO AHORA`;
- pendientes críticos de la unidad;
- acceso directo a la acción recomendada cuando la integración exista.

Esta regla deriva de `Vehiculos/docs/PROTOCOLO_VEHICULO_V2.md`.


## Menú contextual post-actualización

Autoridad operativa:

`prompts/MENU_VEHICULO_POST_UPDATE.md`

Después de cada actualización o consulta de una unidad, APV debe poder ofrecer:

1. crear contenido con material actual;
2. generar/actualizar plan de captura;
3. abrir Drive / revisar nuevo material / `LISTO MATERIAL ACTUALIZADO`;
4. tarea de campo;
5. flyer / historia / post;
6. ficha / WhatsApp / respuesta comercial;
7. pendientes / seguimiento;
8. regresar al vehículo;
9. inventario / nuevo vehículo;
0. AFL AUTOS;
ROOT. ROOT global.

La recomendación creativa puede consultar `AFL_AUTOS_CONTENT_LAB` como laboratorio/insumo experimental, pero la autoridad creativa sigue en `AFL_AUTOS_CONTENT_SYSTEM`.

Cuando se elige TikTok/Reel, el flujo debe decidir familia, hook, duración, audio, voz, efectos, CTA y material faltante a partir de:

`OBJETIVO + VEHICULO + MATERIAL + PLATAFORMA + PULSO DEL DIA + APRENDIZAJE MEDIDO`

El pulso actual debe revisarse el mismo día cuando exista acceso web y aporte valor. Incluye señales relevantes de TikTok, Meta/Reels y herramientas de edición como CapCut sin copiar plantillas distintivas.

### Navegación reversible

`ACCION → VEHICULO → INVENTARIO/NUEVO VEHICULO → AFL AUTOS → ROOT GLOBAL`

### Gate de precio y CTA

Toda pieza de venta debe resolver `MOSTRAR_PRECIO = SI/NO`. Si Miguel no lo autorizó para esa pieza, preguntar. El sistema debe recomendar SI/NO según canal, objetivo y precio vigente confirmado.

CTA debe recomendarse según objetivo y canal consumiendo reglas vigentes de `AFL_AUTOS_COMERCIAL`.
