function dark() {
    document.body.style.backgroundColor = "0E0C0D";
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("TITULO").style.color = "white";
    document.getElementById("messi").style.color = "white";
    document.getElementById("info").style.color = "white";
    document.getElementById("info2").style.color = "white";
    document.getElementById("lool").style.color = "white";
    document.getElementById("locura").style.color = "white";
    document.getElementById("video").style.color = "white";
    document.getElementById("audio").style.color = "white";
    document.getElementById("ul1").style.color = "white";
    document.getElementById("ul2").style.color = "white";
    document.getElementById("ul3").style.color = "white";
    document.getElementById("ul4").style.color = "white";
    document.getElementById("ul5").style.color = "white";
    document.getElementById("ul6").style.color = "white";
    document.getElementById("ul7").style.color = "white";
    document.getElementById("paso1").style.color = "white";
    document.getElementById("paso2").style.color = "white";
    document.getElementById("paso3").style.color = "white";
    document.getElementById("paso4").style.color = "white";
    document.getElementById("paso5").style.color = "white";
    document.getElementById("paso6").style.color = "white";
}
function información() {
  alert("Diseño por:González Italo - Correo Electrónico: italogicorv@gmail.com");
}
document.getElementById('scrollfooter').addEventListener('click', function() {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
});
document.getElementById('scrollreceta').addEventListener('click', function() {
    const main = document.getElementById('main');
    main.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
});
document.getElementById('scrollingredientes').addEventListener('click', function() {
    const lool = document.getElementById('lool');
    lool.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
});
document.getElementById('scrollprocedimientos').addEventListener('click', function() {
    const locura = document.getElementById('locura');
    locura.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
});
document.getElementById('scrollsection').addEventListener('click', function() {
    const section = document.getElementById('section');
    section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
});
document.getElementById('scrolltopfooter').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
