# Coordinación entre chats y retornos

## Objetivo

Evitar copiar conversaciones completas y evitar que el coordinador dependa de la memoria de un chat.

## Regla

Cada chat especializado debe trabajar una sola etapa, persistir su estado en GitHub/Drive y terminar con un bloque corto llamado:

`RETORNO_AL_COORDINADOR`

Ese bloque es el único texto que Miguel necesita copiar al chat coordinador en la mayoría de los casos.

## Formato estándar

```md
## RETORNO_AL_COORDINADOR
TRABAJO:
VEHÍCULO/PROYECTO:
ETAPA EJECUTADA:
RESULTADO:
DRIVE:
GITHUB:
COMMITS:
ESTADO FINAL:
PENDIENTES:
FECHAS/CHECKPOINTS:
SIGUIENTE MÓDULO:
CONTRADICCIONES/RIESGOS:
```

Si un campo no aplica, escribir `NO APLICA`. No inventar datos para completar el formato.

## Cómo continuar en otro chat

Si el chat trabajador se llena o se bloquea:

1. copiar su último `RETORNO_AL_COORDINADOR` o checkpoint;
2. abrir `AFL_AUTOS_OPERACION`;
3. elegir **Continuar hilo / tarea**;
4. pegar el checkpoint en el campo correspondiente;
5. generar el prompt;
6. pegarlo en un chat nuevo.

El chat nuevo debe validar las fuentes vigentes antes de continuar.

## Pendientes con fecha

Las fechas operativas importantes deben quedar también en una fuente persistente privada cuando corresponda:

- vehículo: `PUENTE.md` / archivo de publicación/resultado;
- contenido: registro de coordinación del Content System;
- mediciones: archivo de resultados/plan de medición.

La agenda del HTML es una ayuda local del dispositivo, no la fuente de verdad.

## Recordatorios automáticos

La herramienta web pública no ejecuta tareas programadas por sí sola. Puede generar un prompt con los pendientes fechados para pegarlo en ChatGPT y pedir que cree recordatorios/mediciones. Solo debe declararse `PROGRAMADO` cuando la programación se haya creado realmente.