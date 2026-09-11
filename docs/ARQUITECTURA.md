# Arquitectura operativa AFL AUTOS

## AFL_AUTOS_OPERACION — público

Función: puerta de entrada, generador de prompts, manual y flujo operativo.

Puede contener:
- procedimientos;
- prompts sanitizados;
- estados;
- ejemplos sin datos sensibles;
- herramienta HTML pública.

No contiene expedientes maestros ni multimedia pesada.

## Vehiculos — privado

Función: fuente de verdad técnica/comercial de cada unidad.

Archivo central por unidad: `PUENTE.md`.

Aquí viven CONFIRMADO / PENDIENTE / INTERNO, enlaces operativos y trazabilidad por vehículo.

Cuando corresponda, también puede existir `PLAN_CAPTURA.md` para documentar la estrategia y checklist específico de la sesión de esa unidad.

## AFL_AUTOS_CONTENT_SYSTEM — privado

Función: autoridad creativa transversal.

Aquí viven branding, moodboards, campañas, formatos, casos, experimentos, hooks, CTA, motores editoriales y aprendizajes.

El módulo **Plan de captura** debe consultarlo después de identificar el vehículo para adaptar tomas y estrategia al tipo de unidad y al aprendizaje vigente.

## AFL_AUTOS_PLATFORM — privado

Función: análisis, datasets sanitizados, metodología y evidencia reproducible.

## Google Drive

Función: originales, fotos, videos, masters, evidencia pesada y resultados visuales.

Para unidades nuevas, el flujo recomendado separa:

`ORIGINALES → SELECCIÓN → RETOQUE → PRODUCCIÓN → RESULTADOS`

Ver [`ESTRUCTURA_DRIVE_V2.md`](./ESTRUCTURA_DRIVE_V2.md).

## Secuencia operativa V2

`INGRESO/IDENTIFICACIÓN → PLAN DE CAPTURA → CAPTURA REAL → SELECCIÓN → RETOQUE → PRODUCCIÓN → PUBLICACIÓN → MEDICIÓN`

La identificación no debe convertirse automáticamente en producción. Primero se decide qué necesita mostrar esa unidad para comercializarla correctamente.

## Regla de resolución de contradicciones

- Datos de una unidad → manda `Vehiculos`.
- Creatividad/formato → manda `AFL_AUTOS_CONTENT_SYSTEM`.
- Análisis/metodología → manda `AFL_AUTOS_PLATFORM`.
- Multimedia/evidencia pesada → manda Drive.
- Este repo coordina, pero no reemplaza esas fuentes.