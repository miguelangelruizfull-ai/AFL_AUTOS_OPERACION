# Contrato Meta JSON → AFL AUTOS

Objetivo: aprovechar exportaciones privadas de Meta sin convertir el Home público en base de datos ni exponer RAW, PII o metadatos sensibles.

## Flujo

`META RAW PRIVADO → IDENTIFICAR ORIGEN → PARSEAR → SANITIZAR → DERIVAR → FUENTES DE DOMINIO → HOME`

El Home recibe únicamente estado y acciones sanitizadas. Nunca carga directamente el ZIP o JSON RAW de Meta.

## Campos aprovechables cuando existan

- fecha/hora de publicación;
- texto o caption;
- hashtags derivados del texto;
- tipo de publicación;
- relación publicación ↔ media;
- tipo de media;
- dimensiones técnicas no sensibles;
- métricas agregadas verificables;
- identificador interno transformado o hash cuando sea necesario para deduplicación;
- señales comerciales derivadas solo cuando exista evidencia suficiente.

## Campos que no deben promocionarse

- IP de carga;
- EXIF sensible;
- teléfono, correo, domicilio u otros identificadores personales;
- conversaciones completas;
- nombres de prospectos;
- tokens, credenciales o datos de sesión;
- identificadores personales estables cuando no sean necesarios.

## Destinos

### AFL_AUTOS_PLATFORM

Recibe datasets sanitizados de publicaciones y métricas agregadas. Puede conservar relaciones post ↔ fecha ↔ formato ↔ métricas ↔ vehículo cuando la asociación sea verificable.

### AFL_AUTOS_COMERCIAL

Recibe únicamente eventos comerciales sanitizados: canal, intención, estado, siguiente acción, resultado observable y relación con unidad cuando corresponda. El esquema debe poder alinearse con el JSON sanitizado exportado por `respuestas-public-v12.html`.

### AFL_AUTOS_CONTENT_SYSTEM

Recibe aprendizaje reusable de copy, hashtags, jerarquía, formatos, encuadres, ritmo y patrones creativos. Una imagen o video RAW no se convierte automáticamente en regla.

### Vehiculos

Solo recibe hechos específicos de una unidad cuando la evidencia es suficiente y el dato corresponde al expediente vigente. `PUENTE.md` continúa siendo la autoridad por unidad.

### AFL_AUTOS_OPERACION / Home

Recibe únicamente estado de ingesta, conteos sanitizados, bloqueos y siguientes acciones. No almacena el payload RAW.

## Compatibilidad con Respuestas Rápidas

Cuando Meta permita derivar un evento comercial sin PII, normalizar preferentemente a:

- `channel`
- `at`
- `vehicle_key` o `null`
- `intent`
- `state`
- `response_type`
- `next_action`
- `visit`
- `result`

Los campos que no puedan probarse quedan `null`, `PENDIENTE` o `NO_IDENTIFICADA`; nunca se infieren por conveniencia.

## Media de alta calidad

Las fotografías y videos únicos permanecen en Drive privado mientras aporten evidencia, reutilización o valor de archivo. Antes de retirar una copia redundante debe comprobarse que existe una representación canónica suficiente o que el aprendizaje durable ya quedó derivado donde corresponde.

## Regla de privacidad

La estructura de exportación Meta puede contener EXIF y otros metadatos privados. El parser debe tratarlos como datos sensibles y descartarlos antes de generar cualquier salida sanitizada.

## Resultado esperado

Una exportación Meta debe poder producir, sin trabajo manual repetitivo:

1. inventario sanitizado de publicaciones;
2. dataset de rendimiento;
3. aprendizaje de copy/hashtags/formatos;
4. eventos comerciales sanitizados cuando existan;
5. resumen operativo para Home;
6. lista de media única, duplicada o prescindible para revisión de almacenamiento.
