# AFL_AUTOS_OPERACION

Centro de operación público y móvil de AFL AUTOS.

## Propósito

Este repositorio funciona como **lanzador de trabajo**. Permite iniciar un vehículo nuevo, continuar una unidad, retocar fotos, producir redes, registrar una publicación, medir resultados, cerrar un chat o arrancar un nuevo chat principal sin depender de una conversación específica.

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

## Inicio rápido

1. Abre la herramienta web.
2. Pulsa **+ Nuevo vehículo**.
3. Pega el enlace de Drive.
4. Completa fecha/prioridad/notas.
5. Pulsa **GENERAR PROMPT**.
6. Copia el prompt a un chat nuevo.
7. Cuando termine el checkpoint, usa **¿Qué hago ahora?** para elegir el siguiente módulo.

Guía: [`docs/COMO_EMPEZAR.md`](./docs/COMO_EMPEZAR.md)

## Módulos V1

- Nuevo vehículo
- Continuar vehículo
- Lavar / retocar fotos
- Producir redes
- Publicación + medición
- Vendido / entrega
- Cerrar / sincronizar chat
- Nuevo chat principal

## Estados

Consultar [`docs/ESTADOS.md`](./docs/ESTADOS.md).

Regla central:

`CREACIÓN ≠ SUBIDA ≠ APROBACIÓN ≠ PROGRAMACIÓN ≠ PUBLICACIÓN ≠ MEDICIÓN`

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

## Ejemplos V1

- [`Ford F-150 2011 Texas Edition`](./ejemplos/FORD_F150_2011_TEXAS_EDITION.md)
- [`Jeep Wrangler 2017`](./ejemplos/JEEP_WRANGLER_2017.md)

Son ejemplos de flujo sanitizados. La verdad técnica siempre se consulta en el expediente privado vigente.