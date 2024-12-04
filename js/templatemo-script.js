$(function() {
    $(".navbar-toggler").on("click", function(e) {
        $(".tm-header").toggleClass("show");
        e.stopPropagation();
      });

      $("html").click(function(e) {
        var header = document.getElementById("tm-header");

        if (!header.contains(e.target)) {
          $(".tm-header").removeClass("show");
        }
      });

      $("#tm-nav .nav-link").click(function(e) {
        $(".tm-header").removeClass("show");
      });
});
document.getElementById('scrolltopfooter').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Cambiar el texto del botón
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Claro';
    } else {
        this.textContent = 'Modo Oscuro';
    }
});
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
  const query = document.getElementById('searchInput').value.toLowerCase(); // Obtiene el valor de búsqueda
  const posts = document.querySelectorAll('.tm-post'); // Selecciona todos los artículos

  posts.forEach(post => {
      const title = post.querySelector('.tm-post-title').textContent.toLowerCase(); // Obtiene el texto del título
      const content = post.querySelector('p').textContent.toLowerCase(); // Obtiene el texto del párrafo

      // Verifica si el título o el contenido contienen la consulta
      if (title.includes(query) || content.includes(query)) {
          post.style.display = ''; // Muestra el post si coincide
      } else {
          post.style.display = 'none'; // Oculta el post si no coincide
      }
  });
});
window.onload = function() {
  var articles = document.querySelectorAll('.tm-post');
  var maxHeight = 0;

  // Encuentra la altura máxima
  articles.forEach(function(article) {
      if (article.offsetHeight > maxHeight) {
          maxHeight = article.offsetHeight;
      }
  });

  // Aplica la altura máxima a todos los artículos
  articles.forEach(function(article) {
      article.style.height = maxHeight + 'px';
  });
}