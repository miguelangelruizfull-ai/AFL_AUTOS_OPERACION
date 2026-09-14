# Reglas Drive / GitHub

## Drive

Usar para:
- originales;
- fotos y videos;
- masters;
- flyers/portadas exportados;
- capturas y evidencia pesada;
- exportables RAW de plataformas.

Reglas:
- no borrar ni sobrescribir originales;
- no mover originales solo para cumplir una estructura si ya existe una ubicación canónica;
- crear derivados con nombres/versiones nuevas;
- verificar que los archivos finales abran antes de marcarlos como subidos;
- separar exportables RAW por origen antes de cualquier análisis.

### Regla de origen para RAW de plataformas

La ubicación dentro de una carpeta RAW no valida por sí sola el origen del archivo.

Antes de usar un exportable para métricas, leads, aprendizaje o datasets se debe clasificar como mínimo en uno de estos estados:

- `PAGINA_AFL_AUTOS_RAW`;
- `PERFIL_PERSONAL_RAW`;
- `PENDIENTE_CLASIFICAR_RAW`.

`PERFIL_PERSONAL_RAW` y `PENDIENTE_CLASIFICAR_RAW` no deben mezclarse con métricas ni aprendizaje oficial de la página AFL AUTOS.

Flujo obligatorio:

`RAW → IDENTIFICAR_ORIGEN → VALIDAR → PROCESAR → SANITIZAR`

La regla operativa detallada vive en `docs/INGESTA_SEMANAL_META.md`.

## GitHub

Usar para:
- `PUENTE.md`;
- estados;
- prompts;
- copies ligeros;
- análisis;
- índices;
- reglas y aprendizaje.

Reglas:
- antes de modificar un archivo existente, leer/fetch la versión vigente;
- hay chats trabajando en paralelo: no sobrescribir trabajo concurrente;
- conservar historial y contexto útil;
- no guardar multimedia pesada cuando Drive es mejor fuente;
- no subir RAW privado ni datos personales a repos públicos;
- solo promover aprendizaje sanitizado y datos cuyo origen esté validado.

## Repo público AFL_AUTOS_OPERACION

Nunca guardar aquí:
- VIN;
- kilometraje;
- precios internos;
- documentos;
- información personal;
- leads/conversaciones;
- credenciales;
- enlaces sensibles innecesarios.

Los campos introducidos en el HTML se procesan localmente en el navegador para generar prompts y no deben convertirse automáticamente en commits.