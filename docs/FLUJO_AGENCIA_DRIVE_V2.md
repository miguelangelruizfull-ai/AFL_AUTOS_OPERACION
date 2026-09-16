# AFL AUTOS — FLUJO AGENCIA / DRIVE V2

Estado: `ACTIVO_DESDE_2026-09-16`

## Principio

AFL AUTOS es cliente. El cliente necesita fuentes compartidas y entregables; no necesita ver el proceso interno completo.

```text
CLIENTE / INBOX
        ↓
INGESTA Y RECONOCIMIENTO
        ↓
TRABAJO PRIVADO MIGUEL
        ↓
PUENTE + PRODUCCION + REVISION
        ↓
APROBACION MIGUEL
        ↓
ENTREGA AL CLIENTE
        ↓
PUBLICACION CLIENTE
        ↓
RESULTADOS 7D + EXPORTACION MENSUAL
        ↓
APRENDIZAJE SANITIZADO
```

## Roles de Drive

### Cuenta de trabajo Miguel

Centro operativo de:

- ROOT;
- repositorios/backups;
- proceso AFL AUTOS;
- originales consolidados de trabajo;
- selección/retoque/producción;
- datos privados;
- inspección física;
- métricas RAW recibidas;
- respaldos e históricos.

Bandeja de entrada general:

`00_INBOX_TRABAJO_POR_CLASIFICAR`

### Cuenta cliente AFL AUTOS

Solo:

- `00_INBOX_NUEVO_MATERIAL` — fuente que el cliente/Miguel deposita para procesar;
- `01_VEHICULOS` — fuentes compartidas existentes mientras se normalizan;
- `04_CONTENIDO_PUBLICACIONES` — entregables aprobados.

No usar la cuenta del cliente como cerebro del sistema, CRM privado, repositorio de reglas o almacén de históricos internos.

### Cuenta personal Miguel

Separada de trabajo y cliente. Debe tener una bandeja equivalente `00_INBOX_PERSONAL_POR_CLASIFICAR` cuando la cuenta esté conectada/compartida de forma operable.

## Nuevo vehículo

Miguel puede subir fotos/videos desordenados a `00_INBOX_NUEVO_MATERIAL` y compartir la carpeta concreta.

El sistema:

1. inventaría;
2. reconoce/propone identidad;
3. localiza VIN privado si existe;
4. asigna `AFL-<VIN6>` solo con VIN verificado;
5. detecta fuentes duplicadas;
6. crea/ubica expediente canónico;
7. conserva originales;
8. registra pendientes físicos;
9. propone captura faltante;
10. selecciona y produce.

Ver autoridad de identidad en `Vehiculos/docs/PROTOCOLO_VEHICULO_V2.md`.

## Entregable estándar

Según material/objetivo:

- Marketplace: portada + galería ordenada + copy;
- WhatsApp directo: fotos seleccionadas + video + ficha resumida + flyer cuando aporte;
- Catálogo WhatsApp: selección corta y consistente;
- Facebook feed;
- Facebook Reel;
- TikTok adaptado;
- copys;
- portadas;
- registro privado de entrega.

Antes de producción resolver gate de precio, CTA/teléfonos y duración en `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`.

## Resultados

Flujo normal:

`PUBLICADO_CONFIRMADO → MEDICION_7D → APRENDIZAJE`

Además solicitar al cliente una exportación mensual de Meta/TikTok y depositarla en Drive privado para análisis agregado.

RAW mensual no se publica en GitHub. Solo datos sanitizados alimentan Platform/Comercial/Content System.

## Depuración

No borrar por apariencia de duplicado.

`INVENTARIAR → IDENTIFICAR → RESPALDAR → CONSOLIDAR → VERIFICAR → ARCHIVAR → BORRAR SOLO CON AUTORIZACION`

Las rutas históricas pueden retirarse del flujo activo sin destruirlas; usar histórico hasta que su eliminación sea segura.
