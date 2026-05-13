# Plataforma de Capacitación IMSS

Sitio web institucional desarrollado para mostrar información relacionada con capacitación, cursos, boletines y plataformas institucionales.

---

# Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* JSON
* GitHub Pages

---

# Estructura del proyecto

```plaintext id="u8m2x4"
/css      → estilos del sitio
/js       → scripts y menú
/datos    → archivos JSON editables
/docs     → archivos PDF
/img      → imágenes del sitio
```

---

# Páginas incluidas

* Inicio
* DPSP
* Curso Virtual
* SICAVI
* Integridad
* Código de Conducta
* ECCO
* SED - Evaluación
* Instructores
* Catálogo de Cursos
* Servicio Social
* Boletines

---
# Advertencia importante

Para evitar errores en el funcionamiento del sitio, únicamente deben modificarse los archivos ubicados dentro de la carpeta:

```plaintext id="u7m2x4"
/datos
```

y únicamente los archivos con terminación:

```plaintext id="m8p4x2"
.json
```

---

# No modificar

Se recomienda NO modificar ni eliminar:

```plaintext id="p5n1x7"
/css
/js
/img
/docs
```

Tampoco modificar archivos como:

```plaintext id="r8m2x4"
index.html
estilos.css
menu.js
```

ya que estos archivos controlan:

* diseño del sitio
* funcionamiento del menú
* estructura de páginas
* carga de información

Modificar estos archivos incorrectamente puede provocar errores visuales o fallos en el sitio web.


# Edición del contenido

La mayoría del contenido del sitio puede modificarse desde los archivos JSON ubicados dentro de:

```plaintext id="m4p8x1"
/datos
```

Los archivos JSON funcionan como una forma sencilla de cambiar información del sitio sin modificar el código principal.

Desde estos archivos es posible actualizar:

* textos
* imágenes
* enlaces PDF
* boletines
* información de cursos

Ejemplo:

```json id="r7n2k5"
{
  "titulo": "Nuevo Boletín",
  "imagen": "img/boletin.jpg"
}
```

---

# Imágenes

Todas las imágenes utilizadas en el sitio deben guardarse dentro de:

```plaintext id="v5m1x7"
/img
```

Formatos recomendados:

* `.jpg`
* `.png`
* `.jpeg`

Recomendaciones:

* Usar nombres simples
* Evitar espacios
* Evitar acentos
* Mantener imágenes optimizadas para web

Ejemplos correctos:

```plaintext id="u2n8p4"
boletin1.jpg
curso_virtual.png
servicio-social.jpeg
```

Ejemplos incorrectos:

```plaintext id="m9x4q2"
Imagen Boletín Final.jpg
CURSO#.png
foto áerea.jpg
```

---

# Recomendaciones importantes

* No borrar llaves `{ }`
* No borrar comas `,`
* No cambiar nombres de carpetas
* Mantener nombres simples en imágenes y PDFs

---

# Publicación

El sitio se encuentra publicado mediante GitHub Pages.

Los cambios realizados en GitHub se reflejan automáticamente en la página web.
