# AFL AUTOS — MENÚ POST-ACTUALIZACIÓN DE VEHÍCULO

Estado: `ACTIVO_DESDE_2026-09-22`

## Propósito

Después de cada actualización de una unidad, devolver un menú contextual basado en:

`PUENTE VIGENTE + MATERIAL REAL + PENDIENTES + COMERCIAL + CONTENT RUNTIME + PULSO ACTUAL CUANDO APORTE`

No mostrar un menú genérico ciego. Las opciones deben adaptarse a la unidad, material disponible, etapa y objetivo comercial.

## Cierre obligatorio

Mostrar siempre:

1. resumen de lo confirmado;
2. pendientes/bloqueos;
3. carpeta Drive canónica para subir material;
4. opciones numeradas disponibles;
5. `RECOMENDADO AHORA`;
6. navegación de retorno.

Si la carpeta Drive ya está resuelta en contexto privado autorizado, mostrar su enlace. Nunca persistir enlaces privados en superficies públicas.

## Menú base por vehículo

### 1 — CREAR CONTENIDO CON MATERIAL ACTUAL

Antes de recomendar formato:

1. leer `Vehiculos/.../PUENTE.md`;
2. revisar material real vigente;
3. leer `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`;
4. consultar `AFL_AUTOS_CONTENT_LAB` únicamente como laboratorio/insumo experimental cuando aporte;
5. si existe web y es útil, hacer pulso del día sobre TikTok/Reels/Meta, audio, formatos y edición;
6. separar tendencia actual de regla canónica.

Proponer piezas que el material realmente soporte:

- TikTok;
- Facebook Reel;
- historia;
- post/feed;
- flyer/portada;
- WhatsApp;
- paquete multiformato.

No obligar a producir todos los formatos.

#### Si se elige TikTok/Reel

Antes de producir, proponer 1–3 familias adecuadas a la unidad y material, por ejemplo:

- aspiracional;
- review breve;
- walkaround;
- POV;
- equipamiento/diferenciadores;
- problema → solución;
- oportunidad/precio;
- confianza/voz de Miguel;
- comparación narrativa sin afirmar datos no verificados;
- concepto original derivado del pulso del día.

La familia NO es fija. Debe decidirse por:

`OBJETIVO + VEHICULO + MATERIAL + PLATAFORMA + TENDENCIA DEL DIA + APRENDIZAJE MEDIDO`

Para la propuesta indicar:

- hook 0–2/3 s;
- duración recomendada;
- secuencia;
- texto/motion;
- audio/sonido;
- voz en off SI/NO y por qué;
- efectos/transiciones;
- CTA;
- qué material actual usa;
- qué faltaría para una versión mejor.

Cuando sea útil, revisar señales actuales de TikTok, Meta/Reels y herramientas de edición como CapCut. No copiar plantillas o campañas distintivas.

### Gate de precio

En toda pieza de venta resolver explícitamente:

`MOSTRAR_PRECIO = SI / NO`

El sistema debe recomendar SI o NO según:

- objetivo;
- canal;
- etapa;
- precio confirmado vigente;
- posicionamiento de la pieza.

Si Miguel no lo autorizó para ESA pieza, preguntar antes de incluirlo.

`PRECIO_CONFIRMADO != PRECIO_AUTORIZADO_PARA_LA_PIEZA`

### Gate CTA

Recomendar CTA según objetivo y canal:

- mensaje;
- WhatsApp;
- llamada;
- visita;
- ubicación;
- comentario;
- otro CTA autorizado.

Si usa teléfono, consumir reglas vigentes de `AFL_AUTOS_COMERCIAL`; no duplicar teléfonos privados en este prompt público.

---

### 2 — GENERAR / ACTUALIZAR PLAN DE CAPTURA

No generar una lista universal.

Cruzar:

- material actual;
- cobertura real;
- vehículo;
- forma probable de venderlo;
- dudas comerciales/técnicas;
- piezas que conviene producir;
- pulso actual del día cuando aporte.

Entregar:

- fotos faltantes;
- videos/clips faltantes;
- orientación;
- duración aproximada de clips;
- hook que la toma debe habilitar;
- orden eficiente de captura;
- tomas técnicas privadas;
- tomas comerciales;
- qué NO publicar.

Consumir `prompts/PLAN_CAPTURA.md`.

---

### 3 — SUBIR / REVISAR NUEVO MATERIAL

Mostrar por defecto la carpeta Drive canónica de la unidad en contexto privado.

Acciones:

- `ABRIR DRIVE`;
- `LISTO MATERIAL ACTUALIZADO`.

Al recibir `LISTO MATERIAL ACTUALIZADO`:

1. revisar Inbox/originales;
2. clasificar fotos/videos;
3. detectar duplicados;
4. conservar originales;
5. mover a carpetas canónicas cuando corresponda;
6. actualizar cobertura;
7. actualizar PUENTE;
8. actualizar índices/repos derivados que corresponda;
9. volver a mostrar este menú.

`DUPLICADO_DETECTADO != BORRADO_AUTORIZADO`

Ofrecer por separado:

- conservar;
- mover a histórico;
- eliminar duplicados exactos con autorización explícita.

---

### 4 — TAREA DE CAMPO

Generar checklist corto y práctico para ejecutar físicamente:

- fotos;
- video;
- limpieza;
- detalle físico;
- documento;
- dato por confirmar;
- consulta a persona responsable;
- prueba/medición necesaria.

Debe indicar qué desbloquea cada tarea.

---

### 5 — FLYER / HISTORIA / POST

Usar únicamente material que pase gate visual.

Resolver:

- formato;
- objetivo;
- precio SI/NO;
- CTA;
- datos publicables;
- foto HERO;
- copy;
- adaptación por canal.

No publicar automáticamente.

---

### 6 — FICHA / WHATSAPP / RESPUESTA COMERCIAL

Consumir:

- `Vehiculos/PUENTE.md` para datos vigentes;
- `AFL_AUTOS_COMERCIAL` para reglas, respuestas y CTA.

Separar:

- ficha interna;
- título público;
- descripción estratégica;
- respuesta rápida;
- material aprobado para enviar.

---

### 7 — PENDIENTES / SEGUIMIENTO

Mostrar:

- BLOQUEANTE;
- OPERATIVO;
- MEJORA.

Cada pendiente debe tener siguiente acción y condición de cierre.

---

### 8 — MENÚ DEL VEHÍCULO

Regresar a la ficha/resumen de la unidad actual.

### 9 — INVENTARIO / NUEVO VEHÍCULO

Regresar a búsqueda de vehículo o iniciar:

`NUEVO VEHICULO`

### 0 — AFL AUTOS

Regresar al menú principal de AFL AUTOS.

### ROOT — ROOT GLOBAL

Regresar a ROOT global.

## Navegación

La navegación debe ser reversible:

`ACCION → VEHICULO → INVENTARIO/NUEVO VEHICULO → AFL AUTOS → ROOT GLOBAL`

Nunca obligar a abrir un chat nuevo únicamente para retroceder de nivel.

## Regla de recomendación

El menú puede tener muchas acciones disponibles, pero debe destacar una:

`RECOMENDADO AHORA: <acción de mayor utilidad operativa>`

La recomendación debe considerar bloqueos, disponibilidad de material, urgencia comercial y posibilidad real de ejecutar ahora.
