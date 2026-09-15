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

/* Abrir/fechar secoes e procurar campos */
(function () {
  document.addEventListener('click', function (event) {
    var openAll = event.target.closest('[data-vinilart-open-all]');
    var closeAll = event.target.closest('[data-vinilart-close-all]');
    if (!openAll && !closeAll) { return; }
    event.preventDefault();
    document.querySelectorAll('[data-vinilart-card]').forEach(function (card) {
      card.open = !!openAll;
    });
  });

  var search = document.querySelector('[data-vinilart-search]');
  if (!search) { return; }
  search.addEventListener('input', function () {
    var term = search.value.trim().toLowerCase();
    document.querySelectorAll('[data-vinilart-card]').forEach(function (card) {
      var matches = 0;
      card.querySelectorAll('[data-vinilart-field]').forEach(function (row) {
        var hit = !term || (row.getAttribute('data-search') || '').indexOf(term) !== -1;
        row.hidden = !hit;
        if (hit) { matches++; }
      });
      if (term) { card.open = matches > 0; card.hidden = matches === 0; }
      else { card.hidden = false; }
    });
  });
})();
