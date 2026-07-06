const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const forms = document.querySelectorAll("[data-form]");
const solutionCarousel = document.querySelector("[data-solution-carousel]");
const solutionPrev = document.querySelector("[data-solution-prev]");
const solutionNext = document.querySelector("[data-solution-next]");
const solutionSectionContainer = solutionCarousel?.closest(".container");
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

const scrollSolutions = (direction) => {
  if (!solutionCarousel) return;

  const card = solutionCarousel.querySelector(".solution-card");
  const gap = parseFloat(getComputedStyle(solutionCarousel).gap) || 0;
  const distance = card ? card.getBoundingClientRect().width + gap : 360;

  solutionCarousel.scrollBy({
    left: direction * distance,
    behavior: "smooth",
  });
};

const updateSolutionScrollState = () => {
  if (!solutionCarousel || !solutionSectionContainer) return;

  const canScrollLeft = solutionCarousel.scrollLeft > 8;

  solutionSectionContainer.classList.toggle(
    "has-solution-scroll-left",
    canScrollLeft
  );

  if (solutionPrev) {
    solutionPrev.disabled = !canScrollLeft;
  }
};

solutionPrev?.addEventListener("click", () => scrollSolutions(-1));
solutionNext?.addEventListener("click", () => scrollSolutions(1));
solutionCarousel?.addEventListener("scroll", updateSolutionScrollState, { passive: true });
updateSolutionScrollState();

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
    casePrev.disabled = activeVideoCase === 0;
  }

  if (caseNext) {
    caseNext.disabled = activeVideoCase === videoCases.length - 1;
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

  const nextVideoCase = activeVideoCase + direction;

  if (nextVideoCase < 0 || nextVideoCase >= videoCases.length) {
    return;
  }

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
