/* Comportamentos do site VinilArt em JS puro (equivalente ao original em React). */
(function () {
  "use strict";

  /* ---------------- Reveal ao entrar no ecra ---------------- */
  function initReveal() {
    var items = document.querySelectorAll(".v-reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 3) * 60 + "ms";
      io.observe(el);
    });
  }

  /* ---------------- Header: estado ao fazer scroll ---------------- */
  function initHeader() {
    var header = document.querySelector("[data-vinilart-header]");
    if (!header) return;

    var bar = header.querySelector("[data-vinilart-bar]");
    var toggle = header.querySelector("[data-vinilart-menu-toggle]");
    var panel = header.querySelector("[data-vinilart-menu-panel]");
    var iconOpen = header.querySelector("[data-vinilart-icon-open]");
    var iconClose = header.querySelector("[data-vinilart-icon-close]");

    var scrolledClasses = [
      "border-white/[0.06]",
      "bg-ink/94",
      "shadow-[0_18px_50px_rgba(0,0,0,0.24)]",
      "backdrop-blur-xl",
    ];

    function paint() {
      var active = window.scrollY > 16 || header.classList.contains("is-open");
      if (active) {
        header.classList.remove("border-transparent", "bg-transparent");
        header.classList.add.apply(header.classList, scrolledClasses);
        if (bar) {
          bar.classList.remove("opacity-55");
          bar.classList.add("opacity-100");
        }
      } else {
        header.classList.remove.apply(header.classList, scrolledClasses);
        header.classList.add("border-transparent", "bg-transparent");
        if (bar) {
          bar.classList.remove("opacity-100");
          bar.classList.add("opacity-55");
        }
      }
    }

    paint();
    window.addEventListener("scroll", paint, { passive: true });

    if (toggle && panel) {
      toggle.addEventListener("click", function () {
        var open = !header.classList.contains("is-open");
        header.classList.toggle("is-open", open);
        panel.hidden = !open;
        document.body.classList.toggle("v-lock", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
        if (iconOpen) iconOpen.hidden = open;
        if (iconClose) iconClose.hidden = !open;
        paint();
      });

      panel.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
          toggle.click();
        }
      });
    }
  }

  /* ---------------- Portefolio: filtros ---------------- */
  function initFilters() {
    var wrap = document.querySelector("[data-vinilart-portfolio]");
    if (!wrap) return;

    var buttons = wrap.querySelectorAll("[data-vinilart-filter]");
    var items = wrap.querySelectorAll("[data-vinilart-item]");

    var activeOn = ["border-foreground/18", "bg-foreground", "text-ink"];
    var activeOff = [
      "border-white/[0.08]",
      "text-foreground/50",
      "hover:border-white/25",
      "hover:text-foreground",
    ];

    function setActive(button) {
      buttons.forEach(function (b) {
        var on = b === button;
        b.classList.remove.apply(b.classList, on ? activeOff : activeOn);
        b.classList.add.apply(b.classList, on ? activeOn : activeOff);
        var underline = b.querySelector("[data-vinilart-filter-bar]");
        if (underline) underline.hidden = !on;
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var value = button.getAttribute("data-vinilart-filter");
        setActive(button);
        items.forEach(function (item) {
          var match = value === "*" || item.getAttribute("data-category") === value;
          item.hidden = !match;
        });
      });
    });
  }

  /* ---------------- Portefolio: lightbox ---------------- */
  function initLightbox() {
    var box = document.querySelector("[data-vinilart-lightbox]");
    if (!box) return;

    var image = box.querySelector("[data-vinilart-lightbox-image]");
    var category = box.querySelector("[data-vinilart-lightbox-category]");
    var title = box.querySelector("[data-vinilart-lightbox-title]");
    var text = box.querySelector("[data-vinilart-lightbox-text]");

    function close() {
      box.hidden = true;
      document.body.classList.remove("v-lock");
    }

    function open(button) {
      if (image) {
        image.src = button.getAttribute("data-image") || "";
        image.alt = button.getAttribute("data-title") || "";
      }
      if (category) category.textContent = button.getAttribute("data-category") || "";
      if (title) title.textContent = button.getAttribute("data-title") || "";
      if (text) {
        var sub = button.getAttribute("data-sublabel") || "";
        text.textContent = sub;
        text.hidden = sub === "";
      }
      box.hidden = false;
      document.body.classList.add("v-lock");
    }

    document.querySelectorAll("[data-vinilart-open]").forEach(function (button) {
      button.addEventListener("click", function () {
        open(button);
      });
    });

    box.addEventListener("click", function (event) {
      if (event.target === box || event.target.closest("[data-vinilart-lightbox-close]")) {
        close();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !box.hidden) close();
    });
  }

  /* ---------------- Ancoras suaves ---------------- */
  function initAnchors() {
    document.addEventListener("click", function (event) {
      var link = event.target.closest('a[href*="#"]');
      if (!link) return;
      var url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      var target = document.querySelector(url.hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", url.hash);
    });
  }

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    initReveal();
    initHeader();
    initFilters();
    initLightbox();
    initAnchors();
  });
})();
