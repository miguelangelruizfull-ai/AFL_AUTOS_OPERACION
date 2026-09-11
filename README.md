# AFL_AUTOS_OPERACION

Centro de operación público y móvil de AFL AUTOS.

## Propósito

Este repositorio funciona como **lanzador de trabajo**. Permite iniciar un vehículo nuevo, crear su estrategia de captura, seleccionar material, retocar fotos, producir redes, registrar una publicación, medir resultados, cerrar un chat o arrancar un nuevo chat principal sin depender de una conversación específica.

No sustituye los repositorios privados ni Google Drive.

## Herramienta web

Archivo principal: [`index.html`](./index.html)

Cuando GitHub Pages esté habilitado desde la rama `main` / raíz, la URL esperada será:

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

La web es responsive, no requiere servidor y genera prompts localmente en el navegador.

## Arquitectura

- `AFL_AUTOS_OPERACION` — público: flujo, prompts, manual y herramienta.
- `Vehiculos` — privado: verdad técnica/comercial por unidad (`PUENTE.md`).
- `AFL_AUTOS_CONTENT_SYSTEM` — privado: creatividad, branding, formatos, campañas, casos y motores editoriales.
- `AFL_AUTOS_PLATFORM` — privado: análisis, datasets y metodología.
- Google Drive — multimedia/evidencia pesada.

Ver [`docs/ARQUITECTURA.md`](./docs/ARQUITECTURA.md).

## Inicio rápido V2

1. **+ Nuevo vehículo** → identificar y crear/actualizar expediente.
2. **Estrategia + plan de captura** → decidir cómo vender visualmente esa unidad, crear carpetas de originales y generar checklist con tomas/tiempos.
3. Miguel captura fotos/videos y los sube.
4. **Seleccionar material** → auditar la sesión y copiar los mejores archivos a carpetas de selección.
5. **Lavar / retocar fotos** → trabajar únicamente sobre la selección.
6. **Producir redes** → Facebook/TikTok/historias/flyers/portadas/copies.
7. Miguel aprueba/publica.
8. **Publicación + medición** → URLs y 24 h / 72 h / 7 días.

Guía: [`docs/COMO_EMPEZAR.md`](./docs/COMO_EMPEZAR.md)

Estructura Drive V2: [`docs/ESTRUCTURA_DRIVE_V2.md`](./docs/ESTRUCTURA_DRIVE_V2.md)

## Módulos V2 de la herramienta

- Nuevo vehículo
- Estrategia + plan de captura
- Seleccionar material
- Continuar vehículo
- Lavar / retocar fotos
- Producir redes
- Publicación + medición
- Vendido / entrega
- Cerrar / sincronizar chat
- Nuevo chat principal

## Prompts especializados versionados

La carpeta [`prompts/`](./prompts/) conserva plantillas reutilizables:

- `NUEVO_VEHICULO.md`
- `PLAN_CAPTURA.md`
- `SELECCIONAR_MATERIAL.md`
- `CONTINUAR_VEHICULO.md`
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

Los enlaces o datos que se pegan en `index.html` se usan para construir el prompt en el navegador. No deben convertirse automáticamente en contenido del repositorio.

Ver [`docs/REGLAS_DRIVE_GITHUB.md`](./docs/REGLAS_DRIVE_GITHUB.md).

## Ejemplos V1/V2

- [`Ford F-150 2011 Texas Edition`](./ejemplos/FORD_F150_2011_TEXAS_EDITION.md)
- [`Jeep Wrangler 2017`](./ejemplos/JEEP_WRANGLER_2017.md)

Son ejemplos de flujo sanitizados. La verdad técnica siempre se consulta en el expediente privado vigente.