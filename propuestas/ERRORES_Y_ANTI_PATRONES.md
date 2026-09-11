# AFL AUTOS — Errores y anti-patrones históricos

Estado: `DOCUMENTADO / NO RECONSTRUIR`

## Objetivo

Evitar que futuros cambios del Home o de los repos vuelvan a introducir problemas ya observados en los sistemas históricos.

## Anti-patrones

### 1. Base completa dentro de un HTML

No volver a concentrar inventario, CRM, contenido, métricas, bitácora, reglas, publicación y respaldo dentro de una sola aplicación HTML.

### 2. CRM dentro del Home público

El Home público no debe almacenar leads, teléfonos, mensajes privados ni conversaciones completas.

### 3. VIN / precios / odómetros dentro del Home

El Home no es fuente técnica ni comercial privada.

### 4. localStorage como fuente de verdad

`localStorage` puede servir como ayuda local o agenda auxiliar, nunca como registro durable principal.

### 5. JSON monolítico como base maestra

Un respaldo portable no debe convertirse en única autoridad para vehículos, leads, contenido y métricas.

### 6. Importar automáticamente unidades antiguas

No migrar masivamente JSON histórico a `Vehiculos/PUENTE.md`. Reconciliar unidad por unidad cuando exista necesidad real.

### 7. Confiar en nombre/fecha como versión real

`filename + fecha ≠ lineage confiable`.

Usar contenido, hash, diff, contexto de creación y dependencias.

### 8. Inferir estado actual desde Meta histórico

Un registro histórico de Marketplace no demuestra disponibilidad o venta actual de una unidad específica.

### 9. Flujo rígido de publicación para todas las unidades

No imponer Facebook → Marketplace → TikTok → WhatsApp como secuencia universal. La estrategia depende de unidad, material, objetivo y evidencia.

### 10. Contexto Maestro paralelo al PUENTE

No crear otro archivo maestro que compita con `Vehiculos/PUENTE.md` como fuente por unidad.

### 11. Múltiples sistemas incompatibles de carpetas

No reorganizar históricos por fuerza ni crear carpetas duplicadas solo para cumplir una nomenclatura nueva. Registrar equivalencias.

### 12. Aprendizaje validado desde un solo caso

Un resultado individual genera observación/hipótesis, no una regla universal.

### 13. Información personal en documentación pública

No colocar nombres, teléfonos, mensajes, documentos o datos identificables en repos públicos.

### 14. Copiar conversaciones completas a repos públicos

RAW conversacional permanece privado. Solo patrones sanitizados pueden migrarse a análisis/aprendizaje.

### 15. Moodboard como evidencia técnica

El moodboard define dirección visual; nunca confirma equipamiento o especificaciones.

### 16. Filename como evidencia técnica

Un nombre como `INTERIOR_PANTALLA`, `RUBICON`, `PANORAMICO` o similar no prueba que ese elemento exista.

### 17. Prompt como evidencia técnica

Un prompt puede contener errores, supuestos o instrucciones creativas. Nunca valida la unidad.

### 18. Layout como evidencia técnica

Una composición o plantilla no prueba que el vehículo tenga los elementos ilustrados/nombrados.

### 19. Flyer histórico como evidencia técnica

Una pieza histórica puede contener errores, datos desactualizados o decisiones creativas. Verificar siempre contra el expediente vigente.

### 20. Mezclar producción con aprobación/publicación

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`.

### 21. Mezclar interacción con venta

`INTERACCION ≠ CONVERSACION ≠ LEAD ≠ VISITA ≠ NEGOCIACION ≠ VENTA`.

### 22. Borrar antes de preservar lineage

No borrar backups, snapshots, RAW o prototipos hasta tener:
- inventario;
- aprendizaje preservado;
- dependencias verificadas;
- duplicados confirmados;
- autorización explícita.

## Regla de prevención

Toda propuesta nueva debe poder responder:

1. ¿Cuál es la fuente de verdad?
2. ¿Qué datos sensibles toca?
3. ¿Duplica otra responsabilidad?
4. ¿Puede reconstruirse sin memoria de chat?
5. ¿Qué pasa si el navegador o teléfono cambia?
6. ¿Cómo se verifica antes de publicar?

Si una solución vuelve a concentrar todas las respuestas en un solo archivo local, debe revisarse antes de implementarse.