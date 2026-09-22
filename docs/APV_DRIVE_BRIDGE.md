# APV V1 — Integración de almacenamiento privado

Fecha: 2026-09-22  
Estado: `CONEXION_AUTORIZADA / ACCESO_WEB_DIRECTO_PENDIENTE`

## Objetivo

APV puede consultar y preparar acciones sobre almacenamiento privado sin incrustar credenciales, rutas, IDs o enlaces sensibles en el repositorio público.

## Regla pública

La interfaz pública solo muestra estados funcionales como:

- material localizado;
- material pendiente;
- fotos/videos registrados;
- acción de sincronización;
- acción de apertura cuando exista una configuración local autorizada.

La estructura física, nombres de carpetas, rutas y reglas de escritura permanecen fuera del repositorio público.

## Operación privada

Las operaciones reales se ejecutan mediante una conexión autorizada.

Antes de cualquier escritura, la capa privada debe:

1. resolver la identidad del vehículo;
2. comprobar duplicados;
3. localizar el destino correcto;
4. conservar originales;
5. evitar sobrescrituras destructivas;
6. devolver un estado privado al usuario.

## Seguridad

No incluir en JavaScript público:

- secretos OAuth;
- tokens;
- IDs de carpetas;
- enlaces privados;
- nombres de raíces privadas;
- estructura física interna.

La carga directa desde navegador requiere una capa autenticada privada.
