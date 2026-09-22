# APV V1 — Integración de vehículos

Fecha: 2026-09-22  
Estado: `NAVEGACION_PUBLICA_SANITIZADA / DATOS_PRIVADOS_POR_CONEXION_AUTORIZADA`

## Objetivo

APV combina una navegación pública mínima con datos operativos cargados desde una fuente privada autorizada.

La superficie pública no documenta ni contiene rutas, claves, identificadores de archivos, revisiones de fuente ni enlaces privados.

## Índice público

El archivo de navegación pública usa únicamente:

```json
{
  "schema_version": "4.0",
  "generated_at": "ISO-8601",
  "rule": "PUBLIC_NAVIGATION_ONLY",
  "vehicles": [
    {
      "public_ref": "PUB-XXXXXXXX",
      "label": "Etiqueta pública",
      "status": "Estado resumido sanitizado",
      "next_action": "Siguiente acción sanitizada",
      "flags": []
    }
  ]
}
```

`public_ref` es un identificador opaco de navegación. No es una clave de la fuente privada.

## Datos privados

Los datos privados se cargan únicamente desde una conexión autorizada o mediante un archivo privado local.

Antes de persistirlos en el navegador, APV conserva solo una lista permitida de campos operativos:

- identificador operativo cuando exista;
- etiqueta pública;
- estado y siguiente acción;
- flags;
- identidad permitida;
- comercial;
- técnico;
- resumen de material;
- pendientes;
- identidad visual;
- respuestas rápidas.

Cualquier campo de origen, ruta, revisión, enlace o clave interna se descarta.

## Prioridad

Cuando el mismo vehículo existe en navegación pública y datos privados:

`DATOS_PRIVADOS_AUTORIZADOS > NAVEGACION_PUBLICA`

La coincidencia se resuelve por identificador operativo o por `public_ref` derivado de la etiqueta pública exacta.

## Privacidad

No publicar en este repositorio:

- VIN completo;
- claves internas;
- rutas o nombres de archivos privados;
- revisiones de fuente;
- enlaces privados;
- PII;
- conversaciones;
- documentos;
- datos RAW.

`UI_PUBLICA != DATOS_PRIVADOS`
