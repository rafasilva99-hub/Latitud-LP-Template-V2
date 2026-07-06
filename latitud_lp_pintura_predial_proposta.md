# Proposta visual e markdown de implementação | LP Latitud | Pintura Predial

## 1. Objetivo da página

Criar uma landing page de serviço para Pintura Predial que seja replicável para outros serviços da Latitud, como alpinismo industrial, manutenção predial, pintura de fachadas e instalação de linhas de vida.

A página deve funcionar como um template de conversão consultiva: educa o síndico ou gestor, reduz a comparação por menor preço, evidencia engenharia e segurança, apresenta método, provas e conduz para o diagnóstico técnico.

## 2. Tese de conversão

A promessa central não deve ser apenas pintura. A promessa deve ser previsibilidade de obra, segurança de decisão e controle técnico.

Mensagem base:

> Sua fachada precisa de uma nova pintura. Sua gestão precisa de uma obra previsível.

A copy fornecida já traz o eixo correto: diagnóstico antes de orçamento, execução controlada, RDO Digital, DataBook, ART, garantia contratual e menor impacto na rotina do condomínio.

## 3. Princípios visuais para manter padrão da home

• Usar o hero com foto operacional real, overlay escuro em navy e preto, header transparente e topbar preta.

• Preservar o navy como cor de ação principal. Todo CTA deve usar o botão primário navy.

• Usar o laranja apenas como acento: traço de eyebrow, detalhe geométrico, ícones pontuais ou títulos no footer. Não usar laranja como botão.

• Usar fundo branco como base, fundo azul claro em seções técnicas e painel escuro para CTA de alta intenção.

• Repetir a assinatura diagonal da marca no hero e em cards com imagem, com parcimônia.

• Utilizar cards com borda sutil, raio 16 px, sombra leve e fotografia de obra real.

• Reaproveitar os padrões da home: seção de serviços em cards, bloco institucional com mídia, faixa de certificações, método em etapas, Portal Transparência, CTA escuro e footer.

## 4. Arquitetura recomendada da página

### 01 | Hero com conversão imediata

Objetivo: comunicar proposta de valor, criar confiança e oferecer o diagnóstico como próxima ação.

Layout desktop:

```text
Topbar preta
Header transparente sobre foto
Hero com overlay escuro
┌───────────────────────────────┬─────────────────────────────┐
│ Eyebrow de prova              │ Card branco de diagnóstico   │
│ H1 forte                      │ Campos rápidos               │
│ Texto consultivo              │ CTA full width               │
│ CTA principal                 │ Microcopy de retorno         │
│ Checklist de controle da obra │ Selos de confiança           │
└───────────────────────────────┴─────────────────────────────┘
Corte diagonal no canto inferior esquerdo
```

Conteúdos principais:

• Provas rápidas: 12 anos de experiência, atendimento no estado de São Paulo, 5 anos de garantia contratual.

• H1: Sua fachada precisa de uma nova pintura. Sua gestão precisa de uma obra previsível.

• CTA: Solicitar um diagnóstico técnico.

• Checklist: cronograma estruturado, comunicação organizada, registro diário, documentação técnica e DataBook.

Recomendação de UX: inserir formulário curto no hero em desktop. Em mobile, o formulário entra logo abaixo da copy, antes da dobra seguinte.

### 02 | Régua de confiança

Objetivo: reduzir risco percebido logo após o hero.

Conteúdo:

• Equipe certificada NR 35.

• Obras acompanhadas por responsável técnico.

• ART e documentação técnica.

• RDO Digital e DataBook.

Visual: faixa branca com ícones lineares navy e checks em action blue, sem excesso de laranja.

### 03 | Antes de contratar: decisão técnica antes do orçamento

Objetivo: reposicionar a comparação de preço para comparação de escopo.

Layout:

```text
Seção branca, cabeçalho em 2 colunas
Coluna esquerda: eyebrow + H2
Coluna direita: texto de apoio
Abaixo: texto editorial + card lateral de alerta técnico
```

Conteúdo-chave:

• Nem toda proposta contempla a mesma obra.

• O menor preço pode ocultar tratamento de fissuras, infiltrações, preparo de substrato e impermeabilização.

• A Latitud inicia com diagnóstico técnico detalhado antes da proposta.

CTA: Quero um diagnóstico da minha fachada.

### 04 | Soluções por necessidade da fachada

Objetivo: mostrar amplitude sem virar uma página genérica.

Visual: grid de cards modulares, 3 colunas em desktop, scroll horizontal ou 1 coluna em mobile.

Cards:

• Diagnóstico Técnico de Fachada.

• Recuperação de Fachada Predial.

• Impermeabilização de Fachada.

• Pintura de Fachada.

• Retrofit de Fachadas.

Cada card deve conter:

• Tag de categoria: CONDOMÍNIOS.

• Título.

• Descrição curta.

• Lista de entregáveis com checks.

• Link ou botão ghost: Ver entregáveis.

Recomendação: não esconder tudo em accordion no desktop. Cards abertos aumentam escaneabilidade. Em mobile, pode usar cards compactos com accordion interno.

### 05 | Método LATITUD de Execução Controlada

Objetivo: transformar confiança em processo e mostrar governança.

Visual: seção azul clara, mesmo espírito da seção Método da home.

Etapas:

01. Diagnóstico e Projetos Inteligentes.

02. Kick-off e Governança da Comunicação.

03. Execução e Gestão Técnica da Obra.

04. Monitoramento em Tempo Real.

05. Entrega Formal e DataBook.

Layout recomendado:

```text
┌──────────────────────────┬────────────────────────────┐
│ Lista de etapas numerada │ Diagrama LAT 360 ou card   │
│ com resultado por etapa  │ com RDO, ART e DataBook    │
└──────────────────────────┴────────────────────────────┘
```

CTA: Conheça o método aplicado à sua fachada.

### 06 | Prova por números e cases

Objetivo: validar experiência antes de pedir novo CTA.

Conteúdo:

• 12+ anos executando obras prediais.

• 00 mil m² revitalizados, substituir quando houver número real.

• 00+ condomínios atendidos, substituir quando houver número real.

• 100% das obras acompanhadas por responsável técnico.

• 5 anos de garantia contratual.

Visual:

• Cards de métricas em fundo navy ou branco.

• Vídeos de cases abaixo, com legenda de localização.

• CTA após os cases.

Observação: onde houver números 00, manter como placeholder no HTML com comentário para troca antes de publicação.

### 07 | Sinais de que a fachada precisa de diagnóstico

Objetivo: ativar reconhecimento de problema.

Visual: grade de cards com foto real do problema.

Cards:

• Desgaste visual e perda de proteção superficial.

• Fissuras em revestimentos.

• Descolamento de revestimentos.

• Manchas de umidade e sinais de infiltração.

• Corrosão ou exposição de elementos estruturais.

CTA de contexto: Identifiquei sinais na fachada.

### 08 | Importância de avaliar no momento certo

Objetivo: converter educação em ação.

Layout: seção azul clara, texto à esquerda e checklist à direita.

Checklist:

• Entender com precisão o que está acontecendo na fachada.

• Evitar escolhas que não resolvem a causa do problema.

• Aumentar a durabilidade da solução aplicada.

CTA: Quero agendar um diagnóstico técnico.

### 09 | Quanto custa contratar uma empresa de pintura predial?

Objetivo: responder objeção de preço e reforçar custo de não agir.

Layout: texto editorial com card escuro lateral.

Recomendação de copy:

• Usar o argumento legal como exemplo de São Paulo capital, não como regra para todo o estado.

• Antes de publicar, validar o trecho jurídico com responsável técnico ou jurídico.

• Fechar com a lógica de investimento: proteger imóvel, reduzir risco e organizar manutenção.

### 10 | FAQ

Objetivo: capturar SEO, reduzir objeções e apoiar decisão.

Componente: accordion com details e summary.

Perguntas sugeridas:

• Qual é a frequência recomendada para a repintura da fachada de um prédio?

• Qual é a melhor época do ano para realizar pintura externa?

• Quais são os riscos de negligenciar a manutenção da fachada?

• Como é calculado o preço da pintura predial?

• O que um orçamento profissional deve incluir?

• Quais são as responsabilidades da gestão do condomínio?

### 11 | CTA final com formulário

Objetivo: converter usuários que chegaram ao fim da página.

Visual: painel escuro com foto operacional, overlay navy para preto, eyebrow branco com traço laranja, texto forte e card de formulário branco.

CTA: Agendar diagnóstico técnico.

Microcopy: Nossa equipe retorna com uma orientação inicial para definir os próximos passos.

## 5. Template replicável para outros serviços

Use este modelo de variáveis para novas páginas.

```json
{
  "service_slug": "pintura-predial",
  "service_category": "Condomínios",
  "service_name": "Pintura Predial",
  "hero_eyebrow": "12 anos de experiência | Atendimento em todo o estado de São Paulo | 5 anos de garantia contratual",
  "hero_title": "Sua fachada precisa de uma nova pintura. Sua gestão precisa de uma obra previsível.",
  "hero_description": "Uma obra de pintura predial vai muito além da renovação da fachada. Ela exige planejamento, comunicação, segurança, documentação e organização para acontecer com o menor impacto possível na rotina do condomínio.",
  "primary_cta": "Solicitar um diagnóstico técnico",
  "secondary_cta": "Quero um diagnóstico da minha fachada",
  "audience": "síndicos, administradoras e gestores prediais",
  "main_pain": "dificuldade de comparar propostas e prever o real escopo da obra",
  "main_outcome": "obra previsível, documentada e tecnicamente controlada",
  "proof_points": [
    "Equipe certificada NR 35",
    "ART e documentação técnica",
    "RDO Digital",
    "DataBook na entrega"
  ],
  "solution_cards": [],
  "method_steps": [],
  "symptom_cards": [],
  "faq_items": []
}
```

Para linhas de vida, por exemplo, troca-se o eixo de dor para conformidade, segurança de acesso e responsabilidade técnica. Para manutenção predial, troca-se para prevenção, diagnóstico e planejamento de intervenções.

## 6. Componentes usados

• `topbar`: padrão da home.

• `header`: transparente no hero, sticky branco ao rolar.

• `lp-hero`: variação de serviço com formulário.

• `eyebrow`: texto + traço laranja.

• `btn btn--primary`: CTA navy.

• `trust-strip`: faixa de confiança logo após o hero.

• `service-card`: cards de soluções com imagem opcional e entregáveis.

• `method-step`: etapa numerada com resultado.

• `metric-card`: número + legenda.

• `symptom-card`: foto + descrição curta.

• `accordion`: FAQ.

• `cta-panel`: painel escuro final.

• `lead-form`: formulário curto com labels, autocomplete e feedback.

• `footer`: padrão da home.

## 7. Regras de conteúdo para alta conversão

• O CTA principal deve aparecer no hero, após a seção de diagnóstico, após o método, após os cases e no CTA final.

• Cada CTA deve apontar para o mesmo destino lógico: diagnóstico técnico.

• Evitar CTAs genéricos como Saiba mais no fluxo de conversão principal.

• Usar prova técnica antes de formular pedido de contato: ART, NR 35, RDO, DataBook, responsável técnico e garantia.

• Reduzir campos do formulário no hero. Campos recomendados: nome, WhatsApp, condomínio ou empresa, cidade e mensagem curta.

• No mobile, usar barra sticky com CTA único: Agendar diagnóstico.

• Usar fotos reais de obras e patologias. Placeholder só no desenvolvimento.

• Não publicar métricas 00. Trocar por números reais ou remover a métrica.

## 8. Markdown de implementação para HTML

### 8.1 Wrapper da página

```html
<main class="service-lp service-lp--pintura-predial" data-template="service-lp-v1">
  <!-- Sections below -->
</main>
```

### 8.2 Hero

```html
<section class="lp-hero lp-hero--service" id="topo" aria-labelledby="hero-title">
  <div class="lp-hero__media" aria-hidden="true"></div>
  <div class="lp-hero__overlay" aria-hidden="true"></div>

  <div class="container lp-hero__grid">
    <div class="lp-hero__content">
      <p class="lp-hero__proof">12 anos de experiência | Atendimento em todo o estado de São Paulo | 5 anos de garantia contratual</p>
      <h1 id="hero-title">Sua fachada precisa de uma nova pintura. Sua gestão precisa de uma obra previsível.</h1>
      <p class="lp-hero__text">Uma obra de pintura predial vai muito além da renovação da fachada. Ela exige planejamento, comunicação, segurança, documentação e organização para acontecer com o menor impacto possível na rotina do condomínio.</p>
      <p class="lp-hero__text">Por isso, a LATITUD desenvolveu um método próprio que permite acompanhar cada etapa da execução com mais previsibilidade, transparência e controle, reduzindo a necessidade de intervenção do síndico e oferecendo mais segurança para a gestão durante toda a obra.</p>
      <a class="btn btn--primary btn--on-dark" href="#diagnostico-form">Solicitar um diagnóstico técnico</a>

      <ul class="lp-hero__checklist" aria-label="O que você acompanha durante toda a obra">
        <li>Cronograma estruturado</li>
        <li>Comunicação organizada</li>
        <li>Registro diário da execução</li>
        <li>Documentação técnica</li>
        <li>Entrega formal com DataBook</li>
      </ul>
    </div>

    <aside class="lead-card" aria-labelledby="lead-card-title">
      <p class="eyebrow eyebrow--compact">Diagnóstico técnico</p>
      <h2 id="lead-card-title">Receba uma avaliação da sua fachada</h2>
      <p>Conheça o escopo mais adequado para o seu condomínio antes de comparar propostas.</p>
      <form class="lead-form" id="diagnostico-form">
        <label for="nome">Nome</label>
        <input id="nome" name="nome" type="text" autocomplete="name" required>
        <label for="whatsapp">WhatsApp</label>
        <input id="whatsapp" name="whatsapp" type="tel" autocomplete="tel" required>
        <label for="condominio">Condomínio ou empresa</label>
        <input id="condominio" name="condominio" type="text" autocomplete="organization">
        <label for="cidade">Cidade</label>
        <input id="cidade" name="cidade" type="text" autocomplete="address-level2">
        <button class="btn btn--primary lead-form__submit" type="submit">Agendar diagnóstico técnico</button>
        <p class="lead-form__microcopy">Retornamos com uma orientação inicial sobre os próximos passos.</p>
      </form>
    </aside>
  </div>
</section>
```

### 8.3 Trust strip

```html
<section class="trust-strip" aria-label="Diferenciais técnicos da Latitud">
  <div class="container trust-strip__grid">
    <div class="trust-item">Equipe certificada NR 35</div>
    <div class="trust-item">Obras com responsável técnico</div>
    <div class="trust-item">ART e documentação técnica</div>
    <div class="trust-item">RDO Digital e DataBook</div>
  </div>
</section>
```

### 8.4 Decisão antes do orçamento

```html
<section class="section section--white" id="diagnostico">
  <div class="container">
    <div class="section-heading section-heading--split">
      <div>
        <p class="eyebrow">Diagnóstico antes do orçamento</p>
        <h2>Antes de contratar uma pintura predial, existe uma decisão muito mais importante.</h2>
      </div>
      <p>Como saber se o orçamento realmente contempla as necessidades da fachada?</p>
    </div>

    <div class="editorial-grid">
      <div class="editorial-copy">
        <p>Nem sempre propostas diferentes estão falando da mesma obra. Enquanto uma pode prever apenas a pintura da superfície, outra inclui o tratamento de fissuras, a correção de infiltrações, a preparação adequada do substrato, sistemas de impermeabilização e procedimentos exigidos pelas normas técnicas.</p>
        <p>Para quem não vive esse tipo de obra diariamente, identificar essas diferenças é um desafio. Uma decisão baseada apenas no menor preço pode significar custos adicionais, retrabalhos e problemas que voltam a aparecer pouco tempo depois da entrega.</p>
        <p>Por isso, a LATITUD inicia cada projeto com um diagnóstico técnico detalhado da fachada. Antes de apresentar qualquer proposta, avaliamos as condições reais da edificação, identificamos as patologias existentes e definimos um escopo compatível com as necessidades do condomínio.</p>
        <a class="btn btn--primary" href="#diagnostico-form">Quero um diagnóstico da minha fachada</a>
      </div>

      <aside class="insight-card">
        <h3>O orçamento certo começa com informação técnica.</h3>
        <ul class="checklist">
          <li>Patologias identificadas</li>
          <li>Escopo compatível com a fachada</li>
          <li>Proposta mais fácil de justificar ao conselho</li>
          <li>Menor risco de retrabalho durante a execução</li>
        </ul>
      </aside>
    </div>
  </div>
</section>
```

### 8.5 Soluções

```html
<section class="section section--blue-light" id="solucoes">
  <div class="container">
    <div class="section-heading section-heading--split">
      <div>
        <p class="eyebrow">Soluções para fachadas</p>
        <h2>Soluções desenvolvidas para proteger o patrimônio e dar mais segurança às decisões da gestão.</h2>
      </div>
      <p>Cada condomínio possui um histórico de manutenção, um tipo de revestimento e um conjunto de necessidades diferentes. Por isso, cada projeto começa com avaliação técnica.</p>
    </div>

    <div class="solution-grid">
      <article class="solution-card">
        <p class="tag">CONDOMÍNIOS</p>
        <h3>Diagnóstico Técnico de Fachada</h3>
        <p>Toda decisão mais segura começa com informação confiável.</p>
        <ul>
          <li>Inspeção técnica completa da fachada</li>
          <li>Registro fotográfico dos pavimentos e patologias</li>
          <li>Laudo técnico com ART</li>
          <li>Plano de intervenção priorizado</li>
        </ul>
      </article>

      <article class="solution-card">
        <p class="tag">CONDOMÍNIOS</p>
        <h3>Recuperação de Fachada Predial</h3>
        <p>Tratamos as causas antes do acabamento, corrigindo fissuras e recuperando revestimentos.</p>
        <ul>
          <li>Mapeamento técnico das patologias</li>
          <li>Tratamento de fissuras e juntas</li>
          <li>Recuperação dos revestimentos</li>
          <li>ART do engenheiro responsável</li>
        </ul>
      </article>

      <article class="solution-card">
        <p class="tag">CONDOMÍNIOS</p>
        <h3>Impermeabilização de Fachada</h3>
        <p>A impermeabilização atua nos pontos mais suscetíveis antes que os problemas evoluam.</p>
        <ul>
          <li>Inspeção dos pontos críticos</li>
          <li>Mapeamento de juntas, caixilhos, peitoris e sacadas</li>
          <li>Especificação técnica do sistema impermeabilizante</li>
          <li>Teste de estanqueidade após a execução</li>
        </ul>
      </article>

      <article class="solution-card solution-card--featured">
        <p class="tag">CONDOMÍNIOS</p>
        <h3>Pintura de Fachada</h3>
        <p>Uma pintura duradoura começa antes da aplicação da tinta, com diagnóstico, preparação e especificação correta.</p>
        <ul>
          <li>Diagnóstico técnico da fachada</li>
          <li>Especificação dos materiais</li>
          <li>Memorial descritivo completo</li>
          <li>Cronograma por setor</li>
          <li>Equipes certificadas em NR 35</li>
          <li>Laudo de conclusão com ART</li>
        </ul>
      </article>

      <article class="solution-card">
        <p class="tag">CONDOMÍNIOS</p>
        <h3>Retrofit de Fachadas</h3>
        <p>Renovação estética, técnica e construtiva para prolongar a vida útil da edificação.</p>
        <ul>
          <li>Atualização estética</li>
          <li>Substituição de revestimentos</li>
          <li>Melhorias construtivas</li>
          <li>Execução organizada e documentada</li>
        </ul>
      </article>
    </div>
  </div>
</section>
```

### 8.6 Método

```html
<section class="section section--white method-section" id="metodo">
  <div class="container">
    <div class="section-heading section-heading--split">
      <div>
        <p class="eyebrow">Método LATITUD</p>
        <h2>Método LATITUD de Execução Controlada</h2>
      </div>
      <p>Engenharia, planejamento e controle para que cada decisão da obra seja sustentada por critérios técnicos.</p>
    </div>

    <div class="method-grid">
      <div class="method-steps">
        <article class="method-step">
          <span>01.</span>
          <h3>Diagnóstico e Projetos Inteligentes</h3>
          <p>Inspeção completa da fachada, identificação de patologias, escopo técnico, memorial descritivo, especificação de materiais e ART.</p>
          <strong>Resultado: proposta construída sobre dados técnicos.</strong>
        </article>
        <article class="method-step">
          <span>02.</span>
          <h3>Kick-off e Governança da Comunicação</h3>
          <p>Definição de cronograma, plano de comunicação, documentação obrigatória, procedimentos de segurança e fluxos de aprovação.</p>
          <strong>Resultado: obra organizada desde o início.</strong>
        </article>
        <article class="method-step">
          <span>03.</span>
          <h3>Execução e Gestão Técnica da Obra</h3>
          <p>Procedimentos padronizados, inspeções, controles de qualidade e validações técnicas antes do avanço de cada etapa.</p>
          <strong>Resultado: menos retrabalho e mais segurança técnica.</strong>
        </article>
        <article class="method-step">
          <span>04.</span>
          <h3>Monitoramento em Tempo Real</h3>
          <p>RDO Digital com registros fotográficos, avanço físico, ocorrências, inspeções e histórico completo do projeto.</p>
          <strong>Resultado: acompanhamento contínuo sem depender de visitas frequentes.</strong>
        </article>
        <article class="method-step">
          <span>05.</span>
          <h3>Entrega Formal e DataBook</h3>
          <p>Consolidação de laudos, ART, registros fotográficos, memoriais, materiais aplicados, garantias e documentos da obra.</p>
          <strong>Resultado: prestação de contas, segurança jurídica e histórico técnico organizado.</strong>
        </article>
      </div>
      <aside class="method-visual" aria-label="Resumo visual do método Latitud 360">
        <div class="lat360-placeholder">LAT 360</div>
        <ul class="checklist">
          <li>RDO Digital</li>
          <li>Projetos e ART</li>
          <li>PMO e gestão de contratos</li>
          <li>Equipe de campo</li>
          <li>Segurança e comunicação</li>
        </ul>
      </aside>
    </div>
  </div>
</section>
```

### 8.7 Cases e métricas

```html
<section class="section section--blue-light" id="cases">
  <div class="container">
    <div class="section-heading section-heading--center">
      <p class="eyebrow eyebrow--center">Prova de execução</p>
      <h2>Cada obra comprova que planejamento e engenharia fazem diferença no resultado.</h2>
    </div>

    <div class="metrics-grid">
      <article class="metric-card"><strong>12+</strong><span>anos executando obras prediais</span></article>
      <article class="metric-card"><strong>00 mil</strong><span>m² revitalizados</span></article>
      <article class="metric-card"><strong>00+</strong><span>condomínios atendidos</span></article>
      <article class="metric-card"><strong>100%</strong><span>das obras acompanhadas por responsável técnico</span></article>
      <article class="metric-card"><strong>5 anos</strong><span>de garantia contratual</span></article>
    </div>

    <div class="case-video-grid">
      <article class="case-video"><div class="video-placeholder">Vídeo de case</div><p>Localização do case</p></article>
      <article class="case-video"><div class="video-placeholder">Vídeo de case</div><p>Localização do case</p></article>
      <article class="case-video"><div class="video-placeholder">Vídeo de case</div><p>Localização do case</p></article>
    </div>

    <div class="section-cta">
      <a class="btn btn--primary" href="#diagnostico-form">Quero agendar um diagnóstico</a>
    </div>
  </div>
</section>
```

### 8.8 Sinais de alerta

```html
<section class="section section--white" id="sinais">
  <div class="container">
    <div class="section-heading section-heading--split">
      <div>
        <p class="eyebrow">Sinais de alerta</p>
        <h2>Sinais de que a sua fachada pode estar precisando de um diagnóstico técnico antes que o problema evolua.</h2>
      </div>
      <p>Em muitos casos, os primeiros sinais de desgaste não representam apenas questões estéticas. Eles podem indicar processos técnicos que tendem a evoluir.</p>
    </div>

    <div class="symptom-grid">
      <article class="symptom-card"><div class="symptom-card__image"></div><h3>Desgaste visual e perda de proteção superficial</h3><p>Desbotamento, manchas e variação de tonalidade podem indicar perda de proteção.</p></article>
      <article class="symptom-card"><div class="symptom-card__image"></div><h3>Fissuras em revestimentos</h3><p>Podem indicar movimentações, falhas de execução ou degradação do revestimento.</p></article>
      <article class="symptom-card"><div class="symptom-card__image"></div><h3>Descolamento de revestimentos</h3><p>Indica perda de aderência entre camadas do sistema construtivo.</p></article>
      <article class="symptom-card"><div class="symptom-card__image"></div><h3>Manchas de umidade e sinais de infiltração</h3><p>Manchas escuras e alteração de cor podem indicar umidade ativa.</p></article>
      <article class="symptom-card"><div class="symptom-card__image"></div><h3>Corrosão ou exposição de elementos estruturais</h3><p>Quando o problema passa do nível superficial, exige recuperação técnica.</p></article>
    </div>
  </div>
</section>
```

### 8.9 Avaliação no momento certo

```html
<section class="section section--blue-light" id="avaliacao-tecnica">
  <div class="container diagnostic-grid">
    <div>
      <p class="eyebrow">Prevenção e planejamento</p>
      <h2>A importância de avaliar tecnicamente sua fachada no momento certo.</h2>
      <p>Fachadas são estruturas expostas continuamente à ação do tempo, variações climáticas, poluição e envelhecimento natural dos materiais.</p>
      <p>A avaliação técnica deve ser entendida como ferramenta de prevenção e planejamento da vida útil da edificação.</p>
      <a class="btn btn--primary" href="#diagnostico-form">Quero agendar um diagnóstico técnico</a>
    </div>
    <aside class="check-panel">
      <ul class="checklist checklist--large">
        <li>Entender com precisão o que está acontecendo na fachada</li>
        <li>Evitar escolhas que não resolvem a causa do problema</li>
        <li>Aumentar a durabilidade da solução aplicada na fachada</li>
      </ul>
    </aside>
  </div>
</section>
```

### 8.10 Objeção de custo

```html
<section class="section section--white" id="preco">
  <div class="container cost-grid">
    <div>
      <p class="eyebrow">Investimento e prevenção</p>
      <h2>Quanto custa contratar uma empresa de pintura predial?</h2>
      <p>Muitos síndicos ou gestores se preocupam com o orçamento para uma reforma de fachada. Mas a pergunta mais importante é outra: quanto custa não fazer essa manutenção?</p>
      <p>No Grupo LATITUD, transformamos essa obrigação em um investimento inteligente. Cuidamos da sua fachada para proteger seu imóvel, garantir tranquilidade e manter tudo em conformidade com critérios técnicos.</p>
      <p class="legal-note">Nota para publicação: validar o trecho legal com jurídico, especialmente porque a Lei Municipal nº 10.518/88 é referência da cidade de São Paulo.</p>
    </div>
    <aside class="dark-card">
      <h3>O risco de uma reforma emergencial costuma ser maior que o planejamento preventivo.</h3>
      <a class="btn btn--primary btn--on-dark" href="#diagnostico-form">Falar com um especialista</a>
    </aside>
  </div>
</section>
```

### 8.11 FAQ

```html
<section class="section section--white faq-section" id="faq">
  <div class="container faq-grid">
    <div>
      <p class="eyebrow">Dúvidas frequentes</p>
      <h2>Tudo que você precisa saber antes de contratar uma empresa de pintura predial.</h2>
    </div>
    <div class="accordion">
      <details>
        <summary>Qual é a frequência recomendada para a repintura da fachada de um prédio?</summary>
        <p>A recomendação técnica e legal pode variar conforme cidade, estado de conservação e revestimento. Em São Paulo capital, a copy pode citar a Lei Municipal nº 10.518/88 após validação jurídica.</p>
      </details>
      <details>
        <summary>Qual é a melhor época do ano para realizar um projeto de pintura externa?</summary>
        <p>O período de menor incidência de chuvas tende a favorecer aplicação e cura dos materiais, mas o planejamento técnico permite avaliar a melhor janela para cada condomínio.</p>
      </details>
      <details>
        <summary>Quais são os riscos de negligenciar a manutenção da fachada?</summary>
        <p>A negligência pode levar a infiltrações, desprendimentos, maior custo corretivo, desvalorização do patrimônio e riscos de segurança.</p>
      </details>
      <details>
        <summary>Como é calculado o preço da pintura predial?</summary>
        <p>O preço depende da área, complexidade, estado da superfície, sistema de pintura, acesso, segurança, documentação técnica e nível de recuperação necessário.</p>
      </details>
      <details>
        <summary>O que um orçamento profissional deve incluir?</summary>
        <p>Memorial descritivo, especificação de materiais, cronograma, documentação técnica, ART quando aplicável, escopo de segurança e termos de garantia.</p>
      </details>
      <details>
        <summary>Quais são as responsabilidades da gestão do condomínio antes e durante o projeto?</summary>
        <p>A gestão deve alinhar aprovações internas, comunicar condôminos, apoiar o acesso às áreas necessárias e acompanhar os fluxos definidos no plano da obra.</p>
      </details>
    </div>
  </div>
</section>
```

### 8.12 CTA final

```html
<section class="section section--white" id="contato">
  <div class="container">
    <div class="cta-panel cta-panel--with-form">
      <div class="cta-panel__media" aria-hidden="true"></div>
      <div class="cta-panel__overlay" aria-hidden="true"></div>
      <div class="cta-panel__content">
        <p class="eyebrow eyebrow--on-dark">Diagnóstico técnico</p>
        <h2>Agende uma avaliação técnica da sua fachada.</h2>
        <p>Nossa equipe realiza a análise inicial e orienta os próximos passos para uma intervenção tecnicamente fundamentada e adequada à realidade da sua edificação.</p>
      </div>
      <form class="lead-form lead-form--panel">
        <label for="final-nome">Nome</label>
        <input id="final-nome" name="nome" type="text" autocomplete="name" required>
        <label for="final-whatsapp">WhatsApp</label>
        <input id="final-whatsapp" name="whatsapp" type="tel" autocomplete="tel" required>
        <label for="final-mensagem">Conte rapidamente o que acontece na fachada</label>
        <textarea id="final-mensagem" name="mensagem" rows="4"></textarea>
        <button class="btn btn--primary lead-form__submit" type="submit">Quero agendar um diagnóstico técnico</button>
      </form>
    </div>
  </div>
</section>
```

## 9. SEO e tracking

### SEO recomendado

• Title: Pintura Predial com Diagnóstico Técnico em SP | Grupo Latitud

• Description: Pintura de fachadas prediais com diagnóstico técnico, recuperação, impermeabilização, equipes NR 35, ART, RDO Digital e DataBook.

• H1 único no hero.

• H2s por seção, mantendo intenção de busca: pintura predial, diagnóstico de fachada, recuperação de fachada, impermeabilização de fachada, empresa de pintura predial.

• FAQ com `FAQPage` em JSON-LD, após revisão final da copy.

### Eventos de conversão

```json
{
  "cta_hero_click": "Solicitar um diagnóstico técnico",
  "form_hero_submit": "Agendar diagnóstico técnico",
  "cta_diagnostico_click": "Quero um diagnóstico da minha fachada",
  "cta_cases_click": "Quero agendar um diagnóstico",
  "cta_final_submit": "Quero agendar um diagnóstico técnico",
  "whatsapp_click": "Botão flutuante WhatsApp"
}
```

## 10. Pendências antes de layout final

• Substituir métricas 00 por números reais ou remover.

• Definir fotos reais para hero, cards de solução, sintomas e CTA final.

• Definir se o formulário será integrado a CRM, WhatsApp, e-mail ou automação.

• Validar o trecho legal com jurídico antes de publicar.

• Confirmar se a LP será focada em cidade de São Paulo, estado de São Paulo ou Brasil, para ajustar copy legal e SEO local.

• Exportar diagrama LAT 360 em SVG ou PNG 2x.

• Revisar final da copy para evitar repetição e manter a leitura escaneável.
