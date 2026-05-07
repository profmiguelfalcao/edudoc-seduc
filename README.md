# EduDoc SEDUC — Plataforma Docente

Plataforma local para professor da SEDUC-PI gerenciar turmas,
sequência didática, planos de aula e guias de ministração.

---

## Como abrir no VS Code e usar

### Passo 1 — Abrir a pasta no VS Code
1. Abra o VS Code
2. Clique em **File → Open Folder**
3. Selecione a pasta `edudoc-seduc`

### Passo 2 — Instalar a extensão Live Server
1. No VS Code, clique no ícone de extensões (Ctrl+Shift+X)
2. Pesquise: **Live Server**
3. Instale a extensão de **Ritwick Dey**

### Passo 3 — Abrir o site no navegador
1. Clique com o botão direito no arquivo `index.html`
2. Clique em **"Open with Live Server"**
3. O site abre automaticamente no navegador!

---

## Estrutura dos arquivos

```
edudoc-seduc/
  index.html        → Agenda do dia + suas 8 turmas
  sequencia.html    → Sequência didática anual (40 semanas)
  style.css         → Estilos visuais (cores, fontes, layout)
  app.js            → Lógica compartilhada entre páginas
  dados/
    turmas.js       → SUAS TURMAS — edite aqui!
    aulas.js        → AS 40 SEMANAS — edite aqui!
  README.md         → Este arquivo
```

---

## Como editar suas turmas

Abra o arquivo `dados/turmas.js` no VS Code.

Cada turma tem esta estrutura:
```javascript
{
  id: 'web',                          // identificador único
  materia: 'Programação para Web',    // nome da matéria
  ano: '3º Ano',                      // ano/série
  curso: 'Informática para Internet', // nome do curso
  badge: 'Web',                       // etiqueta curta
  cor: 'blue',                        // cor: blue|purple|teal|amber|green
  icone: 'ti-world',                  // ícone Tabler Icons
  quadro: [ ... ],                    // linhas do conteúdo do quadro
  atividade: '...',                   // atividade sugerida
  plano: '...',                       // prompt para gerar plano de aula
  guia: '...',                        // prompt para gerar guia de ministração
}
```

Para **adicionar uma nova turma**, copie um bloco existente,
altere os dados e adicione ao array TURMAS.

---

## Como editar as semanas letivas

Abra o arquivo `dados/aulas.js`.

Cada semana tem:
```javascript
{
  sem: 1,                    // número da semana (1-40)
  tri: 1,                    // trimestre (1, 2 ou 3)
  tema: '...',               // tema da aula
  tipo: 'teoria',            // teoria | pratica | projeto | aval
  comp: '...',               // competência do PPC
  hab: '...',                // habilidade do PPC
  aval: '...',               // forma de avaliação
  rec: '...',                // recursos necessários
  quadro: [ ... ],           // linhas do quadro verde
  guia: [ ... ],             // etapas do guia (null = gerar com IA)
  tempos: [ ... ],           // distribuição de tempo
}
```

---

## Usando com o Claude Code no VS Code

Com o Claude Code instalado, abra o terminal do VS Code
(Ctrl+`) e digite `claude`. Então você pode pedir:

> "Adicione uma nova turma de Banco de Dados para o 2º Ano
>  de Informática no arquivo dados/turmas.js"

> "Atualize o tema da semana 5 em dados/aulas.js para
>  incluir também display grid"

> "Mude a cor do sidebar para azul escuro #1a237e"

---

## Turmas cadastradas

1. Programação para Web — 3º Ano · Inf. Internet
2. Design e Acessibilidade — 3º Ano · Inf. Internet
3. Redes de Computadores — Curso Técnico em Redes
4. Inteligência Artificial — 3º Ano · Inf. Internet
5. Inteligência Artificial — 1º Ano · Farmácia
6. Inteligência Artificial — 1º Ano · Enfermagem B
7. Inteligência Artificial — 1º Ano · Segurança do Trabalho

---

Desenvolvido com Claude — Anthropic
SEDUC-PI · PPC 2024 · IN SUPEN Nº 4/2024
