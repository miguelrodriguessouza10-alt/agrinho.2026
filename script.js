// ============================================
// SCRIPT - GOTA DA CONSCIÊNCIA POPULACIONAL
// Funcionalidades: Calculadora de irrigação
// + Acessibilidade (fonte, alto contraste)
// ============================================

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // 1. FUNCIONALIDADE PRINCIPAL: CALCULADORA
    // ========================================
    
    // Dados de consumo ideal por cultura (litros por hectare por dia)
    const consumosIdeais = {
        milho: 40000,
        feijao: 35000,
        soja: 45000,
        tomate: 30000,
        cafe: 25000
    };
    
    // Nomes bonitos para exibir
    const nomesCulturas = {
        milho: "🌽 Milho",
        feijao: "🫘 Feijão",
        soja: "🌱 Soja",
        tomate: "🍅 Tomate",
        cafe: "☕ Café"
    };
    
    // Pegar elementos do HTML
    const btnCalcular = document.getElementById('calcularBtn');
    const selectCultura = document.getElementById('cultura');
    const inputArea = document.getElementById('area');
    const resultadoDiv = document.getElementById('resultadoCalculadora');
    
    // Função que calcula e exibe o resultado
    function calcularConsumoAgua() {
        // Pegar valores selecionados
        const cultura = selectCultura.value;
        let area = parseFloat(inputArea.value);
        
        // Validação: área deve ser um número positivo
        if (isNaN(area) || area <= 0) {
            resultadoDiv.innerHTML = '❌ Por favor, digite uma área válida (maior que zero).';
            return;
        }
        
        // Obter consumo ideal da cultura
        const consumoPorHectare = consumosIdeais[cultura];
        const nomeCultura = nomesCulturas[cultura];
        
        // Calcular consumo total
        const consumoTotalLitros = consumoPorHectare * area;
        const consumoTotalMetrosCubicos = consumoTotalLitros / 1000;
        
        // Consumo com desperdício (50% a mais)
        const consumoDesperdicio = consumoTotalLitros * 1.5;
        const economiaPossivel = consumoDesperdicio - consumoTotalLitros;
        
        // Exibir resultado formatado
        resultadoDiv.innerHTML = `
            💧 <strong>Resultado para ${nomeCultura}</strong><br>
            📍 Área: ${area} hectare(s)<br>
            ✅ Consumo ideal: <strong>${consumoTotalLitros.toLocaleString()} litros/dia</strong><br>
            📊 Equivalente a: ${consumoTotalMetrosCubicos.toLocaleString()} m³/dia<br><br>
            ⚠️ Com desperdício (50% a mais): ${consumoDesperdicio.toLocaleString()} litros/dia<br>
            💰 Economia possível: <strong style="color:#0a2b4e;">${economiaPossivel.toLocaleString()} litros/dia</strong><br>
            🌱 <em>Use técnicas sustentáveis e economize água!</em>
        `;
    }
    
    // Adicionar evento de clique ao botão
    if (btnCalcular) {
        btnCalcular.addEventListener('click', calcularConsumoAgua);
    }
    
    // Opcional: calcular ao pressionar Enter no campo área
    if (inputArea) {
        inputArea.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calcularConsumoAgua();
            }
        });
    }
    
    // ========================================
    // 2. ACESSIBILIDADE - MENU FLUTUANTE
    // ========================================
    
    // Abrir/fechar menu de acessibilidade
    const btnAcessibilidade = document.getElementById('btnAcessibilidade');
    const menuAcessibilidade = document.getElementById('menuAcessibilidade');
    
    if (btnAcessibilidade && menuAcessibilidade) {
        btnAcessibilidade.addEventListener('click', function() {
            menuAcessibilidade.classList.toggle('ativo');
        });
        
        // Fechar menu se clicar fora
        document.addEventListener('click', function(event) {
            if (!botaoAcessibilidade.contains(event.target)) {
                menuAcessibilidade.classList.remove('ativo');
            }
        });
    }
    
    // ========================================
    // 3. AUMENTAR FONTE
    // ========================================
    const aumentarFonte = document.getElementById('aumentarFonte');
    const diminuirFonte = document.getElementById('diminuirFonte');
    let tamanhoFonteAtual = 0; // 0 = normal, 1 = grande, 2 = muito grande
    
    function aplicarTamanhoFonte(nivel) {
        // Remover classes anteriores
        document.body.classList.remove('fonte-grande', 'fonte-muito-grande');
        
        if (nivel === 1) {
            document.body.classList.add('fonte-grande');
        } else if (nivel === 2) {
            document.body.classList.add('fonte-muito-grande');
        }
        
        tamanhoFonteAtual = nivel;
    }
    
    if (aumentarFonte) {
        aumentarFonte.addEventListener('click', function() {
            if (tamanhoFonteAtual < 2) {
                aplicarTamanhoFonte(tamanhoFonteAtual + 1);
            }
        });
    }
    
    if (diminuirFonte) {
        diminuirFonte.addEventListener('click', function() {
            if (tamanhoFonteAtual > 0) {
                aplicarTamanhoFonte(tamanhoFonteAtual - 1);
            }
        });
    }
    
    // ========================================
    // 4. ALTO CONTRASTE
    // ========================================
    const altoContrasteBtn = document.getElementById('altoContraste');
    let contrasteAtivo = false;
    
    if (altoContrasteBtn) {
        altoContrasteBtn.addEventListener('click', function() {
            if (!contrasteAtivo) {
                document.body.classList.add('alto-contraste');
                contrasteAtivo = true;
                altoContrasteBtn.textContent = '◐ Desativar contraste';
            } else {
                document.body.classList.remove('alto-contraste');
                contrasteAtivo = false;
                altoContrasteBtn.textContent = '◐ Alto contraste';
            }
        });
    }
    
    // ========================================
    // 5. ROLAGEM SUAVE PARA LINKS DO MENU
    // ========================================
    const linksMenu = document.querySelectorAll('.menu a');
    
    linksMenu.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                event.preventDefault();
                const elementoDestino = document.querySelector(href);
                
                if (elementoDestino) {
                    elementoDestino.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Mensagem no console (apenas para mostrar que funcionou)
    console.log('🌱 Projeto Gota da Consciência Populacional carregado!');
    console.log('💧 Funcionalidades: Calculadora de Irrigação + Acessibilidade');
});
