# APV V1 — Cierre de corrección y validación

Fecha: 2026-09-22  
Estado: `APV_V1_CORREGIDA / SEARCH_PASS / DEEP_ALLOWLIST_PASS / REAL_UNIT_VALIDATION_PASS`

## Alcance

Checkpoint sanitizado del parche de APV V1 posterior a validación con una unidad real autorizada.

No contiene datos privados del vehículo, rutas internas, IDs sensibles, enlaces privados, PII ni credenciales.

## Correcciones verificadas

### Búsqueda pública

La navegación desde resultados de búsqueda usa la misma clave operativa estable que Inventario.

Resultado:

`BUSCAR → RESULTADO PÚBLICO → FICHA = PASS`

### Allowlist profunda

La importación privada ya filtra explícitamente los campos permitidos dentro de:

- identidad;
- comercial;
- técnico;
- material;
- identidad visual;
- flags;
- pendientes;
- respuestas rápidas.

Los campos adicionales no permitidos no se conservan en el registro normalizado de APV.

## Validación

Se verificó:

- índice público;
- búsqueda;
- apertura de ficha;
- prioridad de datos privados autorizados sobre navegación pública;
- material;
- comercial;
- producción;
- retorno;
- sanitización.

El conteo público vigente verificado en este checkpoint es de 13 entradas de navegación.

Los conteos internos de caché/importación/fusión de una prueba no representan inventario canónico global.

## Commit de referencia

`d94c40fc8727b243a7ff2d49f027bc6633ced4fe`

Mensaje:

`fix(apv): sanitize nested private data and public result keys`

## Estado de arquitectura

APV continúa siendo un orquestador y no una fuente de verdad.

Permanece fuera de alcance de este cierre:

- persistencia comercial privada;
- acceso privado autenticado sin importación manual;
- escritura directa autenticada;
- sustitución automática de la superficie operativa vigente.

Regla:

`APV = ORQUESTADOR != FUENTE_DE_VERDAD`
