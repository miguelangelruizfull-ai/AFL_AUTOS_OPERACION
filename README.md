# AFL_AUTOS_OPERACION

Centro de operación público y móvil de AFL AUTOS.

## Propósito

Este repositorio funciona como **lanzador de trabajo**. Permite iniciar un vehículo nuevo, crear su estrategia de captura, seleccionar material, retocar fotos, producir redes, registrar una publicación, medir resultados, continuar una tarea en otro chat, cerrar trabajo o arrancar un nuevo chat principal sin depender de una conversación específica.

No sustituye los repositorios privados ni Google Drive.

## Herramienta web

Archivo principal: [`index.html`](./index.html)

URL esperada con GitHub Pages:

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

La web es responsive, no requiere servidor y genera prompts localmente en el navegador.

## Arquitectura

- `AFL_AUTOS_OPERACION` — público: flujo, prompts, manual y herramienta.
- `Vehiculos` — privado: verdad técnica/comercial por unidad (`PUENTE.md`).
- `AFL_AUTOS_CONTENT_SYSTEM` — privado: creatividad, branding, formatos, campañas, casos y motores editoriales.
- `AFL_AUTOS_PLATFORM` — privado: análisis, datasets y metodología.
- Google Drive — multimedia/evidencia pesada.

Ver [`docs/ARQUITECTURA.md`](./docs/ARQUITECTURA.md).

## Inicio rápido V3

1. **+ Nuevo vehículo** → identificar y crear/actualizar expediente.
2. **Estrategia + plan de captura** → decidir cómo vender visualmente esa unidad, crear carpetas de originales y generar checklist con tomas/tiempos.
3. Miguel captura fotos/videos y los sube.
4. **Seleccionar material** → auditar la sesión y copiar los mejores archivos a carpetas de selección.
5. **Lavar / retocar fotos** → trabajar únicamente sobre la selección.
6. **Producir redes** → Facebook/TikTok/historias/flyers/portadas/copies.
7. Miguel aprueba/publica.
8. **Publicación + medición** → URLs y 24 h / 72 h / 7 días.

Si un chat se llena o una tarea queda a medias, usar **Continuar hilo / tarea**. Se pega el último `RETORNO_AL_COORDINADOR` o checkpoint y el nuevo chat valida las fuentes vigentes antes de continuar.

Guías:

- [`docs/COMO_EMPEZAR.md`](./docs/COMO_EMPEZAR.md)
- [`docs/COORDINACION_Y_RETORNOS.md`](./docs/COORDINACION_Y_RETORNOS.md)
- [`docs/AGENDA_OPERATIVA.md`](./docs/AGENDA_OPERATIVA.md)
- [`docs/ESTRUCTURA_DRIVE_V2.md`](./docs/ESTRUCTURA_DRIVE_V2.md)

## Módulos V3 de la herramienta

- Nuevo vehículo
- Estrategia + plan de captura
- Seleccionar material
- Continuar vehículo
- **Continuar hilo / tarea**
- Lavar / retocar fotos
- Producir redes
- Publicación + medición
- Vendido / entrega
- Cerrar / sincronizar chat
- Nuevo chat principal

Además incluye una **Agenda operativa local** para pendientes por fecha/etapa. Se guarda solo en el navegador mediante `localStorage`; no se publica en GitHub y no sustituye una automatización real.

## Retorno al coordinador

Todo prompt generado por la V3 añade un bloque obligatorio `RETORNO_AL_COORDINADOR`.

La intención es que Miguel no tenga que copiar respuestas largas entre chats. Normalmente basta con copiar ese bloque al coordinador.

Formato documentado en [`docs/COORDINACION_Y_RETORNOS.md`](./docs/COORDINACION_Y_RETORNOS.md).

## Recordatorios y mediciones

La agenda local puede guardar tareas como:

- captura pendiente;
- aprobación;
- publicación;
- medición 24 h;
- medición 72 h;
- medición 7 días;
- auditoría o seguimiento.

El botón **COPIAR PROMPT DE RECORDATORIOS** genera una instrucción para pegar en ChatGPT y solicitar recordatorios reales. La herramienta por sí sola no declara una tarea `PROGRAMADA`.

## Prompts especializados versionados

La carpeta [`prompts/`](./prompts/) conserva plantillas reutilizables:

- `NUEVO_VEHICULO.md`
- `PLAN_CAPTURA.md`
- `SELECCIONAR_MATERIAL.md`
- `CONTINUAR_VEHICULO.md`
- `CONTINUAR_HILO.md`
- `LAVAR_FOTOS.md`
- `PRODUCIR_REDES.md`
- `PUBLICACION_MEDICION.md`
- `VENDIDO_ENTREGA.md`
- `CIERRE_CHAT.md`
- `CHAT_PRINCIPAL.md`
- `TIKTOK_AUDITORIA.md`

## Estados

Consultar [`docs/ESTADOS.md`](./docs/ESTADOS.md).

Regla central:

`CREACIÓN ≠ SUBIDA ≠ APROBACIÓN ≠ PROGRAMACIÓN ≠ PUBLICACIÓN ≠ MEDICIÓN`

Y el flujo de materia prima queda separado:

`ORIGINALES ≠ SELECCIÓN ≠ RETOQUE ≠ PIEZA FINAL`

## Seguridad del repo público

No guardar aquí:

- VIN;
- kilometraje;
- precios internos;
- documentos;
- datos personales;
- leads o conversaciones;
- credenciales;
- evidencia privada innecesaria.

Los enlaces/datos escritos en `index.html` se usan en el navegador para construir prompts. La agenda también permanece local. Ninguno debe convertirse automáticamente en contenido del repositorio.

Ver [`docs/REGLAS_DRIVE_GITHUB.md`](./docs/REGLAS_DRIVE_GITHUB.md).

## Ejemplos V1/V2

- [`Ford F-150 2011 Texas Edition`](./ejemplos/FORD_F150_2011_TEXAS_EDITION.md)
- [`Jeep Wrangler 2017`](./ejemplos/JEEP_WRANGLER_2017.md)

Son ejemplos de flujo sanitizados. La verdad técnica siempre se consulta en el expediente privado vigente.