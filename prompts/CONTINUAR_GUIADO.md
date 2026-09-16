# Prompt base — Continuar guiado V3.2

Objetivo: continuar un vehículo/proyecto desde su estado real con el mínimo número de lecturas y sin obligar a Miguel a decidir manualmente qué módulo sigue.

## Entrada mínima

- `EXPEDIENTE_KEY` cuando exista;
- `PUENTE_PATH` cuando exista;
- paso actual sugerido por el Home/índice;
- último `RETORNO_AL_COORDINADOR` cuando exista;
- instrucción adicional de Miguel.

## Procedimiento

1. Hacer fetch vigente de `PUENTE.md` antes de actuar.
2. Resolver contradicciones entre Home/índice/retorno contra `PUENTE.md`; manda `PUENTE.md` para estado de unidad.
3. No repetir etapas terminadas.
4. Ejecutar únicamente el siguiente bloque lógico real.
5. Para contenido normal usar FAST PATH:
   - `PUENTE.md`;
   - `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`;
   - material real;
   - prompt versionado específico.
6. Abrir auditorías/engines completos solo si el runtime no basta, existe contradicción, bloqueo, rediseño importante o tarea de auditoría.
7. No crear un chat nuevo por cada microetapa; continuar el chat actual mientras siga siendo manejable.
8. No inferir `APROBADO`, `PUBLICADO`, `MEDIDO`, `VISITA` o `VENTA`.
9. Si la siguiente acción depende de Miguel, devolver `ESPERANDO_MIGUEL: SI` y `ACCION_MIGUEL` concreta.
10. Si existe una pieza/carpeta que Miguel debe revisar, devolver `LINK_PRINCIPAL`.
11. Mientras `MIGRACION_DRIVE = ACTIVA`, si la etapa toca Google Drive —lectura, barrido, copia, movimiento, escritura, eliminación, ingesta o producción dependiente de archivos— aplicar `docs/DRIVE_ACCOUNT_ROUTING.md` antes de actuar.
12. Mientras la migración siga activa, resolver explícitamente `CUENTA_ACTUAL`, `CUENTA_PROPIETARIA`, `CUENTA_REQUERIDA` y `CAMBIO_DE_CUENTA` antes de pedir a Miguel una acción manual.
13. No asumir que acceso compartido equivale a propiedad o permiso de eliminación.
14. Si hace falta cambiar de cuenta, indicarlo antes de dar el enlace o la instrucción.
15. Para almacenamiento durante la migración, priorizar material activo/canónico en Drive, documentación/reglas en GitHub y RAW histórico pesado en almacenamiento privado o local cuando ya no necesite permanecer online. `POR_CLASIFICAR` no es almacén permanente.
16. Cuando `MIGRACION_DRIVE = CERRADA`, retirar el enrutamiento de cuentas del flujo normal y conservarlo solo para excepciones reales de propiedad/permisos.
17. Antes del cierre final, leer y aplicar `prompts/PROTOCOLO_CIERRE_CHATS_HIJOS.md`.

## Estados guiados

El trabajador puede devolver:

- `PASO_TERMINADO`;
- `PASO_ACTUAL`;
- `SIGUIENTE_PASO`;
- `BLOQUEADO: SI/NO`;
- `ESPERANDO_MIGUEL: SI/NO`;
- `ACCION_MIGUEL`;
- `LINK_PRINCIPAL`;
- `CUENTA_ACTUAL`;
- `CUENTA_PROPIETARIA`;
- `CUENTA_REQUERIDA`;
- `CAMBIO_DE_CUENTA: SI/NO`;
- `MOTIVO_CAMBIO_CUENTA`;
- `ACCION_DRIVE`;
- `ESTADO_VALIDACION_DRIVE`.

Estos campos orientan el Home. No sustituyen `PUENTE.md`.

## Regla para acciones manuales de Miguel

Mientras `MIGRACION_DRIVE = ACTIVA`, cuando Miguel deba mover, borrar, descargar, revisar o cambiar permisos en Drive, responder en este orden:

```text
CUENTA ACTUAL:
CUENTA PROPIETARIA:
CUENTA REQUERIDA:
CAMBIO DE CUENTA: SI/NO
MOTIVO:
CARPETA/ARCHIVO:
ACCIÓN:
ESTADO:
ENLACE:
```

En el Home público usar roles de cuenta. En el chat privado/autorizado, cuando sea necesario para que Miguel actúe, resolver y mostrar el correo exacto verificado.

## Retorno obligatorio

Cerrar con:

```text
## RETORNO_AL_COORDINADOR
TRABAJO:
VEHÍCULO/PROYECTO:
EXPEDIENTE_KEY:
PUENTE_PATH:
ETAPA EJECUTADA:
PASO_TERMINADO:
RESULTADO:
DRIVE:
CUENTA_ACTUAL:
CUENTA_PROPIETARIA:
CUENTA_REQUERIDA:
CAMBIO_DE_CUENTA: SI/NO
MOTIVO_CAMBIO_CUENTA:
ACCION_DRIVE:
ESTADO_VALIDACION_DRIVE:
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

Después del retorno aplicar también el bloque de `SIGUIENTE MOVIMIENTO`, `RECOMENDADO AHORA` y `NUEVO_CHAT_RECOMENDADO` definido en `prompts/PROTOCOLO_CIERRE_CHATS_HIJOS.md`.

Mientras la migración esté activa, completar los campos de cuenta cuando la etapa toque Drive. Si no toca Drive o la migración ya cerró, usar `NO APLICA` salvo que exista una excepción real de permisos.

Si algo no aplica: `NO APLICA`. No inventar enlaces, commits, estados, fechas, propietarios ni permisos.