# AFL_AUTOS_OPERACION

Centro de operación público y móvil de AFL AUTOS.

## Propósito

Este repositorio funciona como **lanzador y coordinador de trabajo**. Permite iniciar un vehículo nuevo, crear su estrategia de captura, seleccionar material, retocar fotos, producir redes, revisar paquetes antes de aprobación, registrar una publicación, medir resultados, procesar retornos de chats trabajadores, continuar una tarea, cerrar trabajo o arrancar un nuevo chat principal sin depender de una conversación específica.

No sustituye los repositorios privados ni Google Drive.

## Herramienta web

Archivo principal: [`index.html`](./index.html)

URL con GitHub Pages:

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

La web es responsive, no requiere servidor y genera prompts localmente en el navegador.

### Home V4

La versión V4 añade:

- centro de coordinación;
- mapa visible de fuentes de autoridad;
- **preflight** antes de generar un prompt;
- lector local de `RETORNO_AL_COORDINADOR`;
- recomendación local de ruta posterior al retorno;
- etapa explícita de **Revisión / aprobación**;
- estados separados para espera, aprobación, publicación y medición;
- agenda operativa local con migración desde la agenda anterior;
- bloqueo básico cuando un módulo de continuidad requiere un retorno/checkpoint y no fue pegado.

El lector de retornos y el preflight son ayudas locales. **No consultan ni sustituyen GitHub/Drive**. El chat trabajador todavía debe verificar fuentes vigentes.

## Arquitectura

- `AFL_AUTOS_OPERACION` — público: flujo, prompts, manual y herramienta.
- `Vehiculos` — privado: verdad técnica/comercial por unidad (`PUENTE.md`).
- `AFL_AUTOS_CONTENT_SYSTEM` — privado: creatividad, branding, formatos, campañas, casos y motores editoriales.
- `AFL_AUTOS_PLATFORM` — privado: análisis, datasets y metodología.
- Google Drive — multimedia/evidencia pesada.

Ver [`docs/ARQUITECTURA.md`](./docs/ARQUITECTURA.md).

## Inicio rápido V4

1. **+ Nuevo vehículo** → identificar y crear/actualizar expediente.
2. **Estrategia + plan de captura** → decidir cómo vender visualmente esa unidad, crear/reutilizar carpetas de originales y generar checklist específico.
3. Miguel captura fotos/videos y los sube.
4. **Seleccionar material** → auditar la sesión y copiar los mejores archivos a selección.
5. **Lavar / retocar fotos** → trabajar únicamente sobre la selección formal.
6. **Producir redes** → Facebook/TikTok/historias/flyers/portadas/copies.
7. **Revisión / aprobación** → comprobar el paquete sin convertir `PRODUCIDO` o `SUBIDO` en `APROBADO`.
8. Miguel aprueba y publica cuando corresponda.
9. **Publicación + medición** → registrar URLs/hora base y checkpoints 24 h / 72 h / 7 días.

Flujo general:

`INGRESO → PLAN CAPTURA → CAPTURA → SELECCIÓN → RETOQUE → PRODUCCIÓN → APROBACIÓN → PUBLICACIÓN → MEDICIÓN`

Si un chat se llena o una tarea queda a medias, usar **Continuar hilo / tarea**. Se pega el último `RETORNO_AL_COORDINADOR` o checkpoint y el nuevo chat valida las fuentes vigentes antes de continuar.

## Procesamiento de retornos V4

El Home permite pegar un `RETORNO_AL_COORDINADOR` y analizar localmente sus campos estándar.

Puede mostrar una ruta orientativa como:

- captura;
- selección;
- retoque;
- producción;
- revisión/aprobación;
- publicación/medición;
- cierre;
- continuar desde el primer pendiente verificable.

La recomendación del navegador **no cambia estados** y no sustituye `PUENTE.md`, Drive ni otros registros canónicos.

## Preflight V4

Antes de generar un prompt, el Home revisa condiciones básicas:

- vehículo/proyecto indicado;
- Drive cuando ayuda al módulo;
- retorno/checkpoint obligatorio para `Procesar retorno` y `Continuar hilo`;
- recordatorio de hacer fetch vigente antes de escribir;
- recordatorio de separar datos confirmados/publicables y estados de producción/publicación.

Las advertencias no inventan información ni validan el contenido privado.

## Guías

- [`docs/COMO_EMPEZAR.md`](./docs/COMO_EMPEZAR.md)
- [`docs/COORDINACION_Y_RETORNOS.md`](./docs/COORDINACION_Y_RETORNOS.md)
- [`docs/AGENDA_OPERATIVA.md`](./docs/AGENDA_OPERATIVA.md)
- [`docs/ESTRUCTURA_DRIVE_V2.md`](./docs/ESTRUCTURA_DRIVE_V2.md)

## Módulos V4 de la herramienta

- Nuevo vehículo
- Estrategia + plan de captura
- Seleccionar material
- Lavar / retocar fotos
- Producir redes
- **Revisión / aprobación**
- Continuar vehículo
- Procesar `RETORNO_AL_COORDINADOR`
- Continuar hilo / tarea
- Publicación + medición
- Vendido / entrega
- Cerrar / sincronizar chat
- Nuevo chat principal

Además incluye una **Agenda operativa local** para pendientes por fecha/etapa. Se guarda solo en el navegador mediante `localStorage`; no se publica en GitHub y no sustituye una automatización real.

V4 migra localmente los pendientes existentes de `afl_autos_agenda_v1` a `afl_autos_agenda_v2` cuando corresponde; no elimina la agenda anterior.

## Retorno al coordinador

Todo prompt generado por V4 añade un bloque obligatorio `RETORNO_AL_COORDINADOR`.

La intención es que Miguel no tenga que copiar respuestas largas entre chats. Normalmente basta con copiar ese bloque al coordinador.

Formato documentado en [`docs/COORDINACION_Y_RETORNOS.md`](./docs/COORDINACION_Y_RETORNOS.md).

## Recordatorios y mediciones

La agenda local puede guardar tareas como:

- captura pendiente;
- selección;
- retoque;
- producción;
- aprobación;
- corrección en plataforma;
- publicación;
- medición 24 h;
- medición 72 h;
- medición 7 días;
- auditoría o seguimiento;
- esperando a Miguel u otro chat.

El botón **COPIAR PROMPT DE RECORDATORIOS** genera una instrucción para pegar en ChatGPT y solicitar recordatorios reales. La herramienta por sí sola no declara una tarea `PROGRAMADA`.

## Prompts especializados versionados

La carpeta [`prompts/`](./prompts/) conserva plantillas reutilizables. El Home también contiene plantillas operativas embebidas; los archivos versionados sirven como referencia y pueden evolucionar por separado.

## Estados

Consultar [`docs/ESTADOS.md`](./docs/ESTADOS.md).

Regla central:

`CREACIÓN ≠ SUBIDA ≠ APROBACIÓN ≠ PROGRAMACIÓN ≠ PUBLICACIÓN ≠ MEDICIÓN`

Y el flujo de materia prima queda separado:

`ORIGINALES ≠ SELECCIÓN ≠ RETOQUE ≠ PIEZA FINAL`

Para producción pública también aplicar:

`DATO_CONFIRMADO ≠ DATO_PUBLICABLE ≠ EVIDENCIA_VISUAL ≠ MOODBOARD ≠ PIEZA_APROBADA`

## Seguridad del repo público

No guardar aquí:

- VIN;
- kilometraje/odómetro;
- precios internos;
- documentos;
- datos personales;
- leads o conversaciones;
- credenciales;
- evidencia privada innecesaria.

Los enlaces/datos escritos en el formulario del Home se usan localmente para construir prompts. La agenda también permanece local. Ninguno debe convertirse automáticamente en contenido del repositorio.

Ver [`docs/REGLAS_DRIVE_GITHUB.md`](./docs/REGLAS_DRIVE_GITHUB.md).

## Ejemplos históricos

La carpeta `ejemplos/` conserva material sanitizado de flujos anteriores. Los nombres, overlays o afirmaciones históricas de esos archivos **no son fuente técnica vigente**. Para cualquier unidad manda su expediente privado actual en `Vehiculos/PUENTE.md`.
