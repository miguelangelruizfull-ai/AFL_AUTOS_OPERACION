# APV V1 — PUENTE DRIVE

Fecha: 2026-09-22
Estado: `CONECTOR_VERIFICADO / CHATGPT_BRIDGE_ACTIVO / OAUTH_WEB_DIRECTO_PENDIENTE`

## Objetivo

Conectar APV con el Drive privado operativo sin incrustar credenciales, IDs privados ni enlaces sensibles en el repositorio público.

Arquitectura:

`APV WEB → PROMPT ESTRUCTURADO → CHATGPT CON DRIVE AUTORIZADO → DRIVE PRIVADO → JSON PRIVADO APV → APV WEB`

La UI pública no llama directamente a Google Drive.

## Cuenta y raíz

APV resuelve dentro del entorno autorizado el rol de cuenta AFL correspondiente.

Raíz operativa de vehículos:

`01_VEHICULOS`

La URL/ID real de esa carpeta no se guarda en este repositorio público.

## Estado verificado

Corte 2026-09-22:

- conexión Drive disponible;
- raíz `01_VEHICULOS` localizada;
- 42 carpetas de vehículos enumeradas;
- no se creó, renombró, movió ni eliminó ninguna carpeta durante la verificación;
- existe material legacy con IDs secuenciales `AFL-0001`, `AFL-0002`, etc.;
- vehículos nuevos usarán `AFL-<VIN6>`;
- carpetas legacy no se renombran automáticamente.

## Flujo nuevo vehículo

1. Miguel captura VIN/datos en APV.
2. APV genera `VEHICLE_ID = AFL-<VIN6>`.
3. APV genera el prompt `NUEVO VEHICULO / DRIVE`.
4. ChatGPT verifica duplicados en `01_VEHICULOS`.
5. Si no existe la unidad y hay identidad suficiente, crea la carpeta.
6. Crea únicamente subcarpetas faltantes del estándar Drive V2.
7. Devuelve JSON privado APV con enlaces/estado.
8. Miguel importa ese JSON en APV.
9. APV puede abrir la carpeta desde el navegador local sin publicar el enlace.

## Estructura Drive V2 canónica

La autoridad de estructura física vive en `Vehiculos/docs/PROTOCOLO_VEHICULO_V2.md`.

```text
AFL-<VIN6>__AÑO_MARCA_MODELO/
├── 00_INBOX
├── 01_ORIGINALES_FOTOS
├── 02_ORIGINALES_VIDEO
├── 03_DOCUMENTOS_PRIVADOS
├── 04_INSPECCION_FISICA
├── 05_SELECCION
├── 06_RETOQUE
├── 07_PRODUCCION
├── 08_APROBADOS_MIGUEL
├── 09_ENTREGA_CLIENTE
├── 10_RESULTADOS
└── 99_HISTORICO
```

## Mapeo UX APV

APV puede mostrar nombres simples sin alterar la estructura física:

- Inbox / material nuevo → `00_INBOX`
- Fotos originales → `01_ORIGINALES_FOTOS`
- Videos originales → `02_ORIGINALES_VIDEO`
- Documentos privados → `03_DOCUMENTOS_PRIVADOS`
- Inspección física → `04_INSPECCION_FISICA`
- Selección → `05_SELECCION`
- Retoque → `06_RETOQUE`
- Producción → `07_PRODUCCION`
- Aprobados Miguel → `08_APROBADOS_MIGUEL`
- Entrega cliente → `09_ENTREGA_CLIENTE`
- Resultados → `10_RESULTADOS`
- Histórico → `99_HISTORICO`

Regla: `UX_SIMPLE != SEGUNDA_ESTRUCTURA_DRIVE`.

## Compatibilidad legacy

`ESTRUCTURA_EXISTENTE != OBLIGACION_DE_RENOMBRAR`

Si una unidad ya tiene carpetas históricas, APV debe:

1. inspeccionar la estructura;
2. reutilizar lo existente;
3. crear solo lo que falte cuando sea necesario;
4. registrar equivalencias;
5. no duplicar material solo para cumplir nomenclatura nueva.

## Índice Drive privado

APV acepta un JSON privado importable con esta forma:

```json
{
  "schema_version": "APV_DRIVE_INDEX_1.0",
  "privacy": "PRIVATE_DO_NOT_COMMIT",
  "vehicles": [
    {
      "vehicle_id": "AFL-XXXXXX",
      "folder_name": "AFL-XXXXXX_MARCA_MODELO_ANIO",
      "folder_url": "PRIVATE",
      "status": "LOCALIZADA",
      "subfolders": []
    }
  ]
}
```

Ese archivo:

- puede mantenerse local o en almacenamiento privado;
- no se publica en GitHub;
- permite a APV buscar/abrir carpetas sin hardcodear enlaces.

## Subida de fotos y videos

La subida real se ejecuta por el conector Drive autorizado de ChatGPT mientras no exista OAuth web directo.

Flujo:

`ARCHIVOS → CHAT AUTORIZADO → VERIFICAR VEHICLE_ID → RESOLVER SUBCARPETA → SUBIR → DEVOLVER ESTADO/ENLACE PRIVADO`

No subir a una carpeta por parecido de nombre si la identidad de la unidad no está confirmada.

## Gate

Antes de cada escritura:

- resolver cuenta requerida;
- resolver VEHICLE_ID;
- buscar duplicado;
- localizar carpeta destino;
- conservar originales;
- no sobrescribir RAW;
- devolver evidencia de la acción.

## Pendiente técnico

La carga directa desde el navegador APV requiere una capa privada autenticada/OAuth. No se deben colocar secretos OAuth en el JavaScript público.

Hasta entonces:

`CHATGPT_DRIVE_BRIDGE = OPERATIVO`

`APV_WEB_DIRECT_UPLOAD = PENDIENTE`
