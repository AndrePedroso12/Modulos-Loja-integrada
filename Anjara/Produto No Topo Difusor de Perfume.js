// Difusor de Perfume
$(".produto-198643156 .slick-slide.slick-current").on({
  click: function () {
    $(".conteiner-imagem").css(
      "background",
      "url(https://cdn.awsli.com.br/2495/2495925/arquivos/Difusor_perfume.png) no-repeat center"
    );
    $(".conteiner-imagem").css("background-size", "contain");
    $("#imagemProduto").css("opacity", "0");
    $(".pagina-produto .zm-viewer").css("opacity", "0");
  },
});

$(".produto-198643156 #imagemProduto").attr(
  "src",
  "https://cdn.awsli.com.br/2495/2495925/arquivos/Difusor_perfume.png"
);

$(".atributo-item").on({
  click: function () {
    $(".acoes-produto").removeClass("hide");
  },
});
