# AFL AUTOS — Decisión de UX para evolución V4.1

Fecha: `2026-09-11`

Estado: `IMPLEMENTADA_EN_INDEX / VALIDACION_CONTINUA`

## Implementación actual

La decisión ya fue promovida a `index.html` el 2026-09-11.

La URL canónica del Home usa V4.1 y conserva:

`FACILIDAD_V3 + PROTECCIONES_V4 + COMERCIAL_MODULAR + ESCALABILIDAD`

Además incorpora:

- selector de expedientes mediante índice público sanitizado;
- contexto `EXPEDIENTE_KEY + PUENTE_PATH + SHA indexado + directorios lógicos`;
- rutas separadas `Reel/TikTok`, `Flyer/Historia/Portada` y `Paquete completo`;
- gates obligatorios conectados a auditorías históricas de flyers y TikTok;
- plan de captura y selección orientados por familias/HERO/hooks;
- revisión/aprobación contra el motor correspondiente;
- medición ligada a variables creativas.

`home_v4_1.html` queda como alias compatible. La fuente productiva es `index.html`.

## Contexto verificado

Miguel confirma que el Home V3/V3.1 fue utilizado en operación real y resultó funcional. Hubo errores de entrada, pero pudieron corregirse rápidamente durante la producción.

Miguel confirma que el Home V4 anterior no fue el Home validado en esa prueba y que su experiencia visual resultó más larga y menos clara: al abrirlo no era evidente qué acción debía realizar.

Por tanto:

`V3/V3.1 = REFERENCIA_DE_FACILIDAD_DE_USO`

`V4 = FUENTE_DE_MEJORAS_TECNICAS, NO_REFERENCIA_DE_UX`

No se regresó técnicamente a V3. Se evolucionó V4 conservando sus protecciones útiles y recuperando claridad de decisión.

## Principio de producto

`COMPLEJO_POR_DENTRO / SIMPLE_POR_FUERA`

El Home responde primero:

`¿QUE QUIERO HACER AHORA?`

No obliga a Miguel a entender primero repositorios, estados internos, reglas de autoridad o arquitectura.

Principio general vigente:

`UN SOLO HOME / FUENTES_SEPARADAS`

El Home es UX + router + generador de instrucciones. No es CRM, expediente técnico, base de datos ni fuente de verdad.

## Arquitectura objetivo

- `AFL_AUTOS_OPERACION`: UX, Home, navegación, prompts, continuidad y agenda auxiliar.
- `Vehiculos`: verdad técnica/comercial vigente por unidad mediante `PUENTE.md`.
- `AFL_AUTOS_CONTENT_SYSTEM`: creatividad, branding, formatos, campañas, auditorías y motores editoriales.
- `AFL_AUTOS_COMERCIAL`: lógica comercial, respuestas, calificación, visita, seguimiento, negociación, cierre y aprendizaje sanitizado.
- `AFL_AUTOS_PLATFORM`: métricas, datasets sanitizados, análisis y metodología.
- Google Drive: RAW, multimedia, conversaciones privadas, exportaciones y evidencia pesada.

## Qué se conservó de V3/V3.1

1. Entrada rápida orientada a acción.
2. Centro de coordinación comprensible sin conocer la arquitectura interna.
3. Selección directa de módulo.
4. Formulario corto para generar prompt.
5. Agenda local auxiliar.
6. Continuidad por retorno/checkpoint.
7. Diseño móvil, oscuro y de botones grandes.

## Qué se conservó de V4

- preflight;
- retornos/checkpoints;
- separación explícita de revisión/aprobación;
- estados estrictos de producción, aprobación, publicación y medición;
- agenda local V2 y migración desde V1;
- recordatorios de fetch antes de escribir;
- reglas de evidencia/publicabilidad;
- bloqueos básicos cuando falta contexto obligatorio.

La diferencia es de UX: estas funciones trabajan de forma contextual o detrás de la interfaz.

## Problemas del V4 anterior que se corrigieron

### Arquitectura visible antes de la acción

`Fuentes que mandan` dejó de competir con la acción principal y pasó a `Más / Fuentes y seguridad`.

### Diagnósticos siempre visibles

Preflight y continuidad se muestran solo cuando la tarea los necesita.

### Demasiadas decisiones al mismo nivel

V4.1 aplica:

`CATEGORIA → ACCION → CAMPOS_NECESARIOS → RESULTADO`

Las nuevas capacidades se agregan en configuración, no como bloques permanentes de HTML.

## Primera pantalla implementada

### CONTINUAR / HOY

- Continuar vehículo
- Procesar retorno
- Continuar tarea
- Agenda local

### VEHICULO

- Nuevo vehículo
- Plan de captura
- Selección
- Retoque
- Galería para prospectos

### CREAR CONTENIDO

- Reel / TikTok
- Flyer / historia / portada
- Paquete completo de redes
- Revisión / aprobación
- Vendido / entrega

### RESPONDER / LEAD

- Responder
- Calificar lead
- Mover a WhatsApp / llamada
- Enviar fotos / video
- Proponer visita
- Seguimiento
- Negociación
- Cierre comercial
- Registrar retorno comercial

### PUBLICAR / MEDIR

- Registrar publicación
- Medición 24 h
- Medición 72 h
- Medición 7 días

### MAS

- Cerrar / sincronizar chat
- Nuevo chat principal
- Continuar auditoría TikTok
- Fuentes y seguridad

## Selector de expedientes

V4.1 añade un índice derivado para reducir errores de entrada.

Flujo:

`HOME → EXPEDIENTES_INDEX → EXPEDIENTE_SELECCIONADO → ACCION → PROMPT → PUENTE.md_VIGENTE`

El índice público no contiene URLs/IDs privados de Drive ni verdad técnica sensible.

Regla:

`INDEX = NAVEGACION`

`PUENTE.md = VERDAD`

## Integración de AFL_AUTOS_COMERCIAL

El Home NO copia la lógica comercial.

Flujo:

`HOME`
→ `ACCION_COMERCIAL`
→ `PROMPT / ROUTE`
→ `AFL_AUTOS_COMERCIAL`
→ `Vehiculos/PUENTE.md` cuando la respuesta depende de una unidad
→ `RESPUESTA + UNA_PREGUNTA_UTIL + SIGUIENTE_ACCION`

El Home público puede contener nombres de acciones y routing no sensible. No contiene leads identificables ni conversaciones privadas.

## Galería para prospectos

Se mantiene como acción propia.

`FOTOS_PARA_LEAD ≠ FOTOS_PARA_PUBLICACION`

Debe usar fotos seleccionadas/retocadas, excluir material sensible, devolver un enlace Drive verificable y registrar la galería vigente en `PUENTE.md`.

No crear una web pública por vehículo por defecto.

## Auditorías históricas integradas al flujo

La auditoría dejó de ser una biblioteca pasiva.

### Piezas gráficas

`PLAN_CAPTURA → SELECCION → PRODUCCION → REVISION → MEDICION`

consulta o conserva decisiones derivadas de:

- `FLYER_ENGINE.md`;
- `FLYER_FAMILIES.md`;
- `COMMON_ERRORS.md`;
- `POSITIVE_REFERENCES.md`.

### Reel / TikTok

`PLAN_CAPTURA → SELECCION → PRODUCCION → REVISION → MEDICION`

consulta o conserva decisiones derivadas de:

- `EDITORIAL_ENGINE.md`;
- `FORMAT_FAMILIES.md`;
- `HOOKS_AND_CTA.md`;
- `VIDEO_AUDIT_INDEX.md`;
- `CAPTURE_GUIDE.md`.

Si el material no soporta una salida adecuada, se bloquea en vez de forzar producción.

## Escalabilidad técnica

Las acciones públicas/no sensibles se definen en:

`config/home-v4-1-actions.js`

La definición central conserva propiedades como:

- categoría;
- id;
- etiqueta;
- descripción;
- campos requeridos;
- prompt/módulo;
- acción comercial;
- instrucción específica.

Así una capacidad futura puede agregarse sin rediseñar la pantalla completa.

## Regla de seguridad arquitectónica

El Home público NO intenta leer repositorios privados desde el navegador usando credenciales.

El Home genera la instrucción; ChatGPT/conectores autorizados consultan fuentes privadas.

No colocar tokens o credenciales GitHub/Drive en JavaScript público.

## Persistencia local

`localStorage = AYUDA_LOCAL`, nunca fuente de verdad.

Puede conservar agenda auxiliar y preferencias no sensibles.

No conservar:

- teléfonos;
- nombres de prospectos;
- conversaciones;
- VIN;
- documentos;
- precios internos;
- datos privados de leads.

## Criterios de aceptación vigentes

La evolución se considera correcta mientras:

- desde teléfono se entiende qué hacer sin leer arquitectura;
- la primera acción útil requiere pocos toques;
- Comercial puede crecer sin multiplicar tarjetas principales;
- las protecciones de V4 permanecen sin dominar visualmente la pantalla;
- no se almacena PII o verdad técnica en el Home;
- un error de entrada puede corregirse rápidamente;
- producción/continuidad/comercial/medición siguen siendo posibles;
- el sistema puede reconstruirse desde GitHub/Drive sin depender de memoria de chat;
- cada nueva producción consulta el aprendizaje histórico aplicable antes de improvisar.

## Decisión vigente

No regresar a V3 como código de producción.

No volver al Home V4 largo como referencia de UX.

Mantener V4.1 y evolucionarlo de forma incremental:

`FACILIDAD_V3 + PROTECCIONES_V4 + COMERCIAL_MODULAR + AUDITORIAS_ACTIVAS + ESCALABILIDAD`
