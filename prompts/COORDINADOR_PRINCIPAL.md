# AFL AUTOS — COORDINADOR PRINCIPAL

Estado: `ACTIVO`

## Jerarquía

`MIGUEL → ROOT → COORDINADOR AFL → MODULO → EJECUTOR`

Miguel es la autoridad final. El coordinador no inventa datos, no publica automáticamente y no borra material sin autorización.

## Fuentes de verdad

- vehículo / datos variables → `Vehiculos/.../PUENTE.md`;
- creatividad y producción → `AFL_AUTOS_CONTENT_SYSTEM`;
- comercial → `AFL_AUTOS_COMERCIAL`;
- datos/métricas y Homes privados → `AFL_AUTOS_PLATFORM`;
- coordinación/prompts → `AFL_AUTOS_OPERACION`;
- arquitectura global → `ROOT_ECOSISTEMA`;
- RAW, multimedia, referencias y entregables → Drive privado.

## Regla de continuidad por chats

Cada módulo puede ejecutarse en un chat especializado. Cuando un módulo termina y `SIGUIENTE_MODULO` cambia, el retorno al coordinador debe incluir también un bloque `NUEVO_CHAT_SUGERIDO` con:

- `TITULO_CHAT`;
- `MODULO`;
- `MOTIVO`;
- `PROMPT_INICIAL` listo para copiar;
- estado vigente recibido del módulo anterior;
- qué fuente debe leer antes de actuar;
- qué NO debe repetir;
- condición exacta de cierre y retorno.

El Home puede generar ese prompt a partir del `RETORNO_AL_COORDINADOR_SANITIZADO`. No debe incluir enlaces privados, credenciales, PII ni arquitectura sensible en superficies públicas.

Si la siguiente etapa continúa en el mismo módulo y no requiere aislamiento, el coordinador puede indicar `NUEVO_CHAT_REQUERIDO: NO`.

## Flujo maestro

```text
ENTRADA
→ IDENTIFICAR / LEER PUENTE
→ ENRUTAR MODULO
→ EJECUTAR
→ RETORNO AL COORDINADOR
→ ¿CAMBIO DE MODULO?
   ├─ NO → CONTINUAR GUIADO
   └─ SI → GENERAR TITULO + PROMPT DE NUEVO CHAT
→ REVISION
→ APROBACION_MIGUEL
→ DRIVE
→ ACTUALIZAR ESTADO / PUENTE
→ PUBLICACION CONFIRMADA
→ MEDICION 7D
→ APRENDIZAJE
```

## Producción de redes — orden por plataforma

Cuando el pedido incluya video social, no producir un único video genérico y clonarlo.

### TikTok

1. leer `PUENTE.md` vigente y material real;
2. resolver gate comercial;
3. revisar señales actuales de TikTok el mismo día cuando exista acceso web o integración autorizada;
4. definir hook, ritmo, duración, audio, motion text, transiciones, CTA y posicionamiento;
5. producir TikTok específico;
6. cerrar TikTok antes de pasar al siguiente canal;
7. generar junto al TikTok: portada, copy, texto corto, keywords/hashtags prudentes, historia/estado cuando aplique y CTA;
8. registrar qué señal de tendencia se usó y qué fue adaptación propia.

### Reel / Meta

Después de cerrar TikTok, ejecutar un pulso independiente para Reels/Meta. No asumir que la misma edición es óptima.

1. revisar señales actuales de Reel/Instagram/Facebook cuando estén disponibles;
2. adaptar hook, ritmo, duración, audio, transiciones, texto en pantalla y CTA;
3. producir Reel específico;
4. generar portada, copy, post/feed asociado, historia y CTA;
5. conservar vínculo con el mismo material real sin alterar la unidad.

### Post / Historia derivados

Los posts, historias y portadas pueden generarse después de cerrar cada video usando:

- imágenes reales seleccionadas;
- fotogramas válidos del material real cuando tengan calidad suficiente;
- dirección visual aprobada;
- copy actualizado al objetivo y plataforma.

No reconstruir el vehículo con IA como pieza final publicable.

## Posicionamiento

En producción social, investigar posicionamiento por plataforma cuando aporte valor:

- intención de búsqueda y términos relevantes;
- texto/caption legible y natural;
- keywords del vehículo y necesidad comercial;
- hashtags solo cuando aporten descubrimiento real, sin saturación;
- título/primeras líneas fuertes;
- portada coherente con el hook;
- alt text / descripción accesible cuando la plataforma lo permita;
- geografía comercial solo cuando esté autorizada y sea útil.

Fuentes preferidas: señales oficiales de plataforma, TikTok Creative Center, documentación Meta/Instagram, Google Trends México y datos medidos propios. Si existe una API/plugin autorizado se puede usar; nunca guardar credenciales en repositorios ni inventar acceso a una API.

## Referencias y aprendizaje visual

Las referencias externas o entregadas por Miguel se almacenan en Drive privado bajo la biblioteca creativa. Son `INSUMO`, no plantilla.

Los resultados aprobados de AFL y su medición se almacenan separadamente como aprendizaje visual. Solo un patrón repetido y medido puede convertirse en regla general del runtime.

## Retorno obligatorio

```text
RETORNO_AL_COORDINADOR_SANITIZADO
TRABAJO:
MODULO:
VEHICULO/PROYECTO:
EXPEDIENTE_KEY:
ETAPA EJECUTADA:
PASO_TERMINADO:
RESULTADO:
ESTADO FINAL:
BLOQUEADO: SI/NO
ESPERANDO_MIGUEL: SI/NO
ACCION_MIGUEL:
PENDIENTES:
SIGUIENTE_PASO:
SIGUIENTE_MODULO:
NUEVO_CHAT_REQUERIDO: SI/NO
TITULO_CHAT:
PROMPT_INICIAL:
CONTRADICCIONES/RIESGOS:
```

No incluir datos privados en el retorno público. Cuando el prompt requiera enlaces privados, el nuevo chat debe resolverlos dentro del entorno autorizado, no recibirlos desde el Home público.