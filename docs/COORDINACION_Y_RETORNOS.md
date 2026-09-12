# Coordinación entre chats y retornos

## Objetivo

Evitar copiar conversaciones completas y evitar que Miguel tenga que interpretar manualmente qué sigue después de cada chat.

## Principio V3.2

`CHAT TRABAJADOR → RETORNO_AL_COORDINADOR → HOME → SIGUIENTE ACCION`

El retorno es el puente entre chats y también una entrada estructurada para el Home.

## Formato estándar V3.2

```md
## RETORNO_AL_COORDINADOR
TRABAJO:
VEHÍCULO/PROYECTO:
EXPEDIENTE_KEY:
PUENTE_PATH:
ETAPA EJECUTADA:
PASO_TERMINADO:
RESULTADO:
DRIVE:
LINK_PRINCIPAL:
GITHUB:
COMMITS:
ESTADO FINAL:
BLOQUEADO: SI/NO
ESPERANDO_MIGUEL: SI/NO
ACCION_MIGUEL:
PENDIENTES:
FECHAS/CHECKPOINTS:
SIGUIENTE_PASO:
SIGUIENTE MÓDULO:
CONTRADICCIONES/RIESGOS:
```

Si un campo no aplica: `NO APLICA`. No inventar datos, estados, links, fechas o commits.

## Compatibilidad

El Home V3.2 también acepta retornos antiguos que solo tengan:

- trabajo;
- vehículo/proyecto;
- etapa;
- resultado;
- Drive;
- GitHub;
- commits;
- estado final;
- pendientes;
- fechas/checkpoints;
- siguiente módulo;
- contradicciones/riesgos.

Los campos nuevos mejoran automatización, pero no invalidan un retorno histórico.

## Qué hace el Home

Al pegar el retorno:

1. intenta asociar `EXPEDIENTE_KEY`;
2. extrae `SIGUIENTE_PASO` o `SIGUIENTE MÓDULO`;
3. detecta `BLOQUEADO`;
4. detecta `ESPERANDO_MIGUEL`;
5. muestra `ACCION_MIGUEL`;
6. conserva `LINK_PRINCIPAL` localmente para acceso rápido;
7. actualiza el semáforo local;
8. prepara el próximo prompt.

El Home NO escribe el estado durable del vehículo.

`RETORNO = NAVEGACION / HANDOFF`

`PUENTE = VERDAD`

## Qué debe hacer el chat trabajador antes de devolver el retorno

- persistir cambios reales en la fuente canónica correspondiente;
- actualizar `PUENTE.md` cuando cambió el estado de la unidad;
- subir/verificar derivados cuando corresponda;
- hacer fetch vigente antes de modificar un archivo existente;
- distinguir resultado real de propuesta;
- no marcar publicación/medición/aprobación sin evidencia.

## LINK_PRINCIPAL

Cuando Miguel deba revisar algo, devolver el enlace más útil y específico disponible:

- pieza exacta;
- carpeta de flyers;
- Reel/TikTok final;
- carpeta de resultados;
- otro recurso necesario para la decisión.

No devolver un link genérico si existe uno más directo.

## ESPERANDO_MIGUEL

Usar `SI` cuando el sistema no debe seguir sin decisión humana, por ejemplo:

- aprobar/corregir/rechazar pieza;
- confirmar publicación;
- confirmar precio/publicabilidad;
- confirmar una contradicción;
- elegir entre alternativas realmente comerciales.

`ACCION_MIGUEL` debe ser concreta y breve.

## BLOQUEADO

Usar `SI` cuando existe una condición objetiva que impide continuar, por ejemplo:

- falta material;
- falta HERO usable;
- contradicción de expediente;
- artefacto aprobado no localizado;
- falta evidencia requerida;
- fuente canónica no disponible.

No usar bloqueo para una simple preferencia opcional.

## Continuar en el mismo chat

V3.2 ya no exige abrir un chat nuevo por cada microetapa.

Continuar el chat actual mientras:

- siga manejable;
- la tarea siga siendo del mismo dominio;
- no haya riesgo de confundir contextos.

Abrir chat nuevo cuando:

- el anterior se llenó/saturó;
- cambia radicalmente el trabajo;
- una auditoría larga requiere aislamiento;
- existe una razón de seguridad/claridad.

## Continuidad guiada

Prompt canónico:

`prompts/CONTINUAR_GUIADO.md`

El Home genera un prompt corto con:

- expediente;
- path de PUENTE;
- paso sugerido;
- último estado de retorno cuando exista.

El trabajador vuelve a verificar PUENTE antes de actuar.

## Fechas y mediciones

Las fechas importantes quedan en la fuente durable correspondiente.

La agenda local solo ayuda a recordar.

Checkpoints de contenido:

`PUBLICADO → 24H → 72H → 7D`

Solo declarar `PROGRAMADO` si una automatización/recordatorio real fue creada.

## Regla final

El objetivo del retorno no es documentar todo lo que pensó el chat. Es permitir que el siguiente paso sea inequívoco, verificable y rápido.