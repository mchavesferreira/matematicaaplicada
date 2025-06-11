// Dados da aplicação (normalmente viriam de um backend)
const dadosApp = {
  "niveis": {
    "1": {
      "titulo": "Primeiros Passos",
      "descricao": "Aprenda comandos básicos de movimento",
      "objetivo": "Mova o personagem para a posição objetivo",
      "blocos_disponiveis": ["mover_frente", "virar_esquerda", "virar_direita"],
      "grid": {
        "player_start": [0, 0],
        "objetivo": [3, 0],
        "obstaculos": [],
        "itens": []
      },
      "conceitos": ["sequência", "comando básico"]
    },
    "2": {
      "titulo": "Fazendo Curvas",
      "descricao": "Aprenda a mudar de direção",
      "objetivo": "Navegue até o objetivo fazendo curvas",
      "blocos_disponiveis": ["mover_frente", "virar_esquerda", "virar_direita"],
      "grid": {
        "player_start": [0, 0],
        "objetivo": [2, 2],
        "obstaculos": [],
        "itens": []
      },
      "conceitos": ["direção", "navegação"]
    },
    "3": {
      "titulo": "Coletando Itens",
      "descricao": "Aprenda a coletar itens no caminho",
      "objetivo": "Colete o item e chegue ao objetivo",
      "blocos_disponiveis": ["mover_frente", "virar_esquerda", "virar_direita", "coletar"],
      "grid": {
        "player_start": [0, 0],
        "objetivo": [4, 0],
        "obstaculos": [],
        "itens": [[2, 0]]
      },
      "conceitos": ["ação", "coleta"]
    },
    "4": {
      "titulo": "Repetição",
      "descricao": "Use loops para repetir ações",
      "objetivo": "Use repetição para chegar ao objetivo eficientemente",
      "blocos_disponiveis": ["mover_frente", "virar_esquerda", "virar_direita", "repetir"],
      "grid": {
        "player_start": [0, 0],
        "objetivo": [6, 0],
        "obstaculos": [],
        "itens": []
      },
      "conceitos": ["loop", "repetição", "eficiência"]
    },
    "5": {
      "titulo": "Desafio Final",
      "descricao": "Combine todos os conceitos aprendidos",
      "objetivo": "Navegue através dos obstáculos, colete itens e chegue ao objetivo",
      "blocos_disponiveis": ["mover_frente", "virar_esquerda", "virar_direita", "coletar", "repetir"],
      "grid": {
        "player_start": [0, 0],
        "objetivo": [5, 5],
        "obstaculos": [[2, 1], [3, 2], [1, 3]],
        "itens": [[1, 1], [4, 3]]
      },
      "conceitos": ["integração", "resolução de problemas"]
    }
  },
  "blocos_info": {
    "mover_frente": {
      "nome": "Mover para Frente",
      "cor": "#4CAF50",
      "icone": "↑",
      "descricao": "Move o personagem uma posição para frente na direção atual"
    },
    "virar_esquerda": {
      "nome": "Virar à Esquerda",
      "cor": "#2196F3",
      "icone": "↺",
      "descricao": "Gira o personagem 90° para a esquerda"
    },
    "virar_direita": {
      "nome": "Virar à Direita",
      "cor": "#2196F3",
      "icone": "↻",
      "descricao": "Gira o personagem 90° para a direita"
    },
    "coletar": {
      "nome": "Coletar Item",
      "cor": "#FF9800",
      "icone": "★",
      "descricao": "Coleta um item na posição atual do personagem"
    },
    "repetir": {
      "nome": "Repetir",
      "cor": "#9C27B0",
      "icone": "🔄",
      "descricao": "Repete os comandos internos um número específico de vezes"
    }
  },
  "licoes_ajuda": {
    "conceitos_basicos": {
      "titulo": "Conceitos Básicos de Programação",
      "conteudo": [
        {
          "topico": "O que é Programação?",
          "texto": "Programação é o processo de criar instruções para que um computador execute tarefas específicas. É como dar uma receita detalhada para o computador seguir."
        },
        {
          "topico": "Algoritmos",
          "texto": "Um algoritmo é uma sequência de passos organizados para resolver um problema. É como uma receita de bolo - você precisa seguir os passos na ordem correta para obter o resultado desejado."
        },
        {
          "topico": "Sequência",
          "texto": "Na programação, a ordem das instruções importa muito. Os comandos são executados um após o outro, em sequência, do primeiro ao último."
        }
      ]
    },
    "pensamento_computacional": {
      "titulo": "Pensamento Computacional",
      "conteudo": [
        {
          "topico": "Decomposição",
          "texto": "Quebrar um problema grande em partes menores e mais gerenciáveis. É mais fácil resolver vários problemas pequenos do que um problema gigante."
        },
        {
          "topico": "Reconhecimento de Padrões",
          "texto": "Identificar semelhanças e repetições em problemas. Quando você reconhece um padrão, pode usar a mesma solução em situações similares."
        },
        {
          "topico": "Abstração",
          "texto": "Focar nos detalhes importantes e ignorar informações desnecessárias. É como usar um mapa - você não precisa ver cada árvore, apenas as ruas principais."
        }
      ]
    },
    "estruturas_controle": {
      "titulo": "Estruturas de Controle",
      "conteudo": [
        {
          "topico": "Loops (Repetição)",
          "texto": "Loops permitem repetir uma ação várias vezes sem escrever o mesmo código repetidamente. É muito útil quando você quer fazer a mesma coisa muitas vezes."
        },
        {
          "topico": "Condicionais",
          "texto": "Permitem que o programa tome decisões baseadas em condições. Por exemplo: 'SE chover, ENTÃO leve guarda-chuva'."
        },
        {
          "topico": "Funções",
          "texto": "Blocos de código reutilizáveis que executam uma tarefa específica. É como ter um botão que executa uma série de ações quando pressionado."
        }
      ]
    },
    "debugging": {
      "titulo": "Depuração (Debugging)",
      "conteudo": [
        {
          "topico": "O que são Bugs?",
          "texto": "Bugs são erros no código que fazem o programa não funcionar como esperado. O nome vem de quando um inseto real causou problemas em um computador antigo!"
        },
        {
          "topico": "Como Encontrar Bugs",
          "texto": "Execute seu código passo a passo, observe o que acontece e compare com o que deveria acontecer. Quando encontrar algo diferente, você achou o bug!"
        },
        {
          "topico": "Estratégias de Depuração",
          "texto": "1. Leia seu código cuidadosamente. 2. Execute passo a passo. 3. Teste com exemplos simples primeiro. 4. Peça ajuda quando necessário."
        }
      ]
    },
    "como_usar": {
      "titulo": "Como Usar Esta Plataforma",
      "conteudo": [
        {
          "topico": "Selecionando Blocos",
          "texto": "Arraste os blocos da paleta à esquerda para a área de construção no centro. Cada bloco representa um comando que o personagem irá executar."
        },
        {
          "topico": "Organizando Blocos",
          "texto": "Conecte os blocos em sequência, de cima para baixo. O personagem executará os comandos na ordem que você organizou."
        },
        {
          "topico": "Executando o Programa",
          "texto": "Clique no botão 'Executar' para ver o personagem seguir seus comandos. Se algo der errado, você pode parar e reorganizar os blocos."
        },
        {
          "topico": "Dicas de Sucesso",
          "texto": "1. Planeje antes de programar. 2. Comece simples e vá aumentando a complexidade. 3. Teste frequentemente. 4. Não tenha medo de errar - erros são parte do aprendizado!"
        }
      ]
    }
  }
};

// Variáveis globais
let nivelAtual = 1;
let programaEmExecucao = false;
let playerPosicao = [0, 0];
let playerDirecao = 0; // 0:cima, 1:direita, 2:baixo, 3:esquerda
let itensColetados = [];
let sequenciaExecucao = [];
let indiceExecucao = 0;
let intervaloExecucao = null;
let blocosArrastados = 0;
let tempBlocoRepetir = null;

// Inicialização da aplicação
document.addEventListener("DOMContentLoaded", () => {
    iniciarApp();
});

// Função principal de inicialização
function iniciarApp() {
    // Configurar eventos da tela inicial
    document.querySelectorAll('.nivel-card').forEach(card => {
        card.addEventListener('click', () => {
            const nivel = card.getAttribute('data-nivel');
            carregarNivel(nivel);
        });
    });

    // Configurar botões de navegação
    document.getElementById('btn-voltar').addEventListener('click', voltarParaMenu);
    document.getElementById('btn-ajuda-inicial').addEventListener('click', abrirMenuAjuda);
    document.getElementById('btn-ajuda').addEventListener('click', abrirMenuAjuda);
    document.getElementById('fechar-ajuda').addEventListener('click', fecharMenuAjuda);
    document.getElementById('modal-overlay').addEventListener('click', fecharMenuAjuda);
    
    // Botões de sucesso
    document.getElementById('btn-proximo-nivel').addEventListener('click', irParaProximoNivel);
    document.getElementById('btn-repetir-nivel').addEventListener('click', repetirNivelAtual);
    document.getElementById('btn-menu-principal').addEventListener('click', voltarParaMenu);
    
    // Botões de controle de execução
    document.getElementById('btn-executar').addEventListener('click', executarPrograma);
    document.getElementById('btn-parar').addEventListener('click', pararExecucao);
    document.getElementById('btn-reset').addEventListener('click', resetarNivel);
    
    // Configurar botões do modal repetir
    document.getElementById('fechar-repetir').addEventListener('click', () => {
        fecharModal('modal-repetir');
        tempBlocoRepetir = null;
    });
    document.getElementById('cancelar-repetir').addEventListener('click', () => {
        fecharModal('modal-repetir');
        tempBlocoRepetir = null;
    });
    document.getElementById('confirmar-repetir').addEventListener('click', criarBlocoRepetir);
    
    // Configurar abas do menu de ajuda
    document.querySelectorAll('.btn-secao-ajuda').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const secao = e.target.getAttribute('data-secao');
            document.querySelectorAll('.btn-secao-ajuda').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            carregarConteudoAjuda(secao);
        });
    });
    
    // Carregar o conteúdo inicial da ajuda
    carregarConteudoAjuda('conceitos_basicos');
    
    // Configurar zona de drop inicial
    configurarZonaDrop();
}

// Funções de navegação e interface
function carregarNivel(nivel) {
    nivelAtual = parseInt(nivel);
    const dadosNivel = dadosApp.niveis[nivel];
    
    // Atualizar informações do nível
    document.getElementById('nivel-atual').textContent = `Nível ${nivel}`;
    document.getElementById('nivel-titulo').textContent = dadosNivel.titulo;
    document.getElementById('objetivo-descricao').textContent = dadosNivel.objetivo;
    
    // Limpar e configurar a área de construção
    const zonaConstrucao = document.getElementById('zona-construcao');
    zonaConstrucao.innerHTML = '<div class="dica-construcao">Arraste os blocos aqui para programar</div>';
    document.getElementById('total-blocos').textContent = '0';
    blocosArrastados = 0;
    
    // Carregar blocos disponíveis
    carregarBlocosDisponiveis(dadosNivel.blocos_disponiveis);
    
    // Configurar o grid do jogo
    configurarGrid(dadosNivel.grid);
    
    // Resetar estado de execução
    programaEmExecucao = false;
    playerPosicao = [...dadosNivel.grid.player_start];
    playerDirecao = 0;
    itensColetados = [];
    
    // Mostrar a interface principal
    document.getElementById('tela-inicial').classList.add('hidden');
    document.getElementById('interface-principal').classList.remove('hidden');
    
    // Atualizar o status de execução
    atualizarStatusExecucao('Pronto para executar', 'pronto');
    
    // Reconfigurar eventos de drag and drop
    configurarZonaDrop();
}

function voltarParaMenu() {
    // Parar qualquer execução em andamento
    pararExecucao();
    
    // Mostrar a tela inicial
    document.getElementById('interface-principal').classList.add('hidden');
    document.getElementById('tela-inicial').classList.remove('hidden');
}

function abrirMenuAjuda() {
    document.getElementById('menu-ajuda').classList.remove('hidden');
}

function fecharMenuAjuda() {
    document.getElementById('menu-ajuda').classList.add('hidden');
}

function fecharModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function abrirModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function irParaProximoNivel() {
    fecharModal('modal-sucesso');
    if (nivelAtual < 5) {
        carregarNivel(nivelAtual + 1);
    } else {
        // Se estiver no último nível, voltar para o menu
        voltarParaMenu();
    }
}

function repetirNivelAtual() {
    fecharModal('modal-sucesso');
    carregarNivel(nivelAtual);
}

// Funções para carregar e configurar elementos
function carregarBlocosDisponiveis(blocosTipos) {
    const containerBlocos = document.getElementById('blocos-disponiveis');
    containerBlocos.innerHTML = '';
    
    blocosTipos.forEach(tipo => {
        const infoBloco = dadosApp.blocos_info[tipo];
        const bloco = document.createElement('div');
        bloco.className = 'bloco';
        bloco.setAttribute('data-tipo', tipo);
        bloco.setAttribute('draggable', 'true');
        bloco.style.backgroundColor = infoBloco.cor;
        
        bloco.innerHTML = `
            <div class="bloco-icone">${infoBloco.icone}</div>
            <div class="bloco-nome">${infoBloco.nome}</div>
        `;
        
        // Configurar eventos de drag para este bloco específico
        bloco.addEventListener('dragstart', handleDragStart);
        bloco.addEventListener('dragend', handleDragEnd);
        
        containerBlocos.appendChild(bloco);
    });
}

function configurarGrid(gridData) {
    const gridContainer = document.getElementById('grid-jogo');
    gridContainer.innerHTML = '';
    
    // Criar grid 8x8
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.setAttribute('data-row', i);
            cell.setAttribute('data-col', j);
            gridContainer.appendChild(cell);
        }
    }
    
    // Colocar personagem
    const [playerRow, playerCol] = gridData.player_start;
    playerPosicao = [playerRow, playerCol];
    atualizarPersonagem();
    
    // Colocar objetivo
    const [objRow, objCol] = gridData.objetivo;
    const cellObjetivo = gridContainer.querySelector(`[data-row="${objRow}"][data-col="${objCol}"]`);
    const objetivo = document.createElement('div');
    objetivo.className = 'objetivo';
    cellObjetivo.appendChild(objetivo);
    
    // Colocar obstáculos
    gridData.obstaculos.forEach(([row, col]) => {
        const cellObstaculo = gridContainer.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        const obstaculo = document.createElement('div');
        obstaculo.className = 'obstaculo';
        cellObstaculo.appendChild(obstaculo);
    });
    
    // Colocar itens
    gridData.itens.forEach(([row, col]) => {
        const cellItem = gridContainer.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        const item = document.createElement('div');
        item.className = 'item';
        item.setAttribute('data-item', `${row}-${col}`);
        cellItem.appendChild(item);
    });
}

function carregarConteudoAjuda(secao) {
    const dadosSecao = dadosApp.licoes_ajuda[secao];
    const container = document.getElementById('ajuda-conteudo');
    container.innerHTML = '';
    
    const titulo = document.createElement('h3');
    titulo.textContent = dadosSecao.titulo;
    container.appendChild(titulo);
    
    dadosSecao.conteudo.forEach(item => {
        const topico = document.createElement('div');
        topico.className = 'topico-ajuda';
        
        const tituloTopico = document.createElement('h4');
        tituloTopico.textContent = item.topico;
        
        const texto = document.createElement('p');
        texto.textContent = item.texto;
        
        topico.appendChild(tituloTopico);
        topico.appendChild(texto);
        container.appendChild(topico);
    });
}

// Funções de controle do jogo
function atualizarPersonagem() {
    // Remover personagem atual
    const personagemAtual = document.querySelector('.personagem');
    if (personagemAtual) {
        personagemAtual.remove();
    }
    
    // Criar novo personagem na posição atual
    const [row, col] = playerPosicao;
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    
    if (cell) {
        const personagem = document.createElement('div');
        personagem.className = `personagem dir-${playerDirecao}`;
        cell.appendChild(personagem);
    }
}

function atualizarStatusExecucao(mensagem, classe) {
    const statusEl = document.getElementById('status-execucao');
    statusEl.textContent = mensagem;
    statusEl.className = `status-indicador ${classe}`;
}

function executarPrograma() {
    if (programaEmExecucao) return;
    
    // Resetar o estado do jogo
    const dadosNivel = dadosApp.niveis[nivelAtual];
    playerPosicao = [...dadosNivel.grid.player_start];
    playerDirecao = 0;
    itensColetados = [];
    atualizarPersonagem();
    
    // Reativar todos os itens
    const gridContainer = document.getElementById('grid-jogo');
    dadosNivel.grid.itens.forEach(([row, col]) => {
        const itemEl = gridContainer.querySelector(`[data-item="${row}-${col}"]`);
        if (itemEl) {
            itemEl.style.visibility = 'visible';
        }
    });
    
    // Preparar a sequência de execução
    sequenciaExecucao = [];
    const zonaConstrucao = document.getElementById('zona-construcao');
    
    // Função recursiva para processar blocos (inclusive dentro de repetições)
    function processarBlocos(container) {
        const blocos = Array.from(container.children).filter(el => el.classList.contains('bloco') || el.classList.contains('bloco-container'));
        
        blocos.forEach(bloco => {
            if (bloco.classList.contains('bloco')) {
                sequenciaExecucao.push({
                    elemento: bloco,
                    tipo: bloco.getAttribute('data-tipo')
                });
            } else if (bloco.classList.contains('bloco-container')) {
                const repeticoes = parseInt(bloco.getAttribute('data-repeticoes') || '1');
                const zonaInterna = bloco.querySelector('.zona-drop-interna');
                
                // Processar o bloco de repetição
                for (let i = 0; i < repeticoes; i++) {
                    processarBlocos(zonaInterna);
                }
            }
        });
    }
    
    processarBlocos(zonaConstrucao);
    
    if (sequenciaExecucao.length === 0) {
        atualizarStatusExecucao('Nenhum bloco para executar', 'erro');
        return;
    }
    
    // Iniciar execução
    programaEmExecucao = true;
    indiceExecucao = 0;
    atualizarStatusExecucao('Executando programa...', 'executando');
    
    // Executar sequência
    intervaloExecucao = setInterval(executarProximoPasso, 800);
}

function executarProximoPasso() {
    if (indiceExecucao >= sequenciaExecucao.length) {
        finalizarExecucao();
        return;
    }
    
    const passo = sequenciaExecucao[indiceExecucao];
    
    // Destacar o bloco atual
    sequenciaExecucao.forEach(p => p.elemento.classList.remove('executando'));
    passo.elemento.classList.add('executando');
    
    // Executar a ação do bloco
    let executadoComSucesso = false;
    
    switch (passo.tipo) {
        case 'mover_frente':
            executadoComSucesso = moverFrente();
            break;
        case 'virar_esquerda':
            virarEsquerda();
            executadoComSucesso = true;
            break;
        case 'virar_direita':
            virarDireita();
            executadoComSucesso = true;
            break;
        case 'coletar':
            executadoComSucesso = coletarItem();
            break;
    }
    
    if (!executadoComSucesso) {
        pararExecucao();
        atualizarStatusExecucao('Erro na execução!', 'erro');
        return;
    }
    
    // Verificar se chegou ao objetivo
    verificarObjetivo();
    
    // Avançar para o próximo passo
    indiceExecucao++;
}

function finalizarExecucao() {
    pararExecucao();
    atualizarStatusExecucao('Execução finalizada', 'pronto');
}

function pararExecucao() {
    if (intervaloExecucao) {
        clearInterval(intervaloExecucao);
        intervaloExecucao = null;
    }
    
    programaEmExecucao = false;
    
    // Remover destaque de todos os blocos
    document.querySelectorAll('.bloco').forEach(b => b.classList.remove('executando'));
}

function resetarNivel() {
    pararExecucao();
    carregarNivel(nivelAtual);
}

// Ações do personagem
function moverFrente() {
    // Calcular nova posição baseada na direção
    let novaPosicao = [...playerPosicao];
    
    switch (playerDirecao) {
        case 0: // cima
            novaPosicao[0] -= 1;
            break;
        case 1: // direita
            novaPosicao[1] += 1;
            break;
        case 2: // baixo
            novaPosicao[0] += 1;
            break;
        case 3: // esquerda
            novaPosicao[1] -= 1;
            break;
    }
    
    // Verificar se a nova posição é válida
    if (!posicaoValida(novaPosicao)) {
        atualizarStatusExecucao('Movimento inválido!', 'erro');
        return false;
    }
    
    // Mover o personagem
    playerPosicao = novaPosicao;
    atualizarPersonagem();
    
    // Adicionar classe de animação
    const personagem = document.querySelector('.personagem');
    if (personagem) {
        personagem.classList.add('movendo');
        setTimeout(() => personagem.classList.remove('movendo'), 500);
    }
    
    return true;
}

function virarEsquerda() {
    playerDirecao = (playerDirecao + 3) % 4; // +3 mod 4 é equivalente a -1 mod 4
    atualizarPersonagem();
    return true;
}

function virarDireita() {
    playerDirecao = (playerDirecao + 1) % 4;
    atualizarPersonagem();
    return true;
}

function coletarItem() {
    const [row, col] = playerPosicao;
    const itemKey = `${row}-${col}`;
    
    // Verificar se há um item na posição atual
    const itemEl = document.querySelector(`[data-item="${itemKey}"]`);
    
    if (!itemEl || itemEl.style.visibility === 'hidden') {
        atualizarStatusExecucao('Não há item para coletar aqui!', 'erro');
        return false;
    }
    
    // Coletar o item
    itemEl.style.visibility = 'hidden';
    itensColetados.push(itemKey);
    return true;
}

function posicaoValida(posicao) {
    const [row, col] = posicao;
    
    // Verificar se está dentro dos limites do grid
    if (row < 0 || row >= 8 || col < 0 || col >= 8) {
        return false;
    }
    
    // Verificar se há obstáculo
    const obstaculo = document.querySelector(`[data-row="${row}"][data-col="${col}"] .obstaculo`);
    if (obstaculo) {
        return false;
    }
    
    return true;
}

function verificarObjetivo() {
    const dadosNivel = dadosApp.niveis[nivelAtual];
    const [objRow, objCol] = dadosNivel.grid.objetivo;
    const [playerRow, playerCol] = playerPosicao;
    
    // Verificar se o jogador está na posição objetivo
    if (playerRow === objRow && playerCol === objCol) {
        // Verificar se todos os itens foram coletados
        const todosItensColetados = dadosNivel.grid.itens.every(([row, col]) => {
            return itensColetados.includes(`${row}-${col}`);
        });
        
        if (todosItensColetados) {
            pararExecucao();
            atualizarStatusExecucao('Objetivo alcançado!', 'pronto');
            setTimeout(() => {
                abrirModal('modal-sucesso');
                document.getElementById('mensagem-sucesso').textContent = 
                    `Você completou o nível ${nivelAtual} com sucesso! ${blocosArrastados} blocos utilizados.`;
            }, 1000);
        }
    }
}

// Funções de drag and drop
function handleDragStart(e) {
    if (!programaEmExecucao) {
        e.dataTransfer.setData('text/plain', e.target.getAttribute('data-tipo'));
        e.target.classList.add('dragging');
        
        // Se for bloco de repetição, precisamos tratar diferente
        if (e.target.getAttribute('data-tipo') === 'repetir') {
            e.dataTransfer.setData('is-repetir', 'true');
        }
    } else {
        e.preventDefault();
    }
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function configurarZonaDrop() {
    const zonaConstrucao = document.getElementById('zona-construcao');
    
    // Remover listeners existentes para evitar duplicatas
    zonaConstrucao.removeEventListener('dragover', handleDragOver);
    zonaConstrucao.removeEventListener('dragleave', handleDragLeave);
    zonaConstrucao.removeEventListener('drop', handleDrop);
    
    // Adicionar novos listeners
    zonaConstrucao.addEventListener('dragover', handleDragOver);
    zonaConstrucao.addEventListener('dragleave', handleDragLeave);
    zonaConstrucao.addEventListener('drop', handleDrop);
}

function handleDragOver(e) {
    e.preventDefault();
    if (!programaEmExecucao) {
        e.currentTarget.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    if (programaEmExecucao) return;
    
    const tipo = e.dataTransfer.getData('text/plain');
    const isRepetir = e.dataTransfer.getData('is-repetir') === 'true';
    
    if (tipo) {
        if (isRepetir) {
            // Abrir modal para definir número de repetições
            tempBlocoRepetir = {
                tipo: tipo,
                targetZone: e.currentTarget
            };
            abrirModal('modal-repetir');
        } else {
            criarBlocoNaZona(tipo, e.currentTarget);
        }
    }
}

function criarBlocoNaZona(tipo, zona) {
    const infoBloco = dadosApp.blocos_info[tipo];
    
    const bloco = document.createElement('div');
    bloco.className = 'bloco';
    bloco.setAttribute('data-tipo', tipo);
    bloco.style.backgroundColor = infoBloco.cor;
    
    bloco.innerHTML = `
        <div class="bloco-icone">${infoBloco.icone}</div>
        <div class="bloco-nome">${infoBloco.nome}</div>
    `;
    
    // Adicionar evento de clique para remover o bloco
    bloco.addEventListener('click', function() {
        if (!programaEmExecucao) {
            this.remove();
            blocosArrastados--;
            atualizarContadorBlocos();
        }
    });
    
    zona.appendChild(bloco);
    blocosArrastados++;
    atualizarContadorBlocos();
}

function criarBlocoRepetir() {
    if (!tempBlocoRepetir) return;
    
    const repeticoes = parseInt(document.getElementById('input-repeticoes').value) || 2;
    const tipo = tempBlocoRepetir.tipo;
    const zona = tempBlocoRepetir.targetZone;
    const infoBloco = dadosApp.blocos_info[tipo];
    
    // Criar container de repetição
    const container = document.createElement('div');
    container.className = 'bloco-container';
    container.setAttribute('data-tipo', tipo);
    container.setAttribute('data-repeticoes', repeticoes);
    container.style.backgroundColor = infoBloco.cor;
    
    container.innerHTML = `
        <div class="bloco-header">
            <div class="bloco-titulo">
                <div class="bloco-icone">${infoBloco.icone}</div>
                <div class="bloco-nome">${infoBloco.nome}</div>
            </div>
            <div class="bloco-repeticoes">${repeticoes}x</div>
        </div>
        <div class="zona-drop-interna"></div>
    `;
    
    // Adicionar evento de clique para remover o container
    container.addEventListener('click', function(e) {
        if (!programaEmExecucao && (e.target === this || e.target.classList.contains('bloco-header') || e.target.classList.contains('bloco-titulo'))) {
            this.remove();
            blocosArrastados--;
            atualizarContadorBlocos();
        }
    });
    
    // Configurar drag and drop para a zona interna
    const zonaInterna = container.querySelector('.zona-drop-interna');
    
    zonaInterna.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (!programaEmExecucao) {
            e.stopPropagation();
            zonaInterna.classList.add('drag-over');
        }
    });
    
    zonaInterna.addEventListener('dragleave', () => {
        zonaInterna.classList.remove('drag-over');
    });
    
    zonaInterna.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        zonaInterna.classList.remove('drag-over');
        
        if (programaEmExecucao) return;
        
        const tipo = e.dataTransfer.getData('text/plain');
        const isRepetir = e.dataTransfer.getData('is-repetir') === 'true';
        
        if (tipo) {
            if (isRepetir) {
                // Não permitir loops aninhados por simplicidade
                alert('Não é possível aninhar blocos de repetição');
            } else {
                criarBlocoNaZona(tipo, zonaInterna);
            }
        }
    });
    
    zona.appendChild(container);
    blocosArrastados++;
    atualizarContadorBlocos();
    
    // Fechar o modal
    fecharModal('modal-repetir');
    tempBlocoRepetir = null;
}

function atualizarContadorBlocos() {
    document.getElementById('total-blocos').textContent = blocosArrastados;
}