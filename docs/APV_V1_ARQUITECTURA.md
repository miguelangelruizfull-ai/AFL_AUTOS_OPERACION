# APV V1 — Arquitectura pública

Fecha: 2026-09-22  
Estado: `BETA_OPERATIVA / INTEGRACIONES_PRIVADAS_PENDIENTES`

## Objetivo

APV es una interfaz operativa unificada para navegación, inventario, ficha de vehículo, material, respuestas, seguimiento, producción y resultados.

Principio:

`UNA INTERFAZ / DATOS PUBLICOS MINIMOS / DATOS PRIVADOS POR CONEXION AUTORIZADA`

## Superficie pública

La versión pública puede contener:

- navegación;
- etiquetas públicas;
- estados resumidos sanitizados;
- acciones de interfaz;
- prompts genéricos;
- componentes de búsqueda y seguimiento local.

No contiene ni documenta:

- fuentes privadas concretas;
- rutas internas;
- estructura física de almacenamiento;
- claves internas;
- revisiones de archivos;
- PII;
- VIN completo;
- enlaces privados;
- credenciales.

## Datos privados

Los datos privados se cargan en el navegador desde una fuente autorizada y se normalizan a una lista permitida de campos.

La persistencia local es auxiliar y no sustituye la fuente vigente.

## Módulos

- Inicio
- Buscar
- Nuevo vehículo
- Inventario
- Ficha
- Material
- Respuestas
- Seguimiento
- Producción
- Resultados
- Herramientas

## Seguridad

`PUBLICO = NAVEGACION_SANITIZADA`

`PRIVADO = DATOS OPERATIVOS AUTORIZADOS`

`APV != FUENTE_DE_VERDAD`

La versión pública no debe revelar cómo están organizadas o nombradas las fuentes privadas.

## Estado de implementación

Implementado:

- interfaz responsive;
- navegación pública sanitizada;
- importación privada local;
- búsqueda e inventario unificados;
- ficha con prioridad privada;
- seguimiento local;
- preparación de acciones y producción;
- protección de datos por allowlist al importar.

Pendiente:

- persistencia comercial privada;
- acceso privado autenticado sin importación manual;
- escritura directa autenticada;
- validación continua antes de sustituir la superficie operativa vigente.
