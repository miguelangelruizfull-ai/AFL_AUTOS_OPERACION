# AFL AUTOS — Enrutamiento de cuentas y almacenamiento

Estado: `ACTIVE / AUTORIZADO_POR_MIGUEL`
Fecha: `2026-09-14`

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

## Gate obligatorio por acción

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

## Política de almacenamiento

Prioridad:

1. mantener en Drive solo material activo, canónico, compartido o necesario para trabajo actual;
2. conservar en GitHub reglas, estados, prompts, contratos, aprendizaje sanitizado y documentación ligera;
3. conservar RAW pesado/histórico en almacenamiento privado o local cuando ya no necesite estar online;
4. usar `POR_CLASIFICAR` solo para material que realmente requiera decisión posterior, no como depósito permanente;
5. depurar duplicados una vez validado el destino;
6. aprovechar primero el almacenamiento ya disponible en las cuentas autorizadas antes de contratar capacidad adicional;
7. no crear cuentas nuevas únicamente para eludir límites de almacenamiento;
8. escalar almacenamiento solo cuando el volumen operativo real lo justifique.

## Regla de producción

La producción no debe detenerse buscando archivos dispersos entre cuentas.

Antes de `PRODUCIR_REDES`, el entorno autorizado debe resolver:

- fuente vigente del vehículo;
- ubicación del material real;
- cuenta propietaria;
- cuenta que debe usarse para lectura/escritura;
- destino de derivados.

Si hay cambio de cuenta necesario, indicarlo antes de iniciar producción.

## Home público

El Home no debe publicar correos de cuenta, enlaces privados ni rutas internas.

Los prompts generados por el Home deben incluir la instrucción de resolver `CUENTA_ACTUAL / CUENTA_PROPIETARIA / CUENTA_REQUERIDA / CAMBIO_DE_CUENTA` dentro del entorno autorizado.

El retorno sanitizado puede indicar roles de cuenta. Si Miguel necesita una acción manual, el chat privado debe proporcionar el correo exacto verificado junto con el enlace correspondiente.

## Regla de seguridad

`ACCESO ≠ PROPIEDAD ≠ PERMISO_DE_ESCRITURA ≠ PERMISO_DE_ELIMINACION`

Validar cada caso antes de actuar.
