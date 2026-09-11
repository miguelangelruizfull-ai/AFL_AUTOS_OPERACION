# Prompt base — Publicación + medición

Usar únicamente cuando Miguel confirme que una o más piezas fueron publicadas.

## Antes de actuar

1. Leer `PUENTE.md` y registros de publicación vigentes antes de escribir.
2. Identificar plataforma, pieza exacta y tipo creativo: flyer/post, historia, Facebook Reel, TikTok u otro.
3. Leer la fuente creativa que definió la pieza:
   - para flyer/historia/portada: familia visual, HERO, CTA y variable usada;
   - para Reel/TikTok: familia editorial, `HOOK_0_3S`, duración, audio/voz, CTA y variable de prueba.
4. Si la pieza viene de TikTok/Reel, consultar `AFL_AUTOS_CONTENT_SYSTEM/networks/tiktok/EDITORIAL_ENGINE.md` para registrar las métricas coherentes con el objetivo, sin convertir hipótesis en reglas.
5. Si el análisis se consolida en dataset, usar `AFL_AUTOS_PLATFORM` y mantener datos sanitizados.

## Registro de publicación

- Registrar cada URL pública y distinguir URL canónica de enlaces alternativos/share.
- Cambiar solo las piezas confirmadas a `PUBLICADO_CONFIRMADO_POR_MIGUEL / MEDICION_PENDIENTE`.
- Guardar registro/evidencia en `08_RESULTADOS` o carpeta equivalente, sin reorganizar originales.
- Registrar hora exacta si puede comprobarse; si no, usar hora operativa aproximada claramente marcada.
- Programar o registrar checkpoints 24 h / 72 h / 7 días.

## Qué medir

Medir por plataforma y por pieza.

### TikTok / Facebook Reel

Cuando la plataforma lo permita registrar:

- vistas;
- tiempo medio de reproducción;
- retención/completado;
- likes/reacciones;
- comentarios;
- compartidos;
- guardados cuando existan;
- visitas al perfil/página cuando estén disponibles;
- mensajes atribuibles explícitamente;
- keyword si la pieza utilizó una.

Relacionar los datos con:

- familia editorial;
- hook 0–3 s;
- duración;
- voz/audio;
- CTA;
- variable creativa probada.

### Flyer / post / historia

Registrar lo que la plataforma realmente ofrezca y separar:

- alcance/impresiones;
- interacciones;
- mensajes o clics disponibles;
- respuesta comercial verificable.

Relacionar con:

- familia visual;
- HERO;
- cantidad de datos visibles;
- CTA;
- campaña si aplica.

## Comercial

Separar métricas de plataforma de:

- mensajes;
- WhatsApp;
- llamadas;
- leads calificados;
- visitas;
- negociaciones;
- ventas.

No atribuir una visita o venta a una pieza sin evidencia real del recorrido.

## Aprendizaje

En cada checkpoint indicar si el resultado aporta:

`OBSERVACION → HIPOTESIS → TEST → PATRON_REPETIDO → APRENDIZAJE_VALIDADO`

Un solo resultado no convierte una decisión creativa en regla universal.

Actualizar GitHub/Platform solo con aprendizaje sanitizado y devolver commits, URLs, métricas registradas y próximas mediciones.

No volver a renderizar piezas ya publicadas salvo instrucción expresa de Miguel.