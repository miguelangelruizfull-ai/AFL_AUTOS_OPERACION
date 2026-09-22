# AFL AUTOS — Operación pública

Interfaz pública y móvil de operación de AFL AUTOS.

## Principio

`COMPLEJO POR DENTRO / SIMPLE POR FUERA`

`PUBLICO = NAVEGACION SANITIZADA`

`PRIVADO = DATOS OPERATIVOS AUTORIZADOS`

Este repositorio no debe contener rutas internas, estructura de fuentes privadas, VIN completo, PII, credenciales ni enlaces privados.

## Home

La raíz del sitio mantiene la navegación pública vigente.

## APV V1

APV es la beta de interfaz operativa unificada.

Incluye:

- búsqueda;
- inventario;
- alta de vehículo;
- ficha;
- material;
- respuestas;
- seguimiento;
- producción;
- resultados;
- herramientas.

La navegación pública usa un índice mínimo con `public_ref`, etiqueta, estado sanitizado, siguiente acción y flags.

Los datos operativos reales se cargan únicamente mediante una conexión privada autorizada o un archivo privado local y se reducen a una lista permitida antes de persistirse en el navegador.

## Privacidad

No publicar aquí:

- VIN completo;
- claves internas;
- rutas o nombres de fuentes privadas;
- IDs o enlaces privados;
- PII;
- conversaciones;
- documentos;
- credenciales;
- datos RAW.

Ocultar un dato en la interfaz no es suficiente si permanece dentro de un archivo público.

## Estado

APV permanece en beta hasta completar pruebas de inventario, persistencia privada y conexiones autenticadas.

La superficie pública vigente no se reemplaza automáticamente.
