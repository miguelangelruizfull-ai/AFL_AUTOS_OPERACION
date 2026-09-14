# Ingesta semanal Meta

Objetivo: reemplazar los checkpoints de 24 h y 72 h por una revisión única a 7 días y reducir el copiado manual de métricas.

Flujo:

`PUBLICACION → ESPERA_7D → EXPORTABLES → VALIDAR_ORIGEN → MEDICION_7D → ACTUALIZACION → CIERRE`

La bandeja privada de Drive mantiene separados:

- conocimiento que puede alimentar al agente;
- exportables originales de plataformas;
- resultados de la revisión semanal.

## Regla canónica de origen para exportables Meta

Todo exportable entra primero como RAW y debe conservarse sin modificar mientras siga siendo la fuente necesaria para validación.

Antes de usar un archivo para métricas, aprendizaje, leads o actualización de repositorios se debe validar su origen.

Estados mínimos de origen:

- `PAGINA_AFL_AUTOS_RAW`: exportable confirmado de la página oficial de AFL AUTOS;
- `PERFIL_PERSONAL_RAW`: exportable confirmado de un perfil personal;
- `PENDIENTE_CLASIFICAR_RAW`: archivo cuyo origen todavía no está verificado.

Reglas de procesamiento:

1. Solo `PAGINA_AFL_AUTOS_RAW` puede alimentar por defecto las métricas oficiales de la página y el aprendizaje derivado de esas métricas.
2. `PERFIL_PERSONAL_RAW` debe mantenerse separado y no mezclarse con métricas, leads ni aprendizaje de la página oficial, salvo proceso independiente y explícitamente autorizado.
3. `PENDIENTE_CLASIFICAR_RAW` queda en cuarentena: no puede alimentar métricas, aprendizaje, leads ni datasets hasta validar su origen.
4. Una carga equivocada no se trata como evidencia válida por el simple hecho de estar dentro de `META_RAW`.
5. Antes de promover datos desde RAW se debe registrar, cuando sea posible: plataforma, tipo de origen, fecha de exportación, periodo cubierto y estado de validación.
6. Si el archivo contiene datos personales o conversaciones, se mantiene en Drive privado y solo se deriva aprendizaje sanitizado para repositorios.

Regla corta:

`RAW → IDENTIFICAR_ORIGEN → VALIDAR → PROCESAR → SANITIZAR → APRENDIZAJE/METRICAS`

## JSON y media

Las exportaciones Meta pueden aportar texto de publicaciones, fechas, hashtags, relaciones publicación-media, fotografías, videos y métricas. También pueden contener EXIF, IP u otros metadatos privados.

El parser debe separar ambos grupos antes de generar cualquier salida durable:

- reutilizable: texto/caption, fecha, hashtags, tipo de publicación, relación con media, dimensiones técnicas no sensibles y métricas verificables;
- privado/no promocionable: IP, EXIF sensible, PII, conversaciones completas, credenciales e identificadores personales innecesarios.

Contrato detallado:

`docs/CONTRATO_META_JSON_HOME.md`

## Distribución por fuente de autoridad

El proceso semanal debe detectar archivos nuevos, validar origen, obtener métricas verificables, generar un resumen sanitizado y actualizar las fuentes durables que correspondan.

Destinos:

- métricas y datasets agregados → `AFL_AUTOS_PLATFORM`;
- aprendizaje comercial → `AFL_AUTOS_COMERCIAL`;
- cambios de navegación o proceso → `AFL_AUTOS_OPERACION`;
- aprendizaje creativo reusable → `AFL_AUTOS_CONTENT_SYSTEM`;
- datos específicos de una unidad → `Vehiculos/PUENTE.md` solo cuando la evidencia corresponda;
- archivos originales y RAW → Drive privado.

El Home no consume el RAW directamente. Solo recibe estado sanitizado, conteos, bloqueos y siguiente acción.

## Compatibilidad comercial

Cuando una exportación permita derivar un evento comercial sin PII, normalizarlo al esquema sanitizado de `respuestas-public-v12.html` cuando sea posible: canal, fecha, unidad, intención, estado, tipo de respuesta, siguiente acción, visita y resultado observable.

Si un campo no puede demostrarse, permanece `NO_IDENTIFICADA`, `PENDIENTE` o `null`. No inferir datos comerciales a partir de una publicación sin evidencia.

No mover archivos originales a repos públicos.

La medición semanal debe separar rendimiento de contenido de resultados comerciales y no atribuir una venta a una pieza sin evidencia del recorrido.

Si no existe un exportable para una plataforma, puede usarse evidencia verificable equivalente como respaldo.
