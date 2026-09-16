# AFL AUTOS — Enrutamiento de cuentas y almacenamiento

Estado: `ACTIVE / TEMPORAL_HASTA_CIERRE_MIGRACION / AUTORIZADO_POR_MIGUEL`
Fecha: `2026-09-14`

## Alcance temporal

Esta regla existe para resolver la dispersión actual entre cuentas mientras termina la migración, depuración y actualización de AFL AUTOS.

Mientras `MIGRACION_DRIVE = ACTIVA`, el enrutamiento de cuentas es obligatorio para cualquier acción sobre Drive.

Cuando la migración cierre y exista una estructura operativa consolidada, esta regla debe pasar a `LEGACY / SOLO_EXCEPCIONES` y el Home debe dejar de pedir cambios de cuenta en el flujo normal.

Objetivo de salida:

`UNA RUTA OPERATIVA CLARA / FUENTES CANONICAS DEFINIDAS / CAMBIO_DE_CUENTA SOLO_POR_EXCEPCION`

No convertir la complejidad temporal de la migración en arquitectura permanente.

## Objetivo

Evitar que la operación se disperse entre varias cuentas de Google Drive sin saber cuál debe usarse para leer, escribir, mover, depurar o conservar material.

La regla aplica a:

- barridos de Drive;
- análisis de carpetas;
- movimientos;
- copias;
- eliminación/depuración;
- escritura o actualización de archivos;
- ingestas de Meta/datos;
- producción que dependa de material de Drive;
- retornos del chat trabajador al coordinador.

## Principio

Antes de una acción sobre Drive, resolver explícitamente:

`CUENTA_ACTUAL → CUENTA_PROPIETARIA → CUENTA_REQUERIDA → ACCION`

No asumir que la cuenta actualmente conectada es la propietaria ni que tiene permisos suficientes.

## Roles de cuenta

El Home público debe usar roles y no exponer correos personales:

- `CUENTA_OPERATIVA` — cuenta usada normalmente para operación diaria y acceso compartido.
- `CUENTA_MAESTRA` — cuenta que conserva la estructura maestra/canónica de Drive cuando corresponda.
- `CUENTA_RED_SOCIAL` — cuenta histórica/operativa asociada a activos de redes sociales cuando corresponda.

El chat trabajador, dentro del entorno autorizado, debe resolver el correo real de cada rol y confirmar propietario/permisos antes de ejecutar o pedir una acción manual.

## Gate obligatorio por acción — mientras migración esté activa

Para cualquier barrido, movimiento, copia, eliminación o escritura, devolver o registrar:

- `CUENTA_ACTUAL`;
- `CUENTA_PROPIETARIA`;
- `CUENTA_REQUERIDA`;
- `CAMBIO_DE_CUENTA: SI/NO`;
- `MOTIVO_CAMBIO_CUENTA`;
- `ACCION_DRIVE`;
- `ESTADO_VALIDACION`.

Si se requiere acción manual de Miguel, indicar primero la cuenta exacta que debe abrir y después la carpeta/archivo/enlace.

Formato recomendado:

```text
CUENTA ACTUAL:
CUENTA PROPIETARIA:
CUENTA REQUERIDA:
CAMBIO DE CUENTA: SI/NO
MOTIVO:
CARPETA/ARCHIVO:
ACCIÓN:
ESTADO:
ENLACE:
```

No dar una instrucción destructiva sin haber confirmado propietario y destino/respaldo cuando aplique.

## Política de almacenamiento durante la migración

Prioridad:

1. mantener en Drive solo material activo, canónico, compartido o necesario para trabajo actual;
2. conservar en GitHub reglas, estados, prompts, contratos, aprendizaje sanitizado y documentación ligera;
3. conservar RAW pesado/histórico en almacenamiento privado o local cuando ya no necesite estar online;
4. usar `POR_CLASIFICAR` solo para material que realmente requiera decisión posterior, no como depósito permanente;
5. depurar duplicados una vez validado el destino;
6. aprovechar primero el almacenamiento ya disponible en las cuentas autorizadas antes de contratar capacidad adicional;
7. no crear cuentas nuevas únicamente para eludir límites de almacenamiento;
8. escalar almacenamiento solo cuando el volumen operativo real lo justifique.

## Actualización temporal — respaldos legacy de repositorios — 2026-09-16

Estado: `EN_CARGA / POR_CLASIFICAR / NO_CANONICO`

Durante la liberación de almacenamiento de la cuenta anterior, los respaldos ZIP históricos de repositorios AFL AUTOS fueron retirados de su ubicación previa y se están cargando en una carpeta privada de `CUENTA_OPERATIVA` marcada para clasificación posterior.

La URL privada de Drive no se registra en este repositorio público. Debe resolverse únicamente dentro del entorno autorizado.

Validación observada al `2026-09-16`:

- `generador-afl-autos-main.zip` — visible;
- `generador-afl-autos-repo-web-main(2).zip` — visible;
- `AFL_AUTOS_V5-main.zip` — visible;
- `AFL_AUTOS-main.zip` — pendiente de aparecer/completar carga.

Reglas temporales:

- esta carpeta privada es `POR_CLASIFICAR` y no debe tratarse como fuente de verdad;
- no descomprimir, migrar ni fusionar automáticamente estos ZIP;
- no publicar el enlace privado ni IDs de Drive en Home, repositorios públicos o retornos sanitizados;
- al completarse la carga, validar los cuatro archivos antes de cualquier depuración adicional;
- la clasificación definitiva debe respetar la fuente de verdad vigente de cada repositorio;
- cuando se defina el destino canónico, sustituir este registro temporal por el estado final sanitizado.

## Regla de producción mientras migración esté activa

La producción no debe detenerse buscando archivos dispersos entre cuentas.

Antes de `PRODUCIR_REDES`, el entorno autorizado debe resolver:

- fuente vigente del vehículo;
- ubicación del material real;
- cuenta propietaria;
- cuenta que debe usarse para lectura/escritura;
- destino de derivados.

Si hay cambio de cuenta necesario, indicarlo antes de iniciar producción.

Cuando la migración cierre, `PRODUCIR_REDES` debe consumir directamente las fuentes canónicas consolidadas y este gate de cambio de cuenta queda solo para excepciones reales.

## Home público

El Home no debe publicar correos de cuenta, enlaces privados ni rutas internas.

Mientras `MIGRACION_DRIVE = ACTIVA`, los prompts generados por el Home deben incluir la instrucción de resolver `CUENTA_ACTUAL / CUENTA_PROPIETARIA / CUENTA_REQUERIDA / CAMBIO_DE_CUENTA` dentro del entorno autorizado.

Después del cierre formal de migración, retirar este requisito del flujo normal del Home y conservarlo únicamente como manejo de excepciones.

El retorno sanitizado puede indicar roles de cuenta. Si Miguel necesita una acción manual, el chat privado debe proporcionar el correo exacto verificado junto con el enlace correspondiente.

## Criterios de cierre de migración

No retirar el modo temporal hasta que se confirme:

- fuentes canónicas definidas para operación, vehículos, contenido, comercial y métricas;
- material activo localizado sin búsqueda entre cuentas;
- duplicados críticos depurados;
- `POR_CLASIFICAR` reducido a pendientes reales;
- propietarios y permisos de las carpetas activas normalizados;
- Home y prompts apuntando a fuentes consolidadas;
- producción normal sin necesidad de cambiar manualmente entre cuentas.

Al cumplirlos:

`MIGRACION_DRIVE = CERRADA`

Y la regla cambia a:

`ENRUTAMIENTO_DE_CUENTAS = SOLO_EXCEPCIONES`

## Regla de seguridad

`ACCESO ≠ PROPIEDAD ≠ PERMISO_DE_ESCRITURA ≠ PERMISO_DE_ELIMINACION`

Validar cada caso antes de actuar.
