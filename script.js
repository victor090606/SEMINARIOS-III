
const perfis = [
    {
        nome: "O Observador",
        descricao: "Você é uma pessoa reflexiva, atenta e cuidadosa. Gosta de compreender as situações antes de agir e percebe detalhes que muitas pessoas não percebem.",
        caracteristicas: ["Reflexão", "Atenção", "Calma", "Autoconhecimento"],
        mensagem: "Sua capacidade de observar o mundo é uma das suas maiores qualidades."
    },
    {
        nome: "O Comunicador",
        descricao: "Você é uma pessoa expressiva, sociável e cheia de energia. Gosta de compartilhar experiências, conhecer pessoas e criar conexões.",
        caracteristicas: ["Comunicação", "Sociabilidade", "Expressividade", "Entusiasmo"],
        mensagem: "Sua facilidade de conectar pessoas torna sua presença especial."
    },
    {
        nome: "O Criativo",
        descricao: "Você possui uma mente imaginativa, curiosa e inovadora. Gosta de experimentar possibilidades e desenvolver ideias.",
        caracteristicas: ["Imaginação", "Originalidade", "Curiosidade", "Inovação"],
        mensagem: "Sua criatividade permite enxergar possibilidades onde outros veem limites."
    },
    {
        nome: "O Acolhedor",
        descricao: "Você valoriza as relações humanas, demonstra empatia e se preocupa com o bem-estar das pessoas.",
        caracteristicas: ["Empatia", "Gentileza", "Sensibilidade", "Cooperação"],
        mensagem: "Sua capacidade de acolher e compreender faz a diferença."
    },
    {
        nome: "O Estrategista",
        descricao: "Você é uma pessoa organizada, analítica e planejadora. Gosta de estabelecer objetivos e encontrar soluções.",
        caracteristicas: ["Organização", "Planejamento", "Raciocínio", "Determinação"],
        mensagem: "Sua capacidade de transformar ideias em planos é uma grande força."
    },
    {
        nome: "O Explorador",
        descricao: "Você é uma pessoa independente, espontânea e aventureira. Gosta de descobrir coisas novas e experimentar experiências.",
        caracteristicas: ["Liberdade", "Coragem", "Espontaneidade", "Descoberta"],
        mensagem: "Sua vontade de descobrir o novo torna cada experiência uma oportunidade."
    }
];

const perguntas = [
    {
        pergunta: "Quando você chega a um ambiente com pessoas desconhecidas, como costuma agir?",
        alternativas: [
            { texto: "Observo e penso antes.", perfis: [0, 4] },
            { texto: "Converso e acolho as pessoas.", perfis: [1, 3] },
            { texto: "Exploro o que é novo.", perfis: [2, 5] }
        ]
    },
    {
        pergunta: "Quando surge um problema inesperado, qual é sua primeira reação?",
        alternativas: [
            { texto: "Entendo o problema com calma.", perfis: [0, 3] },
            { texto: "Converso e tento uma saída.", perfis: [1, 5] },
            { texto: "Penso em soluções e planejo.", perfis: [2, 4] }
        ]
    },
    {
        pergunta: "Como você prefere passar seu tempo livre?",
        alternativas: [
            { texto: "Leio, penso ou crio algo.", perfis: [0, 2] },
            { texto: "Encontro pessoas e conheço lugares.", perfis: [1, 5] },
            { texto: "Ajudo alguém ou organizo meus planos.", perfis: [3, 4] }
        ]
    },
    {
        pergunta: "Em um trabalho em equipe, qual papel combina mais com você?",
        alternativas: [
            { texto: "Observo e tomo iniciativa.", perfis: [0, 5] },
            { texto: "Compartilho ideias novas.", perfis: [1, 2] },
            { texto: "Ajudo o grupo e organizo tarefas.", perfis: [3, 4] }
        ]
    },
    {
        pergunta: "O que mais motiva você a alcançar um objetivo?",
        alternativas: [
            { texto: "Entender e planejar bem.", perfis: [0, 4] },
            { texto: "Compartilhar com outras pessoas.", perfis: [1, 3] },
            { texto: "Criar e viver novidades.", perfis: [2, 5] }
        ]
    },
    {
        pergunta: "Quando precisa tomar uma decisão importante, você geralmente:",
        alternativas: [
            { texto: "Pensa em várias possibilidades.", perfis: [0, 2] },
            { texto: "Conversa com alguém de confiança.", perfis: [1, 3] },
            { texto: "Avalia e segue em frente.", perfis: [4, 5] }
        ]
    },
    {
        pergunta: "Qual dessas situações mais incomoda você?",
        alternativas: [
            { texto: "Não ter calma ou organização.", perfis: [0, 4] },
            { texto: "Não ser ouvido ou respeitado.", perfis: [1, 3] },
            { texto: "Não poder criar ou escolher.", perfis: [2, 5] }
        ]
    },
    {
        pergunta: "Como seus amigos provavelmente descreveriam você?",
        alternativas: [
            { texto: "Calmo e responsável.", perfis: [0, 4] },
            { texto: "Animado e aventureiro.", perfis: [1, 5] },
            { texto: "Criativo e atencioso.", perfis: [2, 3] }
        ]
    },
    {
        pergunta: "Diante de uma oportunidade completamente nova, você:",
        alternativas: [
            { texto: "Pesquisa e faz um plano.", perfis: [0, 4] },
            { texto: "Chama alguém para ir junto.", perfis: [1, 3] },
            { texto: "Aceita e descobre no caminho.", perfis: [2, 5] }
        ]
    },
    {
        pergunta: "O que você mais gostaria de desenvolver em si mesmo?",
        alternativas: [
            { texto: "Me expressar com confiança.", perfis: [0, 1] },
            { texto: "Criar e experimentar mais.", perfis: [2, 5] },
            { texto: "Cuidar de mim e me organizar.", perfis: [3, 4] }
        ]
    }
];

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("result");

const conteudo = document.getElementById("question-content");
const contador = document.getElementById("counter");
const progresso = document.getElementById("progress");

const anterior = document.getElementById("previous");
const proxima = document.getElementById("next");
const finalizar = document.getElementById("finish");

let perguntaAtual = 0;
let respostas = [];

document.getElementById("start").addEventListener("click", () => {
    intro.hidden = true;
    quiz.hidden = false;
    mostrarPergunta();
    window.scrollTo(0, 0);
});

function mostrarPergunta() {
    const atual = perguntas[perguntaAtual];

    contador.textContent =
        `PERGUNTA ${String(perguntaAtual + 1).padStart(2, "0")} DE 10`;

    progresso.style.width =
        `${((perguntaAtual + 1) / perguntas.length) * 100}%`;

    conteudo.innerHTML = `
        <section class="question-step active">
            <span class="question-number">
                PERGUNTA ${String(perguntaAtual + 1).padStart(2, "0")}
            </span>

            <h2>${atual.pergunta}</h2>

            <div class="options">
                ${atual.alternativas.map((alternativa, index) => `
                    <label class="option">
                        <input
                            type="radio"
                            name="resposta"
                            value="${index}"
                            ${respostas[perguntaAtual] === index ? "checked" : ""}
                        >

                        <span class="option-letter">
                            ${String.fromCharCode(65 + index)}
                        </span>

                        <span class="option-text">
                            ${alternativa.texto}
                        </span>

                        <span class="option-check">✓</span>
                    </label>
                `).join("")}
            </div>
        </section>
    `;

    anterior.disabled = perguntaAtual === 0;

    const ultima = perguntaAtual === perguntas.length - 1;

    proxima.hidden = ultima;
    finalizar.hidden = !ultima;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

conteudo.addEventListener("change", event => {
    if (event.target.name === "resposta") {
        respostas[perguntaAtual] = Number(event.target.value);
    }
});

proxima.addEventListener("click", () => {
    if (respostas[perguntaAtual] === undefined) {
        alert("Escolha uma alternativa para continuar!");
        return;
    }

    perguntaAtual++;
    mostrarPergunta();
});

anterior.addEventListener("click", () => {
    if (perguntaAtual > 0) {
        perguntaAtual--;
        mostrarPergunta();
    }
});

finalizar.addEventListener("click", () => {
    if (respostas[perguntaAtual] === undefined) {
        alert("Responda à última pergunta!");
        return;
    }

    calcularResultado();
});

function calcularResultado() {
    const pontuacao = [0, 0, 0, 0, 0, 0];

    respostas.forEach((resposta, perguntaIndex) => {
        const alternativaEscolhida = perguntas[perguntaIndex].alternativas[resposta];

        alternativaEscolhida.perfis.forEach(indicePerfil => {
            pontuacao[indicePerfil]++;
        });
    });

    const maior = Math.max(...pontuacao);
    const vencedores = pontuacao
        .map((pontos, index) => pontos === maior ? index : -1)
        .filter(index => index !== -1);

    const vencedor = vencedores[0];
    const perfil = perfis[vencedor];

    quiz.hidden = true;
    resultado.hidden = false;

    document.getElementById("result-name").textContent =
        perfil.nome;

    document.getElementById("result-description").textContent =
        perfil.descricao;

    document.getElementById("result-message").textContent =
        perfil.mensagem;

    document.getElementById("result-tags").innerHTML =
        perfil.caracteristicas.map(item =>
            `<span class="tag">${item}</span>`
        ).join("");

    document.getElementById("score-list").innerHTML =
        perfis.map((perfil, index) => `
            <div class="score-item">
                <div class="score-label">
                    <span>${perfil.nome}</span>
                    <span>${pontuacao[index]}/10</span>
                </div>

                <div class="score-track">
                    <div class="score-fill"
                         style="width: ${pontuacao[index] * 10}%">
                    </div>
                </div>
            </div>
        `).join("");

    if (vencedores.length > 1) {
        const aviso = document.createElement("p");
        aviso.className = "tie-message";
        aviso.textContent =
            "Você apresentou empate entre alguns perfis. Este resultado mostra apenas um deles.";
        document.getElementById("result-message").after(aviso);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("restart").addEventListener("click", () => {
    perguntaAtual = 0;
    respostas = [];

    resultado.hidden = true;
    intro.hidden = false;

    const aviso = document.querySelector(".tie-message");
    if (aviso) aviso.remove();

    window.scrollTo({ top: 0, behavior: "smooth" });
});
