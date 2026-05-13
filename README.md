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

```plaintext id="u7m2x4"
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

```plaintext id="m8p4x2"
/datos
```

y únicamente los archivos con terminación:

```plaintext id="p5n1x7"
.json
```

---

# No modificar

Se recomienda NO modificar ni eliminar:

```plaintext id="r8m2x4"
/css
/js
/img
/docs
```

Tampoco modificar archivos como:

```plaintext id="v2m7p4"
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

---

# Edición del contenido

La mayoría del contenido del sitio puede modificarse desde los archivos JSON ubicados dentro de:

```plaintext id="u4x8n1"
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

```json id="k7m2x4"
{
  "titulo": "Nuevo Boletín",
  "imagen": "img/boletin.jpg"
}
```

---

# Cómo editar información

1. Entrar a la carpeta:

```plaintext id="m4p8x1"
/datos
```

2. Abrir el archivo JSON correspondiente.

Ejemplo:

```plaintext id="r7n2k5"
boletines.json
sicavi.json
conducta.json
```

3. Modificar únicamente la información entre comillas.

Ejemplo:

```json id="u2n8p4"
{
  "titulo": "Nuevo boletín"
}
```

4. Guardar cambios.

---

# Imágenes

Todas las imágenes utilizadas en el sitio deben guardarse dentro de:

```plaintext id="m9x4q2"
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

```plaintext id="v5m1x7"
boletin1.jpg
curso_virtual.png
servicio-social.jpeg
```

Ejemplos incorrectos:

```plaintext id="u8m2x4"
Imagen Boletín Final.jpg
CURSO#.png
foto áerea.jpg
```

---

# Cómo subir imágenes

Todas las imágenes deben colocarse dentro de:

```plaintext id="p7m2x4"
/img
```

Después de subir la imagen, actualizar el nombre dentro del archivo JSON correspondiente.

Ejemplo:

```json id="m8p2x4"
"imagen": "img/boletin1.jpg"
```

---

# Cómo actualizar la página web

Después de realizar cambios en archivos JSON, imágenes o PDFs:

1. Guardar cambios en Visual Studio Code.
2. Realizar commit en GitHub Desktop.
3. Realizar push para subir cambios a GitHub.

Los cambios se reflejarán automáticamente en la página web después de unos minutos.

---

# Qué hacer si algo no aparece

Si una imagen, PDF o información no aparece correctamente:

* Revisar que el nombre del archivo sea correcto.
* Revisar mayúsculas y minúsculas.
* Verificar que el archivo se encuentre en la carpeta correcta.
* Revisar que la extensión coincida:

  * `.jpg`
  * `.png`
  * `.pdf`
* Actualizar la página o borrar caché del navegador.

---

# Cómo agregar contenido nuevo

## Nuevo PDF

* Subir archivo a `/docs`
* Actualizar enlace en el JSON correspondiente

## Nueva imagen

* Colocar imagen en `/img`
* Actualizar nombre dentro del JSON

---

# Copias de seguridad

Se recomienda realizar respaldos del proyecto antes de modificar información importante.

También se recomienda:

* no eliminar archivos originales
* no cambiar nombres de carpetas
* conservar una copia funcional del proyecto

---

# Publicación

El sitio se encuentra publicado mediante GitHub Pages.

Los cambios realizados en GitHub se reflejan automáticamente en la página web.
