# Estructura Drive V2 — vehículos nuevos

Esta estructura aplica como **estándar recomendado para vehículos nuevos** a partir de V2 de `AFL_AUTOS_OPERACION`.

No se debe migrar ni renombrar automáticamente trabajo histórico solo para cumplir esta nomenclatura.

## Flujo recomendado

```text
CARPETA_RAIZ_VEHICULO/
├── 01_FOTOS_ORIGINALES/
├── 02_VIDEOS_ORIGINALES/
├── 03_FOTOS_SELECCIONADAS/
├── 04_VIDEOS_SELECCIONADOS/
├── 05_FOTOS_RETOCADAS/
├── 06_REELS_TIKTOK/
├── 07_FLYERS_PORTADAS/
├── 08_PUBLICACIONES_COPYS/
└── 09_RESULTADOS/
```

## Significado

### 01_FOTOS_ORIGINALES
Fotos de la sesión. No retocar, sobrescribir ni eliminar.

### 02_VIDEOS_ORIGINALES
Clips y recorridos originales. No sobrescribir.

### 03_FOTOS_SELECCIONADAS
Copias de las mejores fotos para prospectos/redes. Sin retoque obligatorio todavía.

### 04_VIDEOS_SELECCIONADOS
Copias de los mejores clips para edición posterior.

### 05_FOTOS_RETOCADAS
Derivados comerciales: limpieza superficial, exposición, balance, encuadre, etc., sin ocultar daños reales ni alterar físicamente la unidad.

### 06_REELS_TIKTOK
Masters y derivados de video terminados por plataforma.

### 07_FLYERS_PORTADAS
Flyers feed/historia, portadas Reel/TikTok y otros gráficos.

### 08_PUBLICACIONES_COPYS
Copies, captions, ficha pública y textos de historias.

### 09_RESULTADOS
URLs públicas, capturas y mediciones 24 h / 72 h / 7 días.

## Compatibilidad con vehículos anteriores

Si una unidad ya usa carpetas como:

- `02_FOTOS_PARA_ENVIAR`
- `03_VIDEO_ORIGINAL`
- `03_VIDEOS_PARA_REEL`
- `04_REELS_TIKTOK`
- `05_FLYERS`
- `06_PUBLICACIONES_COPYS`
- `08_RESULTADOS`

se debe **reutilizar la estructura existente** y registrar equivalencias en `PUENTE.md`. No crear duplicados solo por adoptar V2.

## Regla

Originales → selección → retoque → producción → publicación → resultados.

Cada etapa debe conservar su estado independiente.