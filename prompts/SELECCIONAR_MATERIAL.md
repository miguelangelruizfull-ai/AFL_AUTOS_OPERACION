# Prompt base — Revisar y seleccionar material nuevo

Usar **después** de que Miguel termine la sesión y suba las fotos/videos originales.

## Antes de actuar

1. Leer completo `PUENTE.md` vigente.
2. Leer `PLAN_CAPTURA.md` vigente si existe.
3. Leer `AFL_AUTOS_CONTENT_SYSTEM/START_HERE.md` y `STATUS_RULES.md`.
4. Para selección de fotos destinada a piezas gráficas consultar:
   - `formats/FLYER_ENGINE.md`;
   - `formats/FLYER_FAMILIES.md`;
   - `library/flyer_audit/COMMON_ERRORS.md`;
   - `library/flyer_audit/POSITIVE_REFERENCES.md`.
5. Para selección de video destinada a Facebook Reel/TikTok consultar:
   - `networks/tiktok/EDITORIAL_ENGINE.md`;
   - `networks/tiktok/FORMAT_FAMILIES.md`;
   - `networks/tiktok/HOOKS_AND_CTA.md`;
   - `networks/tiktok/VIDEO_AUDIT_INDEX.md`.
6. Revisar TODO el material nuevo de las carpetas de originales/equivalentes registradas.
7. No volver a pedir tomas antes de comprobar qué sí se capturó.
8. No borrar ni mover originales.

La auditoría histórica ayuda a seleccionar; no reemplaza la verdad técnica del `PUENTE.md`.

## Auditoría del material

Inventariar:

- número de fotos;
- número de videos;
- duración aproximada total;
- orientación y resolución cuando estén disponibles;
- archivos repetidos;
- defectuosos;
- sensibles;
- material de otra unidad;
- cobertura real frente al `PLAN_CAPTURA.md`;
- familias visuales/editoriales que el material realmente puede sostener.

Clasificar cada archivo relevante como:

- `CANDIDATO_PRINCIPAL`
- `APOYO`
- `EVIDENCIA_TECNICA`
- `REDUNDANTE`
- `DEBIL_NO_USAR`
- `SENSIBLE_SOLO_INTERNO`

## Resolver pendientes técnicos

Si las nuevas tomas aportan evidencia suficiente para versión, tracción, equipamiento u otros campos PENDIENTES, actualizar `PUENTE.md` con la fuente concreta. Si no es suficiente, mantener PENDIENTE.

Nunca usar apariencia aislada, filename, prompt, flyer o video histórico como confirmación técnica.

## Carpetas de selección

Para unidades nuevas V2, crear si no existen:

- `03_FOTOS_SELECCIONADAS`
- `04_VIDEOS_SELECCIONADOS`

Si el vehículo ya tiene equivalentes históricos, reutilizarlos y documentarlo. No duplicar solo por cambiar nombres.

**Copiar**, no mover, los archivos seleccionados.

## Selección fotográfica orientada a pieza

Elegir únicamente las mejores fotos útiles para venta, normalmente **8–15** según calidad y cobertura.

La selección debe identificar explícitamente:

- `HERO_FLYER` — mejor foto para feed/portada si existe;
- `HERO_HISTORIA` — composición vertical útil si existe;
- exterior 3/4;
- perfil;
- trasera;
- interior;
- motor;
- detalle distintivo;
- rin/neumático;
- área de carga/cajuela según aplique.

Para `HERO_FLYER`, evaluar contra el Motor Visual:

- vehículo dominante;
- fondo limpio/controlable;
- espacio para texto;
- recorte posible sin deformar ni ocultar la unidad;
- ausencia de elementos ajenos que compitan;
- lectura fuerte en pantalla pequeña.

Si ninguna foto alcanza el estándar, registrar:

`BLOQUEADO_POR_FOTO / REQUIERE_MEJOR_HERO`

y señalar la toma concreta que falta. No elegir una foto débil solo para cumplir.

Excluir VIN, odómetro, documentos y cualquier dato sensible.

## Selección de video orientada a familia editorial

No elegir clips solo porque “se ven bien”. Primero identificar qué familias editoriales del Motor TikTok/Reel puede sostener el material real.

Para cada familia viable registrar:

- `FAMILIA_EDITORIAL`;
- `HOOK_0_3S` disponible;
- clips candidatos para apertura;
- secuencia principal;
- interior/detalle/motor/función cuando aplique;
- cierre visual;
- audio útil disponible;
- tomas faltantes.

Priorizar clips que permitan:

- entender rápido la unidad o función;
- construir el hook elegido;
- mostrar una secuencia coherente;
- evitar cierres largos de logo/flyer;
- evitar ficha técnica visual innecesaria;
- adaptar TikTok y Facebook Reel sin hacer clones automáticos.

Si no existe material suficiente para una familia/hook razonable, registrar:

`BLOQUEADO_POR_MATERIAL / REQUIERE_MEJOR_SELECCION_O_CAPTURA`

y especificar exactamente qué clip falta.

No producir Reel/TikTok todavía.

## Comparación histórica obligatoria

Antes de cerrar la selección:

- para fotos: comparar el HERO contra al menos una referencia positiva compatible y revisar `COMMON_ERRORS.md`;
- para video: revisar al menos un caso del `VIDEO_AUDIT_INDEX.md` de familia similar cuando exista;
- registrar qué error histórico se está evitando;
- no copiar métricas, datos o overlays históricos como verdad actual.

## Evaluación de suficiencia

Responder por separado:

- ¿alcanza para Facebook post?
- ¿alcanza para flyer feed?
- ¿alcanza para historia/portada?
- ¿alcanza para Facebook Reel?
- ¿alcanza para TikTok?
- ¿qué familia editorial soporta cada video posible?
- ¿qué hook real puede construirse con el material actual?

Si falta algo, indicar exactamente qué toma adicional tendría mayor impacto. No mandar a repetir toda la sesión.

## GitHub

Actualizar `PUENTE.md` con:

- conteo final;
- carpetas de selección;
- archivos principales;
- `HERO_FLYER` / `HERO_HISTORIA` cuando existan;
- familias editoriales viables;
- clips de hook disponibles;
- pendientes resueltos/no resueltos;
- bloqueos de calidad;
- siguiente paso.

## Estado final

Si el material es suficiente:

`MATERIAL_AUDITADO / SELECCION_CREADA / PENDIENTE_RETOQUE`

Si falta una toma crítica, conservar el estado real y registrar el bloqueo correspondiente.

El siguiente módulo normal es:

`LAVAR / RETOCAR FOTOS`

No retocar ni producir redes dentro de esta etapa.