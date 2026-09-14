# MIGRACIÓN — CUENTA MAESTRA CONFIRMADA

**Fecha:** 2026-09-14
**Estado:** ESTRUCTURA_MAESTRA_CREADA / SIN_MOVIMIENTOS_DE_ORIGINALES

> Documento sanitizado para repositorio público. No contiene correos, IDs privados de Drive, PII ni enlaces privados.

## Decisión vigente

La cuenta maestra de Google Drive fue redefinida por Miguel. La carpeta canónica `MIGUEL_HOME_DRIVE` ya fue creada y verificada bajo la cuenta maestra vigente.

La cuenta anteriormente usada como destino durante la prueba deja de ser el destino maestro. No borrar su estructura previa hasta terminar la reconciliación.

## Estructura creada y verificada

```text
MIGUEL_HOME_DRIVE/
├── 00_HOME/
│   ├── MAPA_DE_PROYECTOS/
│   ├── PENDIENTES/
│   ├── CHECKPOINTS/
│   └── MIGRACION/
├── 01_AFL_AUTOS/
│   ├── 00_OPERACION/
│   │   ├── Exportaciones_Operacion/
│   │   ├── Reportes/
│   │   ├── Auditorias/
│   │   └── Evidencia_Operacion/
│   ├── 01_VEHICULOS/
│   ├── 02_CONTENIDO/
│   │   ├── Referencias_Aprobadas/
│   │   ├── Referencias_Creativas/
│   │   ├── Moodboards/
│   │   ├── Branding/
│   │   ├── Flyers/
│   │   ├── Reels/
│   │   ├── TikTok/
│   │   └── Archivo_Visual/
│   ├── 03_COMERCIAL_PRIVADO/
│   │   ├── Inbox_RAW/
│   │   ├── Conversaciones_RAW/
│   │   ├── Messenger/
│   │   ├── WhatsApp/
│   │   ├── Prospectos/
│   │   ├── Capturas/
│   │   ├── Casos_Para_Analisis/
│   │   └── Archivo/
│   ├── 04_DATOS_Y_EXPORTACIONES/
│   │   ├── META_RAW/
│   │   ├── TIKTOK_RAW/
│   │   ├── MARKETPLACE_RAW/
│   │   ├── MEDICIONES/
│   │   ├── REPORTES/
│   │   └── HISTORICOS/
│   └── 99_ARCHIVO_HISTORICO/
├── 02_PORTAFOLIO_MIGUEL/
│   ├── Casos/
│   ├── Evidencia/
│   ├── Capturas/
│   ├── CV/
│   └── Material_Publicable/
├── 03_ALBUM_PERSONAL/
│   ├── ORIGINALES/
│   ├── PRESELECCION/
│   ├── APROBADAS/
│   ├── VIDEOS/
│   ├── PUBLICABLE/
│   └── ARCHIVO/
├── 04_PROYECTOS_PERSONALES/
├── 05_GITHUB_BACKUPS/
│   ├── Inventarios/
│   ├── Releases/
│   └── Snapshots_Importantes/
├── 90_MIGRACION/
│   ├── POR_CLASIFICAR/
│   ├── DUPLICADOS/
│   ├── ORIGENES_ANTIGUOS/
│   └── MIGRATION_LOG/
└── 99_ARCHIVO_HISTORICO/
```

## Reglas vigentes

1. La nueva estructura no implica que los datos antiguos ya estén migrados.
2. No borrar, renombrar ni mover originales hasta tener backup local y validación.
3. `AflAutos` se audita primero.
4. Para vehículos, `PUENTE.md` manda sobre nombres históricos de carpetas.
5. RAW, conversaciones y PII permanecen fuera de repos públicos.
6. Evitar duplicar archivos pesados dentro de Drive si el origen y destino pertenecen a la misma cuenta; preferir reorganización/movimiento solo después de backup y validación.

## Siguiente paso

Auditar `AflAutos` contra esta estructura, empezando por `01_VEHICULOS`, y generar una tabla `ORIGEN -> DESTINO -> REPO -> ESTADO` antes de mover contenido.
