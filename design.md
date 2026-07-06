# design.md — Design System · LP Grupo Latitud

**Escopo deste documento:** identidade visual, tokens e especificação de componentes — a base para o `.css` do projeto, antes da implementação da LP.
**Fora do escopo:** estrutura de seções, copy, estratégia de conteúdo e conversão (documentação à parte, quando necessário).
**Cliente:** Grupo Latitud (grupolatitud.com.br) · **Versão:** 1.1 · Julho/2026
**Fontes de verdade:** Home Desktop 1440px (PDF, analisada pixel a pixel), specimens Raleway e Helvetica Neue, paleta "Cores da marca", manual de logos (variações I–IV), patterns do brandbook.

Classificação das informações:

- **[FATO]** — medido diretamente nos materiais (render do PDF) ou escrito no brandbook.
- **[INFERÊNCIA]** — proposta derivada dos fatos, a validar no Figma/implementação.
- **[?]** — pontos que dependiam de confirmação; **todos resolvidos** e consolidados na seção 7 (Decisões fechadas).

---

## 0. Changelog

| Data | Versão | Mudança |
|---|---|---|
| Jul/2026 | 1.0 | Versão inicial: sistema extraído da home 1440 + brandbook, incluindo blueprint de conteúdo das LPs. |
| Jul/2026 | 1.1 | **Escopo refinado a pedido:** removidos blueprint de seções, matriz de conteúdo e diretrizes de conversão. Documento passa a cobrir apenas ID visual, tokens e componentes. Pendências de conteúdo retiradas. |
| Jul/2026 | 1.2 | Resoluções: fonte (Helvetica via sistema + Inter self-host, `@font-face` definido); neutro único `#FFFFFF` base + `#FAFAFA` reservado a hover; botão em preto não existe (só navy); `--action-blue #155EEF` promovido a token oficial; forma (raios/sombras) fixada como decisão de design; H1 do hero em LH 48/56. Pendência de copy (segmented control) descartada por estar fora do escopo. Todas as decisões de design fechadas. |

---

## 1. Tese visual da marca (o que organiza tudo)

Medido na home inteira [FATO]:

- O **navy Blue/50 `#1F3A5F` é a cor de ação e autoridade** — todos os botões, a faixa de certificações, elementos de destaque (~691 mil px na página).
- O **preto `#13171A` é a moldura** — topbar e footer (~1,08 mi px).
- O **laranja Tangerina `#F18819` é acento cirúrgico** — apenas ~2,4 mil px na página inteira: o triângulo do logo, o traço dos eyebrows, as estrelas de avaliação, títulos de coluna do footer e detalhes decorativos. **Laranja nunca preenche botões nem grandes superfícies.**
- Marigold e Sunray **não aparecem na UI** da home (presença estatisticamente nula) — ficam reservados para materiais gráficos/patterns.

**Regra de proporção [INFERÊNCIA, derivada da medição]:** ~60% superfícies neutras claras · ~30% navy/preto · **≤5% laranja**. Se uma tela parecer "laranja demais", está errada.

O segundo traço identitário é o **corte diagonal** (wedge triangular, eco do símbolo da marca): aparece no canto inferior esquerdo do hero e no topo dos cards de serviço [FATO]. É o detalhe geométrico que diferencia o layout de um template genérico.

---

## 2. Fundamentos

### 2.1 Cores

#### Paleta da marca [FATO — brandbook]

| Token | Nome | Hex | Uso na UI |
|---|---|---|---|
| `blue-25` | Blue 25 | `#323B6A` | Reserva (gradientes, gráficos). Quase não usado na home. |
| `blue-50` | Blue 50 | `#1F3A5F` | **Cor primária de ação.** Botões, faixa de certificações, ícones de destaque. |
| `blue-100` | Blue 100 | `#152B49` | Hover do primário, overlays sobre foto, profundidade. |
| `blue-200` | Blue 200 | `#181D27` | **Cor de títulos** sobre fundo claro. |
| `orange-500` | Tangerina | `#F18819` | **Acento.** Traço de eyebrow, estrelas, triângulo do logo, títulos de coluna do footer, detalhes decorativos. |
| `orange-400` | Marigold | `#EFA016` | Reserva — patterns e peças gráficas. Não usar na UI. |
| `orange-300` | Sunray | `#F4BA5D` | Reserva — patterns e peças gráficas. Não usar na UI. |
| `black` | Black | `#13171A` | Topbar, footer, overlay de cards escuros (portfólio). |
| `action-blue` | Azul funcional | `#155EEF` | Ícones de check e tags editoriais. Fora do manual da marca, adotado como token oficial (ver 2.1). |

#### Neutros e superfícies [FATO — medido no render]

| Token | Hex | Uso |
|---|---|---|
| `bg-white` | `#FFFFFF` | **Fundo neutro base** de todas as seções claras, cards, selos. |
| `surface-hover` | `#FAFAFA` | **Hover** de superfícies claras interativas (cards, itens). Não é fundo de seção. |
| `bg-blue-light` | `#EFF4FF` | **Seção de acento claro** (portfólio, método, ESG na home). |
| `text-heading` | `#181D27` | Títulos (== Blue 200). |
| `text-body` | `#535862` | Corpo de texto sobre claro. |
| `text-muted` | `#717680` | Texto de apoio, legendas. |
| `text-on-dark` | `#FFFFFF` / `rgba(255,255,255,.80)` | Título / corpo sobre navy e preto. |
| `text-topbar` | `#D5D7DA` | Texto da topbar e do footer secundário. |
| `border-light` | `#E9EAEB` | Bordas de cards e divisores sobre claro. [INFERÊNCIA — conferir hex no Figma] |
| `border-on-dark` | `rgba(255,255,255,.12)` | Divisores sobre navy/preto (footer). [INFERÊNCIA] |

> **Nota sobre neutros — resolvido:** as variações de tom que apareciam entre superfícies claras (`#F5F5F5`, `#FAFAFA`) **representam estados de hover**, não fundos de seção distintos. **Decisão firme:** o fundo neutro base é `#FFFFFF`; `#FAFAFA` é o **hover** de superfícies claras interativas (cards, itens de lista); `#EFF4FF` é a **seção de acento**. Não existe terceiro tom de fundo neutro no sistema.

#### Azul funcional `--action-blue` [FATO — medido · decisão firme]

Os ícones de check (chips do "Quem somos", checklist do Portal) e as tags editoriais usam **`#155EEF`** (azul vivo). Embora não conste na paleta "Cores da marca", **está adotado como token oficial** `--action-blue`, reservado a: ícones de confirmação/check e tags de categoria editorial. **Não** é cor de ação primária (essa é o navy `#1F3A5F`) nem substitui o laranja de acento — é um azul funcional de suporte.

#### Papel das cores por superfície

| Superfície | Fundo | Título | Corpo | Acento |
|---|---|---|---|---|
| Seção clara neutra | `#FFFFFF` (hover `#FAFAFA`) | `#181D27` | `#535862` | traço laranja no eyebrow |
| Seção clara acento | `#EFF4FF` | `#181D27` | `#535862` | idem |
| Faixa navy | `#1F3A5F` | `#FFFFFF` | `rgba(255,255,255,.80)` | eyebrow branco + traço laranja |
| Painel escuro (CTA) | foto + overlay navy→`#13171A` | `#FFFFFF` | `rgba(255,255,255,.85)` | idem |
| Moldura (topbar/footer) | `#13171A` | `#FFFFFF` | `#D5D7DA` | títulos de coluna em `#F18819` |

### 2.2 Tipografia

**Raleway** → títulos, eyebrows, tags, botões e navegação.
**Helvetica Neue** → corpo de texto, parágrafos, legendas, formulários. [FATO — definição do projeto + specimens]

Pesos disponíveis [FATO — specimens]: Raleway 400/500/600/700 · Helvetica Neue 400/500/700.

#### Hospedagem de fontes — decisão firme

**Raleway** é open source (SIL Open Font License) → **self-host livre**, WOFF2 na pasta do projeto.

**Helvetica Neue NÃO é hospedável sem licença.** Os arquivos instalados (macOS / .ttf avulsos) têm licença de *desktop*; servi-los via `@font-face` viola a licença da Monotype e é um risco de compliance incompatível com o discurso do cliente. Comprar a licença webfont (Monotype, cobrada por pageviews) só se o cliente quiser 100% de consistência entre plataformas.

**Resolução adotada:** **não hospedar a Helvetica Neue** — deixá-la vir do sistema como primeiro nome da stack, com **Inter self-host como fallback métrico** (visualmente muito próximo). Resultado: macOS/iOS renderiza Helvetica Neue nativa (legal, sem custo); Windows/Android cai no Inter self-host.

```css
--font-heading: "Raleway", "Inter", Arial, sans-serif;          /* Raleway self-host */
--font-body: "Helvetica Neue", Helvetica, "Inter", Arial, sans-serif; /* sistema → Inter */
```

**Pasta de fontes do projeto** — só Raleway e Inter entram (Helvetica não entra em pasta nenhuma):

```
assets/fonts/
├── raleway/
│   ├── raleway-400.woff2
│   ├── raleway-500.woff2
│   ├── raleway-600.woff2
│   └── raleway-700.woff2
└── inter/
    ├── inter-400.woff2
    └── inter-500.woff2
```

Se o cliente aprovar a licença webfont da Helvetica no futuro, cria-se `assets/fonts/helvetica-neue/` com os WOFF2 licenciados e nada mais muda — a stack já a prioriza.

#### `@font-face` (base do CSS de fontes)

```css
/* ---- Raleway (self-host, OFL) ---- */
@font-face {
  font-family: "Raleway"; font-style: normal; font-weight: 400;
  font-display: swap; src: url("../assets/fonts/raleway/raleway-400.woff2") format("woff2");
}
@font-face {
  font-family: "Raleway"; font-style: normal; font-weight: 500;
  font-display: swap; src: url("../assets/fonts/raleway/raleway-500.woff2") format("woff2");
}
@font-face {
  font-family: "Raleway"; font-style: normal; font-weight: 600;
  font-display: swap; src: url("../assets/fonts/raleway/raleway-600.woff2") format("woff2");
}
@font-face {
  font-family: "Raleway"; font-style: normal; font-weight: 700;
  font-display: swap; src: url("../assets/fonts/raleway/raleway-700.woff2") format("woff2");
}

/* ---- Inter (self-host, OFL) — fallback do corpo em Windows/Android ---- */
@font-face {
  font-family: "Inter"; font-style: normal; font-weight: 400;
  font-display: swap; src: url("../assets/fonts/inter/inter-400.woff2") format("woff2");
}
@font-face {
  font-family: "Inter"; font-style: normal; font-weight: 500;
  font-display: swap; src: url("../assets/fonts/inter/inter-500.woff2") format("woff2");
}
```

> Preload apenas dos pesos above-the-fold (Raleway 600/700 do hero + corpo 400). Não embarcar os 8 pesos dos specimens — só os efetivamente usados.

#### Escala tipográfica [FATO — specimens; idêntica para as duas famílias]

| Estilo | Tamanho | Line-height | Letter-spacing |
|---|---|---|---|
| Display 2xl | 72px / 4.5rem | 90px / 5.625rem | −2% |
| Display xl | 60px / 3.75rem | 72px / 4.5rem | −2% |
| Display lg | 48px / 3rem | 60px / 3.75rem | −2% |
| Display md | 36px / 2.25rem | 44px / 2.75rem | −2% |
| Display sm | 30px / 1.875rem | 38px / 2.375rem | — |
| Display xs | 24px / 1.5rem | 32px / 2rem | — |
| Text xl | 20px / 1.25rem | 30px / 1.875rem | — |
| Text lg | 18px / 1.125rem | 28px / 1.75rem | — |
| Text md | 16px / 1rem | 24px / 1.5rem | — |
| Text sm | 14px / 0.875rem | 20px / 1.25rem | — |
| Text xs | 12px / 0.75rem | 18px / 1.125rem | — |

#### Mapa de uso (desktop 1440) — medido na home

| Elemento | Estilo | Família / peso | Cor |
|---|---|---|---|
| H1 do hero | Display lg 48 / **LH 56** (1.167) — decisão firme [ver nota] | Raleway Bold | `#FFFFFF` |
| H2 de seção | Display md (36/44) | Raleway Bold | `#181D27` (branco sobre navy) |
| Título de painel escuro | Display sm–md | Raleway Bold | `#FFFFFF` |
| Título de card de portfólio | Display xs (24/32) | Raleway SemiBold | `#FFFFFF` |
| Título de card de serviço/blog | Text xl (20/30) | Raleway SemiBold | `#181D27` |
| Sub do hero | Text xl (20/30) | Helvetica Neue Regular | `rgba(255,255,255,.88)` |
| Corpo | Text md (16/24) | Helvetica Neue Regular | `#535862` |
| Eyebrow | Text md (16) | Raleway Medium | cor do contexto + **traço laranja** |
| Tag de card | Text xs–sm, caixa alta, tracking +6% | Raleway SemiBold | navy `#1F3A5F` (serviço) / `#155EEF` (blog) + traço da mesma cor |
| Rótulo de botão | Text md (16) | Raleway SemiBold | `#FFFFFF` |
| Navegação | Text md | Raleway Medium | `#FFFFFF` sobre hero |
| Topbar / footer secundário | Text sm (14/20) | Helvetica Neue Regular | `#D5D7DA` |

> **Line-height do H1 do hero — decisão firme:** o pitch medido na home é ≈56px [FATO], mais apertado que os 60px padrão de Display lg. Para títulos curtos e impactantes de hero, LH mais justo é a prática correta (o LH da escala é otimizado para blocos de texto longos). **Adotado: 48/56 (1.167).** Aplica-se apenas ao H1 do hero — os demais títulos seguem a escala da tabela 2.2. Token dedicado: `--lh-hero: 56px`.

**Responsivo [INFERÊNCIA — regra de redução]:** H1 48→36 (display-md, LH 44), H2 36→30 (display-sm), sub 20→18. Corpo permanece 16. Nunca abaixo de 16px em corpo/inputs (evita zoom no iOS).

### 2.3 Grid, container e espaçamento

- **Canvas de referência:** 1440px. [FATO]
- **Container de conteúdo: 1216px** (margens de 112px em cada lado @1440) — medido em topbar, H2s, painel CTA e footer [FATO]. Implementar como `max-width: 1216px; margin-inline: auto; padding-inline: 32px`.
- **Grid:** 12 colunas, gutter 32px [INFERÊNCIA — compatível com as larguras medidas].
- **Cabeçalho de seção em 2 colunas** [FATO]: eyebrow + H2 à esquerda (~6 col), parágrafo de apoio alinhado à direita (~5 col a partir de x≈996).
- **Escala de espaçamento (base 4):** 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128.
- **Ritmo vertical de seção:** padding-block ≈ **96px** desktop / 64px mobile [FATO — faixa de certificações mede 476px de altura total; painel CTA ≈350px]. Usar 128 quando a seção precisar respirar.
- **Alturas medidas [FATO]:** topbar 42px · header sobreposto ~88px de zona útil · hero ≈533px do topo da página · painel CTA ≈350px.

**Breakpoints [INFERÊNCIA]:** 1440 (design) · 1280 · 1024 · 768 · 480. Carrosséis viram scroll-snap horizontal no touch.

### 2.4 Raio, borda, sombra e o corte diagonal

Valores fixados como **decisão de design** (não dependem de conferência posterior):

| Elemento | Valor |
|---|---|
| Botões (`--radius-btn`) | 12px |
| Cards — serviço, blog, portfólio (`--radius-card`) | 16px |
| Painéis grandes — CTA, vídeo (`--radius-panel`) | 24px |
| Selos, controles de carrossel, ícones de contato do footer | círculo (999px) |
| Sombra de card (`--shadow-card`) | `0 1px 3px rgba(16,24,40,.06)` — visual quase flat, fiel ao mock |
| Anel do botão sobre escuro | borda 1px `rgba(255,255,255,.25)` [FATO — painel CTA] |

**Corte diagonal (assinatura visual):** wedge triangular aplicado no canto inferior esquerdo do hero e no encontro foto→conteúdo dos cards de serviço [FATO]. Implementar com `clip-path: polygon(...)` num ângulo consistente (~12–16°) [INFERÊNCIA]. Usar com parcimônia: **1 corte por seção, no máximo**.

### 2.5 Logo [FATO — manual de marca]

| Superfície | Variação |
|---|---|
| Fundo claro | Variação II (Black orange): "GRUPO" laranja + LATITUD preto + triângulo laranja |
| Fundo escuro / foto com overlay (header, footer) | Variação III sobre escuro: LATITUD branco + triângulo laranja — usada no header e footer da home |
| Favicon, avatar, selo, detalhe | Variação I (ícone triângulo + escalador) — orange para destaque, black para neutro |

Regras: respiro mínimo = altura do "L" ao redor [INFERÊNCIA — padrão de manual]; nunca aplicar sobre foto sem overlay escuro; nunca recolorir fora das variações do manual; a versão com texto navy para fundos brancos já existe no acervo do projeto.

### 2.6 Patterns [FATO — brandbook]

Dois patterns seamless de triângulos: (1) laranja sobre preto, (2) branco sobre laranja.

Uso na UI: **decorativo e periférico** — o exemplo canônico é o blob laranja com pattern branco atrás do mockup do Portal Transparência [FATO]. Regras:
- Nunca atrás de texto corrido.
- Opacidade/escala discretas; o pattern é textura, não protagonista.
- Permitido em painéis escuros (canto), atrás de mockups/fotos recortadas e em divisores decorativos. Máximo 1–2 ocorrências por página.

### 2.7 Fotografia e iconografia

- **Fotografia [FATO — padrão da home]:** operação real em campo — técnicos com EPI completo, telhados industriais, altura. Nada de banco de imagem genérico. Para texto sobre foto: overlay gradiente navy `#152B49`→`#13171A` (70→40% da esquerda), como no hero.
- **Antes/depois:** fotos cruas do problema (ferrugem, infiltração, fissura) — manter o realismo [FATO — cards do portfólio].
- **Logos de clientes:** versão original colorida sobre fundo claro, em régua horizontal com fade nas bordas (marquee) [FATO].
- **Ícones [INFERÊNCIA]:** linha (stroke 1.5–2px), cantos suaves, cor navy sobre claro / branco sobre escuro; laranja apenas quando o ícone é o acento da vez. Biblioteca sugerida: Untitled Icons ou Lucide.

---

## 3. Tokens (CSS) — base do `tokens.css`

```css
:root {
  /* ===== Marca ===== */
  --blue-25:  #323B6A;
  --blue-50:  #1F3A5F;   /* primária de ação */
  --blue-100: #152B49;   /* hover / overlay */
  --blue-200: #181D27;   /* títulos */
  --orange-500: #F18819; /* acento Tangerina */
  --orange-400: #EFA016; /* reserva */
  --orange-300: #F4BA5D; /* reserva */
  --black:    #13171A;

  /* ===== Superfícies ===== */
  --bg-white: #FFFFFF;          /* fundo neutro base */
  --surface-hover: #FAFAFA;     /* hover de superfícies claras — não é fundo de seção */
  --bg-blue-light: #EFF4FF;     /* seção de acento */
  --surface-dark: var(--black);

  /* ===== Texto ===== */
  --text-heading: var(--blue-200);
  --text-body:  #535862;
  --text-muted: #717680;
  --text-on-dark: #FFFFFF;
  --text-on-dark-soft: rgba(255,255,255,.80);
  --text-topbar: #D5D7DA;

  /* ===== Funcionais ===== */
  --action-blue: #155EEF;              /* azul funcional: ícones de check e tags editoriais */
  --border-light: #E9EAEB;
  --border-on-dark: rgba(255,255,255,.12);
  --focus-ring: rgba(241,136,25,.45);  /* anel de foco laranja */

  /* ===== Tipografia ===== */
  --font-heading: "Raleway", "Inter", Arial, sans-serif;
  --font-body: "Helvetica Neue", Helvetica, "Inter", Arial, sans-serif;
  --tracking-display: -0.02em;
  --tracking-tag: 0.06em;
  --lh-hero: 56px;             /* line-height do H1 do hero (Display lg justo) */

  /* ===== Layout ===== */
  --container: 1216px;
  --section-py: 96px;
  --section-py-mobile: 64px;

  /* ===== Forma ===== */
  --radius-btn: 12px;
  --radius-card: 16px;
  --radius-panel: 24px;
  --shadow-card: 0 1px 3px rgba(16,24,40,.06);
}
```

---

## 4. Componentes

Cada componente traz: anatomia, medidas de referência @1440 e estados. Valores marcados ≈ foram medidos no render e devem bater com o Figma na fase de código.

### 4.1 Topbar
Faixa `#13171A`, altura 42px, conteúdo no container [FATO]. Esquerda: telefone · e-mail · cidade (text-sm `#D5D7DA`, separador "•"). Direita: "Redes sociais:" + ícones (IG, YT, FB, IN) 18px brancos.
**Variante compacta:** apenas contatos à esquerda e cidade à direita. [INFERÊNCIA]

### 4.2 Header
**Padrão da home [FATO]:** transparente sobre o hero (sem fundo próprio), logo variação III à esquerda, menu à direita em Raleway Medium branco. Item ativo = pill branca com bullet laranja + texto escuro. Não há botão CTA no header da home.
**Variante sticky com fundo [INFERÊNCIA]:** no scroll, o header ganha fundo `#FFFFFF` + sombra sutil e o logo troca para a variação de fundo claro. Slot opcional à direita para telefone (Raleway SemiBold) + botão primário `md` (48px).

### 4.3 Botões — família completa

Rótulo sempre **Raleway SemiBold, text-md (16)**. Ícone de seta `↗` (externo/avançar) ou `→` 20px, gap 8px [FATO — padrão em todos os CTAs].

| Variante | Fundo | Texto | Borda | Uso |
|---|---|---|---|---|
| **Primário** | `--blue-50` | branco | — | CTA principal. Hover: `--blue-100`. Active: `--blue-200`. |
| **Primário sobre escuro** | `--blue-50` | branco | 1px `rgba(255,255,255,.25)` | Painéis escuros [FATO — borda medida no mock]. |
| **Secundário claro** | transparente | `--blue-50` | 1.5px `--blue-50` | CTA de apoio sobre fundo claro. [INFERÊNCIA — derivado dos controles outline do carrossel] |
| **Secundário sobre foto** | transparente | branco | 1.5px branco | CTA de apoio sobre foto/overlay. [INFERÊNCIA] |
| **Ghost/Link** | — | `--blue-50` SemiBold | — | "Ver detalhes" com seta, dentro de cards. |
| **Ícone quadrado** | `--blue-50` | seta branca | radius 8 | 44×44, rodapé do card de serviço [FATO]. |
| **Ícone circular (carrossel)** | outline `--border-light` (default) / `--blue-50` sólido (hover/próximo) | seta navy / branca | círculo 48px | Controles de carrossel [FATO]. |

**Tamanhos:** `md` 48px · `lg` 56px · `xl` 60px (CTAs de seção — altura medida ≈60–63px no mock [FATO]). Padding-inline 28–32px.
**Estados obrigatórios:** hover `--blue-100`, active `--blue-200`, focus-visible (`outline: 2px solid var(--focus-ring); outline-offset: 2px`), disabled (50% opacidade), loading (spinner branco 20px no lugar da seta). Todos os CTAs da UI usam o primário navy `--blue-50` — não há variante de botão em preto.

### 4.4 Eyebrow (rótulo de seção)
Anatomia [FATO]: texto Raleway Medium text-md + **traço laranja de ~48×2px** à direita (gap de 12px). Cor do texto: `#181D27` sobre claro, `#FFFFFF` sobre escuro; o traço é sempre `#F18819`. É o principal uso sistemático do laranja — não substituir por outra cor.

### 4.5 Tags e chips
- **Tag de categoria de card** [FATO]: caixa alta, Raleway SemiBold text-xs–sm, tracking +6%, cor navy `#1F3A5F` + traço fino da mesma cor à direita ("INDUSTRIAL"). No blog, mesma anatomia em `#155EEF` ("MARKETING").
- **Chip de benefício** [FATO — "Quem somos"]: ícone check `#155EEF` 20px + texto Raleway SemiBold text-md navy, em grade com espaçamento 16/24. Sem borda ou fundo (flat).
- **Badge pill translúcida [INFERÊNCIA]:** `rgba(255,255,255,.12)` + borda `rgba(255,255,255,.25)`, texto branco text-sm — para selos curtos sobre foto/overlay.

### 4.6 Cards

**Card de serviço** [FATO — "O que fazemos"]
- Container branco, radius 16, sombra sutil; largura ≈360px em carrossel com gutter 32.
- Foto topo ≈280px com **corte diagonal** no encontro com o conteúdo.
- Conteúdo (padding 24–28): tag → título text-xl SemiBold `#181D27` → corpo text-md `#535862` (3–4 linhas) → botão-ícone quadrado navy 44×44.
- Hover [INFERÊNCIA]: elevação leve + seta desloca 2px.

**Card de portfólio (antes/depois)** [FATO]
- Card escuro, radius 16; foto ocupa ~70% e a base é um bloco `#13171A` com sobretítulo text-sm branco/70 + título display-xs branco.
- Pill branca com logo do cliente no topo da foto.
- Carrossel full-bleed (sangra as bordas do viewport); card ativo com anel branco/ganho de escala.

**Card de blog** [FATO]
- Branco, radius 16, imagem topo, tag azul, título text-lg SemiBold 2 linhas (clamp), resumo text-sm.

### 4.7 Selos de certificação [FATO]
Círculos brancos ≈150px com anel claro sutil, logo centralizado (Abendi, Falcão Bauer, CREA-SP, CAU/BR, IRATA Brasil, ISO 9001), grade 3×2 sobre a faixa navy `#1F3A5F`.

### 4.8 Steps numerados [FATO — método]
Numeração "01."–"05." + título display-xs SemiBold navy + corpo text-md gray, pitch vertical ≈110px, sobre `#EFF4FF`. Diagrama **LAT 360°** é asset de imagem (exportar SVG/PNG 2×).

### 4.9 Checklist [FATO — Portal Transparência]
Linhas de check 20px (`--action-blue`) + texto Raleway SemiBold text-md navy, espaçamento vertical 20px.

### 4.10 Prova social [FATO]
★★★★★ laranjas (20px) centralizadas + frase text-lg `#535862` + régua de logos coloridos com fade lateral (marquee, altura ~40px por logo).

### 4.11 Formulário — elementos [INFERÊNCIA — componente novo, não existe na home]
- **Input/textarea:** altura 52px (textarea 3 linhas), radius 12, borda `--border-light`, fundo branco, texto Helvetica text-md; label text-sm SemiBold navy acima; placeholder `--text-muted`.
- **Focus:** borda `--blue-50` + anel `--focus-ring`. **Erro:** borda `#D92D20` + mensagem text-sm da mesma cor.
- **Submit:** botão primário `xl` full-width.
- **Slot de microcopy:** text-sm `--text-muted` sob o botão.
- **Estado de sucesso:** bloco inline com ícone de check + mensagem (sem redirect obrigatório).
- **Contexto sobre painel escuro:** o formulário vive em cartão branco radius 16 (contraste máximo).

### 4.12 Accordion (FAQ) [INFERÊNCIA — componente novo]
Item: borda inferior `--border-light`, pergunta Raleway SemiBold text-lg navy + ícone chevron/plus 24px à direita (rotaciona ao abrir), resposta text-md `--text-body`, padding-block 24. Base `<details>/<summary>` estilizado.

### 4.13 Painel CTA escuro [FATO]
Painel no container (1216), radius 24, altura ≈350px: foto operacional + overlay navy→escuro; conteúdo: eyebrow branco/traço laranja → título Display sm–md Bold branco → sub text-lg branco/85 → botão primário sobre escuro. Pattern triangular sutil permitido no canto. Slot alternativo à direita para o cartão de formulário (4.11).

### 4.14 Footer [FATO]
Fundo `#13171A`. Linha 1: logo variação III + tagline à direita. Divisor `--border-on-dark`. Linha 2 (4 colunas): Endereço (ícone pin) · Mapa do Site · Fale Conosco (ícones circulares brancos 32px: e-mail, WhatsApp, telefone) · Ajuda. **Títulos de coluna em `#F18819`** Raleway SemiBold; links text-md `#D5D7DA`→branco no hover, espaçamento 20px. Linha 3: © + CNPJ à esquerda, sociais à direita.
**Variante compacta [INFERÊNCIA]:** 1 linha — logo + endereço/CNPJ + contatos + políticas.

### 4.15 Flutuantes [INFERÊNCIA — componentes novos]
- **Botão flutuante de WhatsApp:** 56px, canto inferior direito, `aria-label` correto; cor a decidir na fase de código (verde nativo `#25D366` × navy com ícone verde).
- **Barra sticky mobile:** barra inferior fixa (safe-area) com botão primário full-width.

---

## 5. Acessibilidade

### Contrastes medidos (WCAG 2.1)

| Par | Razão | Veredito |
|---|---|---|
| Branco sobre `#1F3A5F` (botão primário) | 11,5:1 | AAA ✓ |
| Branco sobre `#152B49` / `#13171A` | 14,3 / 18,0:1 | AAA ✓ |
| `#181D27` sobre branco (títulos) | 16,9:1 | AAA ✓ |
| `#535862` sobre branco (corpo) | 7,1:1 | AAA ✓ |
| `#717680` sobre branco (muted) | 4,6:1 | AA texto normal ✓ (não usar abaixo de 14px) |
| `#D5D7DA` sobre `#13171A` (topbar/footer) | 12,5:1 | AAA ✓ |
| **`#F18819` sobre branco** | **2,5:1** | **Reprovado para texto.** Laranja sobre claro só em elementos decorativos (traços, estrelas, ícones grandes) — nunca texto informativo ou link único. |
| `#F18819` sobre `#13171A` (títulos do footer) | 7,1:1 | AA/AAA ✓ — por isso os títulos laranja do footer funcionam. |
| `#F18819` sobre `#1F3A5F` | 4,5:1 | AA texto grande ✓ |

### Regras de implementação
- Foco visível em tudo que é interativo (anel laranja definido nos tokens).
- Alvo de toque mínimo 44×44 em qualquer controle.
- Formulário: `label` associado, `autocomplete`, erros anunciados (`aria-describedby`).
- Carrosséis acessíveis por teclado; `prefers-reduced-motion` respeitado no marquee.
- Fontes: WOFF2 self-host, `font-display: swap`, carregar apenas os pesos usados (Raleway 500/600/700 + corpo 400) — 8 pesos embarcados é peso morto.

---

## 6. Nomenclatura e organização do CSS

- **Convenção:** tokens CSS (seção 3) + classes BEM por componente: `.topbar`, `.header`, `.btn`, `.btn--primary`, `.btn--on-dark`, `.btn--icon`, `.eyebrow`, `.tag`, `.chip`, `.card-servico`, `.card-portfolio`, `.card-blog`, `.selo`, `.step`, `.checklist`, `.form__field`, `.accordion__item`, `.cta-panel`, `.footer`. Sem framework CSS pesado; grid nativo + custom properties.
- **Arquitetura de arquivos:**

```
css/
├── tokens.css        ← seção 3 deste documento
├── base.css          ← reset, tipografia global, container, seções
├── components/
│   ├── buttons.css
│   ├── header.css / topbar.css / footer.css
│   ├── cards.css
│   ├── eyebrow-tags.css
│   ├── form.css
│   ├── accordion.css
│   └── panels.css    ← faixa navy, painel CTA, patterns decorativos
└── utilities.css     ← visibilidade, espaçamento, clip diagonal
```

- **Assets exigidos:** logos variações I–III em SVG · 2 patterns seamless em SVG · diagrama LAT 360° · 6 selos de certificação · fotos de operação por serviço.

---

## 7. Decisões fechadas

Todas as pendências de design foram resolvidas — o sistema está pronto para virar CSS.

| # | Tema | Decisão |
|---|---|---|
| 1 | Fonte Helvetica Neue | **Não hospedar.** Vem do sistema; **Inter self-host** como fallback métrico. `@font-face` e pasta de fontes definidos em 2.2. |
| 2 | Neutros | Fundo neutro base único: `#FFFFFF`. `#FAFAFA` é **hover** (não fundo de seção). `#EFF4FF` é a seção de acento. |
| 3 | Botão em preto | **Não existe.** Todos os CTAs usam o primário navy `--blue-50` (hover `--blue-100`, active `--blue-200`). |
| 4 | Azul funcional `#155EEF` | Adotado como **token oficial** `--action-blue`, restrito a ícones de check e tags editoriais. |
| 5 | Forma (raios/sombras) | Fixados como decisão de design: btn 12 · card 16 · painel 24 · sombra quase flat (ver 2.4). |
| 6 | Line-height do H1 do hero | **48/56 (1.167)**, token `--lh-hero`. Aplica-se só ao H1 do hero. |

---

*Documento produzido a partir de análise pixel a pixel do PDF da home (render 144dpi), dos specimens tipográficos, da paleta oficial, do manual de logos e do brandbook de patterns. Divergências entre este documento e o Figma devem ser resolvidas a favor do Figma e registradas no changelog.*
