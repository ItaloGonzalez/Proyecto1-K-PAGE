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
