# APV V1.1 — Validación Mobile Patch

Fecha: 2026-09-22  
Estado: `APV_V1_1_MOBILE_PATCH_APLICADO / MOBILE_NAV_PASS / TOUCH_PASS / VIN_PRIVACY_PASS / LOCAL_DATA_CONTROL_PASS / DESKTOP_REGRESSION_PASS`

## Alcance

Patch acotado sobre APV V1. No sustituye el Home vigente, no redefine arquitectura y no añade integraciones autenticadas.

Regla vigente:

`APV = ORQUESTADOR != FUENTE_DE_VERDAD`

## Cambios validados

- navegación móvil con 4 accesos principales + `MÁS`;
- acceso reversible a los 11 módulos;
- módulo/pestaña activa mantenida visible con desplazamiento suave cuando aplica;
- touch targets móviles de 46–48 px de altura mínima;
- soporte de `env(safe-area-inset-bottom)`;
- VIN privado enmascarado por defecto, con `MOSTRAR / OCULTAR` y sin persistir el estado visible;
- indicador `DATOS PRIVADOS LOCALES`;
- acción `LIMPIAR DATOS LOCALES` con confirmación explícita y borrado limitado a claves APV;
- leads nuevos con resumen operativo breve en lugar del mensaje completo;
- aviso de compatibilidad para registros locales antiguos que pudieran conservar mensaje completo;
- material seleccionado marcado `PREVISUALIZACIÓN — NO SUBIDO`;
- input VIN móvil con 17 caracteres, autocapitalización, spellcheck desactivado y feedback de longitud/validez;
- placeholder de búsqueda móvil simplificado;
- Home vigente y navegación desktop conservados.

## Validación funcional

Se ejecutó un arnés DOM contra el contenido de la rama de patch y el índice público vigente, usando una unidad autorizada resuelta desde su fuente vigente sin modificarla ni registrar datos privados en este documento.

Recorridos PASS:

1. Inicio.
2. Buscar.
3. Inventario.
4. Abrir ficha.
5. Navegación inferior.
6. Menú `MÁS`.
7. Ficha privada con VIN oculto.
8. Mostrar/ocultar VIN.
9. Material.
10. Respuestas.
11. Seguimiento.
12. Producción.
13. Herramientas.
14. Limpieza de datos locales.
15. Retorno APV/ROOT.
16. Desktop.

## Viewports móviles equivalentes

El breakpoint móvil vigente es `max-width: 760px`. Se verificó la geometría estructural para:

- 360 px → celda inferior 69.6 px; menú MÁS 158 px por celda; altura táctil 48 px.
- 390 px → celda inferior 75.6 px; menú MÁS 173 px por celda; altura táctil 48 px.
- 430 px → celda inferior 83.6 px; menú MÁS 193 px por celda; altura táctil 48 px.

Resultado: sin competencia horizontal entre 11 accesos y con objetivos táctiles por encima del mínimo solicitado.

## Privacidad y datos locales

La limpieza local:

- requiere confirmación;
- elimina solo las claves APV conocidas;
- no usa `localStorage.clear()`;
- conserva claves ajenas a APV;
- no toca Drive, GitHub ni fuentes dueñas;
- recarga APV a estado limpio.

Los leads nuevos persisten únicamente campos operativos locales: identificador, vehículo, canal, resumen breve, etapa, siguiente acción, fechas y nota corta. `localStorage` sigue siendo caché auxiliar, no CRM.

## Diff revisado

El patch modifica únicamente:

`apv/index.html`

La evidencia de validación se registra en este archivo. No se modificaron expedientes de vehículo, Drive, comercial, leads reales ni el Home vigente.
