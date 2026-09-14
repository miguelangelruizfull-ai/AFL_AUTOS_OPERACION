# Ingesta semanal Meta

Objetivo: reemplazar los checkpoints de 24 h y 72 h por una revisión única a 7 días y reducir el copiado manual de métricas.

Flujo:

`PUBLICACION → ESPERA_7D → EXPORTABLES → VALIDAR_ORIGEN → MEDICION_7D → ACTUALIZACION → CIERRE`

La bandeja privada de Drive mantiene separados:

- conocimiento que puede alimentar al agente;
- exportables originales de plataformas;
- resultados de la revisión semanal.

## Regla canónica de origen para exportables Meta

Todo exportable entra primero como RAW y debe conservarse sin modificar.

Antes de usar un archivo para métricas, aprendizaje, leads o actualización de repositorios se debe validar su origen.

Estados mínimos de origen:

- `PAGINA_AFL_AUTOS_RAW`: exportable confirmado de la página oficial de AFL AUTOS;
- `PERFIL_PERSONAL_RAW`: exportable confirmado de un perfil personal;
- `ORIGEN_POR_CONFIRMAR`: archivo cuyo origen todavía no está verificado.

Reglas de procesamiento:

1. Solo `PAGINA_AFL_AUTOS_RAW` puede alimentar por defecto las métricas oficiales de la página y el aprendizaje derivado de esas métricas.
2. `PERFIL_PERSONAL_RAW` debe mantenerse separado y no mezclarse con métricas, leads ni aprendizaje de la página oficial, salvo proceso independiente y explícitamente autorizado.
3. `ORIGEN_POR_CONFIRMAR` queda en cuarentena: no puede alimentar métricas, aprendizaje, leads ni datasets hasta validar su origen.
4. Una carga equivocada no se trata como evidencia válida por el simple hecho de estar dentro de `META_RAW`.
5. Antes de promover datos desde RAW se debe registrar, cuando sea posible: plataforma, tipo de origen, fecha de exportación, periodo cubierto y estado de validación.
6. Si el archivo contiene datos personales o conversaciones, se mantiene en Drive privado y solo se deriva aprendizaje sanitizado para repositorios.

Regla corta:

`RAW → IDENTIFICAR_ORIGEN → VALIDAR → PROCESAR → SANITIZAR → APRENDIZAJE/METRICAS`

El proceso semanal debe detectar archivos nuevos, validar origen, obtener métricas verificables, generar un resumen sanitizado y actualizar las fuentes durables que correspondan.

Destinos:

- métricas y datasets agregados → `AFL_AUTOS_PLATFORM`;
- aprendizaje comercial → `AFL_AUTOS_COMERCIAL`;
- cambios de navegación o proceso → `AFL_AUTOS_OPERACION`;
- datos específicos de una unidad → `Vehiculos/PUENTE.md` solo cuando la evidencia corresponda;
- archivos originales → Drive privado.

No mover archivos originales a repos públicos.

La medición semanal debe separar rendimiento de contenido de resultados comerciales y no atribuir una venta a una pieza sin evidencia del recorrido.

Si no existe un exportable para una plataforma, puede usarse evidencia verificable equivalente como respaldo.