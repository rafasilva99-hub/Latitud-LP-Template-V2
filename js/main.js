const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const forms = document.querySelectorAll("[data-form]");
const caseShowcaseMedia = document.querySelector(".cases-showcase__media");
const featuredCase = caseShowcaseMedia?.querySelector(".case-video--featured");
const caseDeckPrevious = caseShowcaseMedia?.querySelector("[data-case-deck-prev]");
const caseDeckNext = caseShowcaseMedia?.querySelector("[data-case-deck-next]");
const caseLabel = caseShowcaseMedia?.querySelector(".case-video__label");
const casePrev = document.querySelector("[data-case-prev]");
const caseNext = document.querySelector("[data-case-next]");
const accordionItems = document.querySelectorAll(".accordion__item");

const videoCases = [
  {
    image: "assets/img/facade-painting-hero.png",
    meta: ["Condomínio residencial", "Pintura de fachada"],
    quote: "Planejamento, segurança e comunicação clara em todas as etapas da obra.",
    label: "📍 Case em São Paulo",
    playLabel: "Assistir case de pintura de fachada",
  },
  {
    image: "assets/img/card-recuperacao-fachada.png",
    meta: ["Edifício comercial", "Recuperação técnica"],
    quote: "Diagnóstico preciso para corrigir patologias antes da aplicação do acabamento.",
    label: "📍 Case em Sorocaba",
    playLabel: "Assistir case de recuperação técnica",
  },
  {
    image: "assets/img/card-pintura-fachada.png",
    meta: ["Condomínio vertical", "Obra documentada"],
    quote: "Execução acompanhada com RDO Digital, registros técnicos e entrega formal.",
    label: "📍 Case em Campinas",
    playLabel: "Assistir case de obra documentada",
  },
];

let activeVideoCase = 0;
let isVideoCaseAnimating = false;

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

/* Method panel — expand on hover */
const methodRows = document.querySelectorAll("[data-method-row]");

let methodLeaveTimer = null;

methodRows.forEach((row) => {
  row.addEventListener("mouseenter", () => {
    if (methodLeaveTimer) {
      clearTimeout(methodLeaveTimer);
      methodLeaveTimer = null;
    }
    methodRows.forEach((r) => r.classList.remove("is-expanded"));
    row.classList.add("is-expanded");
  });

  row.addEventListener("mouseleave", () => {
    methodLeaveTimer = setTimeout(() => {
      row.classList.remove("is-expanded");
    }, 150);
  });
});

/* Solution sticky stack — scale down cards as they get covered */
const solutionCards = document.querySelectorAll(".solution-card");

if (solutionCards.length) {
  const scaleStep = 0.03;
  const vh = window.innerHeight;

  const updateSolutionStack = () => {
    solutionCards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const stickyTop = 24 + i * 10;
      const isStuck = rect.top <= stickyTop + 2;

      if (!isStuck) {
        card.style.transform = "scale(1)";
        return;
      }

      let totalShrink = 0;

      for (let j = i + 1; j < solutionCards.length; j++) {
        const nextRect = solutionCards[j].getBoundingClientRect();
        const nextSticky = 24 + j * 10;
        const distanceToStick = nextRect.top - nextSticky;
        const travelRange = vh * 0.5;

        if (distanceToStick <= 0) {
          totalShrink += scaleStep;
        } else if (distanceToStick < travelRange) {
          totalShrink += scaleStep * (1 - distanceToStick / travelRange);
          break;
        } else {
          break;
        }
      }

      const scale = Math.max(1 - totalShrink, 0.88);
      card.style.transform = `scale(${scale})`;
    });
  };

  window.addEventListener("scroll", updateSolutionStack, { passive: true });
  updateSolutionStack();
}

const getVideoCase = (offset) => {
  return videoCases[(activeVideoCase + offset + videoCases.length) % videoCases.length];
};

const renderCaseCard = (card, caseData, isFeatured = false) => {
  if (!card) return;

  const media = card.querySelector(".case-video__media");
  const metaItems = card.querySelectorAll(".case-video__meta span");
  const quote = card.querySelector(".case-video__quote");
  const play = card.querySelector(".case-video__play");
  const [primaryMeta, secondaryMeta] = caseData.meta;

  if (!media) return;

  media.style.backgroundImage = `
    linear-gradient(180deg, rgba(19, 23, 26, .28), rgba(19, 23, 26, .42)),
    url("${caseData.image}")
  `;

  if (metaItems.length >= 2) {
    metaItems[0].textContent = primaryMeta;
    metaItems[1].textContent = secondaryMeta;
  }

  if (quote) {
    quote.textContent = caseData.quote;
  }

  if (isFeatured) {
    play?.setAttribute("aria-label", caseData.playLabel);
  }
};

const renderVideoCase = () => {
  if (!featuredCase || !caseDeckPrevious || !caseDeckNext || !caseLabel) return;

  const currentCase = getVideoCase(0);
  const previousCase = getVideoCase(-1);
  const nextCase = getVideoCase(1);

  renderCaseCard(featuredCase, currentCase, true);
  renderCaseCard(caseDeckPrevious, previousCase);
  renderCaseCard(caseDeckNext, nextCase);
  caseLabel.textContent = currentCase.label;

  if (casePrev) {
    casePrev.disabled = false;
  }

  if (caseNext) {
    caseNext.disabled = false;
  }
};

const changeVideoCase = (direction) => {
  if (
    !caseShowcaseMedia ||
    !featuredCase ||
    !caseDeckPrevious ||
    !caseDeckNext ||
    !caseLabel ||
    isVideoCaseAnimating
  ) {
    return;
  }

  const nextVideoCase = (activeVideoCase + direction + videoCases.length) % videoCases.length;

  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const updateActiveCase = () => {
    activeVideoCase = nextVideoCase;
    renderVideoCase();
  };

  if (shouldReduceMotion) {
    updateActiveCase();
    return;
  }

  isVideoCaseAnimating = true;
  caseShowcaseMedia.classList.add(
    direction > 0 ? "is-case-exiting-next" : "is-case-exiting-prev"
  );

  window.setTimeout(() => {
    updateActiveCase();
    caseShowcaseMedia.classList.remove("is-case-exiting-next", "is-case-exiting-prev");
    caseShowcaseMedia.classList.add(
      direction > 0 ? "is-case-entering-next" : "is-case-entering-prev"
    );

    window.setTimeout(() => {
      caseShowcaseMedia.classList.remove("is-case-entering-next", "is-case-entering-prev");
      isVideoCaseAnimating = false;
    }, 380);
  }, 220);
};

casePrev?.addEventListener("click", () => changeVideoCase(-1));
caseNext?.addEventListener("click", () => changeVideoCase(1));
renderVideoCase();

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

/* Header glass effect — scroll & contrast detection */
const header = document.querySelector(".header");
const heroBanner = document.querySelector(".lp-hero__banner");

if (header) {
  let lastOnDark = false;
  let lastScrolled = false;

  const updateHeader = () => {
    const scrollY = window.scrollY;
    const isScrolled = scrollY > 32;

    if (isScrolled !== lastScrolled) {
      header.classList.toggle("is-scrolled", isScrolled);
      lastScrolled = isScrolled;
    }

    let isOnDark = false;

    if (heroBanner) {
      const bannerRect = heroBanner.getBoundingClientRect();
      const headerMid = header.offsetHeight / 2;
      isOnDark = bannerRect.top < headerMid && bannerRect.bottom > headerMid;
    }

    if (isOnDark !== lastOnDark) {
      header.classList.toggle("is-on-dark", isOnDark);
      lastOnDark = isOnDark;
    }
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
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
