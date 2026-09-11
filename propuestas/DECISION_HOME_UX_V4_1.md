# AFL AUTOS — Decisión de UX para evolución V4.1

Fecha: `2026-09-11`

Estado: `DECISION_DE_DISEÑO / IMPLEMENTACION_PENDIENTE`

## Contexto verificado

Miguel confirma que el Home V3/V3.1 fue utilizado en operación real y resultó funcional. Hubo errores de entrada, pero pudieron corregirse rápidamente durante la producción.

Miguel confirma que el Home V4 actual no fue el Home validado en esa prueba y que su experiencia visual resultó más larga y menos clara: al abrirlo no era evidente qué acción debía realizar.

Por tanto:

`V3/V3.1 = REFERENCIA DE FACILIDAD_DE_USO`

`V4 = FUENTE_DE_MEJORAS_TECNICAS, NO REFERENCIA_DE_UX`

No se propone regresar técnicamente a V3. Se propone evolucionar V4 conservando sus protecciones útiles y recuperando la claridad de decisión del V3.

## Principio de producto

`COMPLEJO_POR_DENTRO / SIMPLE_POR_FUERA`

El Home debe responder primero:

`¿QUE QUIERO HACER AHORA?`

No debe obligar a Miguel a entender primero repositorios, estados internos, reglas de autoridad o arquitectura.

Principio general vigente:

`UN SOLO HOME / FUENTES SEPARADAS`

El Home es UX + router + generador de instrucciones. No es CRM, expediente técnico, base de datos ni fuente de verdad.

## Arquitectura objetivo

- `AFL_AUTOS_OPERACION`: UX, Home, navegación, prompts, continuidad y agenda auxiliar.
- `Vehiculos`: verdad técnica/comercial vigente por unidad mediante `PUENTE.md`.
- `AFL_AUTOS_CONTENT_SYSTEM`: creatividad, branding, formatos, campañas y motores editoriales.
- `AFL_AUTOS_COMERCIAL`: lógica comercial, respuestas, calificación, visita, seguimiento, negociación, cierre y aprendizaje sanitizado.
- `AFL_AUTOS_PLATFORM`: métricas, datasets sanitizados, análisis y metodología.
- Google Drive: RAW, multimedia, conversaciones privadas, exportaciones y evidencia pesada.

## Qué conservar de V3/V3.1

1. Entrada rápida orientada a acción.
2. Centro de coordinación comprensible sin conocer la arquitectura interna.
3. Selección directa de módulo.
4. Formulario corto para generar prompt.
5. Recomendación de siguiente paso.
6. Agenda local auxiliar.
7. Continuidad por retorno/checkpoint.
8. Diseño móvil, oscuro y de botones grandes.

## Qué conservar de V4

Estas funciones son valiosas y NO deben eliminarse:

- preflight;
- lector de `RETORNO_AL_COORDINADOR`;
- ruta sugerida después de un retorno;
- separación explícita de revisión/aprobación;
- estados estrictos de producción, aprobación, publicación y medición;
- agenda local V2 y migración desde V1;
- recordatorios de fetch antes de escribir;
- reglas de evidencia/publicabilidad;
- bloqueos básicos cuando falta contexto obligatorio.

La diferencia es de UX: estas funciones deben trabajar de forma contextual o detrás de la interfaz, no ocupar permanentemente la parte principal de la pantalla.

## Problemas observados en V4 actual

### 1. Arquitectura visible antes de la acción

El bloque `Fuentes que mandan` es útil como documentación, pero no debe competir con la acción principal en la primera pantalla.

Mover a:

`Mas / Fuentes y seguridad`

o a un panel colapsable.

### 2. Diagnósticos siempre visibles

`Lector local de RETORNO` y `Preflight` agregan longitud aunque la tarea elegida no los necesite.

Nuevo criterio:

- retorno visible solo cuando se pega uno o se elige Continuar/Procesar retorno;
- preflight ejecutado automáticamente al generar;
- mostrar únicamente advertencias accionables;
- permitir abrir el detalle técnico si Miguel lo necesita.

### 3. Demasiadas decisiones al mismo nivel

No seguir agregando tarjetas planas por cada función nueva.

Con Comercial, esa estrategia produciría una pantalla cada vez más larga.

Aplicar navegación progresiva:

`CATEGORIA → ACCION → CAMPOS NECESARIOS → RESULTADO`

## Primera pantalla objetivo

La primera pantalla debe ser corta y orientada a tareas.

### CONTINUAR / HOY

Acceso prioritario a pendientes y continuidad real.

### VEHICULO

- Nuevo vehículo
- Continuar vehículo
- Plan de captura
- Selección
- Retoque
- Galería para prospectos

### CREAR CONTENIDO

- Producir redes
- Revisión / aprobación
- Flyer
- Reel Facebook
- TikTok
- Historia
- Portada
- Copy / publicación
- Vendido / entrega

### RESPONDER / LEAD

- Responder comentario
- Responder Messenger
- Responder TikTok
- Responder WhatsApp
- Pregunta frecuente
- Calificar lead
- Mover a WhatsApp / llamada
- Enviar fotos / video
- Proponer visita
- Seguimiento
- Registrar retorno comercial

### PUBLICAR / MEDIR

- Registrar publicación
- Medición 24 h
- Medición 72 h
- Medición 7 días
- Cierre de publicación

### MAS

- Procesar retorno
- Continuar hilo / auditoría
- Nuevo chat principal
- Exportaciones
- Aprendizaje
- Fuentes y seguridad
- Diagnóstico / preflight detallado

La implementación visual no tiene que mostrar todas estas subacciones al mismo tiempo. Solo aparece el segundo nivel cuando se selecciona la categoría.

## Integración de AFL_AUTOS_COMERCIAL

El Home NO debe copiar la lógica comercial.

Flujo:

`HOME`
→ `ACCION_COMERCIAL`
→ `PROMPT / ROUTE`
→ `AFL_AUTOS_COMERCIAL`
→ `Vehiculos/PUENTE.md` cuando la respuesta depende de una unidad
→ `RESPUESTA + UNA_PREGUNTA_UTIL + SIGUIENTE_ACCION`

El Home público puede contener nombres de acciones y reglas de enrutamiento no sensibles. No debe contener verdad técnica, leads identificables ni conversaciones privadas.

## Regla comercial visible en UX

El usuario no debe seleccionar manualmente como verdad:

- motor;
- versión;
- equipamiento;
- documentación;
- disponibilidad;
- precio;
- tracción.

Cuando una acción necesite esos datos, el prompt debe ordenar consultar el `PUENTE.md` vigente.

## Galería para prospectos

Mantener como acción propia.

`FOTOS_PARA_LEAD ≠ FOTOS_PARA_PUBLICACION`

La acción debe dirigir a:

- fotos seleccionadas/retocadas;
- exclusión de VIN, odómetro, documentos y material sensible;
- selección aproximada de 8–15 fotos útiles;
- carpeta Drive clara;
- enlace verificable;
- registro de galería vigente en `PUENTE.md`.

No crear una web pública por vehículo por defecto.

## Escalabilidad técnica

No agregar nueva lógica mediante copias extensas de bloques HTML por cada función.

Preferir una definición central de acciones públicas/no sensibles con propiedades como:

- categoria;
- id;
- etiqueta;
- descripción corta;
- campos requeridos;
- módulo destino;
- repositorios que el chat debe consultar;
- plantilla/prompt base;
- si necesita `PUENTE.md`;
- si necesita retorno;
- si necesita Drive.

La interfaz debe renderizar acciones desde esa definición siempre que sea viable.

Así una nueva capacidad futura puede agregarse sin rediseñar la pantalla completa.

## Regla de seguridad arquitectónica

El Home público NO debe intentar leer directamente repositorios privados desde el navegador usando credenciales.

El Home genera la instrucción; ChatGPT/conectores autorizados consultan las fuentes privadas cuando se ejecuta la tarea.

No colocar tokens o credenciales GitHub/Drive en JavaScript público.

## Persistencia local

`localStorage = AYUDA_LOCAL`, nunca fuente de verdad.

Puede conservar:

- agenda auxiliar;
- preferencias de interfaz no sensibles;
- última categoría usada si aporta UX.

No conservar:

- teléfonos;
- nombres de prospectos;
- conversaciones;
- VIN;
- documentos;
- precios internos;
- datos privados de leads.

## Estrategia de implementación segura

1. Reconciliar `AFL_AUTOS_COMERCIAL` contra el diseño histórico recuperado.
2. Mantener `index.html` vigente sin cambios durante el diseño/prototipo.
3. Crear candidato V4.1 separado para prueba móvil.
4. Verificar paridad con funciones útiles de V3/V4.
5. Probar tareas reales: producción, continuidad, respuesta comercial, visita y publicación/medición.
6. Corregir fricción de entrada.
7. Solo después de aprobación de Miguel, promover el candidato a `index.html`.

## Criterios de aceptación

La evolución se considera correcta si:

- desde teléfono se entiende qué hacer sin leer arquitectura;
- la primera acción útil requiere pocos toques;
- Comercial puede crecer sin multiplicar tarjetas principales;
- V4 conserva sus verificaciones, pero no domina visualmente la pantalla;
- no se almacena PII o verdad técnica en el Home;
- un error de entrada puede corregirse rápidamente sin reiniciar todo el flujo;
- las tareas existentes de producción siguen siendo posibles;
- el sistema puede reconstruirse desde GitHub/Drive sin depender de memoria de chat.

## Decisión

No regresar a V3 como código de producción.

No seguir ampliando visualmente el V4 actual con más bloques permanentes.

Construir una evolución `V4.1 UX` con:

`FACILIDAD_V3 + PROTECCIONES_V4 + COMERCIAL_MODULAR + ESCALABILIDAD`

Antes de reemplazar `index.html`, probar la nueva UX como candidato independiente.