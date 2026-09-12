# Prompt base — Producir redes

Objetivo: producir una pieza/publicación de calidad sin obligar a releer toda la auditoría histórica en cada ejecución.

## FAST PATH — ruta normal

Antes de producir una unidad existente:

1. leer `Vehiculos/.../PUENTE.md` vigente;
2. leer `AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md`;
3. revisar únicamente el material real seleccionado/retocado necesario para la pieza;
4. producir con las reglas activas;
5. abrir fuentes profundas solo si aparece una contradicción, bloqueo, rediseño importante o información que el runtime no resuelva.

No es necesario leer `START_HERE`, todos los engines, auditorías, feedback logs y casos en cada tarea normal si `CONTENT_RUNTIME.md` ya contiene la regla activa.

## Ruta profunda — usar solo cuando haga falta

Consultar según el problema:

### Gráfico

- `docs/EVIDENCE_AND_PUBLICATION_RULES.md`;
- `docs/BRAND_ASSETS.md`;
- `formats/ACTIVE_VISUAL_DIRECTION.md`;
- `formats/FLYERS_PORTADAS.md`;
- `formats/FLYER_ENGINE.md`;
- `formats/FLYER_FAMILIES.md`;
- `library/flyer_audit/COMMON_ERRORS.md`;
- `library/flyer_audit/REFERENCE_STATUS.md`;
- `POSITIVE_REFERENCES.md`;
- `NEGATIVE_CASES.md`;
- `VISUAL_FEEDBACK_LOG.md`;
- campaña/moodboard aplicable.

### Audiovisual

- `networks/tiktok/EDITORIAL_ENGINE.md`;
- `networks/tiktok/FORMAT_FAMILIES.md`;
- `networks/tiktok/HOOKS_AND_CTA.md`;
- `networks/tiktok/EDITING_EFFECTS_LIBRARY.md`;
- `networks/tiktok/VIDEO_AUDIT_INDEX.md`;
- `networks/tiktok/CAPTURE_GUIDE.md`.

Abrir esta ruta profunda cuando:

- haya contradicción;
- la foto/material no soporte la pieza;
- Miguel pida auditoría/justificación;
- se esté probando una dirección nueva;
- se procese una referencia externa;
- un diseño falle repetidamente;
- el runtime no cubra el caso.

## Regla creativa

`REFERENCIA_POSITIVA_APROBADA_POR_MIGUEL > DIRECCION_ACTIVA > REFERENCIA_HISTORICA_NO_VALIDADA`

Ninguna referencia confirma datos técnicos.

## Gate fotográfico obligatorio

Antes de cualquier flyer, portada, historia o feed final:

`ORIGINAL → SELECCION → RETOQUE → LAVADO_VISUAL_SI_APLICA → VALIDACION_FIDELIDAD → PIEZA_FINAL`

- el retoque de la foto seleccionada es obligatorio;
- si hay suciedad superficial visible, aplicar lavado visual;
- no ocultar daños reales;
- no cambiar color, rines, llantas, accesorios, carrocería, altura, interior o proporciones;
- conservar originales y derivados por separado.

Si la foto no soporta la pieza:

`BLOQUEADO_POR_FOTO / REQUIERE_MEJOR_HERO`.

## Gate gráfico

Antes de `PRODUCIDO` comprobar:

- vehículo como HERO inequívoco;
- aproximadamente 60–85 % de protagonismo perceptual cuando sea razonable;
- logo oficial una sola vez;
- jerarquía `VEHICULO → MARCA/MODELO/AÑO → DIFERENCIADOR → CTA → LOGO`;
- `NO ICONOS`;
- máximo 2–4 datos confirmados/publicables;
- CTA único y secundario;
- espacio negativo suficiente;
- lectura móvil;
- apariencia contemporánea/editorial;
- composición propia por formato;
- no plantilla genérica;
- no usar `premium` como etiqueta para fingir una diferencia inexistente.

### Formatos

**Feed 4:5** — HERO dominante, título compacto, aire y 2–4 datos.

**Historia 9:16** — diseñar verticalmente desde origen, respetar zonas seguras.

**Portada Facebook Reel** — miniatura simple, vehículo + modelo/configuración + texto breve.

**Portada TikTok** — adaptar a cuadrícula/overlays; no clonar automáticamente la portada Reel.

**Historias** — `IDENTIDAD/HERO → DIFERENCIADOR → ACCION`.

## Gate audiovisual

Antes de `PRODUCIDO` registrar:

- `FAMILIA_EDITORIAL`;
- objetivo;
- `HOOK_0_3S`;
- secuencia;
- duración;
- CTA principal;
- variable creativa si existe test.

Reglas:

- vehículo, función o acción real comprensible en 0–3 s;
- una idea principal al inicio;
- no abrir con ficha técnica;
- CTA único;
- TikTok y Facebook Reel adaptados por red;
- no copiar overlays históricos como datos vigentes;
- usar `EDITING_EFFECTS_LIBRARY.md` para elevar ritmo/modernidad cuando aporte valor;
- efectos/transiciones sirven al vehículo y al hook, no son decoración obligatoria;
- no aplicar una plantilla idéntica a todas las unidades.

Si el material no soporta la familia/hook:

`BLOQUEADO_POR_MATERIAL / REQUIERE_MEJOR_SELECCION_O_CAPTURA`.

## Referencias externas / competencia

Si Miguel adjunta una referencia nueva, NO mezclar su análisis profundo dentro de la producción normal.

Usar `prompts/ANALIZAR_REFERENCIA_CREATIVA.md` y `AFL_AUTOS_CONTENT_SYSTEM/library/external_references/README.md` para extraer patrones y adaptar de forma original a AFL AUTOS.

No clonar logotipos, fotografías, textos completos, campañas o layouts distintivos ajenos.

## Producción

A. verificar material real;
B. definir familia/objetivo;
C. producir Reel/TikTok adaptados por red cuando haya video suficiente;
D. producir feed/historia/portadas con composición propia;
E. redactar copies específicos;
F. subir derivados versionados;
G. verificar archivos;
H. actualizar `PUENTE.md` con estado y enlace de revisión.

No usar VIN, odómetro, precio no autorizado ni datos pendientes.

No publicar automáticamente.

Estado máximo sin confirmación de Miguel:

`PRODUCIDO / SUBIDO_A_DRIVE / PENDIENTE_APROBACION_MIGUEL`.

Al terminar devolver `RETORNO_AL_COORDINADOR` con `LINK_PRINCIPAL`, `ESPERANDO_MIGUEL` y `SIGUIENTE_PASO` cuando corresponda.