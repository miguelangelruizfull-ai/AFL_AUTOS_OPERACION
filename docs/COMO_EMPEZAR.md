# AFL AUTOS OPERACIÓN — Cómo empezar

Este repositorio es la puerta de entrada operativa de AFL AUTOS. No sustituye `Vehiculos`, `AFL_AUTOS_CONTENT_SYSTEM`, `AFL_AUTOS_COMERCIAL`, `AFL_AUTOS_PLATFORM` ni Drive.

## Home activo

El Home canónico volvió a **V3.1**:

`index.html`

URL:

`https://miguelangelruizfull-ai.github.io/AFL_AUTOS_OPERACION/`

V3.1 fue la interfaz que Miguel reportó como funcional en uso real. V4/V4.1 se conservan como aprendizaje/prototipo, pero no sustituyen al Home activo.

## Uso rápido

1. Elige el módulo en el Home V3.1.
2. Completa únicamente Drive, vehículo/proyecto, prioridad y notas cuando correspondan.
3. Genera el prompt.
4. En el chat trabajador, antes de escribir, verificar GitHub/Drive vigentes.
5. Para una unidad existente, leer completo su `PUENTE.md`.
6. Al terminar, devolver `RETORNO_AL_COORDINADOR`.

## Flujo normal

`NUEVO VEHÍCULO → PLAN CAPTURA → CAPTURA → SELECCIÓN → RETOQUE → PRODUCCIÓN → APROBACIÓN → PUBLICACIÓN → MEDICIÓN`

No saltar etapas solo porque exista un archivo en Drive.

## Importante: V3.1 visual, lógica nueva conservada

El rollback del Home NO regresó los motores ni prompts a versiones antiguas.

Cuando una tarea use los prompts versionados del repositorio, siguen vigentes las mejoras actuales:

### Plan de captura

`prompts/PLAN_CAPTURA.md` consulta el aprendizaje histórico de flyers y video para definir HERO, familias editoriales, hooks y tomas necesarias.

### Selección

`prompts/SELECCIONAR_MATERIAL.md` evalúa si el material realmente soporta flyer, historia, Reel o TikTok y puede registrar:

- `HERO_FLYER`;
- `HERO_HISTORIA`;
- familia editorial;
- hook disponible;
- `BLOQUEADO_POR_FOTO`;
- `BLOQUEADO_POR_MATERIAL`.

### Producción

`prompts/PRODUCIR_REDES.md` exige:

- Motor Visual + auditoría de flyers para gráficas;
- Motor Editorial + auditoría TikTok para Reel/TikTok;
- comparación histórica;
- gate de calidad antes de declarar `PRODUCIDO`.

### Revisión

`prompts/REVISION_APROBACION.md` revisa la pieza real contra el motor correspondiente. No basta con que los datos sean correctos.

### Medición

`prompts/PUBLICACION_MEDICION.md` conserva familia, HERO, hook, duración, CTA y variable creativa para aprender de los resultados.

## Continuidad

Usa:

- **Continuar vehículo** para retomar desde `PUENTE.md`;
- **Procesar RETORNO** cuando otro chat terminó;
- **Continuar hilo / tarea** cuando un chat se llenó o una auditoría quedó a medias;
- agenda local para pendientes auxiliares.

La agenda local no sustituye fuentes privadas ni automatizaciones reales.

## Índices

El repositorio conserva `data/expedientes-public-index.json` y `Vehiculos` conserva su índice privado.

Actualmente son infraestructura disponible para navegación/automatización futura; el Home V3.1 restaurado no depende de ellos.

Regla permanente:

`INDEX = NAVEGACION`

`PUENTE.md = VERDAD`

## Comercial

`AFL_AUTOS_COMERCIAL` sigue activo como módulo privado aunque V3.1 no muestre todavía todas sus rutas como botones.

Flujo:

`PREGUNTA → RESPUESTA_DIRECTA → UNA_PREGUNTA_UTIL → SIGUIENTE_ACCION`

No guardar conversaciones, teléfonos o leads identificables en este repositorio público.

## Fuentes de autoridad

- unidad/datos técnicos → `Vehiculos/PUENTE.md`;
- creatividad/auditorías → `AFL_AUTOS_CONTENT_SYSTEM`;
- conversación/comercial → `AFL_AUTOS_COMERCIAL`;
- análisis/métricas → `AFL_AUTOS_PLATFORM`;
- originales/RAW → Drive;
- coordinación/prompts → `AFL_AUTOS_OPERACION`.

## Reglas críticas

Antes de modificar un archivo existente, hacer fetch de su versión vigente.

No publicar ni guardar aquí:

- VIN completo;
- millas/kilómetros;
- precios internos;
- documentos;
- PII;
- conversaciones privadas;
- credenciales.

Mantener:

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

Y para contenido:

`DATO_CONFIRMADO ≠ DATO_PUBLICABLE ≠ EVIDENCIA_VISUAL ≠ MOODBOARD ≠ PIEZA_APROBADA`
