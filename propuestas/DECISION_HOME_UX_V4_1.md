# AFL AUTOS — Decisión de UX V4.1

Fecha: `2026-09-11`

Estado: `ROLLBACK_VISUAL_EJECUTADO / V4_1_CONSERVADO_COMO_CANDIDATO`

## Decisión vigente

Miguel solicitó regresar el Home canónico a la versión V3.1 que ya había usado en operación real.

Por tanto:

`index.html = V3.1 ACTIVO`

`home_v4_1.html = CANDIDATO / LABORATORIO`

Commit histórico restaurado para `index.html`:

`1f74f29acd00a8c5e841792ce28d52f6911b14f1`

El rollback se realizó sin borrar las mejoras posteriores del repositorio.

## Motivo

Miguel confirmó que V3/V3.1 era claro y funcional durante producción real. El Home V4 se percibió más largo y menos evidente, y V4.1 todavía no justificaba sustituir la interfaz ya probada.

La prioridad es:

`UX PROBADA PRIMERO / EVOLUCION SIN ROMPER`

## Qué se conserva de V4.1

No borrar:

- `home_v4_1.html`;
- `assets/home-v4-1.css`;
- `assets/home-v4-1.js`;
- `config/home-v4-1-actions.js`;
- `data/expedientes-public-index.json`;
- integración conceptual con `AFL_AUTOS_COMERCIAL`;
- selector de expedientes como idea validable;
- navegación progresiva;
- preflight contextual;
- rutas separadas de contenido.

Estas piezas quedan disponibles para futuras pruebas controladas, no como Home canónico.

## Mejoras internas que siguen vigentes

El rollback de interfaz NO revierte:

- `prompts/PLAN_CAPTURA.md`;
- `prompts/SELECCIONAR_MATERIAL.md`;
- `prompts/PRODUCIR_REDES.md`;
- `prompts/REVISION_APROBACION.md`;
- `prompts/PUBLICACION_MEDICION.md`;
- `prompts/COMERCIAL_ROUTER.md`;
- arquitectura de `AFL_AUTOS_COMERCIAL`;
- auditoría/Motor Visual de flyers;
- Motor Editorial y auditoría TikTok;
- índices derivados de expedientes;
- reglas de privacidad, estados y fuentes de verdad.

## Principio permanente

`UN SOLO HOME / FUENTES SEPARADAS`

`COMPLEJO POR DENTRO / SIMPLE POR FUERA`

El Home no es CRM ni base técnica.

## Fuentes

- `AFL_AUTOS_OPERACION` — Home, coordinación y prompts.
- `Vehiculos/PUENTE.md` — verdad por unidad.
- `AFL_AUTOS_CONTENT_SYSTEM` — creatividad, auditorías y motores.
- `AFL_AUTOS_COMERCIAL` — conversación y conversión.
- `AFL_AUTOS_PLATFORM` — métricas/datasets.
- Drive — RAW y multimedia.

## Siguiente criterio para una futura evolución

No promover otra versión del Home solo porque tenga más funciones.

Antes de reemplazar V3.1 deberá demostrar en uso real que:

1. requiere igual o menos esfuerzo para iniciar una tarea;
2. reduce errores de entrada;
3. conserva producción y continuidad funcionales;
4. integra Comercial sin alargar la primera pantalla;
5. aprovecha índices sin convertirlos en fuente de verdad;
6. funciona bien desde Android;
7. puede corregirse rápido durante una producción real.

Hasta entonces, V3.1 permanece como baseline productivo.
