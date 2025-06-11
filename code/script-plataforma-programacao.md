# Script Funcional - Plataforma de Programação Visual em Blocos

## Estrutura Principal do JavaScript (app.js)

### 1. Configuração e Dados Iniciais

```javascript
// Estado global da aplicação
let estadoApp = {
    nivelAtual: null,
    playerPosicao: [0, 0],
    playerDirecao: 0, // 0=norte, 1=leste, 2=sul, 3=oeste
    itensColetados: [],
    execucaoAtiva: false,
    blocosPrograma: [],
    indiceExecucao: 0
};

// Dados dos níveis e configurações
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
        }
        // ... outros níveis
    },
    "blocos_info": {
        "mover_frente": {
            "nome": "Mover para Frente",
            "cor": "#4CAF50",
            "icone": "↑",
            "descricao": "Move o personagem uma posição para frente na direção atual"
        }
        // ... outros blocos
    }
};
```

### 2. Sistema de Drag and Drop

```javascript
function configurarDragAndDrop() {
    // Configurar arrastar blocos da paleta
    document.querySelectorAll('.bloco-paleta').forEach(bloco => {
        bloco.draggable = true;
        bloco.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', bloco.dataset.tipo);
            bloco.classList.add('arrastando');
        });
        
        bloco.addEventListener('dragend', () => {
            bloco.classList.remove('arrastando');
        });
    });

    // Configurar área de drop
    const areaConstru = document.getElementById('area-construcao');
    areaConstru.addEventListener('dragover', (e) => {
        e.preventDefault();
        areaConstru.classList.add('drag-over');
    });

    areaConstru.addEventListener('drop', (e) => {
        e.preventDefault();
        const tipoBloco = e.dataTransfer.getData('text/plain');
        adicionarBlocoPrograma(tipoBloco);
        areaConstru.classList.remove('drag-over');
    });
}

function adicionarBlocoPrograma(tipo) {
    const bloco = {
        id: Date.now(),
        tipo: tipo,
        parametros: {}
    };
    
    estadoApp.blocosPrograma.push(bloco);
    renderizarBlocosPrograma();
}
```

### 3. Motor de Execução

```javascript
async function executarPrograma() {
    if (estadoApp.execucaoAtiva) return;
    
    estadoApp.execucaoAtiva = true;
    estadoApp.indiceExecucao = 0;
    
    document.getElementById('btn-executar').disabled = true;
    document.getElementById('btn-parar').disabled = false;
    
    try {
        await executarBlocos(estadoApp.blocosPrograma);
        verificarVitoria();
    } catch (erro) {
        mostrarMensagem('Erro na execução: ' + erro.message, 'erro');
    } finally {
        estadoApp.execucaoAtiva = false;
        document.getElementById('btn-executar').disabled = false;
        document.getElementById('btn-parar').disabled = true;
    }
}

async function executarBlocos(blocos) {
    for (let i = 0; i < blocos.length; i++) {
        if (!estadoApp.execucaoAtiva) break;
        
        const bloco = blocos[i];
        destacarBlocoAtual(bloco.id);
        
        await executarBloco(bloco);
        await esperar(500); // Pausa para visualização
        
        removerDestaqueBlocos();
    }
}

async function executarBloco(bloco) {
    switch (bloco.tipo) {
        case 'mover_frente':
            await moverPersonagem();
            break;
        case 'virar_esquerda':
            virarPersonagem(-1);
            break;
        case 'virar_direita':
            virarPersonagem(1);
            break;
        case 'coletar':
            coletarItem();
            break;
        case 'repetir':
            const vezes = bloco.parametros.vezes || 1;
            for (let i = 0; i < vezes; i++) {
                if (!estadoApp.execucaoAtiva) break;
                await executarBlocos(bloco.parametros.blocos || []);
            }
            break;
    }
}
```

### 4. Lógica de Movimento e Interação

```javascript
async function moverPersonagem() {
    const [x, y] = estadoApp.playerPosicao;
    const direcao = estadoApp.playerDirecao;
    
    // Calcular nova posição baseada na direção
    const movimentos = [
        [0, -1], // Norte
        [1, 0],  // Leste
        [0, 1],  // Sul
        [-1, 0]  // Oeste
    ];
    
    const [dx, dy] = movimentos[direcao];
    const novoX = x + dx;
    const novoY = y + dy;
    
    // Verificar limites e obstáculos
    if (novoX < 0 || novoX >= 8 || novoY < 0 || novoY >= 8) {
        throw new Error('O personagem tentou sair do grid!');
    }
    
    const nivel = dadosApp.niveis[estadoApp.nivelAtual];
    const obstaculos = nivel.grid.obstaculos;
    
    if (obstaculos.some(obs => obs[0] === novoX && obs[1] === novoY)) {
        throw new Error('O personagem bateu em um obstáculo!');
    }
    
    // Mover personagem
    estadoApp.playerPosicao = [novoX, novoY];
    await animarMovimento(x, y, novoX, novoY);
}

function virarPersonagem(sentido) {
    estadoApp.playerDirecao = (estadoApp.playerDirecao + sentido + 4) % 4;
    atualizarVisualizacaoPlayer();
}

function coletarItem() {
    const [x, y] = estadoApp.playerPosicao;
    const nivel = dadosApp.niveis[estadoApp.nivelAtual];
    const itens = nivel.grid.itens;
    
    const indiceItem = itens.findIndex(item => item[0] === x && item[1] === y);
    if (indiceItem !== -1) {
        itens.splice(indiceItem, 1);
        estadoApp.itensColetados.push([x, y]);
        atualizarVisualizacaoGrid();
        mostrarMensagem('Item coletado!', 'sucesso');
    }
}
```

### 5. Sistema de Interface e Visualização

```javascript
function renderizarGrid() {
    const container = document.getElementById('grid-visualizacao');
    container.innerHTML = '';
    
    const nivel = dadosApp.niveis[estadoApp.nivelAtual];
    
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            const celula = document.createElement('div');
            celula.className = 'grid-celula';
            celula.dataset.x = x;
            celula.dataset.y = y;
            
            // Adicionar objetivo
            const [objX, objY] = nivel.grid.objetivo;
            if (x === objX && y === objY) {
                celula.classList.add('objetivo');
            }
            
            // Adicionar obstáculos
            if (nivel.grid.obstaculos.some(obs => obs[0] === x && obs[1] === y)) {
                celula.classList.add('obstaculo');
            }
            
            // Adicionar itens
            if (nivel.grid.itens.some(item => item[0] === x && item[1] === y)) {
                celula.classList.add('item');
            }
            
            container.appendChild(celula);
        }
    }
    
    // Adicionar personagem
    criarPersonagem();
}

function criarPersonagem() {
    const player = document.createElement('div');
    player.id = 'player';
    player.className = 'player';
    
    const [x, y] = estadoApp.playerPosicao;
    posicionarElemento(player, x, y);
    
    document.getElementById('grid-visualizacao').appendChild(player);
    atualizarVisualizacaoPlayer();
}

function atualizarVisualizacaoPlayer() {
    const player = document.getElementById('player');
    if (player) {
        const rotacao = estadoApp.playerDirecao * 90;
        player.style.transform = `rotate(${rotacao}deg)`;
        
        const [x, y] = estadoApp.playerPosicao;
        posicionarElemento(player, x, y);
    }
}
```

### 6. Menu de Ajuda e Lições

```javascript
function mostrarMenuAjuda() {
    document.getElementById('modal-ajuda').style.display = 'flex';
    carregarLicoesAjuda();
}

function carregarLicoesAjuda() {
    const container = document.getElementById('conteudo-ajuda');
    container.innerHTML = '';
    
    Object.keys(dadosApp.licoes_ajuda).forEach(chave => {
        const licao = dadosApp.licoes_ajuda[chave];
        
        const secaoLicao = document.createElement('div');
        secaoLicao.className = 'secao-licao';
        
        const titulo = document.createElement('h3');
        titulo.textContent = licao.titulo;
        titulo.className = 'titulo-licao';
        titulo.addEventListener('click', () => {
            secaoLicao.classList.toggle('expandida');
        });
        
        const conteudo = document.createElement('div');
        conteudo.className = 'conteudo-licao';
        
        licao.conteudo.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-licao';
            
            const topicoH4 = document.createElement('h4');
            topicoH4.textContent = item.topico;
            
            const textoP = document.createElement('p');
            textoP.textContent = item.texto;
            
            itemDiv.appendChild(topicoH4);
            itemDiv.appendChild(textoP);
            conteudo.appendChild(itemDiv);
        });
        
        secaoLicao.appendChild(titulo);
        secaoLicao.appendChild(conteudo);
        container.appendChild(secaoLicao);
    });
}
```

### 7. Sistema de Verificação de Vitória

```javascript
function verificarVitoria() {
    const nivel = dadosApp.niveis[estadoApp.nivelAtual];
    const [playerX, playerY] = estadoApp.playerPosicao;
    const [objX, objY] = nivel.grid.objetivo;
    
    const chegouAoObjetivo = playerX === objX && playerY === objY;
    const coletouTodosItens = nivel.grid.itens.length === 0;
    
    if (chegouAoObjetivo && coletouTodosItens) {
        mostrarModalVitoria();
        salvarProgresso();
    } else if (!chegouAoObjetivo) {
        mostrarMensagem('Você precisa chegar ao objetivo!', 'info');
    } else if (!coletouTodosItens) {
        mostrarMensagem('Você precisa coletar todos os itens!', 'info');
    }
}

function mostrarModalVitoria() {
    const modal = document.getElementById('modal-vitoria');
    modal.style.display = 'flex';
    
    const proximoNivel = parseInt(estadoApp.nivelAtual) + 1;
    const btnProximo = document.getElementById('btn-proximo-nivel');
    
    if (proximoNivel <= 5) {
        btnProximo.style.display = 'inline-block';
        btnProximo.onclick = () => {
            modal.style.display = 'none';
            carregarNivel(proximoNivel.toString());
        };
    } else {
        btnProximo.style.display = 'none';
        document.getElementById('mensagem-vitoria').textContent = 
            'Parabéns! Você completou todos os níveis!';
    }
}
```

## Funcionalidades Implementadas

### 1. **Sistema de Drag and Drop**
- Arraste blocos da paleta para a área de construção
- Conecte blocos em sequência
- Remova blocos com clique duplo

### 2. **Motor de Execução**
- Interpretação visual dos blocos
- Execução passo a passo com animações
- Controle de pausa e reset

### 3. **Tipos de Blocos**
- **Mover para Frente**: Move uma posição na direção atual
- **Virar à Esquerda/Direita**: Gira o personagem 90°
- **Coletar Item**: Coleta itens na posição atual
- **Repetir**: Loop com número configurável de repetições

### 4. **Sistema de Níveis**
- 5 níveis progressivos de dificuldade
- Objetivos específicos por nível
- Validação de vitória automática

### 5. **Menu de Ajuda Interativo**
- Conceitos básicos de programação
- Pensamento computacional
- Estruturas de controle
- Técnicas de debugging
- Instruções de uso da plataforma

### 6. **Visualização em Tempo Real**
- Grid 8x8 interativo
- Personagem animado com indicação de direção
- Feedback visual durante execução
- Destaque do bloco atual em execução

## Como Usar

1. **Seleção de Nível**: Escolha um dos 5 níveis disponíveis
2. **Construção do Programa**: Arraste blocos da paleta para a área de construção
3. **Execução**: Clique em "Executar" para ver o personagem seguir seus comandos
4. **Debugging**: Use os controles para parar e reorganizar blocos
5. **Ajuda**: Acesse o menu de ajuda para aprender conceitos de programação

## Conceitos Educacionais Cobertos

- **Sequência**: Ordem de execução dos comandos
- **Iteração**: Loops e repetição de ações
- **Debugging**: Identificação e correção de erros
- **Decomposição**: Quebra de problemas complexos
- **Pensamento Algorítmico**: Planejamento passo a passo
- **Abstração**: Simplificação de conceitos complexos

Este aplicativo fornece uma base sólida para ensino de programação visual, combinando interatividade, progressão pedagógica e conteúdo educacional abrangente em português brasileiro.