document.addEventListener("DOMContentLoaded", () => {

  const contenedor = document.getElementById("menu-container");

  contenedor.innerHTML = `
  
  <div class="menu-toggle" onclick="toggleMenu()">☰</div>

  <nav class="menu" id="menu">
    <a href="index1.html">Inicio</a>
    <a href="afrontamiento.html">Afrontamiento Emocional</a>
    <a href="dpsp1.html">DPSP</a>
    <a href="cursoVirtual.html">Curso Virtual</a>
    <a href="sicavi.html">SICAVI</a>
    <a href="integridad.html">Integridad</a>
    <a href="conducta.html">Código de Conducta</a>
    <a href="ecco.html">ECCO</a>
    <a href="sed.html">SED-Evaluación</a>
    <a href="instructores.html">Instructores</a>

    <div class="dropdown">
      <button class="dropbtn" onclick="toggleDropdown()">Más ▼</button>
      <div class="dropdown-content" id="dropdown">
        <a href="catalogo.html">Catálogo de cursos</a>
        <a href="servicio-social.html">Servicio Social</a>
        <a href="boletines.html">Boletines</a>
      </div>
    </div>
  </nav>
  `;

});

// FUNCIONES
function toggleMenu() {
  document.getElementById("menu").classList.toggle("activo");
}

function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("mostrar");
}