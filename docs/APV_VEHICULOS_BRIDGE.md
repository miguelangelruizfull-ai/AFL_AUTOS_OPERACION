# APV V1 — PUENTE VEHÍCULOS

Fecha: 2026-09-22
Estado: `NAVEGACION_SANITIZADA_AUTOMATICA / PUENTE_PRIVADO_BRIDGE_IMPLEMENTADO / LECTURA_WEB_PRIVADA_DIRECTA_PENDIENTE`

## Objetivo

Conectar APV con la fuente vigente de vehículos sin convertir el repositorio público de Operación en una copia de la verdad privada.

Principio:

`EXPEDIENTES_INDEX = NAVEGACION`

`PUENTE.md = VERDAD VIGENTE`

`APV = ORQUESTADOR`

## Dos niveles de datos

### 1. Navegación pública sanitizada

APV carga automáticamente:

`data/expedientes-public-index.json`

Ese archivo solo sirve para:

- localizar unidades;
- mostrar etiqueta pública;
- estado resumido sanitizado;
- siguiente acción resumida;
- flags operativas no sensibles.

No autoriza usar como vigentes:

- precio;
- disponibilidad;
- VIN;
- kilometraje/odómetro;
- documentación;
- enlaces Drive;
- PII;
- material privado;
- decisiones comerciales que dependan del PUENTE actual.

Los registros de este nivel se marcan:

`_apv_source = PUBLIC_NAVIGATION`

`_truth_level = NAVIGATION_ONLY`

## 2. Proyección privada derivada del PUENTE

Para operar una unidad, ChatGPT con GitHub autorizado resuelve:

`Vehiculos/index/EXPEDIENTES_INDEX.json → vehiculos/<EXPEDIENTE>/PUENTE.md`

El índice solo localiza. El PUENTE decide.

La salida se entrega como JSON privado importable a APV y no se publica en GitHub.

Los registros se marcan:

`_apv_source = PRIVATE_PUENTE`

`_truth_level = PUENTE_DERIVED`

## Contrato JSON privado

Contenedor recomendado:

```json
{
  "schema_version": "APV_VEHICLES_BRIDGE_1.0",
  "privacy": "PRIVATE_DO_NOT_COMMIT",
  "generated_at": "ISO-8601",
  "vehicles": []
}
```

Objeto por vehículo, solo cuando el dato exista en la fuente:

```json
{
  "_apv_source": "PRIVATE_PUENTE",
  "_truth_level": "PUENTE_DERIVED",
  "expediente_key": "EXPEDIENTE",
  "vehicle_id": "AFL-XXXXXX",
  "label": "Marca Modelo Año",
  "status": "ESTADO VIGENTE",
  "next_action": "SIGUIENTE_ACCION",
  "flags": [],
  "identity": {},
  "commercial": {},
  "media": {},
  "pending_details": [],
  "visual_identity": {},
  "quick_replies": {},
  "source": {
    "puente_path": "vehiculos/.../PUENTE.md",
    "puente_sha": "SHA",
    "synced_at": "ISO-8601"
  }
}
```

No inventar campos ausentes.

## Resolución y prioridad

Cuando una unidad aparece tanto en navegación pública como en la proyección privada:

`PRIVATE_PUENTE > PUBLIC_NAVIGATION`

La coincidencia puede resolverse por:

1. `expediente_key`;
2. `vehicle_id`;
3. relación `AFL-<VIN6>__...` con `vehicle_id`.

No fusionar por parecido de marca/modelo/año.

## Frescura

APV muestra la procedencia de la ficha privada mediante:

- `source.puente_path`;
- `source.puente_sha`;
- `source.synced_at`.

Si el SHA del PUENTE cambia, la proyección local debe considerarse candidata a actualización.

La UI pública no puede comparar el SHA por sí sola contra un repositorio privado sin una capa autenticada. Hasta que exista esa capa, la comprobación se ejecuta mediante el puente ChatGPT/GitHub autorizado.

## Acciones implementadas

APV incluye:

- carga automática del índice público sanitizado;
- búsqueda unificada;
- prioridad de registros privados sobre navegación pública;
- indicador visible de nivel de fuente;
- botón `SYNC VEHÍCULOS / PUENTE`;
- botón `ACTUALIZAR PUENTE DEL VEHÍCULO`;
- importación de JSON privado;
- conservación local de la proyección privada en el navegador.

## Privacidad

No publicar en este repositorio:

- VIN completo;
- URLs/IDs de Drive privados;
- PII;
- conversaciones;
- teléfonos privados;
- documentos;
- JSON privados APV;
- datos RAW.

`UI_PUBLICA != DATOS_PUBLICOS`

## Pendiente técnico

La eliminación del paso de importar JSON requiere una capa privada autenticada capaz de leer el repositorio `Vehiculos` y devolver una proyección segura al navegador.

Hasta entonces:

`CHATGPT_GITHUB_BRIDGE = OPERATIVO`

`APV_WEB_PRIVATE_REPO_DIRECT_READ = PENDIENTE`
