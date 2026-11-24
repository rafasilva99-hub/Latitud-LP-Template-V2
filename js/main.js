const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const forms = document.querySelectorAll("[data-form]");
const caseShowcaseMedia = document.querySelector(".cases-showcase__media");
const caseComparison = caseShowcaseMedia?.querySelector("[data-case-comparison]");
const caseBeforeImage = caseComparison?.querySelector(".case-comparison__img--before");
const caseAfterImage = caseComparison?.querySelector(".case-comparison__img--after");
const caseRange = caseComparison?.querySelector("[data-case-range]");
const caseCount = caseComparison?.querySelector("[data-case-count]");
const caseTitle = caseComparison?.querySelector("[data-case-title]");
const caseLocation = caseComparison?.querySelector("[data-case-location]");
const caseArea = caseComparison?.querySelector("[data-case-area]");
const caseTime = caseComparison?.querySelector("[data-case-time]");
const caseDelivery = caseComparison?.querySelector("[data-case-delivery]");
const caseLabel = caseShowcaseMedia?.querySelector("[data-case-label]");
const casePrev = document.querySelector("[data-case-prev]");
const caseNext = document.querySelector("[data-case-next]");
const solutionCarousel = document.querySelector("[data-solution-carousel]");
const solutionTrack = solutionCarousel?.querySelector("[data-solution-track]");
const solutionPrev = solutionCarousel?.querySelector("[data-solution-prev]");
const solutionNext = solutionCarousel?.querySelector("[data-solution-next]");
const accordionItems = document.querySelectorAll(".accordion__item");

const portfolioCases = [
  {
    before: "assets/img/building-facade-iii.png",
    after: "assets/img/building-facade-ii.png",
    title: "Condomínio Riviera",
    location: "Sorocaba / SP",
    label: "Case em São Paulo",
    area: "9.800 m²",
    time: "12 semanas",
    delivery: "100%",
  },
  {
    before: "assets/img/card-recuperacao-fachada.png",
    after: "assets/img/facade-painting-hero.png",
    title: "Edifício Saint Thomas",
    location: "Campinas / SP",
    label: "Case em Campinas",
    area: "6.200 m²",
    time: "10 semanas",
    delivery: "100%",
  },
  {
    before: "assets/img/building-facade.png",
    after: "assets/img/hero-image.png",
    title: "Condomínio La Vue",
    location: "São Paulo / SP",
    label: "Case em São Paulo",
    area: "4.300 m²",
    time: "8 semanas",
    delivery: "98%",
  },
];

let activePortfolioCase = 0;

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  const link = event.target instanceof Element ? event.target.closest("a") : null;

  if (link) {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("is-sent");
    form.reset();
  });
});

accordionItems.forEach((item) => {
  const summary = item.querySelector("summary");
  if (!summary) return;

  const panel = document.createElement("div");
  panel.className = "accordion__panel";

  while (summary.nextSibling) {
    panel.append(summary.nextSibling);
  }

  item.append(panel);

  if (item.open) {
    panel.style.height = "auto";
  } else {
    panel.hidden = true;
  }

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (shouldReduceMotion) {
      item.open = !item.open;
      panel.hidden = !item.open;
      panel.style.height = item.open ? "auto" : "0px";
      return;
    }

    if (item.open) {
      panel.hidden = false;
      panel.style.height = `${panel.scrollHeight}px`;
      item.classList.add("is-closing");

      requestAnimationFrame(() => {
        panel.style.height = "0px";
      });

      const finishClose = (transitionEvent) => {
        if (transitionEvent.propertyName !== "height") return;

          item.open = false;
          item.classList.remove("is-closing");
          panel.hidden = true;
          panel.removeEventListener("transitionend", finishClose);
      };

      panel.addEventListener("transitionend", finishClose);

      return;
    }

    item.open = true;
    item.classList.add("is-opening");
    panel.hidden = false;
    panel.style.height = "0px";

    requestAnimationFrame(() => {
      item.classList.remove("is-opening");
      panel.style.height = `${panel.scrollHeight}px`;
    });

    const finishOpen = (transitionEvent) => {
      if (transitionEvent.propertyName !== "height") return;

        panel.style.height = "auto";
        panel.removeEventListener("transitionend", finishOpen);
    };

    panel.addEventListener("transitionend", finishOpen);
  });
});

if (solutionTrack && solutionPrev && solutionNext) {
  const getSolutionStep = () => {
    const card = solutionTrack.querySelector(".solution-card");
    if (!card) return solutionTrack.clientWidth;
    const gap = Number.parseFloat(getComputedStyle(solutionTrack).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const updateSolutionControls = () => {
    const maxScroll = solutionTrack.scrollWidth - solutionTrack.clientWidth - 2;
    solutionPrev.disabled = solutionTrack.scrollLeft <= 2;
    solutionNext.disabled = solutionTrack.scrollLeft >= maxScroll;
  };

  solutionPrev.addEventListener("click", () => {
    solutionTrack.scrollBy({ left: -getSolutionStep(), behavior: "smooth" });
  });

  solutionNext.addEventListener("click", () => {
    solutionTrack.scrollBy({ left: getSolutionStep(), behavior: "smooth" });
  });

  solutionTrack.addEventListener("scroll", updateSolutionControls, { passive: true });
  window.addEventListener("resize", updateSolutionControls);
  updateSolutionControls();
}

const setCaseSplit = (value) => {
  if (!caseComparison) return;

  const split = Math.min(92, Math.max(8, Number(value) || 50));
  caseComparison.style.setProperty("--case-split", `${split}%`);

  if (caseRange) {
    caseRange.value = String(split);
  }
};

const renderPortfolioCase = () => {
  if (!caseComparison) return;

  const currentCase = portfolioCases[activePortfolioCase];
  const currentIndex = String(activePortfolioCase + 1).padStart(2, "0");
  const totalCases = String(portfolioCases.length).padStart(2, "0");

  if (caseBeforeImage) {
    caseBeforeImage.src = currentCase.before;
    caseBeforeImage.alt = `Fachada antes da intervenção técnica no ${currentCase.title}`;
  }

  if (caseAfterImage) {
    caseAfterImage.src = currentCase.after;
    caseAfterImage.alt = `Fachada depois da intervenção técnica no ${currentCase.title}`;
  }

  if (caseCount) caseCount.textContent = `${currentIndex} / ${totalCases}`;
  if (caseTitle) caseTitle.textContent = currentCase.title;
  if (caseLocation) caseLocation.textContent = currentCase.location;
  if (caseLabel) caseLabel.textContent = currentCase.label;
  if (caseArea) caseArea.textContent = currentCase.area;
  if (caseTime) caseTime.textContent = currentCase.time;
  if (caseDelivery) caseDelivery.textContent = currentCase.delivery;

  setCaseSplit(50);
};

const changePortfolioCase = (direction) => {
  activePortfolioCase =
    (activePortfolioCase + direction + portfolioCases.length) % portfolioCases.length;
  renderPortfolioCase();
};

caseRange?.addEventListener("input", (event) => {
  setCaseSplit(event.currentTarget.value);
});

casePrev?.addEventListener("click", () => changePortfolioCase(-1));
caseNext?.addEventListener("click", () => changePortfolioCase(1));
renderPortfolioCase();

/* Hotspot showcase interactivity */
const hotspotData = [
  {
    title: "Desgaste visual e perda de proteção superficial",
    text: "Quando a fachada apresenta desbotamento, manchas, variação de tonalidade ou aspecto de envelhecimento, isso geralmente indica que o sistema de pintura já perdeu sua eficiência de proteção.",
  },
  {
    title: "Fissuras em revestimentos",
    text: "Fissuras são manifestações comuns em fachadas, mas não devem ser ignoradas. Dependendo da origem e do comportamento, podem indicar movimentações estruturais, falhas de execução ou degradação do revestimento.",
  },
  {
    title: "Descolamento de revestimentos",
    text: "O desplacamento de argamassa, textura ou elementos cerâmicos indica perda de aderência entre camadas do sistema construtivo.",
  },
  {
    title: "Manchas de umidade e sinais de infiltração",
    text: "Manchas escuras, eflorescências ou áreas com alteração de cor geralmente indicam presença de umidade ativa na fachada.",
  },
  {
    title: "Corrosão ou exposição de elementos estruturais",
    text: "Quando há sinais de corrosão ou exposição de armaduras, o problema já ultrapassa o nível superficial e passa a exigir recuperação técnica do sistema afetado.",
  },
];

const hotspotPins = document.querySelectorAll("[data-hotspot]");
const hotspotCard = document.querySelector("[data-hotspot-card]");
const hotspotTitle = document.querySelector("[data-hotspot-title]");
const hotspotText = document.querySelector("[data-hotspot-text]");

const positionCard = (pin) => {
  if (!hotspotCard) return;
  const pinTop = parseFloat(pin.style.top);
  const pinLeft = parseFloat(pin.style.left);
  const forceLeft = pin.hasAttribute("data-card-left");
  const forceRight = pin.hasAttribute("data-card-right");
  const cardOnRight = forceRight || (!forceLeft && pinLeft < 50);

  hotspotCard.style.top = `${pinTop}%`;
  if (cardOnRight) {
    hotspotCard.style.left = `${pinLeft + 3}%`;
    hotspotCard.style.right = "auto";
  } else {
    hotspotCard.style.right = `${100 - pinLeft + 1}%`;
    hotspotCard.style.left = "auto";
  }
};

const showCard = (pin) => {
  const index = Number(pin.dataset.hotspot);
  const data = hotspotData[index];
  if (!data || !hotspotCard) return;

  if (hotspotTitle) hotspotTitle.textContent = data.title;
  if (hotspotText) hotspotText.textContent = data.text;
  positionCard(pin);
  hotspotCard.classList.remove("is-hidden");
  pin.classList.add("is-active");
};

const hideCard = (pin) => {
  if (!hotspotCard) return;
  hotspotCard.classList.add("is-hidden");
  pin.classList.remove("is-active");
};

let activePin = null;
let hideTimeout = null;

const scheduleHide = () => {
  hideTimeout = setTimeout(() => {
    if (activePin) {
      hideCard(activePin);
      activePin = null;
    }
  }, 200);
};

const cancelHide = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
};

hotspotPins.forEach((pin) => {
  pin.addEventListener("mouseenter", () => {
    cancelHide();

    if (activePin && activePin !== pin) {
      hideCard(activePin);
    }

    showCard(pin);
    activePin = pin;
  });

  pin.addEventListener("mouseleave", () => {
    scheduleHide();
  });
});

if (hotspotCard) {
  hotspotCard.addEventListener("mouseenter", () => {
    cancelHide();
  });

  hotspotCard.addEventListener("mouseleave", () => {
    scheduleHide();
  });
}

// First hotspot active by default on page load
const initialPin = document.querySelector(".hotspot-pin.is-active");
if (initialPin && hotspotCard) {
  showCard(initialPin);
  activePin = initialPin;
}

/* Active nav link based on scroll position */
const navLinks = document.querySelectorAll("[data-nav] a[href^='#']");
const sectionIds = Array.from(navLinks).map((link) => link.getAttribute("href").slice(1));
const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${id}`) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if (sections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach((section) => navObserver.observe(section));
}

/* Scroll reveal */
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}
