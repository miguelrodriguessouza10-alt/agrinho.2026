/* ============================================
   ESTILOS PRINCIPAIS - GOTA DA CONSCIÊNCIA
   ============================================ */

/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Variáveis de cores (tema: azul marinho) */
:root {
    --azul-marinho: #0a2b4e;
    --azul-medio: #1e4a76;
    --azul-claro: #3b82f6;
    --agua-claro: #dbeafe;
    --branco: #ffffff;
    --cinza-claro: #f3f4f6;
    --cinza-texto: #374151;
    --preto-texto: #111827;
}

/* Estilos base */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--preto-texto);
    background-color: var(--branco);
    font-size: 16px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== CABEÇALHO ===== */
header {
    background: linear-gradient(135deg, var(--azul-marinho), var(--azul-medio));
    color: var(--branco);
    text-align: center;
    padding: 50px 20px;
}

header h1 {
    font-size: 2rem;
    margin-bottom: 10px;
}

header .subtitulo {
    font-size: 1.1rem;
    opacity: 0.9;
}

/* ===== MENU ===== */
nav {
    background-color: var(--azul-medio);
    position: sticky;
    top: 0;
    z-index: 100;
}

.menu {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}

.menu li a {
    display: block;
    color: var(--branco);
    text-decoration: none;
    padding: 15px 20px;
    font-weight: 500;
    transition: background 0.3s;
}

.menu li a:hover {
    background-color: var(--azul-marinho);
    border-radius: 5px;
}

/* ===== SEÇÕES ===== */
.secao {
    padding: 60px 20px;
}

.bg-claro {
    background-color: var(--cinza-claro);
}

.secao h2 {
    color: var(--azul-marinho);
    font-size: 1.8rem;
    margin-bottom: 25px;
    border-left: 5px solid var(--azul-claro);
    padding-left: 15px;
}

.secao p {
    margin-bottom: 15px;
    color: var(--cinza-texto);
}

/* ===== CARDS DE DICAS ===== */
.cards-dicas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 30px;
}

.card {
    background: var(--branco);
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
    border-bottom: 4px solid var(--azul-claro);
}

.card:hover {
    transform: translateY(-5px);
}

.card h3 {
    color: var(--azul-marinho);
    margin-bottom: 12px;
}

/* ===== CALCULADORA ===== */
.calculadora {
    background: var(--branco);
    padding: 30px;
    border-radius: 20px;
    max-width: 500px;
    margin: 20px auto;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.calculadora label {
    display: block;
    margin: 15px 0 5px;
    font-weight: bold;
    color: var(--azul-marinho);
}

.calculadora select,
.calculadora input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
}

.calculadora button {
    width: 100%;
    margin-top: 20px;
    padding: 14px;
    background-color: var(--azul-claro);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.calculadora button:hover {
    background-color: var(--azul-medio);
}

.resultado {
    margin-top: 25px;
    padding: 15px;
    background-color: var(--agua-claro);
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    color: var(--azul-marinho);
}

/* ===== TABELA ===== */
.tabela-responsiva {
    overflow-x: auto;
    margin: 25px 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: var(--branco);
    border-radius: 10px;
    overflow: hidden;
}

th, td {
    padding: 12px 15px;
    text-align: center;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: var(--azul-marinho);
    color: white;
}

tr:hover {
    background-color: var(--agua-claro);
}

.fonte-tabela {
    font-size: 0.8rem;
    color: gray;
    text-align: center;
}

/* ===== RODAPÉ ===== */
footer {
    background-color: var(--azul-marinho);
    color: white;
    text-align: center;
    padding: 30px 20px;
    margin-top: 20px;
}

footer p {
    margin: 8px 0;
}

/* ===== BOTÃO DE ACESSIBILIDADE ===== */
.botao-acessibilidade {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

#btnAcessibilidade {
    background-color: var(--azul-marinho);
    color: white;
    border: none;
    padding: 12px 18px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.menu-acessibilidade {
    position: absolute;
    bottom: 50px;
    right: 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    display: none;
    flex-direction: column;
    min-width: 160px;
}

.menu-acessibilidade button {
    background: none;
    border: none;
    padding: 10px 15px;
    text-align: left;
    cursor: pointer;
    font-size: 14px;
    border-bottom: 1px solid #eee;
}

.menu-acessibilidade button:hover {
    background-color: #f0f0f0;
}

.menu-acessibilidade.ativo {
    display: flex;
}

/* ===== ALTO CONTRASTE ===== */
.alto-contraste {
    background-color: black !important;
    color: yellow !important;
}

.alto-contraste header,
.alto-contraste nav,
.alto-contraste footer,
.alto-contraste .card,
.alto-contraste .calculadora {
    background-color: black !important;
    color: yellow !important;
    border-color: yellow !important;
}

.alto-contraste a,
.alto-contraste button,
.alto-contraste h1,
.alto-contraste h2,
.alto-contraste h3 {
    color: yellow !important;
}

.alto-contraste table {
    background-color: black !important;
}

.alto-contraste th {
    background-color: #333 !important;
    color: yellow !important;
}

/* ===== RESPONSIVIDADE ===== */
@media (max-width: 768px) {
    header h1 {
        font-size: 1.5rem;
    }
    
    .menu {
        flex-direction: column;
        text-align: center;
    }
    
    .secao {
        padding: 40px 15px;
    }
    
    .secao h2 {
        font-size: 1.4rem;
    }
    
    .cards-dicas {
        grid-template-columns: 1fr;
    }
    
    .calculadora {
        padding: 20px;
    }
}

/* Aumento de fonte - controlado pelo JS */
body.fonte-grande {
    font-size: 18px;
}

body.fonte-muito-grande {
    font-size: 22px;
}
