$(
  "#carouselImagem > ul > div > div > li.slick-slide.slick-active.active > a"
).attr("href", "#");
$(".conteiner-imagem").css("background", "none");

$(".conteiner-imagem").css("background", "none");

// Home Spray
$(".produto-208408281 .slick-slide.slick-current").on({
  click: function () {
    $(".conteiner-imagem").css(
      "background",
      "url(https://cdn.awsli.com.br/2495/2495925/arquivos/home-spray-pg-produto.png) no-repeat center"
    );
    $(".conteiner-imagem").css("background-size", "contain");
    $("#imagemProduto").css("opacity", "0");
    $(".pagina-produto .zm-viewer").css("opacity", "0");
  },
});

$(".produto-208408281 #imagemProduto").attr(
  "src",
  "https://cdn.awsli.com.br/2495/2495925/arquivos/home-spray-pg-produto.png"
);

// Kit Anjara
$(".produto-208404441 .slick-slide.slick-current").on({
  click: function () {
    $(".conteiner-imagem").css(
      "background",
      "url(https://cdn.awsli.com.br/2495/2495925/arquivos/Kit_anjara.png) no-repeat center"
    );
    $(".conteiner-imagem").css("background-size", "contain");
    $("#imagemProduto").css("opacity", "0");
    $(".pagina-produto .zm-viewer").css("opacity", "0");
  },
});

$(".produto-208404441 #imagemProduto").attr(
  "src",
  "https://cdn.awsli.com.br/2495/2495925/arquivos/Kit_anjara.png"
);

// Desativar Produto Topo
$("#carouselImagem ul li:not(:first-child)").on({
  click: function () {
    $(".conteiner-imagem").css("background", "none");
    $("#imagemProduto").css("opacity", "1");
    $(".pagina-produto .zm-viewer").css("opacity", "1");
  },
});

$(".atributo-item").on({
  click: function () {
    $(".acoes-produto").removeClass("hide");
  },
});
