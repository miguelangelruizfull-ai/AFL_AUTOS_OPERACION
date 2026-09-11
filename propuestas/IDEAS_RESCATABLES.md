# AFL AUTOS — Ideas rescatables de flujos históricos

Estado: `APRENDIZAJE_MIGRADO`

Fuente: auditoría de flujos históricos materializada el 2026-09-11.

Estas ideas pueden alimentar el sistema actual. No implican recuperar el código legacy.

## 1. HOME = ROUTER / NO BASE DE DATOS

El Home debe responder `¿qué quiero hacer ahora?` y dirigir a la fuente/módulo correcto. No debe almacenar la verdad técnica, CRM, RAW ni multimedia pesada.

## 2. Galería para prospectos separada de contenido para redes

`FOTOS_PARA_LEAD ≠ FOTOS_PARA_PUBLICACION`

La galería comercial para prospectos debe priorizar inspección, confianza y decisión de visita; redes puede priorizar scroll-stop, formato y narrativa.

## 3. Responder primero lo que preguntó el prospecto

Principio conversacional:

`PREGUNTA_REAL → RESPUESTA_DIRECTA → UNA_PREGUNTA_UTIL`

Evitar interrogatorios antes de responder la duda inicial.

## 4. Cada lead debe tener SIGUIENTE_ACCION

Una conversación sin siguiente acción explícita queda operativamente incompleta.

Ejemplos de siguiente acción:
- enviar fotos/video;
- confirmar dato;
- proponer horario;
- enviar ubicación;
- seguimiento;
- registrar visita;
- cerrar como no disponible/vendido.

## 5. Estados comerciales separados

`INTERACCION ≠ CONVERSACION ≠ LEAD ≠ VISITA ≠ NEGOCIACION ≠ VENTA`

No usar likes, mensajes o WhatsApp como sustitutos de etapas posteriores.

## 6. Visita programada como señal avanzada

La visita programada está más cerca de una posible compra que obtener WhatsApp o una conversación. Esto sirve para priorización y medición, pero NO demuestra causalidad de venta.

## 7. Aprobado / rechazado alimenta aprendizaje creativo

Una pieza aprobada o rechazada puede producir observaciones útiles, siempre separando:

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

Rechazo no significa que una regla sea universal; indica evidencia para revisar composición/ejecución.

## 8. Producción por lotes con validación

Los lotes pueden reducir tiempo de producción si comparten fuentes verificadas, pero cada pieza debe validar:
- fotografía real;
- dato publicable;
- formato;
- composición;
- ausencia de datos inventados;
- estado de aprobación independiente.

## 9. Regla crítica de evidencia/publicación

`DATO CONFIRMADO DEL VEHICULO`
≠ `DATO AUTORIZADO PARA ESA PUBLICACION`
≠ `EVIDENCIA VISUAL REAL`
≠ `REFERENCIA VISUAL / MOODBOARD`
≠ `PIEZA APROBADA`

Un dato puede ser verdadero y aun así no estar autorizado o ser adecuado para una pieza concreta.

## 10. Nombre de archivo NO es evidencia técnica

Ejemplos prohibidos:
- asumir `TECHO_PANORAMICO` porque aparece en un filename;
- asumir versión por nombre de layout;
- asumir equipamiento por nombre de carpeta.

## 11. Moodboard NO es evidencia técnica

El moodboard puede orientar:
- jerarquía;
- color;
- composición;
- textura;
- ritmo visual.

No puede confirmar:
- motor;
- versión;
- tracción;
- equipamiento;
- documentación;
- precio;
- estado del vehículo.

## 12. Versionado por contenido / hash / evidencia

No confiar únicamente en nombre o fecha de archivo. Para lineage o borrado usar, cuando sea posible:
- hash;
- tamaño;
- diff/contenido;
- evidencia de creación;
- relación backup/snapshot;
- dependencias.

## 13. RAW → SANITIZACION → PLATFORM

Flujo moderno:

`RAW_EN_DRIVE → INVENTARIO → SANITIZACION → AFL_AUTOS_PLATFORM → CONTENT/COMERCIAL SI GENERA APRENDIZAJE`

Nunca publicar RAW sensible por conveniencia.

## 14. Meta histórico marcado vendido ≠ identidad actual confirmada

Una coincidencia de año/marca/modelo no basta. Reconciliar identidad mediante evidencia suficiente antes de cambiar el estado de una unidad.

## 15. Post vendido ≠ atribución de venta

Para atribución comercial debe existir evidencia que vincule contenido → conversación → visita/negociación → venta.

## 16. Un solo Home / fuentes separadas

La experiencia de V10 demuestra el valor de una puerta de entrada única, pero también el riesgo de centralizar todos los datos en una sola aplicación.

## 17. Continuidad mediante retorno/checkpoint

El aprendizaje histórico de contextos largos respalda usar `RETORNO_AL_COORDINADOR`, checkpoints y fuentes durables en vez de copiar meses de conversación.

## 18. Comercial futuro debe consultar verdad vigente

Un futuro motor de respuestas no debe permitir que campos manuales temporales se conviertan en verdad. Debe consultar:

`PUENTE.md + reglas comerciales + estado vigente`

antes de responder precio, disponibilidad, motor, documentación u otros datos sensibles a cambios.

## 19. Galería de prospectos propuesta para Home V4

Debe:
- leer selección/retocados;
- excluir VIN, odómetro, documentos y sensibles;
- escoger aproximadamente 8–15 fotos útiles;
- crear/reutilizar carpeta;
- devolver enlace verificable;
- registrar en `PUENTE.md` cuál galería está vigente.

No necesita una web pública por vehículo.