/* Selecao de imagens na biblioteca de media do WordPress. */
jQuery(function ($) {
  $(document).on("click", "[data-vinilart-image-pick]", function (event) {
    event.preventDefault();

    var wrap = $(this).closest("[data-vinilart-image]");
    var frame = wp.media({
      title: "Escolher imagem",
      button: { text: "Usar esta imagem" },
      multiple: false,
    });

    frame.on("select", function () {
      var image = frame.state().get("selection").first().toJSON();
      var url = image.sizes && image.sizes.medium ? image.sizes.medium.url : image.url;
      wrap.find("[data-vinilart-image-value]").val(image.id);
      wrap.find("[data-vinilart-image-preview]").attr("src", url).show();
    });

    frame.open();
  });

  $(document).on("click", "[data-vinilart-image-clear]", function (event) {
    event.preventDefault();
    var wrap = $(this).closest("[data-vinilart-image]");
    wrap.find("[data-vinilart-image-value]").val(0);
    wrap.find("[data-vinilart-image-preview]").attr("src", $(this).data("default") || "");
  });
});
