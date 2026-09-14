# MIGRACIÓN DRIVE + GITHUB — CUENTA MAESTRA

**Estado:** BORRADOR OPERATIVO / NO EJECUTAR MOVIMIENTOS TODAVÍA  
**Propósito:** inventariar lo que existe, relacionarlo con los repos canónicos y preparar una migración ordenada hacia una cuenta personal maestra.  
**Regla principal:** primero inventariar y reconciliar; después copiar/migrar; borrar o archivar únicamente cuando exista validación explícita.

> Este documento está sanitizado para repositorio público. No contiene correos, IDs privados de Drive, conversaciones, PII, credenciales ni enlaces privados.

---

## 1. MODELO DE TRABAJO

- **GitHub** = estructura, código, documentación, estados, reglas, prompts, trazabilidad y datasets sanitizados.
- **Google Drive** = fotos, videos, originales, RAW, exportaciones, capturas, documentos privados, conversaciones y evidencia pesada.
- **No duplicar una misma fuente de verdad.**
- Cada proyecto/unidad debe tener una referencia clara entre su expediente GitHub y su carpeta Drive.

---

## 2. INVENTARIO DRIVE AFL AUTOS — RELACIÓN CON REPOS

### 2.1 Contenedor histórico `AflAutos`

| Carpeta lógica en Drive | Repo canónico relacionado | Tratamiento recomendado |
|---|---|---|
| `00_CONTROL` | `AFL_AUTOS_OPERACION` | Auditar y reconciliar con Home/documentación actual. Conservar histórico útil. |
| `01_VEHICULOS` | `Vehiculos` | Mantener multimedia pesada en Drive; GitHub conserva PUENTE, inventario, estados y trazabilidad. |
| `02_MULTIMEDIA_INBOX` | `Vehiculos` + `AFL_AUTOS_CONTENT_SYSTEM` | Usar como entrada temporal. Clasificar antes de producción. |
| `03_LEADS_CRM` | `AFL_AUTOS_COMERCIAL` | PRIVADO. RAW y PII solo en Drive; GitHub únicamente estructura/aprendizaje sanitizado. |
| `04_CONTENIDO_PUBLICACIONES` | `AFL_AUTOS_CONTENT_SYSTEM` | Conservar piezas pesadas en Drive; reglas, prompts y aprendizaje en GitHub. |
| `05_EXPORTACIONES_RAW` | `AFL_AUTOS_PLATFORM` + `AFL_AUTOS_COMERCIAL` | RAW solo Drive. Derivados sanitizados pueden pasar a PLATFORM. |
| `06_REPORTES_Y_METRICAS` | `AFL_AUTOS_PLATFORM` | Reconciliar reportes con datasets y mediciones vigentes. |
| `07_PRODUCTO_PLANTILLA_VENDIBLE` | Por determinar | Auditar antes de migrar. No mezclar con operación sin clasificación. |
| `90_NO_CLASIFICADO` | Ninguno hasta auditar | Bandeja de migración; clasificar elemento por elemento. |

### 2.2 Bibliotecas y carpetas operativas relacionadas

| Carpeta lógica | Repo relacionado | Tratamiento |
|---|---|---|
| `AFL_AUTOS_REFERENCIAS_CREATIVAS` | `AFL_AUTOS_CONTENT_SYSTEM` | Biblioteca visual. Separar moodboard, referencia aprobada y evidencia real. |
| `04_REFERENCIAS_AFL_APROBADAS` | `AFL_AUTOS_CONTENT_SYSTEM` | Preservar como fuente creativa aprobada. |
| `06_VEHICULOS_PUBLICABLES` | `Vehiculos` + `AFL_AUTOS_CONTENT_SYSTEM` | Reconciliar con expediente de cada unidad. |
| `AFL-00XX_<vehiculo>` | `Vehiculos` | Carpeta pesada de unidad. Debe apuntar al `PUENTE.md` correspondiente. |
| `01_EXPORTACIONES` | `AFL_AUTOS_COMERCIAL` / `AFL_AUTOS_OPERACION` | Revisar cada exportación y su finalidad. |
| `04_EXPORTACIONES_META_RAW` | `AFL_AUTOS_PLATFORM` + `AFL_AUTOS_COMERCIAL` | Fuente privada/RAW para métricas, Messenger, WhatsApp y prospectos. |

### 2.3 `Almacen` comercial/privado

Estructura observada:

```text
Almacen/
├── 00_INBOX_RAW/
├── 01_EXPORTACIONES/
├── 02_CONVERSACIONES_RAW/
├── 03_CAPTURAS/
├── 04_CASOS_PARA_ANALISIS/
├── 05_CAPACITACION_VENDEDOR/
└── 90_ARCHIVO/
```

Relación principal:

```text
Almacen
├── RAW / conversaciones / capturas  -> Drive privado
├── casos sanitizados                -> AFL_AUTOS_COMERCIAL
├── aprendizaje cuantitativo         -> AFL_AUTOS_PLATFORM
└── cambios de operación             -> AFL_AUTOS_OPERACION
```

---

## 3. REPOS CANÓNICOS AFL AUTOS

```text
AFL_AUTOS_OPERACION
    HOME / router / coordinación / prompts / checkpoints

Vehiculos
    fuente de verdad por unidad / PUENTE.md / estado / evidencia documentada

AFL_AUTOS_CONTENT_SYSTEM
    creatividad / branding / reglas visuales / prompts / aprendizaje creativo

AFL_AUTOS_COMERCIAL [PRIVADO]
    respuestas / leads / seguimientos / visitas / cierre / aprendizaje comercial

AFL_AUTOS_PLATFORM
    datasets sanitizados / métricas / análisis / aprendizaje cuantitativo
```

### Regla de separación

```text
DATO_CONFIRMADO
!= DATO_PUBLICABLE
!= EVIDENCIA_VISUAL
!= MOODBOARD
!= PIEZA_APROBADA
```

RAW PRIVADO tampoco equivale a aprendizaje publicable o sanitizado.

---

## 4. ESTRUCTURA OBJETIVO — DRIVE DE LA CUENTA PERSONAL MAESTRA

```text
MIGUEL_HOME_DRIVE/
│
├── 00_HOME/
│   ├── MAPA_DE_PROYECTOS/
│   ├── PENDIENTES/
│   ├── CHECKPOINTS/
│   └── MIGRACION/
│
├── 01_AFL_AUTOS/
│   │
│   ├── 00_OPERACION/
│   │   ├── Exportaciones_Operacion/
│   │   ├── Reportes/
│   │   ├── Auditorias/
│   │   └── Evidencia_Operacion/
│   │
│   ├── 01_VEHICULOS/
│   │   ├── AFL-0001_<vehiculo>/
│   │   ├── AFL-0002_<vehiculo>/
│   │   └── ...
│   │
│   ├── 02_CONTENIDO/
│   │   ├── Referencias_Aprobadas/
│   │   ├── Referencias_Creativas/
│   │   ├── Moodboards/
│   │   ├── Branding/
│   │   ├── Flyers/
│   │   ├── Reels/
│   │   ├── TikTok/
│   │   └── Archivo_Visual/
│   │
│   ├── 03_COMERCIAL_PRIVADO/
│   │   ├── Inbox_RAW/
│   │   ├── Conversaciones_RAW/
│   │   ├── Messenger/
│   │   ├── WhatsApp/
│   │   ├── Prospectos/
│   │   ├── Capturas/
│   │   ├── Casos_Para_Analisis/
│   │   └── Archivo/
│   │
│   ├── 04_DATOS_Y_EXPORTACIONES/
│   │   ├── Meta_RAW/
│   │   ├── TikTok_RAW/
│   │   ├── Marketplace_RAW/
│   │   ├── Mediciones/
│   │   ├── Reportes/
│   │   └── Historicos/
│   │
│   └── 99_ARCHIVO_HISTORICO/
│
├── 02_PORTAFOLIO_MIGUEL/
│   ├── Casos/
│   ├── Evidencia/
│   ├── Capturas/
│   ├── CV/
│   └── Material_Publicable/
│
├── 03_ALBUM_PERSONAL/
│   ├── ORIGINALES/
│   ├── PRESELECCION/
│   ├── APROBADAS/
│   ├── VIDEOS/
│   ├── PUBLICABLE/
│   └── ARCHIVO/
│
├── 04_PROYECTOS_PERSONALES/
│   ├── Proyecto_01/
│   ├── Proyecto_02/
│   └── ...
│
├── 05_GITHUB_BACKUPS/
│   ├── Inventarios/
│   ├── Releases/
│   └── Snapshots_Importantes/
│
├── 90_MIGRACION/
│   ├── POR_CLASIFICAR/
│   ├── DUPLICADOS/
│   ├── ORIGENES_ANTIGUOS/
│   └── MIGRATION_LOG/
│
└── 99_ARCHIVO_HISTORICO/
```

---

## 5. ESTRUCTURA OBJETIVO — GITHUB

```text
CUENTA_GITHUB_MAESTRA/
│
├── MIGUEL_HOME                  # futuro Home personal maestro
│
├── AFL_AUTOS_OPERACION
├── Vehiculos
├── AFL_AUTOS_CONTENT_SYSTEM
├── AFL_AUTOS_COMERCIAL          # privado
├── AFL_AUTOS_PLATFORM
│
├── portfolio
├── album_MiguelAngelRuiz
│
├── <proyectos_personales_activos>
│
└── archive-<repos_legado>
```

### `MIGUEL_HOME` objetivo

```text
README.md
START_HERE.md

projects/
├── AFL_AUTOS.md
├── PORTAFOLIO.md
├── ALBUM.md
└── PERSONAL.md

status/
├── ACTIVE_PROJECTS.md
├── PENDING.md
└── CHECKPOINTS.md

migration/
├── MIGRATION_MAP.md
├── LEGACY_REPOS.md
└── DRIVE_MAP.md

docs/
├── ARCHITECTURE.md
└── RULES.md
```

> Mientras `MIGUEL_HOME` no exista, este documento vive temporalmente en `AFL_AUTOS_OPERACION/propuestas/`.

---

## 6. IDENTIFICADORES MÍNIMOS POR PROYECTO

Cada proyecto debe poder resolverse con cuatro campos:

```text
PROJECT_KEY
GITHUB
DRIVE
STATUS
```

Cada vehículo:

```text
VEHICLE_KEY
EXPEDIENTE_KEY
GITHUB_PATH
DRIVE_REF
PUENTE_PATH
STATUS
SIGUIENTE_ACCION
```

No depender de recordar URLs manualmente.

---

## 7. ESTADOS ESTÁNDAR DE MIGRACIÓN

```text
POR_INVENTARIAR
INVENTARIADO
RECONCILIANDO
LISTO_PARA_COPIAR
COPIADO
VALIDADO
DUPLICADO
HISTORICO
ARCHIVABLE
NO_MOVER
```

Para operación normal:

```text
INBOX
ACTIVO
ESPERANDO_MIGUEL
BLOQUEADO
EN_REVISION
APROBADO
PUBLICADO
MEDICION
CERRADO
ARCHIVADO
```

---

## 8. PRIVACIDAD Y DESTINO

```text
PUBLICO
├── documentación sanitizada
├── portfolio
└── aprendizaje sin PII

INTERNO
├── operación
├── estados
└── automatizaciones sin secretos

PRIVADO
├── leads
├── conversaciones
├── teléfonos
├── exportaciones
└── documentos internos

RAW_SENSIBLE
├── conversaciones completas
├── capturas con PII
├── exportaciones originales
└── evidencia privada
```

**Regla:** PII y RAW sensible nunca deben pasar a repositorios públicos.

---

## 9. TABLA DE MIGRACIÓN — CONTROL VIVO

| Origen lógico | Destino objetivo | Repo relacionado | Estado | Acción siguiente |
|---|---|---|---|---|
| `AflAutos/00_CONTROL` | `01_AFL_AUTOS/00_OPERACION` | `AFL_AUTOS_OPERACION` | INVENTARIADO_PARCIAL | comparar con Home actual |
| `AflAutos/01_VEHICULOS` | `01_AFL_AUTOS/01_VEHICULOS` | `Vehiculos` | INVENTARIADO_PARCIAL | inventariar unidades y cruzar PUENTEs |
| `AflAutos/02_MULTIMEDIA_INBOX` | por unidad / contenido | `Vehiculos` + `CONTENT_SYSTEM` | POR_REVISAR | clasificar material |
| `AflAutos/03_LEADS_CRM` | `03_COMERCIAL_PRIVADO` | `AFL_AUTOS_COMERCIAL` | POR_REVISAR | preservar PII solo en Drive |
| `AflAutos/04_CONTENIDO_PUBLICACIONES` | `02_CONTENIDO` | `AFL_AUTOS_CONTENT_SYSTEM` | POR_REVISAR | reconciliar publicaciones |
| `AflAutos/05_EXPORTACIONES_RAW` | `04_DATOS_Y_EXPORTACIONES` | `PLATFORM` + `COMERCIAL` | POR_REVISAR | detectar duplicados/exportaciones vigentes |
| `AflAutos/06_REPORTES_Y_METRICAS` | `04_DATOS_Y_EXPORTACIONES/Reportes` | `AFL_AUTOS_PLATFORM` | POR_REVISAR | cruzar datasets vigentes |
| `AFL_AUTOS_REFERENCIAS_CREATIVAS` | `02_CONTENIDO/Referencias_Creativas` | `CONTENT_SYSTEM` | INVENTARIADO | preservar |
| `04_REFERENCIAS_AFL_APROBADAS` | `02_CONTENIDO/Referencias_Aprobadas` | `CONTENT_SYSTEM` | INVENTARIADO | preservar como fuente aprobada |
| `06_VEHICULOS_PUBLICABLES` | por unidad | `Vehiculos` + `CONTENT_SYSTEM` | POR_REVISAR | identificar origen de cada pieza |
| `Almacen` | `03_COMERCIAL_PRIVADO` | `AFL_AUTOS_COMERCIAL` | INVENTARIADO_PARCIAL | revisar subcarpetas sin exponer PII |
| `04_EXPORTACIONES_META_RAW` | `04_DATOS_Y_EXPORTACIONES/Meta_RAW` | `PLATFORM` + `COMERCIAL` | INVENTARIADO | conservar RAW privado |

---

## 10. ORDEN RECOMENDADO DE MIGRACIÓN

1. Inventariar completamente la cuenta AFL origen.
2. Cruzar `01_VEHICULOS` con todos los expedientes/PUENTEs de `Vehiculos`.
3. Cruzar contenido y referencias con `AFL_AUTOS_CONTENT_SYSTEM`.
4. Reconciliar `Almacen`, CRM y exportaciones con `AFL_AUTOS_COMERCIAL`.
5. Reconciliar métricas/exportaciones con `AFL_AUTOS_PLATFORM`.
6. Validar qué parte de `00_CONTROL` ya está sustituida por `AFL_AUTOS_OPERACION`.
7. Crear estructura destino en la cuenta personal maestra.
8. Copiar primero; no mover originales todavía.
9. Verificar conteos, nombres, tamaños y referencias.
10. Actualizar PUENTEs y documentación solo después de validar las copias.
11. Marcar duplicados.
12. Archivar legado únicamente con autorización explícita.
13. Repetir el mismo proceso para Portafolio, Álbum y proyectos personales.

---

## 11. SIGUIENTE BLOQUE DE AUDITORÍA

**Prioridad:** `AflAutos/01_VEHICULOS`.

Objetivo:

- listar todas las unidades;
- cruzar cada carpeta con `Vehiculos/vehiculos/.../PUENTE.md`;
- detectar unidades sin expediente;
- detectar expedientes sin carpeta Drive;
- detectar duplicados o nombres históricos;
- definir el `DRIVE_REF` canónico de cada unidad;
- no mover ni renombrar archivos durante esta fase.

---

## 12. REGLA DE SEGURIDAD DE LA MIGRACIÓN

Hasta que un elemento tenga estado `VALIDADO`:

```text
NO BORRAR
NO SOBRESCRIBIR
NO RENOMBRAR MASIVAMENTE
NO ROMPER LINKS DE PUENTE
NO PUBLICAR
```

Este documento debe actualizarse a medida que avance la auditoría.