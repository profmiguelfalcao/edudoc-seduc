// ============================================================
// EduDoc SEDUC — app.js — lógica compartilhada
// ============================================================

// Mapeia cor da turma para classe CSS de badge
function badgeClass(cor) {
  const map = { blue: 'badge-blue', purple: 'badge-purple', teal: 'badge-teal', amber: 'badge-amber', green: 'badge-green' };
  return map[cor] || 'badge-blue';
}

// Mapeia tipo de aula para classe CSS
function tipoClass(tipo) {
  const map = { teoria: 'tipo-teoria', pratica: 'tipo-pratica', projeto: 'tipo-projeto', aval: 'tipo-aval' };
  return map[tipo] || 'tipo-teoria';
}

// Mapeia tipo de aula para label
function tipoLabel(tipo) {
  const map = { teoria: 'Teoria', pratica: 'Prática/Lab', projeto: 'Projeto', aval: 'Avaliação' };
  return map[tipo] || tipo;
}

// Data formatada em português
function dataHoje() {
  return new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Renderiza quadro verde
function renderQuadro(linhas, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = linhas.map(l => `<p>${l}</p>`).join('');
}

// Renderiza guia de ministração
function renderGuia(guia, tempos, titulo, sub, containerId) {
  const panel = document.getElementById(containerId);
  if (!panel) return;

  document.getElementById('guia-title').textContent = 'Como ministrar — ' + titulo;
  document.getElementById('guia-sub').textContent = sub;

  const etapasEl = document.getElementById('guia-etapas');
  if (etapasEl && guia && guia.length) {
    etapasEl.innerHTML = guia.map(e => `
      <div class="etapa">
        <div class="etapa-num" style="background:${e.bg};color:${e.cor}">${e.num}</div>
        <div style="flex:1">
          <div class="etapa-titulo">${e.titulo}</div>
          <div class="etapa-desc">${e.desc}</div>
          <div class="etapa-dica" style="background:${e.dicaBg};color:${e.dicaCor}">
            <i class="ti ti-bulb" style="font-size:12px;vertical-align:-1px;margin-right:4px" aria-hidden="true"></i>${e.dica}
          </div>
        </div>
      </div>`).join('');
  } else if (etapasEl) {
    etapasEl.innerHTML = `<div style="padding:1rem;color:var(--text-muted);font-size:12px;text-align:center">
      <i class="ti ti-sparkles" style="font-size:20px;display:block;margin-bottom:6px;opacity:0.4"></i>
      Clique em "Pedir ao Claude" para gerar o roteiro desta aula com IA.
    </div>`;
  }

  const tempoEl = document.getElementById('guia-tempo');
  if (tempoEl && tempos && tempos.length) {
    tempoEl.innerHTML = '<span class="tempo-label">Distribuição:</span>' +
      tempos.map(t => `<span class="tempo-item" style="background:${t.bg};color:${t.c}">${t.label}: ${t.t}</span>`).join('');
  }

  panel.style.display = 'block';
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Esconde guia
function esconderGuia(containerId) {
  const el = document.getElementById(containerId);
  if (el) el.style.display = 'none';
}
