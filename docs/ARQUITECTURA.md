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

## AFL_AUTOS_CONTENT_SYSTEM — privado

Función: autoridad creativa transversal.

Aquí viven branding, moodboards, campañas, formatos, casos, experimentos, hooks, CTA, motores editoriales y aprendizajes.

## AFL_AUTOS_PLATFORM — privado

Función: análisis, datasets sanitizados, metodología y evidencia reproducible.

## Google Drive

Función: originales, fotos, videos, masters, evidencia pesada y resultados visuales.

## Regla de resolución de contradicciones

- Datos de una unidad → manda `Vehiculos`.
- Creatividad/formato → manda `AFL_AUTOS_CONTENT_SYSTEM`.
- Análisis/metodología → manda `AFL_AUTOS_PLATFORM`.
- Multimedia/evidencia pesada → manda Drive.
- Este repo coordina, pero no reemplaza esas fuentes.