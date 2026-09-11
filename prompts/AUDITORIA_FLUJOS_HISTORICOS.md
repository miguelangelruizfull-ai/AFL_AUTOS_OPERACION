# AFL AUTOS — AUDITORÍA DE FLUJOS OPERATIVOS HISTÓRICOS

Este prompt sirve para revisar carpetas con intentos, versiones o prototipos operativos anteriores de AFL AUTOS antes de borrar los archivos fuente.

## Objetivo

Convertir intentos históricos de flujo en:

`INVENTARIO → ANALISIS → IDEAS UTILES → ERRORES → PROPUESTAS → ARQUITECTURA ACTUAL`

No reconstruir ni reutilizar ciegamente sistemas viejos.

## Fuente

Miguel proporcionará una carpeta Drive.

Antes de borrar nada:

1. listar TODO el contenido;
2. abrir y revisar cada archivo relevante;
3. detectar duplicados/versiones;
4. registrar qué problema intentaba resolver cada archivo;
5. separar qué sigue siendo útil, qué quedó superado y qué debe evitarse.

No mover, borrar, renombrar ni sobrescribir originales durante la auditoría.

## Repositorios a consultar

- `AFL_AUTOS_OPERACION` — Home/flujo actual.
- `Vehiculos` — verdad por unidad.
- `AFL_AUTOS_CONTENT_SYSTEM` — creatividad, campañas, formatos, motores editoriales.
- `AFL_AUTOS_PLATFORM` — análisis/datasets/metodología.

Antes de modificar archivos existentes: FETCH vigente.

## Qué analizar por archivo

- nombre;
- tipo/formato;
- fecha o versión si se puede determinar;
- propósito aparente;
- etapa del flujo que pretendía resolver;
- entradas requeridas;
- salidas generadas;
- dependencias;
- datos duplicados;
- puntos fuertes;
- fricción;
- errores;
- información sensible;
- si sigue vigente;
- si ya existe una solución mejor en V3/V4;
- idea rescatable.

## Clasificación

Cada archivo o propuesta debe quedar como una de:

- `CONSERVAR_COMO_REFERENCIA`
- `IDEA_RESCATABLE`
- `SUPERADO_POR_SISTEMA_ACTUAL`
- `DUPLICADO`
- `RIESGO_DE_PRIVACIDAD`
- `NO_REUTILIZAR`
- `REQUIERE_MIGRACION`

## Familias de flujo a identificar

Como mínimo buscar intentos relacionados con:

- ingreso de vehículo;
- expediente;
- toma de fotos/videos;
- selección;
- retoque;
- flyers/portadas;
- TikTok/Reels;
- publicación;
- medición;
- leads;
- comentarios;
- respuestas rápidas;
- WhatsApp/llamadas;
- seguimiento;
- visitas;
- ventas;
- galería para prospectos;
- inventario;
- exportaciones TikTok/Meta;
- métricas;
- continuidad entre chats;
- agenda/recordatorios;
- Home/panel operativo.

## Qué NO hacer

- no copiar código viejo al Home actual automáticamente;
- no migrar datos sensibles a repos públicos;
- no asumir que la versión más nueva por nombre es la mejor;
- no borrar archivos fuente;
- no convertir ideas en reglas sin comparar contra la arquitectura vigente;
- no crear un CRM gigante ni una app monolítica solo porque un prototipo lo intentó.

## Salidas

Guardar en `AFL_AUTOS_OPERACION/propuestas/`:

### `AUDITORIA_FLUJOS_HISTORICOS.md`
Resumen completo por archivo/grupo.

### `IDEAS_RESCATABLES.md`
Solo ideas que merecen incorporarse o probarse.

### `ERRORES_Y_ANTI_PATRONES.md`
Errores de arquitectura, duplicación, privacidad o usabilidad que no deben repetirse.

### `HOME_OBJETIVO.md`
Propuesta del mejor Home posible con módulos, navegación y límites.

### `MIGRATION_DECISIONS.md`
Qué migrar, qué no, a qué repo y por qué.

## Regla de borrado posterior

Al terminar, NO indicar que la carpeta fuente puede borrarse hasta que se cumpla:

- inventario completo;
- análisis guardado en GitHub;
- ideas rescatables guardadas;
- decisiones de migración registradas;
- archivos críticos todavía necesarios identificados;
- Miguel confirme el borrado.

Estado posible:

`AUDITORIA_COMPLETA / ANALISIS_PRESERVADO / BORRADO_FUENTE_PENDIENTE_MIGUEL`

## Retorno al coordinador

Cerrar con:

```text
## RETORNO_AL_COORDINADOR
TRABAJO: Auditoría de flujos históricos
FUENTE: carpeta Drive indicada por Miguel
ARCHIVOS_REVISADOS:
PROPUESTAS_GUARDADAS:
COMMITS:
IDEAS_RESCATABLES:
RIESGOS:
MIGRACIONES_RECOMENDADAS:
ARCHIVOS_QUE_NO_DEBEN_BORRARSE_TODAVIA:
ESTADO_FINAL:
SIGUIENTE_PASO:
```
