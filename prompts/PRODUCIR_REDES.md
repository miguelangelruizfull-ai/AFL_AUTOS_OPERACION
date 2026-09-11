# Prompt base — Producir redes

Antes de producir:

1. leer `PUENTE.md` vigente del vehículo;
2. leer `AFL_AUTOS_CONTENT_SYSTEM/START_HERE.md`;
3. leer `AFL_AUTOS_CONTENT_SYSTEM/STATUS_RULES.md`;
4. para piezas gráficas consultar OBLIGATORIAMENTE, en este orden:
   1. `docs/EVIDENCE_AND_PUBLICATION_RULES.md`;
   2. `docs/BRAND_ASSETS.md`;
   3. `formats/ACTIVE_VISUAL_DIRECTION.md`;
   4. `formats/FLYERS_PORTADAS.md`;
   5. `formats/FLYER_ENGINE.md`;
   6. `formats/FLYER_FAMILIES.md`;
   7. `library/flyer_audit/COMMON_ERRORS.md`;
   8. `library/flyer_audit/REFERENCE_STATUS.md`;
   9. referencias `REFERENCIA_POSITIVA_APROBADA_POR_MIGUEL` cuando existan;
   10. `library/flyer_audit/POSITIVE_REFERENCES.md` únicamente como histórico útil/no validado salvo promoción explícita;
   11. `library/flyer_audit/NEGATIVE_CASES.md` y `VISUAL_FEEDBACK_LOG.md` para evitar patrones rechazados relevantes;
   12. campaña/moodboard vigente cuando aplique;
5. para Facebook Reel y TikTok consultar OBLIGATORIAMENTE el aprendizaje audiovisual vigente, en este orden:
   - `networks/tiktok/EDITORIAL_ENGINE.md`;
   - `networks/tiktok/FORMAT_FAMILIES.md`;
   - `networks/tiktok/HOOKS_AND_CTA.md`;
   - `networks/tiktok/VIDEO_AUDIT_INDEX.md`;
   - `networks/tiktok/CAPTURE_GUIDE.md` cuando falten tomas o haya que evaluar si el material soporta la familia elegida.

Regla creativa obligatoria:

> Las referencias aprobadas por Miguel tienen prioridad creativa sobre referencias históricas no aprobadas, sin convertirse en fuente técnica del vehículo.

Regla de aprendizaje visual:

> Consulta primero la dirección visual activa de AFL AUTOS y los aprendizajes visuales vigentes. Prioriza referencias expresamente aprobadas por Miguel. Evita repetir patrones documentados como rechazados. No copies datos técnicos desde referencias visuales.

La auditoría histórica de TikTok y flyers es evidencia editorial/visual, no fuente técnica del vehículo. Los datos variables siguen saliendo exclusivamente del `PUENTE.md` vigente.

## Gate visual obligatorio para flyers, portadas, historias y feed

Antes de declarar una pieza `PRODUCIDO`, comprobar explícitamente:

- cumplimiento de `formats/ACTIVE_VISUAL_DIRECTION.md`;
- HERO inequívoco y dominante;
- aproximadamente 60–85 % de protagonismo perceptual cuando el formato/foto lo permitan;
- foto fuente suficientemente limpia para la familia elegida; si el fondo real distrae, cambiar de foto o usar recorte limpio sin alterar físicamente la unidad;
- un solo tratamiento de marca/logo oficial, sin repetición;
- jerarquía `VEHICULO → MARCA/MODELO/AÑO → DIFERENCIADOR → CTA → LOGO`;
- tipografía/estructura con lenguaje contemporáneo/editorial, no plantilla genérica;
- `NO ICONOS` ni pictogramas de motor, transmisión, combustible, 4x4, teléfono, ubicación, calendario, etc.;
- 2–4 datos como máximo y solo si son publicables;
- CTA único, corto y subordinado a vehículo/modelo;
- espacio negativo suficiente;
- ausencia de fondo, ornamentos, franjas o texto que compitan con la unidad;
- lectura correcta a tamaño aproximado de pantalla de teléfono;
- composición específica por formato; no resolver feed, historia y portadas mediante un simple recorte del mismo diseño;
- comparación contra `COMMON_ERRORS.md`, casos negativos relevantes y al menos una referencia compatible;
- cuando exista una referencia positiva expresamente aprobada por Miguel, usarla antes que una histórica no validada.

Si la foto disponible no permite una pieza de calidad suficiente, NO forzar un flyer final. Devolver `BLOQUEADO_POR_FOTO / REQUIERE_MEJOR_HERO` o proponer una composición distinta.

No producir automáticamente una variante llamada `premium` sin demostrar una dirección visual diferente y más sólida. La palabra `premium` no es una familia visual ni justifica una composición.

## Comportamiento por formato gráfico

### Feed 4:5

Diseñar específicamente para 4:5: HERO dominante, título compacto, 2–4 datos, CTA secundario y aire visual.

### Historia 9:16

Diseñar verticalmente desde origen y respetar zonas de UI; no recortar automáticamente el feed.

### Portada Facebook Reel

Diseñar para miniatura: vehículo + modelo/configuración, texto breve y zona segura.

### Portada TikTok

Adaptar a cuadrícula/perfil y overlays; no clonar automáticamente la portada Reel.

### Secuencia de historias

Cada historia debe tener función propia. Estructura orientativa:

`IDENTIDAD/HERO → DIFERENCIADOR → CTA`

## Gate audiovisual obligatorio para Facebook Reel y TikTok

Antes de declarar un Reel o TikTok `PRODUCIDO`, registrar y comprobar explícitamente:

- `FAMILIA_EDITORIAL` elegida de `FORMAT_FAMILIES.md`;
- objetivo de la pieza: descubrimiento, retención, interés, mensaje, visita u otro objetivo real;
- `HOOK_0_3S`: qué verá/entenderá la persona en los primeros 0–3 segundos;
- secuencia visual compatible con la familia elegida;
- duración objetivo de la familia o justificación si se sale del rango de prueba;
- una sola idea principal en los primeros segundos; no abrir con una ficha técnica;
- CTA principal único y coherente con el objetivo; consultar `HOOKS_AND_CTA.md`;
- comparación con `VIDEO_AUDIT_INDEX.md`: revisar al menos un caso histórico de familia similar cuando exista y evitar repetir sus errores conocidos;
- no usar como regla universal un video histórico de alto rendimiento; distinguir `OBSERVACION`, `HIPOTESIS`, `PATRON_REPETIDO` y `APRENDIZAJE_VALIDADO`;
- no reutilizar precio, teléfono, documentación, millaje, versión ni especificaciones desde overlays históricos;
- evitar errores históricos ya identificados: saludo largo antes de la promesa, cierre largo de logo/flyer, demasiados datos, video de otra unidad, CTA múltiple, información obsoleta o una unidad que tarde en entenderse;
- si se prueba una variable creativa, identificarla y no cambiar innecesariamente hook + duración + CTA + audio al mismo tiempo;
- TikTok y Facebook Reel deben ser adaptaciones por red, no clones automáticos.

Si el material seleccionado no permite construir con claridad la familia/hook elegidos, NO forzar el video final. Devolver `BLOQUEADO_POR_MATERIAL / REQUIERE_MEJOR_SELECCION_O_CAPTURA` y especificar las tomas faltantes.

## Producción por etapas

A. verificar fotos/videos seleccionados;
B. leer dirección visual activa, estatus de referencias y aprendizaje aplicable;
C. elegir familia editorial/visual y justificarla;
D. producir Facebook Reel y TikTok adaptados por red;
E. producir flyer feed, historia, portadas y secuencia de historias con composición propia por formato;
F. redactar copies específicos;
G. subir derivados, verificar y actualizar `PUENTE.md`.

No usar VIN, odómetro, precio no autorizado ni datos pendientes. No alterar físicamente el vehículo.

No publicar automáticamente.

Estado máximo sin confirmación de Miguel:

`PRODUCIDO / SUBIDO_A_DRIVE / PENDIENTE_APROBACION_MIGUEL`.

Si Miguel rechaza una pieza, registrar `RECHAZADO_POR_MIGUEL / NO_PUBLICAR / REQUIERE_REDISENO`, conservarla como trazabilidad/caso negativo y usar `prompts/REVISAR_DISENO_APRENDIZAJE.md` para persistir el feedback. Nunca convertirla en referencia positiva.
