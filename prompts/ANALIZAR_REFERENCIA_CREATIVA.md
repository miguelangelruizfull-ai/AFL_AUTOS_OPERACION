# Prompt base — Analizar referencia creativa externa

Objetivo: convertir flyers, capturas o videos externos que le gusten a Miguel en patrones reutilizables para AFL AUTOS sin copiar literalmente piezas, branding o material protegido de terceros.

## Entrada

- enlace Drive de referencia o carpeta;
- tipo: `FLYER / CAPTURA / VIDEO`;
- comentario de Miguel sobre qué le gustó;
- red/formato si se conoce.

## Fuente canónica

Leer:

1. `AFL_AUTOS_CONTENT_SYSTEM/library/external_references/README.md`;
2. `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`;
3. para video, `networks/tiktok/EDITING_EFFECTS_LIBRARY.md`;
4. fuentes profundas solo si el análisis lo exige.

## Drive de referencias

Raíz:

`https://drive.google.com/drive/folders/11jWOoS62uAYay1LEvh5P0nr7geMgxLyX`

Inbox:

`https://drive.google.com/drive/folders/1fOyvhkLHnXSUP0_uUfuTNMTMPMdZDJoB`

## Análisis

### Flyer / captura

Extraer únicamente patrones como:

- jerarquía;
- protagonista;
- encuadre;
- uso del espacio;
- cantidad de texto;
- contraste;
- ritmo de títulos;
- CTA;
- tratamiento tipográfico general;
- composición;
- profundidad;
- adaptación por formato.

### Video

Extraer:

- hook 0–3 s;
- secuencia;
- ritmo;
- duración;
- cortes;
- transiciones;
- speed ramps;
- texto/motion graphics;
- audio/voz;
- efectos de sonido;
- CTA;
- cierre;
- adaptación por red.

## No copiar

No clonar literalmente:

- logotipos o marcas;
- fotografías/frames ajenos;
- textos completos;
- slogans;
- campañas;
- layout distintivo completo;
- recursos con derechos no autorizados;
- identidad visual de la competencia.

La salida debe describir una adaptación original a AFL AUTOS.

## Seguridad

`REFERENCIA_EXTERNA ≠ EVIDENCIA_TECNICA`

Nunca importar desde la referencia datos de un vehículo AFL: motor, versión, precio, VIN, kilometraje, documentación, teléfono, disponibilidad o equipamiento.

## Clasificación

Usar una:

- `REFERENCIA_EXTERNA_PENDIENTE_ANALISIS`
- `REFERENCIA_EXTERNA_UTIL`
- `REFERENCIA_EXTERNA_DESCARTADA`
- `PATRON_EXTERNO_APROBADO_PARA_TEST`
- `PATRON_ADAPTADO_AFL_VALIDADO`

## Entrega

Devolver:

- tipo de referencia;
- qué le gustó a Miguel;
- 3–7 patrones extraídos;
- qué NO debe copiarse;
- adaptación AFL propuesta;
- formatos/familias donde podría probarse;
- nivel de aprendizaje: `OBSERVACION/HIPOTESIS/TEST/...`;
- archivos de Content System actualizados si corresponde;
- commits;
- siguiente test recomendado.

No modificar `ACTIVE_VISUAL_DIRECTION.md` por una sola referencia salvo instrucción transversal explícita de Miguel.