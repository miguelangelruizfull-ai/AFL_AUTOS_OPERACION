# AFL AUTOS — PROTOCOLO DE CIERRE DE CHATS HIJOS

Estado: `VIGENTE`
Fecha: 2026-09-16

## Objetivo

Todo chat hijo, ejecutor, auditor, productor o consulta especializada de AFL AUTOS debe cerrar de forma que Miguel sepa inmediatamente qué sigue, sin recordar módulos, rutas ni prompts.

## Regla obligatoria

Al terminar una tarea, el chat debe:

1. devolver el `RETORNO_AL_COORDINADOR_SANITIZADO` o retorno equivalente del módulo;
2. indicar el siguiente módulo/paso real;
3. mostrar hasta cuatro opciones accionables de siguiente movimiento;
4. marcar una sola `RECOMENDADO AHORA` con motivo breve;
5. declarar `NUEVO_CHAT_RECOMENDADO: SI/NO`;
6. si es `SI`, entregar `TITULO_CHAT`, `ROL/MODULO`, `MOTIVO` y `PROMPT_INICIAL` listo para copiar;
7. si es `NO`, declarar `CONTINUAR_EN_ESTE_CHAT`.

## Formato estándar de cierre

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

SIGUIENTE MOVIMIENTO
1. <opción real>
2. <opción real>
3. <opción real>
4. <opción real o VOLVER A ROOT>

RECOMENDADO AHORA: <número + motivo breve>
NUEVO_CHAT_RECOMENDADO: SI/NO
```

## Si se recomienda nuevo chat

Añadir inmediatamente:

```text
TITULO_CHAT:
ROL/MODULO:
MOTIVO:
PROMPT_INICIAL:
```

El `PROMPT_INICIAL` debe incluir:

- repositorio dueño;
- fuentes vigentes que debe leer;
- objetivo concreto;
- estado recibido del módulo anterior;
- qué NO debe repetir;
- condición de cierre;
- obligación de devolver retorno sanitizado y aplicar este mismo protocolo de siguiente movimiento.

## Regla de decisión

Preferir:

1. mismo chat si continúa el mismo módulo y contexto;
2. productor/ejecutor cuando la acción concreta ya está definida;
3. nuevo chat si cambia módulo, fuente de verdad o el trabajo requiere aislamiento/especialización;
4. ROOT si el alcance cruza proyectos/repositorios o cambia arquitectura global.

No crear chats nuevos por rutina.

## Privacidad

El cierre no debe incluir PII, VIN completo, credenciales, IDs/rutas privadas de Drive ni conversaciones privadas innecesarias.
