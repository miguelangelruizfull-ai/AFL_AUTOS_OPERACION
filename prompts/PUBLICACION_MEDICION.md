# Prompt base — Publicación + medición semanal

Usar únicamente cuando Miguel confirme una publicación real o pegue una URL pública verificable.

## Objetivo

Registrar publicación, dejar un único checkpoint semanal claro y convertir métricas en aprendizaje sin mezclar alcance con resultados comerciales.

## FAST PATH

1. leer `PUENTE.md` y registro vigente;
2. identificar plataforma y pieza exacta;
3. registrar URL pública canónica;
4. leer `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md` para conservar familia/HERO/hook/CTA/variable;
5. programar únicamente `MEDICION_7D`;
6. en el checkpoint semanal, preferir exportables privados de Meta/Messenger/WhatsApp y métricas de plataforma disponibles en Drive;
7. sanitizar antes de persistir en repos;
8. abrir motor/editorial o Platform solo si se requiere análisis profundo.

## Registro de publicación

Cambiar únicamente la pieza confirmada a:

`PUBLICADO_CONFIRMADO_POR_MIGUEL / MEDICION_7D_PENDIENTE`

Registrar:

- plataforma;
- pieza exacta;
- URL canónica;
- fecha/hora verificable o aproximada claramente marcada;
- familia visual/editorial;
- HERO o `HOOK_0_3S`;
- duración si video;
- audio/voz;
- CTA;
- variable creativa si existe;
- fecha del checkpoint semanal.

No volver a renderizar una pieza publicada salvo instrucción expresa.

## Checkpoint único — 7 días

Objetivo: observar una ventana suficiente para comparar rendimiento de contenido y señales comerciales sin mantener checkpoints manuales de 24 h y 72 h.

Flujo normal vigente desde `2026-09-13`:

`PUBLICADO_CONFIRMADO_POR_MIGUEL → MEDICION_7D → CIERRE_DE_APRENDIZAJE`

`MEDICION_24H` y `MEDICION_72H` quedan retiradas del flujo normal. Si existen en registros históricos, conservarlas como evidencia histórica sin crear nuevas tareas equivalentes.

La medición debe ejecutarse con datos verificables. Preferencia de fuentes:

1. exportables de plataforma;
2. exportables de conversaciones/lead flow en almacenamiento privado;
3. datos visibles verificables de la plataforma;
4. captura manual solo como respaldo cuando no exista exportable.

No pedir a Miguel copiar y pegar métricas cuando el archivo exportado ya existe en la bandeja privada prevista.

## Qué medir

### Reel / TikTok

Cuando la plataforma lo permita:

- vistas / alcance;
- retención inicial;
- tiempo medio de reproducción;
- completado;
- likes/reacciones;
- comentarios;
- compartidos;
- guardados;
- visitas al perfil/página;
- mensajes atribuibles;
- keyword usada si aplica.

Relacionar con:

- familia;
- hook 0–3 s;
- duración;
- edición/efecto principal probado;
- voz/audio;
- CTA.

### Flyer / post / historia

- alcance/impresiones;
- interacciones;
- clics/mensajes disponibles;
- familia visual;
- HERO;
- cantidad de datos visibles;
- CTA;
- campaña.

## Comercial — separado

Registrar por separado:

- mensajes;
- WhatsApp;
- llamadas;
- leads calificados;
- visitas;
- negociaciones;
- ventas.

No atribuir visita/venta a una pieza sin evidencia del recorrido.

## Preguntas y comentarios como señal editorial/comercial

Cuando existan comentarios o conversaciones reales, registrar de forma sanitizada patrones como:

- precio;
- ubicación;
- versión;
- disponibilidad;
- motor;
- documentación;
- cambio/financiamiento;
- intención de visita.

No guardar PII en repos públicos.

Estos patrones pueden alimentar Content System/Comercial sin convertir un comentario aislado en regla.

## Exportables y privacidad

Los archivos RAW pueden contener nombres, teléfonos, mensajes y otros datos privados. Permanecen en Drive privado.

Solo persistir en repos:

- agregados;
- métricas;
- patrones sanitizados;
- decisiones operativas;
- aprendizaje sin PII.

`RAW_PRIVADO ≠ DATASET_SANITIZADO ≠ APRENDIZAJE_VALIDADO`

## Aprendizaje

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

Un resultado alto no convierte automáticamente hook, duración, música, flyer o efecto en plantilla universal.

Si se consolida análisis/dataset, usar `AFL_AUTOS_PLATFORM` con datos sanitizados.

## Retorno guiado

Devolver:

- `PASO_TERMINADO: PUBLICACION` o `MEDICION_7D`;
- URL principal;
- fuente de datos usada;
- métricas registradas;
- `SIGUIENTE_PASO: MEDICION_7D / CIERRE_DE_APRENDIZAJE`;
- fecha del siguiente checkpoint si aplica;
- `LINK_PRINCIPAL`;
- aprendizaje preliminar;
- contradicciones/riesgos.
