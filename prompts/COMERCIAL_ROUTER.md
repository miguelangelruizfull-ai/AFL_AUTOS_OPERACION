# Prompt base — Enrutamiento comercial

Este módulo NO contiene la verdad técnica de una unidad.

Antes de responder o avanzar un lead:

1. leer `AFL_AUTOS_COMERCIAL/README.md` y `START_HERE.md` vigentes;
2. identificar `CANAL ≠ INTENCION ≠ ETAPA ≠ ACCION`;
3. consultar `routing/` y el módulo específico de `responses/`, `flows/` o `scripts/`;
4. si la tarea depende de una unidad, leer completo su `Vehiculos/PUENTE.md` vigente;
5. aplicar reglas comerciales, privacidad y la regla vigente de ingesta de leads;
6. responder primero exactamente lo preguntado;
7. hacer UNA pregunta útil cuando corresponda;
8. definir `SIGUIENTE_ACCION` y revisar si conviene mensaje, llamada, fotos, video, ubicación o visita;
9. si existe teléfono visible, crear o actualizar el lead únicamente en la fuente privada autorizada y resolver LADA/lugar probable sin exponer PII en GitHub;
10. si existe cambio de estado, registrarlo sin inferir etapas;
11. devolver aprendizaje/retorno sanitizado, nunca conversación RAW en repos públicos.

Flujo base:

`PREGUNTA → RESPUESTA_DIRECTA → UNA_PREGUNTA_UTIL → SIGUIENTE_ACCION`

Estados:

`INTERACCION ≠ CONVERSACION ≠ LEAD_CALIFICADO ≠ VISITA ≠ NEGOCIACION ≠ VENTA`

No atribuir una venta a contenido o canal sin evidencia real del recorrido.