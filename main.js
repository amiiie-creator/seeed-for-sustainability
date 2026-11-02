(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header and mobile navigation */
  var header = document.getElementById("site-head");
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("nav-toggle");

  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  if (nav && navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.addEventListener("click", function (event) {
      if (!event.target.closest("a")) return;
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
    });
  }

  /* Navigation state */
  var navLinks = Array.from(document.querySelectorAll(".nav__link"));
  var navByTarget = {};
  navLinks.forEach(function (link) { navByTarget[link.getAttribute("href")] = link; });

  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var activeLink = navByTarget["#" + entry.target.id];
        if (!activeLink) return;
        navLinks.forEach(function (link) { link.classList.remove("is-active"); });
        activeLink.classList.add("is-active");
      });
    }, { rootMargin: "-38% 0px -58% 0px", threshold: 0 });

    document.querySelectorAll("main section[id]").forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* Project-area carousel: gentle auto-advance, pause, keyboard, and native swipe */
  var projectViewport = document.querySelector("[data-project-carousel]");
  if (projectViewport) {
    var projectCards = Array.from(projectViewport.querySelectorAll(".project-card"));
    var projectPrev = document.querySelector("[data-project-prev]");
    var projectNext = document.querySelector("[data-project-next]");
    var projectToggle = document.querySelector("[data-project-toggle]");
    var projectStatus = document.querySelector("[data-project-status]");
    var projectIndex = 0;
    var projectPaused = reducedMotion;
    var projectTimer = null;

    function setProjectToggle() {
      if (!projectToggle) return;
      projectToggle.textContent = projectPaused ? "▶" : "Ⅱ";
      projectToggle.setAttribute("aria-pressed", String(projectPaused));
      projectToggle.setAttribute("aria-label", projectPaused ? "Resume project carousel" : "Pause project carousel");
      projectToggle.title = projectPaused ? "Resume automatic movement" : "Pause automatic movement";
    }

    function showProject(index, announce) {
      projectIndex = (index + projectCards.length) % projectCards.length;
      var card = projectCards[projectIndex];
      projectViewport.scrollTo({ left: card.offsetLeft, behavior: reducedMotion ? "auto" : "smooth" });
      if (announce && projectStatus) {
        projectStatus.textContent = "Showing project area " + (projectIndex + 1) + " of " + projectCards.length + ": " + card.querySelector("strong").textContent;
      }
    }

    function stopProjectTimer() {
      window.clearInterval(projectTimer);
      projectTimer = null;
    }

    function startProjectTimer() {
      stopProjectTimer();
      if (projectPaused || reducedMotion) return;
      projectTimer = window.setInterval(function () {
        showProject(projectIndex + 1, false);
      }, 4800);
    }

    if (projectPrev) projectPrev.addEventListener("click", function () { showProject(projectIndex - 1, true); startProjectTimer(); });
    if (projectNext) projectNext.addEventListener("click", function () { showProject(projectIndex + 1, true); startProjectTimer(); });
    if (projectToggle) projectToggle.addEventListener("click", function () {
      projectPaused = !projectPaused;
      setProjectToggle();
      startProjectTimer();
    });

    projectViewport.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") { event.preventDefault(); showProject(projectIndex - 1, true); }
      if (event.key === "ArrowRight") { event.preventDefault(); showProject(projectIndex + 1, true); }
    });
    projectViewport.addEventListener("pointerenter", stopProjectTimer);
    projectViewport.addEventListener("pointerleave", startProjectTimer);
    projectViewport.addEventListener("focusin", stopProjectTimer);
    projectViewport.addEventListener("focusout", startProjectTimer);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopProjectTimer();
      else startProjectTimer();
    });

    setProjectToggle();
    startProjectTimer();
  }

  /* Event-story rail: gentle auto-advance, pause on interaction, and manual navigation */
  var eventStrip = document.querySelector("[data-event-strip]");
  var eventPrev = document.querySelector("[data-events-prev]");
  var eventNext = document.querySelector("[data-events-next]");
  var eventToggle = document.querySelector("[data-events-toggle]");
  var eventCards = eventStrip ? Array.from(eventStrip.querySelectorAll(".event-card")) : [];
  var eventIndex = 0;
  var eventPaused = reducedMotion;
  var eventTimer = null;

  function setEventToggle() {
    if (!eventToggle) return;
    eventToggle.textContent = eventPaused ? "▶" : "Ⅱ";
    eventToggle.setAttribute("aria-pressed", String(eventPaused));
    eventToggle.setAttribute("aria-label", eventPaused ? "Resume event carousel" : "Pause event carousel");
    eventToggle.title = eventPaused ? "Resume automatic movement" : "Pause automatic movement";
  }

  function showEvent(index, announce) {
    if (!eventStrip || !eventCards.length) return;
    eventIndex = (index + eventCards.length) % eventCards.length;
    eventStrip.scrollTo({ left: eventCards[eventIndex].offsetLeft, behavior: reducedMotion ? "auto" : "smooth" });
    if (announce) eventCards[eventIndex].focus({ preventScroll: true });
  }

  function stopEventTimer() {
    window.clearInterval(eventTimer);
    eventTimer = null;
  }

  function startEventTimer() {
    stopEventTimer();
    if (eventPaused || reducedMotion || !eventCards.length) return;
    eventTimer = window.setInterval(function () { showEvent(eventIndex + 1, false); }, 5200);
  }

  if (eventPrev) eventPrev.addEventListener("click", function () { showEvent(eventIndex - 1, false); startEventTimer(); });
  if (eventNext) eventNext.addEventListener("click", function () { showEvent(eventIndex + 1, false); startEventTimer(); });
  if (eventToggle) eventToggle.addEventListener("click", function () {
    eventPaused = !eventPaused;
    setEventToggle();
    startEventTimer();
  });
  if (eventStrip) {
    eventStrip.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") { event.preventDefault(); showEvent(eventIndex - 1, true); }
      if (event.key === "ArrowRight") { event.preventDefault(); showEvent(eventIndex + 1, true); }
    });
    eventStrip.addEventListener("pointerenter", stopEventTimer);
    eventStrip.addEventListener("pointerleave", startEventTimer);
    eventStrip.addEventListener("focusin", stopEventTimer);
    eventStrip.addEventListener("focusout", startEventTimer);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopEventTimer();
      else startEventTimer();
    });
    setEventToggle();
    startEventTimer();
  }

  /* What Seeed Supports slider */
  var capabilitySlider = document.querySelector("[data-capability-slider]");
  if (capabilitySlider) {
    var capabilityTrack = capabilitySlider.querySelector("[data-capability-track]");
    var capabilitySlides = Array.from(capabilityTrack.children);
    var capabilityDots = Array.from(capabilitySlider.querySelectorAll("[data-capability-dot]"));
    var capabilityPrev = capabilitySlider.querySelector("[data-capability-prev]");
    var capabilityNext = capabilitySlider.querySelector("[data-capability-next]");
    var capabilityToggle = capabilitySlider.querySelector("[data-capability-toggle]");
    var capabilityStatus = capabilitySlider.querySelector("[data-capability-status]");
    var capabilityIndex = 0;
    var capabilityPaused = reducedMotion;
    var capabilityTimer = null;

    function setCapabilityToggle() {
      if (!capabilityToggle) return;
      capabilityToggle.textContent = capabilityPaused ? "▶" : "Ⅱ";
      capabilityToggle.setAttribute("aria-pressed", String(capabilityPaused));
      capabilityToggle.setAttribute("aria-label", capabilityPaused ? "Resume support carousel" : "Pause support carousel");
      capabilityToggle.title = capabilityPaused ? "Resume automatic movement" : "Pause automatic movement";
    }

    function showCapability(index, announce) {
      capabilityIndex = (index + capabilitySlides.length) % capabilitySlides.length;
      capabilityTrack.style.transform = "translateX(-" + (capabilityIndex * 100) + "%)";
      capabilitySlides.forEach(function (slide, slideIndex) {
        var active = slideIndex === capabilityIndex;
        if (active) {
          slide.removeAttribute("aria-hidden");
          slide.removeAttribute("inert");
        } else {
          slide.setAttribute("aria-hidden", "true");
          slide.setAttribute("inert", "");
        }
      });
      capabilityDots.forEach(function (dot, dotIndex) {
        var active = dotIndex === capabilityIndex;
        dot.classList.toggle("is-active", active);
        if (active) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      if (announce && capabilityStatus) {
        capabilityStatus.textContent = "Showing support option " + (capabilityIndex + 1) + " of " + capabilitySlides.length + ": " + capabilitySlides[capabilityIndex].querySelector("h3").textContent;
      }
    }

    function stopCapabilityTimer() {
      window.clearInterval(capabilityTimer);
      capabilityTimer = null;
    }

    function startCapabilityTimer() {
      stopCapabilityTimer();
      if (capabilityPaused || reducedMotion) return;
      capabilityTimer = window.setInterval(function () { showCapability(capabilityIndex + 1, false); }, 6200);
    }

    if (capabilityPrev) capabilityPrev.addEventListener("click", function () { showCapability(capabilityIndex - 1, true); });
    if (capabilityNext) capabilityNext.addEventListener("click", function () { showCapability(capabilityIndex + 1, true); });
    capabilityDots.forEach(function (dot) {
      dot.addEventListener("click", function () { showCapability(Number(dot.dataset.capabilityDot), true); });
    });
    if (capabilityToggle) capabilityToggle.addEventListener("click", function () {
      capabilityPaused = !capabilityPaused;
      setCapabilityToggle();
      startCapabilityTimer();
    });
    capabilitySlider.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") { event.preventDefault(); showCapability(capabilityIndex - 1, true); }
      if (event.key === "ArrowRight") { event.preventDefault(); showCapability(capabilityIndex + 1, true); }
    });
    capabilitySlider.addEventListener("pointerenter", stopCapabilityTimer);
    capabilitySlider.addEventListener("pointerleave", startCapabilityTimer);
    capabilitySlider.addEventListener("focusin", stopCapabilityTimer);
    capabilitySlider.addEventListener("focusout", startCapabilityTimer);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopCapabilityTimer();
      else startCapabilityTimer();
    });
    showCapability(0, false);
    setCapabilityToggle();
    startCapabilityTimer();
  }

  /* Partner logo loop */
  var partnerTrack = document.querySelector("[data-partners-track]");
  if (partnerTrack && !reducedMotion) {
    Array.from(partnerTrack.children).forEach(function (logo) {
      var clone = logo.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.alt = "";
      partnerTrack.appendChild(clone);
    });
  }

  /* Restrained reveal motion */
  if ("IntersectionObserver" in window && !reducedMotion) {
    var revealItems = Array.from(document.querySelectorAll(".signature__copy, .section-head, .project-viewport, .event-strip, .get-involved__intro, .intent-card, .enable__intro, .capability-slider"));
    revealItems.forEach(function (item) { item.classList.add("reveal"); });
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealItems.forEach(function (item) { revealObserver.observe(item); });
  }
})();
