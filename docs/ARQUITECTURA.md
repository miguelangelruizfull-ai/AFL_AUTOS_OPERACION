# Arquitectura operativa AFL AUTOS

Principio general:

`UN SOLO HOME / FUENTES SEPARADAS`

Principio UX:

`COMPLEJO POR DENTRO / SIMPLE POR FUERA`

## AFL_AUTOS_OPERACION — público

Función: puerta de entrada, Home V3.2, coordinación, prompts sanitizados, índice público y continuidad guiada.

V3.2 se apoya en la UX simple de V3.1 y añade:

- selector de expediente;
- tablero/semáforo;
- tarjeta `AHORA`;
- parser de `RETORNO_AL_COORDINADOR`;
- botón `CONTINUAR`;
- decisión de Miguel integrada;
- atajos locales;
- modo avanzado;
- acceso a análisis de referencias externas sin exponer su Drive privado.

Regla:

`HOME = NAVEGACION / COORDINACION`

`HOME ≠ FUENTE DE VERDAD`

### localStorage

Puede guardar únicamente auxiliares locales como:

- expediente seleccionado;
- último retorno pegado;
- atajos de material;
- `LINK_PRINCIPAL`;
- inbox privado como atajo del navegador;
- agenda.

No puede ser autoridad sobre:

- datos técnicos;
- aprobación;
- publicación;
- medición;
- venta;
- feedback durable;
- aprendizaje.

Claves:

- flujo guiado: `afl_autos_guided_v32`;
- agenda histórica preservada: `afl_autos_agenda_v1`.

## Índices

### Privado

`Vehiculos/index/EXPEDIENTES_INDEX.json`

Puede contener enlaces operativos privados y más detalle.

### Público

`AFL_AUTOS_OPERACION/data/expedientes-public-index.json`

Solo navegación sanitizada:

- key;
- label;
- estado resumido;
- siguiente acción;
- flags;
- path/SHA de PUENTE;
- nombres de directorios, no URLs privadas.

Regla:

`INDEX = NAVEGACION`

`PUENTE.md = VERDAD`

## Vehiculos — privado

Función: fuente de verdad técnica/comercial de cada unidad.

Archivo central: `PUENTE.md`.

Aquí viven:

- CONFIRMADO / PENDIENTE / INTERNO;
- estado real;
- enlaces de Drive;
- pieza exacta;
- aprobación/publicación cuando exista evidencia;
- punto de continuidad.

Si Home, retorno o índice contradicen PUENTE, el trabajador debe verificar y resolver; no avanzar por la navegación local a ciegas.

## AFL_AUTOS_CONTENT_SYSTEM — privado

Función: autoridad creativa transversal y aprendizaje visual/editorial.

### FAST PATH

Archivo operativo:

`runtime/CONTENT_RUNTIME.md`

Resume únicamente reglas activas para producción/revisión diaria.

No reemplaza:

- dirección visual;
- engines;
- auditorías;
- casos;
- logs.

Fórmula:

`PUENTE + CONTENT_RUNTIME + MATERIAL REAL = RUTA NORMAL`

`AUDITORIAS / ENGINES / CASOS = PROFUNDIDAD BAJO DEMANDA`

### Visual

Autoridad profunda:

- `formats/ACTIVE_VISUAL_DIRECTION.md`;
- formatos/familias;
- Motor Visual;
- auditoría de flyers;
- referencias aprobadas/rechazadas;
- feedback/casos.

Ciclo:

`PRODUCCION → REVISION_MIGUEL → APRENDIZAJE → DIRECCION/RUNTIME → SIGUIENTE_PRODUCCION`

### Audiovisual

Autoridad profunda:

- `networks/tiktok/EDITORIAL_ENGINE.md`;
- `FORMAT_FAMILIES.md`;
- `HOOKS_AND_CTA.md`;
- `EDITING_EFFECTS_LIBRARY.md`;
- `VIDEO_AUDIT_INDEX.md`;
- `CAPTURE_GUIDE.md`.

Los efectos modernos son recursos de prueba, no una plantilla universal.

### Referencias externas

Proceso:

`library/external_references/README.md`

Multimedia externa permanece en Drive. GitHub conserva únicamente clasificación/análisis/aprendizaje sanitizado.

`REFERENCIA_EXTERNA ≠ EVIDENCIA_TECNICA`

No se clona identidad, fotografías, textos completos, campañas o layouts distintivos de terceros.

## AFL_AUTOS_COMERCIAL — privado

Función: atención, conversión y aprendizaje comercial sanitizado.

Flujo base:

`PREGUNTA → RESPUESTA_DIRECTA → UNA_PREGUNTA_UTIL → SIGUIENTE_ACCION`

Estados:

`INTERACCION ≠ CONVERSACION ≠ LEAD_CALIFICADO ≠ VISITA ≠ NEGOCIACION ≠ VENTA`

Comentarios/preguntas de redes pueden aportar patrones sanitizados de intención, pero PII/RAW permanecen fuera del repositorio.

## AFL_AUTOS_PLATFORM — privado

Función: análisis, datasets, schemas y evidencia reproducible.

Debe recibir mediciones sanitizadas, nunca conversaciones identificables.

Checkpoints de contenido:

`PUBLICADO → 24H → 72H → 7D → APRENDIZAJE`

Separar rendimiento editorial de resultados comerciales.

## Google Drive

Función: originales, fotos, videos, masters, derivados, resultados, RAW y referencias externas pesadas.

Para unidades:

`ORIGINALES → SELECCION → RETOQUE → PRODUCCION → RESULTADOS`

Para referencias externas existe una raíz privada separada de los expedientes de vehículo.

Esto evita confundir inspiración con evidencia técnica.

## Retorno entre chats

Formato ampliado compatible con V3.2:

- trabajo;
- vehículo/proyecto;
- expediente key;
- PUENTE path;
- etapa;
- paso terminado;
- resultado;
- link principal;
- estado final;
- bloqueado;
- esperando Miguel;
- acción Miguel;
- pendientes;
- siguiente paso;
- siguiente módulo;
- riesgos.

El Home parsea esos campos para navegación local.

El trabajador persiste el estado durable donde corresponda.

## Secuencia operativa

`INGRESO → PLAN_CAPTURA → CAPTURA → SELECCION → RETOQUE → PRODUCCION → REVISION/APRENDIZAJE → APROBACION → PUBLICACION → MEDICION → CIERRE`

## Regla de aprendizaje

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

`CASO_PARTICULAR ≠ REGLA_GENERAL ≠ APRENDIZAJE_VALIDADO`

## Estados de contenido

`PRODUCIDO ≠ SUBIDO ≠ APROBADO ≠ PROGRAMADO ≠ PUBLICADO ≠ MEDIDO`

## Resolución de contradicciones

- datos/estado de unidad → `Vehiculos`;
- atención/conversión → `AFL_AUTOS_COMERCIAL`;
- creatividad/dirección/aprendizaje → `AFL_AUTOS_CONTENT_SYSTEM`;
- análisis/metodología → `AFL_AUTOS_PLATFORM`;
- multimedia/RAW → Drive;
- navegación/coordinación → `AFL_AUTOS_OPERACION`.

Antes de modificar un archivo existente: fetch vigente, porque existen chats concurrentes.