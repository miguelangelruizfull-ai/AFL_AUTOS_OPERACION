# PRIVACIDAD_HOME_PUBLICO

## Regla

La interfaz pública debe mostrar únicamente la información mínima necesaria para operar.

No debe incluir ni enlazar públicamente:

- rutas internas;
- repositorios fuente;
- hashes o identificadores técnicos innecesarios;
- almacenamiento privado;
- credenciales o secretos;
- datos personales de prospectos;
- conversaciones RAW;
- detalles internos de arquitectura que no sean necesarios para el usuario final.

El índice consumido por la interfaz debe ser sanitizado y contener solo navegación mínima.

Los datos privados se resuelven fuera de la interfaz pública mediante entornos autorizados.

`localStorage` no es una base de datos definitiva. Solo puede utilizarse como caché temporal para datos no sensibles o sanitizados.

Cualquier cambio que aumente la exposición pública requiere autorización explícita del propietario antes de implementarse.
