// Banco de perguntas
const perguntas = [
    {
        pergunta: "O que é segurança da informação (InfoSec)?",
        respostas: ["a) É a proteção contra ataques físicos.", "b) É o controle do uso da internet.", "c) É a proteção de informações contra acessos não autorizados, uso, alteração ou interrupção.", "d) É o bloqueio de redes sociais."],
        respostaCorreta: "c) É a proteção de informações contra acessos não autorizados, uso, alteração ou interrupção."
    },
    {
        pergunta: "Qual é o foco principal do artigo apresentado?",
        respostas: ["a) Segurança física.", "b) Segurança de senhas.", "c) Segurança de redes sociais.", "d) Segurança da informação digital."],
        respostaCorreta: "d) Segurança da informação digital."
    },
    {
        pergunta: "O que são considerados ativos de informação?",
        respostas: ["a) Somente arquivos digitais.", "b) Apenas documentos impressos.", "c) Arquivos digitais, documentos em papel, mídia física e fala humana.", "d) Dispositivos móveis."],
        respostaCorreta: "c) Arquivos digitais, documentos em papel, mídia física e fala humana."
    },
    {
        pergunta: "Por que a segurança da informação é importante?",
        respostas: ["a) Para aumentar o lucro das empresas.", "b) Para impedir o uso da internet.", "c) Porque os dados têm alto valor e são alvos de cibercriminosos.", "d) Para substituir o backup."],
        respostaCorreta: "c) Porque os dados têm alto valor e são alvos de cibercriminosos."
    },
    {
        pergunta: "Qual foi o custo médio de uma violação de dados em 2023, segundo a IBM?",
        respostas: ["a) US$ 1 milhão", "b) US$ 4,45 milhões", "c) US$ 10 milhões", "d) US$ 3 milhões"],
        respostaCorreta: "b) US$ 4,45 milhões"
    },
    {
        pergunta: "O que pode causar a perda de clientes e danos à reputação de uma empresa?",
        respostas: ["a) Excesso de backups.", "b) Exposição de informações confidenciais.", "c) Falta de e-mails.", "d) Boa segurança da informação."],
        respostaCorreta: "b) Exposição de informações confidenciais."
    },
    {
        pergunta: "Qual regulamento obriga a proteção de dados na Europa?",
        respostas: ["a) LGPD", "b) HIPAA", "c) GDPR", "d) Marco Civil da Internet"],
        respostaCorreta: "c) GDPR"
    },
    {
        pergunta: "Qual é o impacto de investimentos em IA e automação na segurança?",
        respostas: ["a) Aumenta o custo das violações.", "b) Reduz a eficácia da segurança.", "c) Reduz o custo das violações em até US$ 1,76 milhão.", "d) Elimina totalmente os riscos."],
        respostaCorreta: "c) Reduz o custo das violações em até US$ 1,76 milhão."
    },
    {
        pergunta: "O que significa a sigla CISSP?",
        respostas: ["a) Central Internacional de Segurança e Sistemas Públicos", "b) Certified Information Systems Security Professional", "c) Certificação de Internet Segura e Sistemas Pessoais", "d) Cadastro de Informações em Sistemas Seguros Profissionais"],
        respostaCorreta: "b) Certified Information Systems Security Professional"
    },
      {
        pergunta: "Quais são os cinco pilares da segurança da informação?",
        respostas: ["a) Criptografia, firewall, backup, senha, atualização.", "b) Confidencialidade, integridade, disponibilidade, autenticidade, irrefutabilidade.", "c) Prevenção, resposta, monitoramento, recuperação, análise.", "d) Dados, redes, nuvem, senhas, backups."],
        respostaCorreta: "b) Confidencialidade, integridade, disponibilidade, autenticidade, irrefutabilidade."
    },
    {
        pergunta: "O que é o pilar da confidencialidade?",
        respostas: ["a) Permite o acesso público aos dados.", "b) Restringe o acesso a informações sensíveis.", "c) Garante a velocidade da rede.", "d) Autoriza qualquer acesso temporário."],
        respostaCorreta: "b) Restringe o acesso a informações sensíveis."
    },
    {
        pergunta: "O que garante a integridade da informação?",
        respostas: ["a) Criação de contas temporárias.", "b) Prevenção de alterações indevidas nos dados.", "c) Acesso livre a todos os usuários.", "d) Backup constante."],
        respostaCorreta: "b) Prevenção de alterações indevidas nos dados."
    },
    {
        pergunta: " Qual princípio garante acesso à informação por usuários autorizados quando necessário?",
        respostas: ["a) Confidencialidade", "b) Autenticidade", "c) Integridade", "d) Disponibilidade"],
        respostaCorreta: "d) Disponibilidade"
    },
    {
        pergunta: "O que é autenticidade?",
        respostas: ["a) Acesso por qualquer dispositivo.", "b) Confirmação de que quem acessa é realmente quem diz ser.", "c) Compartilhamento de dados sem login.", "d) Acesso baseado em horário."],
        respostaCorreta: "b) Confirmação de que quem acessa é realmente quem diz ser."
    },
    {
        pergunta: "O que pode causar a perda de clientes e danos à reputação de uma empresa?",
        respostas: ["a) Excesso de backups.", "b) Exposição de informações confidenciais.", "c) Falta de e-mails.", "d) Boa segurança da informação."],
        respostaCorreta: "b) Exposição de informações confidenciais."
    },
    {
        pergunta: "O que significa irrefutabilidade?",
        respostas: ["a) Direito ao esquecimento.", "b) Impossibilidade de negar a autoria de uma ação digital.", "c) Backup em tempo real.", "d) Controle de acesso externo."],
        respostaCorreta: "b) Impossibilidade de negar a autoria de uma ação digital."
    },
    {
        pergunta: " Qual desses é um tipo de malware?",
        respostas: ["a) HTML", "b) Excel", "c) Trojan (Cavalo de Troia)", "d) Bluetooth"],
        respostaCorreta: "c) Trojan (Cavalo de Troia)"
    },
    {
        pergunta: "O que o ransomware faz?",
        respostas: ["a) Apaga arquivos permanentemente.", "b) Rouba senhas bancárias.", "c) Criptografa dados e exige pagamento.", "d) Instala programas úteis."],
        respostaCorreta: "c) Criptografa dados e exige pagamento."
    },
      {
        pergunta: "O que caracteriza o phishing?",
        respostas: ["a) Acesso físico a redes.", "b) Ataque direto aos servidores.", "c) Engano por meio de e-mails ou sites falsos.", "d) Monitoramento por biometria."],
        respostaCorreta: "c) Engano por meio de e-mails ou sites falsos."
    },
    {
        pergunta: "O que é engenharia social?",
        respostas: ["a) Testes de segurança automática.", "b) Engano por parte de alguém que se passa por outra pessoa.", "c) Análise de vulnerabilidade física.", "d) Restauração de backups."],
        respostaCorreta: "b) Engano por parte de alguém que se passa por outra pessoa."
    },
    {
        pergunta: " Qual exemplo pertence a um ataque de engenharia social?",
        respostas: ["a) Malware", "b) Phishing", "c) Pretexting", "d) Firewall"],
        respostaCorreta: "c) Pretexting"
    },
    {
        pergunta: "O que é um ataque Man-in-the-Middle?",
        respostas: ["a) Invasão por malware.", "b) Interceptação da comunicação entre duas partes.", "c) Envio de spam.", "d) Download automático de arquivos."],
        respostaCorreta: "b) Interceptação da comunicação entre duas partes."
    },
    {
        pergunta: "O que é eavesdropping?",
        respostas: ["a) Espionagem de dados em redes inseguras.", "b) Criptografia de arquivos.", "c) Compartilhamento de dados por Bluetooth", "d) Ataque via rede móvel."],
        respostaCorreta: "a) Espionagem de dados em redes inseguras"
    },
    {
        pergunta: " Qual tecnologia ajuda a proteger os dados da empresa?",
        respostas: ["a) Word", "b) Excel", "c) Antivírus", "d) Spotify"],
        respostaCorreta: "c) Antivírus"
    },
    {
        pergunta: "O que é PSI?",
        respostas: ["a) Protocolo Seguro de Internet", "b) Política de Segurança da Informação", "c) Plano de Sistemas Integrados", "d) Plataforma de Serviços Internos"],
        respostaCorreta: "b) Política de Segurança da Informação"
    },
    {
        pergunta: "Qual é o objetivo da PSI?",
        respostas: ["a) Facilitar o uso de redes sociais.", "b) Aumentar a quantidade de dados coletados.", "c) Definir diretrizes de segurança para todos os envolvidos na empresa.", "d) Controlar gastos com TI."],
        respostaCorreta: "c) Definir diretrizes de segurança para todos os envolvidos na empresa."
    },
      {
        pergunta: "O que não é indicado para garantir segurança?",
        respostas: ["a) Assinatura eletrônica", "b) Criptografia", "c) Envio de contratos impressos", "d) Backup em nuvem"],
        respostaCorreta: "c) Envio de contratos impressos"
    },
    {
        pergunta: "O que significa backup?",
        respostas: ["a) Atualização de software", "b) Cópia de segurança de dados", "c) Acesso remoto à rede", "d) Criação de firewalls"],
        respostaCorreta: "b) Cópia de segurança de dados"
    },
    {
        pergunta: " Onde é indicado armazenar documentos importantes?",
        respostas: ["a) Em pastas físicas", "b) No WhatsApp", "c) Na nuvem", "d) Em CDs"],
        respostaCorreta: "c) Na nuvem"
    },
    {
        pergunta: "O que ajuda a proteger a rede Wi-Fi de uma empresa?",
        respostas: ["a) Compartilhar a senha com todos.", "b) Criar senha forte e cadastrar dispositivos autorizados", "c) Usar apenas Wi-Fi público", "d) Desligar o roteador à noite"],
        respostaCorreta: "b) Criar senha forte e cadastrar dispositivos autorizados"
    },
    {
        pergunta: "O que é importante incluir no contrato de confidencialidade?",
        respostas: ["a) Permissão de acesso livre", "b) Comprometimento com o sigilo das informações", "c) Horários de uso da internet", "d) Liberdade de compartilhamento de dados"],
        respostaCorreta: "b) Comprometimento com o sigilo das informações"
    },
      {
        pergunta: "Qual prática deve ser evitada?",
        respostas: ["a) Uso de criptografia", "b) Levar dados em pendrives", "c) Uso de nuvem privada", "d) Login seguro"],
        respostaCorreta: "b) Levar dados em pendrives"
    },
    {
        pergunta: "33. Como minimizar os riscos?",
        respostas: ["a) Apenas usar senhas fortes", "b) Desligar os computadores ao fim do dia", "c) Mapear riscos e criar plano de ação", "d) Usar redes abertas"],
        respostaCorreta: "c) Mapear riscos e criar plano de ação"
    },
    {
        pergunta: " Qual objetivo do plano de contingência?",
        respostas: ["a) Comprar novos computadores", "b) Garantir a continuidade dos dados após desastres", "c) Criar novos backups", "d) Atualizar sistemas operacionais"],
        respostaCorreta: "b) Garantir a continuidade dos dados após desastres"
    },
    {
        pergunta: "O que os treinamentos promovem?",
        respostas: ["a) Acesso facilitado aos dados", "b) Conscientização sobre segurança da informação", "c) Substituição da equipe de TI", "d) Instalação de antivírus"],
        respostaCorreta: "b) Conscientização sobre segurança da informação"
    },
    {
        pergunta: "O que faz um profissional de segurança da informação?",
        respostas: ["a) Administra contratos e pagamentos", "b) Protege sistemas contra ameaças cibernéticas", "c) Gera conteúdos para redes sociais", "d) Opera equipamentos de escritório"],
        respostaCorreta: "b) Protege sistemas contra ameaças cibernéticas"
    },
    {
        pergunta: " Qual medida não é tecnologia de segurança?",
        respostas: ["a) Firewall", "b) CD-ROM", "c) Antivírus", "d) Armazenamento em nuvem"],
        respostaCorreta: "b) CD-ROM"
    },
    {
        pergunta: "Quais setores buscam profissionais de segurança da informação?",
        respostas: ["a) Somente bancos", "b) Diversos setores, como bancos, tecnologia e órgãos públicos", "c) Apenas empresas de telefonia", "d) Apenas startups"],
        respostaCorreta: "b) Diversos setores, como bancos, tecnologia e órgãos públicos"
    },
    {
        pergunta: "O que é assinatura eletrônica?",
        respostas: ["a) Modo de enviar e-mails", "b) Forma de validar documentos digitalmente", "c) Senha do Wi-Fi", "d) Tipo de malware"],
        respostaCorreta: "b) Forma de validar documentos digitalmente"
    },
      {
        pergunta: "O que é uma nuvem privada?",
        respostas: ["a) Compartilhamento com todos os usuários", "b) Armazenamento remoto com controle da empresa", "c) Backup em pendrives", "d) Aplicativo de previsão do tempo"],
        respostaCorreta: "b) Armazenamento remoto com controle da empresa"
    },
    {
        pergunta: "Qual é a função de um firewall?",
        respostas: ["a) Controlar o tráfego de dados e bloquear acessos não autorizados.", "b) Aumentar a velocidade da internet.", "c) Criar documentos seguros.", "d) Armazenar senhas."],
        respostaCorreta: "a) Controlar o tráfego de dados e bloquear acessos não autorizados."
    },
    {
        pergunta: " O que representa uma violação de dados?",
        respostas: ["a) Atualização do antivírus.", "b) Acesso não autorizado a informações confidenciais.", "c) Criação de senhas fracas.", "d) Uso de e-mails pessoais no trabalho."],
        respostaCorreta: "b) Acesso não autorizado a informações confidenciais."
    },
    {
        pergunta: "O que a criptografia faz?",
        respostas: ["a) Codifica informações para impedir acesso indevido.", "b) Apaga automaticamente dados antigos.", "c) Conecta dispositivos à nuvem.", "d) Gera relatórios de produtividade."],
        respostaCorreta: "a) Codifica informações para impedir acesso indevido."
    },
    {
        pergunta: "O que a LGPD protege?",
        respostas: ["a) Dados financeiros da empresa.", "b) Informações sobre impostos.", "c) Dados pessoais dos cidadãos brasileiros.", "d) Senhas e logins corporativos."],
        respostaCorreta: "c) Dados pessoais dos cidadãos brasileiros."
    },
    {
        pergunta: " Qual das opções é uma boa prática de segurança?",
        respostas: ["a) Compartilhar senhas com colegas de trabalho.", "b) Atualizar os sistemas regularmente.", "c) Usar redes Wi-Fi públicas para acessar o sistema.", "d) Armazenar senhas em arquivos de texto no desktop"],
        respostaCorreta: "b) Atualizar os sistemas regularmente."
    },
    {
        pergunta: "Por que contratos de confidencialidade são importantes?",
        respostas: ["a) Garantem aumento de salário.", "b) Substituem antivírus.", "c) Formalizam o compromisso com a proteção de dados.", "d) Servem para fins contábeis."],
        respostaCorreta: "c) Formalizam o compromisso com a proteção de dados."
    },
    {
        pergunta: "O que é um ataque de pretexting?",
        respostas: ["a) Envio de malware via e-mail.", "b) Engano usando um pretexto para obter informações.", "c) Criação de vírus em rede interna.", "d) Acesso remoto não autorizado."],
        respostaCorreta: "b) Engano usando um pretexto para obter informações."
    },
      {
        pergunta: "O que torna o phishing perigoso?",
        respostas: ["a) É fácil de identificar.", "b) Só ocorre via redes sociais.", "c) Engana os usuários para obter dados sensíveis.", "d) Requer contato físico com o computador."],
        respostaCorreta: "c) Engana os usuários para obter dados sensíveis."
    },
    {
        pergunta: "Qual o papel da autenticidade na segurança?",
        respostas: ["a) Impedir acesso remoto.", "b) Verificar a identidade do usuário.", "c) Proteger senhas com backup.", "d) Instalar programas atualizados."],
        respostaCorreta: "b) Verificar a identidade do usuário."
    },
    {
        pergunta: " O que caracteriza um bom plano de segurança da informação?",
        respostas: ["a) Ter muitos backups físicos.", "b) Instalar todos os softwares existentes.", "c) Integrar políticas, tecnologias e treinamentos.", "d) Usar apenas redes internas."],
        respostaCorreta: "c) Integrar políticas, tecnologias e treinamentos."
    },
    {
        pergunta: "Qual é o crescimento previsto para a profissão de analista de segurança da informação até 2032?",
        respostas: ["a) 10%", "b) 20%", "c) 32%", "d) 5%"],
        respostaCorreta: "c) 32%"
    }
]

// Variável para rastrear perguntas já usadas
let perguntasUsadas = [];

// Função para embaralhar perguntas e selecionar 10 que ainda não foram usadas
function obterPerguntasAleatorias() {
    const perguntasNaoUsadas = perguntas.filter((pergunta) => !perguntasUsadas.includes(pergunta.pergunta));

    if (perguntasNaoUsadas.length < 10) {
        // Se faltar perguntas para completar o quiz, reinicie as usadas
        perguntasUsadas = [];
    }

    const perguntasDisponiveis = perguntas.filter((pergunta) => !perguntasUsadas.includes(pergunta.pergunta));
    const perguntasSelecionadas = [...perguntasDisponiveis].sort(() => Math.random() - 0.5).slice(0, 10);

    // Atualiza o rastreador de perguntas usadas
    perguntasSelecionadas.forEach((pergunta) => perguntasUsadas.push(pergunta.pergunta));

    return perguntasSelecionadas;
}

// Exibir perguntas
function carregarQuiz() {
    const perguntasSelecionadas = obterPerguntasAleatorias();
    const quizContainer = document.getElementById("quiz-container");
    const resultadoDiv = document.getElementById("resultado");
    const refazerBtn = document.getElementById("refazer-btn");

    quizContainer.innerHTML = ""; // Limpa o container
    resultadoDiv.innerHTML = ""; // Limpa o resultado
    refazerBtn.style.display = "none"; // Esconde o botão de refazer

    perguntasSelecionadas.forEach((pergunta, index) => {
        let perguntaHTML = `<div class="question">
            <p><strong>${index + 1}. ${pergunta.pergunta}</strong></p>`;

        pergunta.respostas.forEach(resposta => {
            perguntaHTML += `<div class="answer">
                <label>
                    <input type="radio" name="pergunta${index}" value="${resposta}"> ${resposta}
                </label>
            </div>`;
        });

        perguntaHTML += `</div>`;
        quizContainer.innerHTML += perguntaHTML;
    });

    // Salva as perguntas selecionadas para avaliação
    window.perguntasSelecionadas = perguntasSelecionadas;
}

// Verificar respostas e calcular acertos/erros
function finalizarQuiz() {
    let acertos = 0;

    window.perguntasSelecionadas.forEach((pergunta, index) => {
        const respostas = document.getElementsByName(`pergunta${index}`);
        const respostaSelecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);

        if (!respostaSelecionada) {
            alert(`Por favor, responda à pergunta ${index + 1} antes de finalizar.`);
            throw new Error(`Pergunta ${index + 1} não foi respondida.`);
        }

        respostas.forEach(resposta => {
            if (resposta.value === pergunta.respostaCorreta) {
                resposta.parentElement.classList.add("answer-correct");
            } else if (resposta.checked) {
                resposta.parentElement.classList.add("answer-incorrect");
            }
        });

        if (respostaSelecionada.value === pergunta.respostaCorreta) {
            acertos++;
        }
    });

    // Define o feedback com base nos acertos
    let feedback = "";
    if (acertos < 5) {
        feedback = "Estude mais! 📚";
    } else if (acertos === 5) {
        feedback = "Na média! 👍";
    } else {
        feedback = "Bom trabalho! Você merece um biscoito! 🍪";
    }

    // Exibe o resultado e o feedback
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h2>Resultado</h2>
                           <p>Acertos: ${acertos}</p>
                           <p>${feedback}</p>`;

    // Exibe o botão de refazer
    document.getElementById("refazer-btn").style.display = "inline-block";
}

// Carrega o quiz ao abrir a página
window.onload = carregarQuiz;