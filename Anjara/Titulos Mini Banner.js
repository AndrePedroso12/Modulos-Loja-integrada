$(document).ready(function () {
  $(window).bind("load", function () {
    $(".banner-vitrine-mini img").wrap(
      "<div class='overlay-minibanner'></div>"
    );
    $(".banner-vitrine-mini img").each(function (index) {
      switch (index) {
        case 0:
          $(this).after(
            "<p>·Lojas <br> ·Sala de Reunião  <br>·Sala de Estar</p>"
          );
          break;
        case 1:
          $(this).after("<p>·Home Office <br> ·Estudos <br> ·Trabalho</p>");
          break;
        case 2:
          $(this).after(
            "<p>·Terapias<br> ·Melhora do Sono <br> ·Sala de leitura</p>"
          );
          break;
      }
    });
  });
});
