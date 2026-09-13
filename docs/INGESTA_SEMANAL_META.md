# Ingesta semanal Meta

Objetivo: reemplazar los checkpoints de 24 h y 72 h por una revisión única a 7 días y reducir el copiado manual de métricas.

Flujo:

`PUBLICACION → ESPERA_7D → EXPORTABLES → MEDICION_7D → ACTUALIZACION → CIERRE`

La bandeja privada de Drive mantiene separados:

- conocimiento que puede alimentar al agente;
- exportables originales de plataformas;
- resultados de la revisión semanal.

El proceso semanal debe detectar archivos nuevos, obtener métricas verificables, generar un resumen sanitizado y actualizar las fuentes durables que correspondan.

Destinos:

- métricas y datasets agregados → `AFL_AUTOS_PLATFORM`;
- aprendizaje comercial → `AFL_AUTOS_COMERCIAL`;
- cambios de navegación o proceso → `AFL_AUTOS_OPERACION`;
- datos específicos de una unidad → `Vehiculos/PUENTE.md` solo cuando la evidencia corresponda;
- archivos originales → Drive privado.

No mover archivos originales a repos públicos.

La medición semanal debe separar rendimiento de contenido de resultados comerciales y no atribuir una venta a una pieza sin evidencia del recorrido.

Si no existe un exportable para una plataforma, puede usarse evidencia verificable equivalente como respaldo.
