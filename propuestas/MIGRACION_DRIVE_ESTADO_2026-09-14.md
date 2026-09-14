# MIGRACIÓN DRIVE — ESTADO 2026-09-14

**Estado:** ESTRUCTURA RAÍZ CREADA / SUBCARPETAS PENDIENTES  
**Documento relacionado:** `propuestas/MIGRACION_DRIVE_GITHUB_CUENTA_MAESTRA.md`

> Documento sanitizado para repositorio público. No contiene correo de la cuenta, IDs privados de Drive ni enlaces privados.

## RAÍZ DESTINO

Se confirmó una carpeta vacía destinada a `MIGUEL_HOME_DRIVE` en la cuenta personal maestra.

## CARPETAS CREADAS

```text
MIGUEL_HOME_DRIVE/
├── 00_HOME/
├── 01_AFL_AUTOS/
├── 02_PORTAFOLIO_MIGUEL/
├── 03_ALBUM_PERSONAL/
├── 04_PROYECTOS_PERSONALES/
├── 05_GITHUB_BACKUPS/
├── 90_MIGRACION/
└── 99_ARCHIVO_HISTORICO/
```

Estas carpetas fueron creadas vacías. No se movieron, copiaron, renombraron ni eliminaron archivos de origen.

## SEGUNDA CAPA PENDIENTE

La creación automática de subcarpetas quedó bloqueada por los controles de escritura del conector. No se forzaron operaciones adicionales.

Estructura objetivo pendiente:

```text
00_HOME/
├── MAPA_DE_PROYECTOS/
├── PENDIENTES/
├── CHECKPOINTS/
└── MIGRACION/

01_AFL_AUTOS/
├── 00_OPERACION/
├── 01_VEHICULOS/
├── 02_CONTENIDO/
├── 03_COMERCIAL_PRIVADO/
├── 04_DATOS_Y_EXPORTACIONES/
└── 99_ARCHIVO_HISTORICO/

02_PORTAFOLIO_MIGUEL/
├── Casos/
├── Evidencia/
├── Capturas/
├── CV/
└── Material_Publicable/

03_ALBUM_PERSONAL/
├── ORIGINALES/
├── PRESELECCION/
├── APROBADAS/
├── VIDEOS/
├── PUBLICABLE/
└── ARCHIVO/

05_GITHUB_BACKUPS/
├── Inventarios/
├── Releases/
└── Snapshots_Importantes/

90_MIGRACION/
├── POR_CLASIFICAR/
├── DUPLICADOS/
├── ORIGENES_ANTIGUOS/
└── MIGRATION_LOG/
```

## REGLA DE MIGRACIÓN

1. Inventariar origen.
2. Copiar antes de mover.
3. Verificar conteos y referencias.
4. Actualizar PUENTEs después de validar destino.
5. No borrar origen hasta autorización explícita.

## SIGUIENTE PASO

Completar la segunda capa cuando el conector permita nuevas escrituras y después comenzar con `AflAutos/01_VEHICULOS`, cruzándolo contra el repo `Vehiculos`.
