# Arquitectura operativa AFL AUTOS

Principio general:

`UN SOLO HOME / FUENTES SEPARADAS`

## AFL_AUTOS_OPERACION — público

Función: puerta de entrada, Home V3.1, generador de prompts, manual, coordinación y flujo operativo.

Puede contener:
- procedimientos;
- prompts sanitizados;
- estados;
- ejemplos sin datos sensibles;
- herramienta HTML pública.

No contiene expedientes maestros, multimedia pesada, CRM ni la base durable del aprendizaje creativo.

Home V3.1 puede capturar feedback visual como campos temporales para generar un prompt, pero no lo persiste como fuente de verdad en `localStorage`.

## Vehiculos — privado

Función: fuente de verdad técnica/comercial de cada unidad.

Archivo central por unidad: `PUENTE.md`.

Aquí viven CONFIRMADO / PENDIENTE / INTERNO, enlaces operativos y trazabilidad por vehículo.

Cuando corresponda, también puede existir `PLAN_CAPTURA.md` para documentar estrategia y checklist específico de la sesión.

Una pieza visual, incluso aprobada por Miguel, nunca sustituye `PUENTE.md` como fuente técnica.

## AFL_AUTOS_CONTENT_SYSTEM — privado

Función: autoridad creativa transversal y fuente durable del aprendizaje visual.

Aquí viven:

- branding;
- `formats/ACTIVE_VISUAL_DIRECTION.md`;
- formatos y familias;
- Motor Visual;
- campañas/moodboards;
- referencias aprobadas/rechazadas/históricas;
- `VISUAL_FEEDBACK_LOG.md`;
- casos;
- experimentos;
- hooks/CTA;
- motores editoriales;
- aprendizajes.

Ciclo:

`PRODUCCION → REVISION_MIGUEL → APRENDIZAJE → DIRECCION_VISUAL_ACTIVA → SIGUIENTE_PRODUCCION`

Mantener:

`CASO_PARTICULAR ≠ REGLA_GENERAL ≠ APRENDIZAJE_VALIDADO`

La dirección activa no debe convertirse en historial infinito. Los casos/feedback permanecen en biblioteca/casos y solo los aprendizajes realmente transversales pasan a `ACTIVE_VISUAL_DIRECTION.md`.

Clasificación de referencias:

- `REFERENCIA_POSITIVA_APROBADA_POR_MIGUEL`
- `REFERENCIA_NEGATIVA_RECHAZADA_POR_MIGUEL`
- `REFERENCIA_HISTORICA_NO_VALIDADA`

Las referencias aprobadas por Miguel tienen mayor peso creativo que referencias históricas no aprobadas, pero ninguna confirma datos del vehículo.

## AFL_AUTOS_COMERCIAL — privado

Función: autoridad de atención, conversión y aprendizaje comercial sanitizado.

Aquí viven reglas comerciales, respuestas por intención, flujos Messenger/WhatsApp, calificación, visita, seguimiento, cierre, scripts, objeciones y plantillas sanitizadas.

No sustituye `Vehiculos/PUENTE.md`: precio, disponibilidad, motor, documentación y demás datos variables se resuelven desde el expediente vigente.

RAW, capturas, exportaciones y conversaciones privadas permanecen en el Drive comercial; este repositorio no debe convertirse en almacén de PII.

## AFL_AUTOS_PLATFORM — privado

Función: análisis, datasets sanitizados, metodología y evidencia reproducible.

## Google Drive

Función: originales, fotos, videos, masters, evidencia pesada y resultados visuales.

Para unidades nuevas:

`ORIGINALES → SELECCION → RETOQUE → PRODUCCION → RESULTADOS`

Para material comercial privado:

`RAW_PRIVADO ≠ APRENDIZAJE_SANITIZADO`

Las muestras/contact sheets históricas pueden ser `REFERENCIA_VISUAL / EVIDENCIA_DE_DISENO`, nunca fuente técnica.

Ver [`ESTRUCTURA_DRIVE_V2.md`](./ESTRUCTURA_DRIVE_V2.md).

## Secuencia operativa

`INGRESO/IDENTIFICACION → PLAN_CAPTURA → CAPTURA_REAL → SELECCION → RETOQUE → PRODUCCION → REVISION/APRENDIZAJE → APROBACION → PUBLICACION → MEDICION`

La identificación no debe convertirse automáticamente en producción. La producción no debe convertirse automáticamente en aprobación.

## Ciclo visual desde Home V3.1

1. **Producir redes** genera una instrucción que consulta la dirección visual activa y aprendizaje vigente.
2. Miguel revisa la pieza.
3. **Revisar diseño / Registrar aprendizaje** genera una instrucción con aprobar/corregir/rechazar y feedback.
4. El chat trabajador persiste el feedback en `AFL_AUTOS_CONTENT_SYSTEM`.
5. Solo una instrucción transversal/generalizable modifica `ACTIVE_VISUAL_DIRECTION.md`.
6. La próxima producción consulta esa dirección automáticamente.

El Home no guarda el feedback durable.

## Flujo comercial

`INTERACCION → CONVERSACION → LEAD_CALIFICADO → VISITA → NEGOCIACION → VENTA`

Los estados no son equivalentes y cada lead activo debe conservar una `SIGUIENTE_ACCION`.

## Estados de contenido

Mantener:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

Un rechazo visual puede registrarse como:

`RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`

## Regla de resolución de contradicciones

- Datos de una unidad → manda `Vehiculos`.
- Atención/conversión → manda `AFL_AUTOS_COMERCIAL`.
- Creatividad/dirección/aprendizaje visual → manda `AFL_AUTOS_CONTENT_SYSTEM`.
- Análisis/metodología → manda `AFL_AUTOS_PLATFORM`.
- Multimedia/evidencia pesada/RAW → manda Drive.
- `AFL_AUTOS_OPERACION` coordina, pero no reemplaza esas fuentes.
