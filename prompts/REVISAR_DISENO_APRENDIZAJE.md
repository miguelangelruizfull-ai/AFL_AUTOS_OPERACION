# Prompt base — Revisar diseño / registrar aprendizaje

Objetivo: convertir feedback explícito de Miguel en trazabilidad/aprendizaje durable sin releer toda la biblioteca histórica en cada revisión.

## FAST PATH — revisión normal

1. identificar vehículo/proyecto y pieza/versión;
2. leer `Vehiculos/.../PUENTE.md` vigente cuando aplique;
3. revisar la pieza real en Drive;
4. leer `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`;
5. registrar exactamente la decisión y feedback de Miguel;
6. abrir fuentes profundas solo si hace falta justificar, clasificar o cambiar una regla transversal.

No es obligatorio releer por defecto `FLYER_ENGINE`, `FLYER_FAMILIES`, toda la auditoría, referencias históricas y feedback completo si el runtime resuelve el caso.

## Decisiones válidas

- `APROBADO_POR_MIGUEL`
- `REQUIERE_CORRECCION`
- `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`

No inferir aprobación desde producción, subida, existencia de archivo, solicitud de nueva versión ni etiqueta `premium`.

## Qué registrar

- fecha;
- vehículo/proyecto;
- pieza/versión exacta;
- decisión;
- qué no gustó;
- qué sí conservar;
- referencia visual opcional;
- comentario de Miguel;
- nivel de aprendizaje;
- alcance: caso / hipótesis / patrón / dirección transversal.

No guardar PII ni datos técnicos innecesarios.

## Persistencia

### Feedback/caso

Actualizar `AFL_AUTOS_CONTENT_SYSTEM/library/flyer_audit/VISUAL_FEEDBACK_LOG.md` y crear/actualizar `cases/` cuando aporte trazabilidad.

### Referencias

Actualizar `REFERENCE_STATUS.md` cuando proceda:

- `REFERENCIA_POSITIVA_APROBADA_POR_MIGUEL`;
- `REFERENCIA_NEGATIVA_RECHAZADA_POR_MIGUEL`;
- `REFERENCIA_HISTORICA_NO_VALIDADA`.

Una aprobación visual no convierte la pieza en fuente técnica.

### Dirección activa / runtime

Actualizar `formats/ACTIVE_VISUAL_DIRECTION.md` solo si:

- Miguel dio una instrucción transversal explícita; o
- existe aprendizaje suficientemente generalizable.

Actualizar `runtime/CONTENT_RUNTIME.md` cuando una regla activa realmente cambie.

No modificar ambos solo porque una pieza fue aprobada/rechazada.

## Si Miguel aprueba

- registrar `APROBADO_POR_MIGUEL` para la pieza exacta;
- no inferir `PROGRAMADO` ni `PUBLICADO`;
- promover a referencia positiva futura solo si Miguel lo indica expresamente;
- devolver el enlace principal de la pieza/carpeta aprobada.

## Si Miguel corrige/rechaza

- conservar la versión;
- no publicar;
- registrar el motivo;
- generar una nueva versión sin sobrescribir;
- clasificar aprendizaje normalmente como `OBSERVACION` o `HIPOTESIS`;
- devolver el siguiente paso concreto de corrección.

## Ruta profunda

Abrir según necesidad:

- `formats/ACTIVE_VISUAL_DIRECTION.md`;
- `formats/FLYERS_PORTADAS.md`;
- `formats/FLYER_ENGINE.md`;
- `formats/FLYER_FAMILIES.md`;
- `library/flyer_audit/REFERENCE_STATUS.md`;
- `library/flyer_audit/VISUAL_FEEDBACK_LOG.md`;
- `library/flyer_audit/POSITIVE_REFERENCES.md`;
- `library/flyer_audit/NEGATIVE_CASES.md`;
- casos específicos.

Para video abrir también el motor editorial y `networks/tiktok/EDITING_EFFECTS_LIBRARY.md` cuando el feedback sea audiovisual.

## Aprendizaje

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

`CASO_PARTICULAR ≠ REGLA_GENERAL ≠ APRENDIZAJE_VALIDADO`

## Estados

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

No publicar automáticamente.

## Entrega / retorno

Devolver:

- decisión registrada;
- pieza exacta;
- `LINK_PRINCIPAL`;
- archivos de aprendizaje actualizados;
- si dirección/runtime cambió o no y por qué;
- clasificación de referencia;
- nivel de aprendizaje;
- commits;
- `ESPERANDO_MIGUEL`;
- `SIGUIENTE_PASO`.
