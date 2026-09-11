# AFL AUTOS — Auditoría de flujos históricos

Estado: `AUDITORIA_FLUJOS_HISTORICOS_DOCUMENTADA`

Fecha de materialización: `2026-09-11`

Fuente histórica: https://drive.google.com/drive/folders/1UrpzTd66QDpfxy4So5BEyQXWF1wKc7Rz

## Alcance

Esta documentación materializa el análisis profundo ya realizado sobre la carpeta histórica de flujos, prototipos, snapshots y documentación de AFL AUTOS. No pretende reactivar sistemas legacy ni convertirlos en fuente de verdad actual.

El alcance declarado por la auditoría previa fue de `36 archivos auditados`. Durante la preparación del manifiesto se conserva además una alerta de reconciliación: el inventario directo observado en la carpeta durante el primer corte contenía `39 entradas`. Esa diferencia debe resolverse antes de cualquier borrado. No se fuerza un conteo artificial.

Tipos encontrados:
- HTML operativos y prototipos;
- JSON de respaldo y datos históricos;
- ZIP snapshots;
- documentación Markdown;
- bitácora/reporte/manual;
- auditoría Meta;
- contextos RAW exportados de chats;
- previews/moodboards/infografías;
- capturas fuera del alcance de AFL AUTOS.

Limitaciones:
- `00_CONTROL_MAESTRO_AFL_AUTOS.pdf` no fue utilizado para fundamentar las conclusiones del primer corte;
- el contenido histórico puede contener datos privados, VIN, odómetros, precios y prospectos, por lo que no debe migrarse a repos públicos sin sanitización;
- nombres y fechas de archivo no garantizan por sí solos la versión real del conocimiento.

## Genealogía

La carpeta representa una EVOLUCIÓN, no decenas de sistemas independientes.

### 1. V10 HTML / JSON

La familia V10 concentró inventario, publicación, flyers, leads, bitácora, respuestas, Meta, TikTok, manual y respaldo dentro de una aplicación HTML local, apoyada por JSON y localStorage.

Valor actual: evidencia histórica y aprendizaje. No se recomienda recuperar la arquitectura monolítica.

### 2. Backups y snapshots

Los backups y ZIP preservan estados intermedios. Son necesarios para lineage porque archivos con nombres semejantes contienen cambios diferentes.

### 3. Reporte / bitácora / manual

Documentan operación, metodología, resultados y reglas entre junio y agosto de 2026. Algunos contienen PII y deben permanecer privados o sanitizarse antes de reutilización.

### 4. Auditoría Meta

Preserva un corte histórico de publicaciones, conversaciones y señales de Marketplace/Facebook. Sirve como evidencia analítica, no como estado actual de inventario.

### 5. Responder V1

Prototipo de intención → respuesta pública/privada → siguiente acción. Es antecedente útil para un futuro sistema comercial, pero no debe usar datos manuales como fuente técnica.

### 6. Content & Sales Engine V4

Intentó integrar vehículo → publicación → galería → respuesta → WhatsApp → contenido → lead → cierre. La idea del flujo es rescatable; la implementación monolítica no.

### 7. Master System V4

Antecesor conceptual del Home: Contexto Maestro, Motor Editorial, Memoria Editorial y generadores. El sistema actual mejora esa idea al separar fuentes de verdad y usar `PUENTE.md` por unidad.

### 8. Contextos del 5 de septiembre

Documentan la evolución del generador de flyers y, especialmente, errores de evidencia: nombres de archivo, layouts o moodboards llegaron a inducir equipamiento no confirmado. Esos errores originan una regla moderna de evidencia/publicación.

### 9. Previews y moodboards

Sirven para auditoría visual y Motor Visual. No son fuente técnica de un vehículo.

### 10. Fuera de alcance

Se detectaron dos capturas ajenas a AFL AUTOS con privacidad alta. No se reproduce su contenido. Deben separarse antes de cualquier exportación histórica o publicación.

## Hallazgos principales

### Problema histórico: sistema monolítico

V10 reunía demasiadas responsabilidades en un solo HTML y usaba estado local/JSON como base práctica. Esto facilitó prototipar, pero mezcló datos técnicos, CRM, contenido, métricas y operación.

La arquitectura moderna correcta es:

- `AFL_AUTOS_OPERACION`: coordinación/Home/prompts;
- `Vehiculos`: fuente técnica/comercial por unidad mediante `PUENTE.md`;
- `AFL_AUTOS_CONTENT_SYSTEM`: creatividad, branding y aprendizaje editorial;
- `AFL_AUTOS_PLATFORM`: datos sanitizados, análisis y metodología;
- Drive: RAW, multimedia y evidencia pesada;
- `AFL_AUTOS_COMERCIAL`: solo propuesta futura, pendiente de auditoría conversacional.

### localStorage / JSON como fuente maestra antigua

El sistema histórico podía guardar cambios en navegador y transportar la base mediante JSON. Eso no debe volver a ser fuente de verdad. La agenda local del Home moderno es auxiliar únicamente.

### Lineage real entre versiones

Los `index_afl_autos_operacion_comercial_v10...` forman una genealogía. Hay copias exactas, versiones previas, backups y evoluciones posteriores. No deben tratarse como sistemas independientes.

### Contradicción / evolución AFL-0032

El análisis detectó que snapshots con nombres cercanos en fecha contenían identificaciones distintas de AFL-0032. Esto demuestra que `nombre + fecha` no basta para decidir cuál es la versión correcta. Debe usarse contenido, evidencia y lineage.

### Riesgos del JSON histórico

Los JSON contienen datos que no deben publicarse: inventario, posibles VIN/odómetros, precios históricos/vigentes, documentación, rutas Drive, reglas comerciales y datos de leads. No se importan masivamente a `Vehiculos` ni al Home público.

### Reglas comerciales útiles preservadas

- no inventar datos;
- separar confirmado/histórico/pendiente;
- responder primero la pregunta real;
- después hacer una sola pregunta útil;
- medir conversación → lead → visita → negociación → venta;
- no atribuir una venta a contenido sin evidencia.

### Buenas prácticas de producción preservadas

- fotografía real como evidencia;
- exterior protagonista cuando corresponde;
- interior/motor/documentación como demostración de valor;
- no alterar vehículo;
- revisión humana antes de publicación;
- una pieza producida no equivale a aprobada/publicada/medida.

### Fotos para lead ≠ fotos para publicación

La auditoría confirma que una galería de prospecto y una selección para redes cumplen objetivos distintos. La futura Galería para Prospectos debe existir como función propia.

### Históricos vendidos ≠ estado actual

Un artículo marcado vendido en Meta histórico no demuestra identidad exacta con una unidad actual. Debe reconciliarse por evidencia suficiente.

### Post vendido ≠ atribución de venta

Que un post aparezca como vendido o que una unidad termine vendida no demuestra que ese contenido causó la venta.

## Regla crítica de evidencia derivada

`DATO_CONFIRMADO_DEL_VEHICULO`
≠ `DATO_AUTORIZADO_PARA_PUBLICACION`
≠ `EVIDENCIA_VISUAL_REAL`
≠ `REFERENCIA_VISUAL_MOODBOARD`
≠ `PIEZA_APROBADA`

También:

- `NOMBRE_DE_ARCHIVO ≠ EVIDENCIA_TECNICA`
- `PROMPT ≠ EVIDENCIA_TECNICA`
- `LAYOUT ≠ EVIDENCIA_TECNICA`
- `FLYER_HISTORICO ≠ EVIDENCIA_TECNICA`
- `MOODBOARD ≠ EVIDENCIA_TECNICA`

Esta regla debe vivir también en `AFL_AUTOS_CONTENT_SYSTEM`.

## Decisión arquitectónica

No reconstruir V10.

Rescatar decisiones, estados, reglas y patrones; distribuirlos según responsabilidad moderna.

## Estado de borrado

La fuente original permanece intacta.

Estado máximo permitido después de esta materialización:

`LISTO_PARA_REVISION_DE_BORRADO`

Nunca `BORRADO_AUTORIZADO` sin aprobación explícita de Miguel y reconciliación del conteo/lineage.