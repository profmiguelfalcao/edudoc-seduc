// ============================================================
// SEUS DADOS — edite aqui suas turmas, matérias e conteúdos
// ============================================================

const TURMAS = [
  {
    id: 'web',
    materia: 'Programação para Web',
    ano: '3º Ano',
    curso: 'Informática para Internet',
    badge: 'Web',
    cor: 'blue',
    icone: 'ti-world',
    quadro: [
      'PROGRAMAÇÃO PARA WEB — 3º ANO',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '1. HTML5 — Estrutura semântica',
      '   <header> | <main> | <section> | <footer>',
      '2. CSS3 — Flexbox e Grid',
      '   display: flex | display: grid',
      '3. JavaScript — Manipulação do DOM',
      '   document.querySelector(selector)'
    ],
    atividade: 'Criar página web responsiva com HTML5 e CSS3 — Projeto 1',
    plano: 'Gere um plano de aula completo no formato SEDUC-PI para Programação para Web, 3º Ano de Informática para Internet. Tema: HTML5 e CSS3 — estrutura de páginas responsivas. Competência do PPC: construir páginas web estruturadas. Inclua: identificação, ementa, objetivos, metodologia, recursos, avaliação AQL e AQT conforme IN SUPEN 4/2024.',
    guia: 'Gere um roteiro detalhado passo a passo (60 min) de como ministrar a aula de HTML5 e CSS3 para o 3º Ano de Informática para Internet (SEDUC-PI). Inclua: divisão de tempo, falas sugeridas, como conduzir no laboratório, dicas de gestão e como registrar participação para AQL.'
  },
  {
    id: 'design',
    materia: 'Design e Acessibilidade',
    ano: '3º Ano',
    curso: 'Informática para Internet',
    badge: 'Design',
    cor: 'purple',
    icone: 'ti-palette',
    quadro: [
      'DESIGN E ACESSIBILIDADE — 3º ANO',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '1. UX vs UI — diferenças',
      '   UX: experiência | UI: interface visual',
      '2. WCAG 2.1 — Diretrizes',
      '   Perceptível | Operável | Compreensível',
      '3. Cores e contraste',
      '   Mín. 4.5:1 para texto normal'
    ],
    atividade: 'Avaliar acessibilidade de um site real usando critérios WCAG 2.1',
    plano: 'Gere um plano de aula completo no formato SEDUC-PI para Design e Acessibilidade, 3º Ano de Informática para Internet. Tema: UI/UX e diretrizes WCAG. Competência PPC: projetar interfaces acessíveis. Inclua AQL e AQT conforme IN SUPEN 4/2024.',
    guia: 'Gere roteiro passo a passo (60 min) de como ministrar aula de Design e Acessibilidade Web para 3º Ano (SEDUC-PI). Inclua divisão de tempo, falas sugeridas, atividades práticas e registro AQL.'
  },
  {
    id: 'redes',
    materia: 'Redes de Computadores',
    ano: 'Curso Técnico',
    curso: 'Técnico em Redes',
    badge: 'Redes',
    cor: 'teal',
    icone: 'ti-network',
    quadro: [
      'REDES DE COMPUTADORES',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'Modelo OSI — 7 Camadas:',
      '  7. Aplicação  | 6. Apresentação',
      '  5. Sessão     | 4. Transporte',
      '  3. Rede       | 2. Enlace | 1. Física',
      'TCP/IP: Aplic. | Transporte | Internet | Acesso'
    ],
    atividade: 'Configurar endereçamento IP e identificar camadas OSI em topologia de rede',
    plano: 'Gere um plano de aula completo no formato SEDUC-PI para Redes de Computadores, Curso Técnico em Redes. Tema: Modelo OSI e TCP/IP. Competência PPC: identificar camadas e protocolos. Inclua AQL e AQT conforme IN SUPEN 4/2024.',
    guia: 'Gere roteiro passo a passo (60 min) de como ministrar aula de Redes de Computadores — Modelo OSI para curso técnico (SEDUC-PI). Inclua divisão de tempo, analogias do cotidiano, atividades e registro AQL.'
  },
  {
    id: 'ia-inf',
    materia: 'Inteligência Artificial',
    ano: '3º Ano',
    curso: 'Informática para Internet',
    badge: 'IA',
    cor: 'amber',
    icone: 'ti-brain',
    quadro: [
      'INTELIGÊNCIA ARTIFICIAL — 3º ANO',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '1. O que é IA?',
      '   Simulação da inteligência humana',
      '2. Machine Learning',
      '   Supervisionado | Não-supervisionado | Reforço',
      '3. Aplicações reais',
      '   ChatGPT | Reconhecimento facial | Diagnóstico'
    ],
    atividade: 'Identificar e categorizar aplicações de IA no cotidiano — mapa mental colaborativo',
    plano: 'Gere um plano de aula completo no formato SEDUC-PI para Inteligência Artificial, 3º Ano de Informática para Internet. Tema: Machine Learning — conceitos e aplicações práticas. Competência PPC: compreender fundamentos do aprendizado de máquina. Inclua AQL e AQT conforme IN SUPEN 4/2024.',
    guia: 'Gere roteiro passo a passo (60 min) de como ministrar aula de Inteligência Artificial e Machine Learning para 3º Ano de Informática (SEDUC-PI). Inclua divisão de tempo, exemplos do cotidiano dos alunos, atividades e registro AQL.'
  },
  {
    id: 'ia-farm',
    materia: 'Inteligência Artificial',
    ano: '1º Ano',
    curso: 'Farmácia',
    badge: 'IA',
    cor: 'amber',
    icone: 'ti-brain',
    quadro: [
      'IA APLICADA À FARMÁCIA — 1º ANO',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '1. IA na saúde',
      '   Diagnóstico | Triagem | Descoberta de fármacos',
      '2. Exemplos reais',
      '   AlphaFold — predição de proteínas',
      '   IA em dispensação automática',
      '3. Ética e limitações',
      '   Privacidade | Viés algorítmico'
    ],
    atividade: 'Pesquisar e apresentar um exemplo real de IA aplicada à farmácia ou saúde',
    plano: 'Gere um plano de aula completo no formato SEDUC-PI para Inteligência Artificial, 1º Ano do curso de Farmácia. Tema: IA aplicada à farmácia e saúde. Competência PPC: reconhecer aplicações de IA no contexto farmacêutico. Inclua AQL e AQT conforme IN SUPEN 4/2024.',
    guia: 'Gere roteiro passo a passo (60 min) de como ministrar aula de IA aplicada à Farmácia para 1º Ano (SEDUC-PI). Inclua divisão de tempo, contextualização para a área da saúde, atividades práticas e registro AQL.'
  },
  {
    id: 'ia-enf',
    materia: 'Inteligência Artificial',
    ano: '1º Ano',
    curso: 'Enfermagem B',
    badge: 'IA',
    cor: 'amber',
    icone: 'ti-brain',
    quadro: [
      'IA APLICADA À ENFERMAGEM — 1º ANO',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '1. Monitoramento remoto',
      '   Wearables → dados vitais em tempo real',
      '2. Alertas inteligentes',
      '   IA identifica padrões de risco no paciente',
      '3. Prontuário eletrônico',
      '   Sugestão de condutas baseada em dados'
    ],
    atividade: 'Mapear tecnologias de IA usadas em hospitais — pesquisa e discussão em grupo',
    plano: 'Gere um plano de aula completo no formato SEDUC-PI para Inteligência Artificial, 1º Ano de Enfermagem B. Tema: IA aplicada à enfermagem e monitoramento de pacientes. Competência PPC: relacionar ferramentas de IA ao cotidiano da enfermagem. Inclua AQL e AQT conforme IN SUPEN 4/2024.',
    guia: 'Gere roteiro passo a passo (60 min) de como ministrar aula de IA aplicada à Enfermagem para 1º Ano (SEDUC-PI). Inclua divisão de tempo, exemplos de wearables e monitoramento, atividades práticas e registro AQL.'
  },
  {
    id: 'ia-seg',
    materia: 'Inteligência Artificial',
    ano: '1º Ano',
    curso: 'Segurança do Trabalho',
    badge: 'IA',
    cor: 'amber',
    icone: 'ti-brain',
    quadro: [
      'IA NA SEGURANÇA DO TRABALHO — 1º ANO',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '1. Visão computacional',
      '   Detecta ausência de EPI em tempo real',
      '2. Predição de acidentes',
      '   Dados históricos → mapa de risco',
      '3. Geração de laudos',
      '   Relatórios automáticos NR'
    ],
    atividade: 'Analisar um caso de uso de IA para prevenção de acidentes em ambiente industrial',
    plano: 'Gere um plano de aula completo no formato SEDUC-PI para Inteligência Artificial, 1º Ano de Segurança do Trabalho. Tema: IA aplicada à prevenção de acidentes. Competência PPC: aplicar conceitos de IA à prevenção de riscos ocupacionais. Inclua AQL e AQT conforme IN SUPEN 4/2024.',
    guia: 'Gere roteiro passo a passo (60 min) de como ministrar aula de IA aplicada à Segurança do Trabalho para 1º Ano (SEDUC-PI). Inclua divisão de tempo, exemplos de câmeras inteligentes e EPIs, atividades e registro AQL.'
  }
];
